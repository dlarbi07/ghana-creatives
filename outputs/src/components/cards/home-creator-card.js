/* Reusable homepage creator card for fictional demo records or future API data. */
(function (root) {
  const e = root.Scene233UI.escape;
  root.Scene233Cards = root.Scene233Cards || {};
  root.Scene233Cards.HomeCreatorCard = function HomeCreatorCard(creator) {
    const href = `#/creators/${encodeURIComponent(creator.slug)}`;
    return `<article class="scene-home-creator-card scene-reveal" data-home-creator-card data-category="${e(creator.category)}">
      <a class="scene-home-creator-card__image" href="${e(href)}" aria-label="Meet ${e(creator.name)}, ${e(creator.discipline)}">
        <img src="${e(creator.imageUrl)}" alt="Portrait representing fictional Ghanaian creator ${e(creator.name)}" loading="lazy">
        <span class="scene-home-creator-card__index">SCENE 233 <i>·</i> ${e(creator.metadata)}</span>
        <span class="scene-home-creator-card__arrow" aria-hidden="true">↗</span>
      </a>
      <div class="scene-home-creator-card__copy">
        <div><span class="scene-kicker">${e(creator.category)}</span><span class="scene-home-creator-card__location">${e(creator.location)}</span></div>
        <h3><a href="${e(href)}">${e(creator.name)}</a></h3>
        <p>${e(creator.discipline)}</p>
      </div>
    </article>`;
  };
})(window);
