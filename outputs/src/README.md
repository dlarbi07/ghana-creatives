# Frontend foundation

The app stays dependency-free and supports direct `index.html` use. Shared pieces are classic scripts loaded in order by the root `index.html`, so there is no bundler or module-loader requirement:

1. `components/ui/index.js` and `components/ui/search-button.js` — shared controls and search toggle.
2. `components/layout/index.js` and `components/layout/navbar.js` — Container, Section, and responsive navigation.
3. `components/background/` — composable grain, geometry, cursor glow, parallax and configurable `InteractiveBackground` layers. `background-motion.js` installs one shared, frame-throttled pointer/scroll handler.
4. `components/sections/hero-media.js`, `category-strip.js`, and `hero.js` — replaceable homepage media and hero composition.
5. `components/cards/index.js` and `components/cards/featured-card.js` — creator, media, feature, and trending cards.
6. `components/sections/category-navigation.js`, `featured-grid.js`, `trending-section.js`, and `explore-section.js` — reusable Explore / Discovery compositions.
7. `data/discovery-content.js` — structured editorial placeholder records, separate from presentation.
8. Existing app scripts — current route and data behavior.
9. `pages/scene-experience.js` — current route composition and page renderers.

The component APIs are exposed as `window.Scene233UI`, `window.Scene233Layout`, and `window.Scene233Cards`. Homepage section renderers are exposed under `Scene233UI` and accept content as options. New page renderers should live in focused files in `pages/` and use these primitives instead of adding more page markup to a single component.

`Scene233UI.InteractiveBackground({variant, intensity})` supports `hero`, `explore`, `creators`, and `default` variants with `subtle`, `medium`, or `strong` intensity. It is currently used with strong intensity behind the hero and subtle intensity behind Explore and Meet the Scene. Decorative layers are hidden from assistive technology and never intercept pointer events.

Design tokens and accessible shared styles live in `styles/tokens.css` and `styles/foundation.css`. Keep the supplied logo artwork unchanged in `assets/`; `Logo` only controls its size, variant class, and optional link. It never adds a background or edits the image.
