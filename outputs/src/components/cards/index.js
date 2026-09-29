/* Reusable creator and media cards for discovery surfaces. */
(function (root) {
  const Cards = root.Scene233Cards = root.Scene233Cards || {};
  const e = root.Scene233UI.escape;
  Cards.CreatorCard = function CreatorCard({ name, category, location, image, href, bio = '', slug = '' } = {}) {
    const route = slug ? ` data-scene-route="creatives/${e(slug)}"` : '';
    return `<article class="scene-creator-card"><a class="scene-creator-image" href="${e(href)}"${route}><img src="${e(image)}" alt="${e(name)}" loading="lazy"><span class="scene-image-corner">SCENE 233 / CREATOR</span><span class="scene-creator-hover"><small>${e(category)} · ${e(location)}</small><strong>${e(name)}</strong><em>${e(bio.slice(0, 92))}</em><b>VIEW PROFILE <i>↗</i></b></span></a><div class="scene-creator-meta"><div><h3>${e(name)}</h3><span>${e(category)}</span></div><span class="scene-creator-place">${e(location)}</span></div><a class="scene-card-link" href="${e(href)}"${route}>MEET THE CREATOR <b>↗</b></a></article>`;
  };
  Cards.MediaCard = function MediaCard({ image, alt, title, meta = '', href = '#', className = '' } = {}) {
    return `<article class="scene-media-card ${e(className)}"><a href="${e(href)}" class="scene-media-card__image"><img src="${e(image)}" alt="${e(alt || title)}" loading="lazy"></a><div class="scene-media-card__copy">${meta ? `<small>${e(meta)}</small>` : ''}<h3><a href="${e(href)}">${e(title)}</a></h3></div></article>`;
  };
})(window);
