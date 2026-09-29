# Frontend foundation

The app stays dependency-free and supports direct `index.html` use. Shared pieces are classic scripts loaded in order by the root `index.html`, so there is no bundler or module-loader requirement:

1. `components/ui/index.js` — Button, IconButton, Logo, and Badge.
2. `components/layout/index.js` — Container and Section.
3. `components/cards/index.js` — reusable creator and media cards.
4. Existing app scripts — current route and data behavior.
5. `pages/scene-experience.js` — current route composition and page renderers.

The component APIs are exposed as `window.Scene233UI`, `window.Scene233Layout`, and `window.Scene233Cards`. New page renderers should live in focused files in `pages/` and use these primitives instead of adding more page markup to a single component.

Design tokens and accessible shared styles live in `styles/tokens.css` and `styles/foundation.css`. Keep the supplied logo artwork unchanged in `assets/`; `Logo` only controls its size, variant class, and optional link. It never adds a background or edits the image.
