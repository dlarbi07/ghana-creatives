-- Ghana Creatives V1 data model. Run in the Supabase SQL editor.
create extension if not exists pgcrypto;

create type public.account_type as enum ('creative','client');
create type public.job_kind as enum ('one_time','contract');
create type public.job_status as enum ('open','paused','closed');
create type public.application_status as enum ('pending','shortlisted','accepted','rejected');
create type public.pricing_kind as enum ('fixed','starting_from','hourly','monthly','custom_quote');

create table public.profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 account_type public.account_type not null,
 display_name text not null,
 username text unique not null,
 profile_image text,
 bio text,
 location text,
 phone text,
 whatsapp text,
 email text,
 instagram text,
 website text,
 availability text default 'Open to work',
 company_name text,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
create table public.creative_categories (
 id bigint generated always as identity primary key,
 name text unique not null,
 slug text unique not null
);
insert into public.creative_categories(name,slug) values
 ('Photography','photography'),('Videography','videography'),('Graphic Design','graphic-design'),('Video Editing','video-editing'),('Social Media','social-media'),('Web Design','web-design'),('Fashion','fashion'),('Makeup','makeup'),('Music','music'),('Art','art'),('Writing','writing'),('Animation','animation'),('Creative Direction','creative-direction'),('Other','other') on conflict do nothing;
create table public.creative_category_links (
 profile_id uuid not null references public.profiles(id) on delete cascade,
 category_id bigint not null references public.creative_categories(id) on delete cascade,
 primary key(profile_id,category_id)
);
create table public.portfolio_projects (
 id uuid primary key default gen_random_uuid(), creative_id uuid not null references public.profiles(id) on delete cascade,
 title text not null, description text, cover_image text, project_type text,
 created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.portfolio_media (
 id uuid primary key default gen_random_uuid(), project_id uuid not null references public.portfolio_projects(id) on delete cascade,
 media_url text not null, media_type text not null check(media_type in ('image','video')), sort_order int not null default 0
);
create table public.services (
 id uuid primary key default gen_random_uuid(), creative_id uuid not null references public.profiles(id) on delete cascade,
 name text not null, description text, starting_price numeric(12,2) check(starting_price is null or starting_price >= 0),
 pricing_type public.pricing_kind not null default 'starting_from', created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.jobs (
 id uuid primary key default gen_random_uuid(), client_id uuid not null references public.profiles(id) on delete cascade,
 title text not null, category_id bigint references public.creative_categories(id), description text not null,
 job_type public.job_kind not null, duration text, budget_min numeric(12,2), budget_max numeric(12,2), budget_type text default 'GHS',
 location text, start_date date, deadline date, status public.job_status not null default 'open',
 created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
 check(budget_min is null or budget_min >= 0), check(budget_max is null or budget_max >= 0), check(budget_min is null or budget_max is null or budget_max >= budget_min)
);
create table public.job_applications (
 id uuid primary key default gen_random_uuid(), job_id uuid not null references public.jobs(id) on delete cascade,
 creative_id uuid not null references public.profiles(id) on delete cascade, message text not null,
 proposed_price numeric(12,2) check(proposed_price is null or proposed_price >= 0), status public.application_status not null default 'pending',
 created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(job_id,creative_id)
);
create table public.quote_requests (
 id uuid primary key default gen_random_uuid(), client_id uuid not null references public.profiles(id) on delete cascade,
 creative_id uuid not null references public.profiles(id) on delete cascade, service_id uuid references public.services(id) on delete set null,
 project_description text not null, project_date date, location text, budget numeric(12,2) check(budget is null or budget >= 0),
 status text not null default 'pending' check(status in ('pending','responded','accepted','declined','cancelled')), created_at timestamptz not null default now()
);
create table public.saved_creatives (
 client_id uuid not null references public.profiles(id) on delete cascade, creative_id uuid not null references public.profiles(id) on delete cascade,
 created_at timestamptz not null default now(), primary key(client_id,creative_id), check(client_id <> creative_id)
);
create table public.projects (
 id uuid primary key default gen_random_uuid(), job_id uuid references public.jobs(id) on delete set null,
 client_id uuid not null references public.profiles(id) on delete cascade, creative_id uuid not null references public.profiles(id) on delete cascade,
 title text not null, status text not null default 'active' check(status in ('active','completed','cancelled')),
 start_date date, end_date date, agreed_price numeric(12,2) check(agreed_price is null or agreed_price >= 0), created_at timestamptz not null default now()
);

-- A profile is created alongside every auth signup. The client may set the public fields later.
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path=public as $$
begin
 insert into public.profiles(id,account_type,display_name,username,email)
 values(new.id, coalesce((new.raw_user_meta_data->>'account_type')::public.account_type,'client'),
 coalesce(new.raw_user_meta_data->>'display_name','New member'),
 coalesce(new.raw_user_meta_data->>'username','user-'||substr(new.id::text,1,8)),new.email);
 return new;
end; $$;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

-- Public directory content is readable; account owners control their own profile and content.
alter table public.profiles enable row level security;
alter table public.creative_categories enable row level security;
alter table public.creative_category_links enable row level security;
alter table public.portfolio_projects enable row level security;
alter table public.portfolio_media enable row level security;
alter table public.services enable row level security;
alter table public.jobs enable row level security;
alter table public.job_applications enable row level security;
alter table public.quote_requests enable row level security;
alter table public.saved_creatives enable row level security;
alter table public.projects enable row level security;
create policy "categories are public" on public.creative_categories for select using(true);
create policy "profiles are public" on public.profiles for select using(true);
create policy "owners create profile" on public.profiles for insert with check(auth.uid()=id);
create policy "owners update profile" on public.profiles for update using(auth.uid()=id) with check(auth.uid()=id);
create policy "category links are public" on public.creative_category_links for select using(true);
create policy "creative manages category links" on public.creative_category_links for all using(auth.uid()=profile_id) with check(auth.uid()=profile_id);
create policy "portfolio is public" on public.portfolio_projects for select using(true);
create policy "creative manages portfolio" on public.portfolio_projects for all using(auth.uid()=creative_id) with check(auth.uid()=creative_id);
create policy "portfolio media is public" on public.portfolio_media for select using(true);
create policy "creative manages portfolio media" on public.portfolio_media for all using(exists(select 1 from public.portfolio_projects p where p.id=project_id and p.creative_id=auth.uid())) with check(exists(select 1 from public.portfolio_projects p where p.id=project_id and p.creative_id=auth.uid()));
create policy "services are public" on public.services for select using(true);
create policy "creative manages services" on public.services for all using(auth.uid()=creative_id) with check(auth.uid()=creative_id);
create policy "open jobs are public" on public.jobs for select using(status='open' or auth.uid()=client_id);
create policy "client manages jobs" on public.jobs for all using(auth.uid()=client_id) with check(auth.uid()=client_id);
create policy "job applications visible to parties" on public.job_applications for select using(auth.uid()=creative_id or exists(select 1 from public.jobs j where j.id=job_id and j.client_id=auth.uid()));
create policy "creative applies" on public.job_applications for insert with check(auth.uid()=creative_id);
create policy "parties update applications" on public.job_applications for update using(auth.uid()=creative_id or exists(select 1 from public.jobs j where j.id=job_id and j.client_id=auth.uid()));
create policy "quote requests visible to parties" on public.quote_requests for select using(auth.uid()=client_id or auth.uid()=creative_id);
create policy "clients create quote requests" on public.quote_requests for insert with check(auth.uid()=client_id);
create policy "parties update quote requests" on public.quote_requests for update using(auth.uid()=client_id or auth.uid()=creative_id);
create policy "clients manage saved creatives" on public.saved_creatives for all using(auth.uid()=client_id) with check(auth.uid()=client_id);
create policy "project parties can read" on public.projects for select using(auth.uid()=client_id or auth.uid()=creative_id);
create policy "client creates project" on public.projects for insert with check(auth.uid()=client_id);
create policy "project parties update" on public.projects for update using(auth.uid()=client_id or auth.uid()=creative_id);

-- Create a private storage bucket named `portfolio` in Supabase Storage.
-- Suggested object policies: public SELECT; authenticated INSERT/UPDATE/DELETE only when the first path segment = auth.uid().
