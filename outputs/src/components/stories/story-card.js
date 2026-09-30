(function (root) {
  const e = root.Scene233UI.escape;
  const Stories = root.Scene233Stories = root.Scene233Stories || {};
  const imageSrc = value => /^(https?:|data:image\/)/i.test(value || '') ? value : image(value);
  const safeHref = value => /^(https?:\/\/|#\/|\/)/i.test(value || '') ? value : '#/stories';
  const sourceMarkup = story => /^https?:\/\//i.test(story.sourceUrl || '')
    ? `<a class="scene-story-card__source" href="${e(story.sourceUrl)}" target="_blank" rel="noopener noreferrer">${e(story.source || 'SOURCE')} ↗</a>`
    : `<span class="scene-story-card__source">${e(story.source || 'SCENE 233')}</span>`;
  Stories.StoryCard = function StoryCard(story, { size = 'standard', rank = 0 } = {}) {
    const href = safeHref(story.href || `#/stories/${encodeURIComponent(story.slug || story.id)}`);
    const route = href.startsWith('#/stories/') ? ` data-scene-route="stories/${e(story.slug || story.id)}"` : '';
    const published = story.publishedAt ? new Date(`${story.publishedAt}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
    const index = rank ? `<span class="scene-story-card__rank" aria-hidden="true">${String(rank).padStart(2, '0')}</span>` : '';
    const readLink = size === 'featured' ? `<a class="scene-story-read-link" href="${e(href)}"${route}>READ STORY <span aria-hidden="true">→</span></a>` : '';
    return `<article class="scene-story-card scene-story-card--${e(size)} ${rank ? 'scene-story-card--trending' : ''} scene-reveal" data-story-item data-story-category="${e(story.category)}" data-story-id="${e(story.id)}">${index}<a class="scene-story-card__image" href="${e(href)}"${route} aria-label="Read: ${e(story.title)}"><img src="${e(imageSrc(story.image))}" alt="${e(story.imageAlt || story.title)}" loading="lazy" decoding="async"><span class="scene-story-card__image-arrow" aria-hidden="true">↗</span></a><div class="scene-story-card__body"><span class="scene-kicker">${e(story.category)}</span><h3><a href="${e(href)}"${route}>${e(story.title)}</a></h3><p>${e(story.summary)}</p><div class="scene-story-card__meta">${sourceMarkup(story)}${published ? `<time datetime="${e(story.publishedAt)}">${e(published)}</time>` : ''}</div>${readLink}</div></article>`;
  };
})(window);
