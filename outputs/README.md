# SCENE 233 — Creative Culture Hub

Responsive creative culture hub for Ghana. Open `index.html` directly for a local demo or serve this folder from a static web host. No build step is required.

Reusable frontend primitives, spacing/color tokens, logo asset, and accessibility/motion styles live in `src/components/`, `src/styles/`, and `src/assets/`. See `src/README.md` for the dependency-free script loading order and extension guidance.

## Main routes and features

- SCENE 233 home: responsive editorial navbar and split cinematic hero with reusable media, accessible expanding search, mobile menu, eight-category strip, interactive Explore / Discovery categories, data-driven featured stories, horizontal trending rail, creator carousel, events, stories and creator search.
- Explore: creator search and category filters, creator profiles, stories and event detail routes.
- Creative Work: project feed and category filters; each project has a shareable detail route.
- Discover: profile search and category, location, price, availability and work-type filters.
- Jobs: searchable listings, job detail pages, creative applications and client applicant actions.
- Creative profiles: work, services, accepted work types, quote/contact actions, profile QR and sharing.
- Dashboards: compact creative and client views. Creative accounts can add work using an image upload or image URL; images are resized and stored locally in this browser.
- Account data and activity remain in this browser's `localStorage`; sign-in is still a demo prototype. No Supabase connection or payment processing is configured.

On an HTTP(S) host, profile, project and job pages use paths such as `/creatives/ama-visuals`, `/projects/accra-after-dark` and `/jobs/social-media-manager-accra`. The included `_redirects` file is a Netlify-style SPA fallback. When opened as a local `file:` URL, routes use the hash so they continue to work without a server.

The SCENE 233 emblem is displayed from `src/assets/scene-233-logo-transparent.png`; its white page background was removed while preserving the artwork. The original supplied image remains at `scene-233-primary.png`. The original Supabase draft schema remains in `supabase-schema.sql` but is not connected to this demo.

External fonts, sample Unsplash imagery, and QRCode.js use a network connection. If the QR library is unavailable, its profile link and copy/share action remain available.
