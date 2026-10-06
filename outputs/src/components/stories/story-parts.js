(function (root) {
  const UI = root.Scene233UI, e = UI.escape;
  const Stories = root.Scene233Stories = root.Scene233Stories || {};
  Stories.StoryCategoryNav = function StoryCategoryNav(categories = []) {
    const available = new Set(categories.map(category => String(category).toUpperCase()));
    const filters = ['ALL', 'FILM', 'MUSIC', 'DESIGN', 'PHOTOGRAPHY', 'FASHION', 'ART', 'TECH', 'CULTURE'].filter(category => category === 'ALL' || !available.size || available.has(category));
    return `<nav class="scene-story-categories" aria-label="Filter stories by category">${filters.map((category, index) => `<button type="button" data-story-filter="${e(category)}" class="${index === 0 ? 'is-active' : ''}" aria-pressed="${index === 0}">${e(category)}</button>`).join('')}</nav><p class="scene-story-filter-status" data-story-filter-status aria-live="polite" aria-atomic="true"></p>`;
  };
  Stories.FeaturedStory = function FeaturedStory(story) {
    return story ? `<div class="scene-story-feature-wrap" data-story-feature-wrap>${Stories.StoryCard(story, { size: 'featured' })}</div>` : '';
  };
  Stories.StoryGrid = function StoryGrid(items = []) {
    if (!items.length) return '';
    return `<div class="scene-story-grid scene-story-system-grid">${items.map((story, index) => Stories.StoryCard(story, { size: index === 0 || index === 4 ? 'large' : 'standard' })).join('')}</div>`;
  };
  Stories.TrendingStories = function TrendingStories(items = []) {
    return `<section class="scene-trending-stories" aria-labelledby="sceneTrendingStoriesTitle"><header class="scene-trending-stories__heading"><div><span class="scene-kicker">THE SCENE, RIGHT NOW</span><h3 id="sceneTrendingStoriesTitle">TRENDING ON <em>SCENE.</em></h3><p>What people are talking about.</p></div><div class="scene-carousel-controls"><button type="button" data-trending-scroll="sceneTrendingStories" data-direction="-1" aria-label="Scroll trending stories left">←</button><button type="button" data-trending-scroll="sceneTrendingStories" data-direction="1" aria-label="Scroll trending stories right">→</button></div></header><div class="scene-trending-stories__track" id="sceneTrendingStories" tabindex="0" aria-label="Trending stories">${items.map((story, index) => Stories.StoryCard(story, { size: 'trending', rank: index + 1 })).join('')}</div></section>`;
  };
  Stories.StoryEmptyState = function StoryEmptyState() {
    return `<div class="scene-story-empty" data-story-empty hidden><span class="scene-kicker">SCENE NOTES</span><h3>NOTHING HERE YET</h3><p>We’re looking for something worth putting on the scene.</p></div>`;
  };
  Stories.StorySkeleton = function StorySkeleton(count = 3) {
    return `<div class="scene-story-skeleton-grid" role="status" aria-label="Loading stories" aria-busy="true">${Array.from({ length: Math.max(1, Math.min(count, 6)) }, () => '<article class="scene-story-skeleton"><span></span><i></i><b></b><b></b></article>').join('')}</div>`;
  };
})(window);
