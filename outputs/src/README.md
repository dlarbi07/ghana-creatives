# Frontend foundation

The app stays dependency-free and supports direct `index.html` use. Shared pieces are classic scripts loaded in order by the root `index.html`, so there is no bundler or module-loader requirement:

1. `components/ui/index.js` and `components/ui/search-button.js` — shared controls and search toggle.
2. `components/layout/index.js` and `components/layout/navbar.js` — Container, Section, and responsive navigation.
3. `components/sections/hero-media.js`, `category-strip.js`, and `hero.js` — replaceable homepage media and hero composition.
4. `components/cards/index.js` — reusable creator and media cards.
5. Existing app scripts — current route and data behavior.
6. `pages/scene-experience.js` — current route composition and page renderers.

The component APIs are exposed as `window.Scene233UI`, `window.Scene233Layout`, and `window.Scene233Cards`. Homepage section renderers are exposed under `Scene233UI` and accept content as options. New page renderers should live in focused files in `pages/` and use these primitives instead of adding more page markup to a single component.

Design tokens and accessible shared styles live in `styles/tokens.css` and `styles/foundation.css`. Keep the supplied logo artwork unchanged in `assets/`; `Logo` only controls its size, variant class, and optional link. It never adds a background or edits the image.
