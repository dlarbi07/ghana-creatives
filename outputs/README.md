# Ghana Creatives — V1

Responsive, local-storage web app for discovering Ghanaian creatives and creative work. Open `index.html` directly for a local demo or serve this folder from a static web host. No build step is required.

## Main routes and features

- Homepage: search, all creative categories, featured profiles, six sample work projects, a single spotlight and a short find/post call to action.
- Creative Work: project feed and category filters; each project has a shareable detail route.
- Discover: profile search and category, location, price, availability and work-type filters.
- Jobs: searchable listings, job detail pages, creative applications and client applicant actions.
- Creative profiles: work, services, accepted work types, quote/contact actions, profile QR and sharing.
- Dashboards: compact creative and client views. Creative accounts can add work using an image upload or image URL; images are resized and stored locally in this browser.
- Account data and activity remain in this browser's `localStorage`; sign-in is still a demo prototype. No Supabase connection or payment processing is configured.

On an HTTP(S) host, profile, project and job pages use paths such as `/creatives/ama-visuals`, `/projects/accra-after-dark` and `/jobs/social-media-manager-accra`. The included `_redirects` file is a Netlify-style SPA fallback. When opened as a local `file:` URL, routes use the hash so they continue to work without a server.

The SCENE 233 emblem is the supplied original image at `scene-233-emblem.png`; the app uses it without editing the artwork. The original Supabase draft schema remains in `supabase-schema.sql` but is not connected to this demo.

External fonts, sample Unsplash imagery, and QRCode.js use a network connection. If the QR library is unavailable, its profile link and copy/share action remain available.
