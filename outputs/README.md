# Ghana Creatives — V1 prototype

A responsive, self-contained web prototype for Ghanaian creative discovery and hiring. Open `index.html` in a browser or serve this folder with any static web server. No build step is required.

## Included interactions

- Browse and search creative profiles; filter by category, location and availability.
- View service menus, save creatives, send quote requests, and share profile links/QR codes.
- Post one-time and contract jobs, search/filter the job board, and submit applications.
- Create a client or creative demo account, manage a basic creative profile and services, and view dashboard activity.
- Browser `localStorage` keeps demo content on the current device. Use the dashboard sign-out action to clear the active session.

## Important V1 boundary

This folder is a working front-end prototype. Demo sign-in is local-only, portfolio uploads are represented by sample imagery, and there is no live Supabase connection yet. Do not use demo sign-in for real accounts or sensitive data. The supplied `supabase-schema.sql` defines the production-oriented data model and initial row-level security policies. Production deployment still needs a Supabase project, Storage policies/bucket, client integration using the public project URL and anon key, and production auth wiring. Never expose a Supabase service-role key in a browser.

## Supabase model

Run `supabase-schema.sql` in the Supabase SQL editor. It creates auth-linked profiles, seeded categories, creative/category links, portfolio projects and media, services, jobs, applications, quote requests, saved creatives and the future projects table. It also enables row-level security and includes starter policies. Create a `portfolio` Storage bucket and configure the ownership policies noted at the end of the SQL file before accepting uploads.

## Notes

- Currency is shown in Ghana cedis (GHS).
- The pasted brief supplied to this build ended mid-search-placeholder in the homepage section; the implementation follows the product, roles and schema described before that cutoff.
- Third-party Google Fonts, Unsplash imagery and the QRCode.js CDN are used for the visual demo and profile QR panel; a network connection is needed for those assets.
