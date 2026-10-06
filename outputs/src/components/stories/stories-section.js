(function (root) {
  const UI = root.Scene233UI, e = UI.escape;
  const Stories = root.Scene233Stories = root.Scene233Stories || {};
  // Adapt API/database records here, keeping the presentation components source-agnostic.
  Stories.normalizeStory = function normalizeStory(story = {}) {
    return {
      ...story,
      id: story.id || story.slug || '',
      slug: story.slug || story.id || '',
      title: story.title || 'Untitled story',
      category: String(story.category || 'CULTURE').toUpperCase(),
      summary: story.summary || story.sceneSummary || '',
      source: story.source || story.sourceName || 'SCENE 233',
      sourceUrl: story.sourceUrl || '',
      publishedAt: story.publishedAt || story.originalPublishedAt || '',
      discoveredAt: story.discoveredAt || '',
      image: story.image || '',
      imageAlt: story.imageAlt || story.title || 'Story image',
      href: story.href || `#/stories/${encodeURIComponent(story.slug || story.id || '')}`
    };
  };
  UI.StoriesSection = function StoriesSection({ stories = root.Scene233StoryData?.stories || [], categories = root.Scene233StoryData?.categories || [], loading = false } = {}) {
    const published = stories.filter(story => story.status === 'published').map(Stories.normalizeStory);
    if (loading) return `<section class="scene-stories-section scene-story-system scene-reveal" aria-label="Scene Stories">${UI.InteractiveBackground({ variant: 'explore', intensity: 'subtle' })}${Stories.StorySkeleton()}</section>`;
    const featured = published.find(story => story.featured);
    const gridItems = published.filter(story => !story.featured);
    const trending = published.filter(story => story.trending).slice(0, 5);
    return `<section class="scene-stories-section scene-story-system scene-reveal" data-stories-section aria-labelledby="sceneStoriesTitle">${UI.InteractiveBackground({ variant: 'explore', intensity: 'subtle' })}<header class="scene-stories-heading"><div><span class="scene-kicker">NOTES FROM THE CULTURE</span><h2 id="sceneStoriesTitle">SCENE <em>STORIES.</em></h2></div><p>Stories shaping Ghana’s creative culture.</p></header>${Stories.StoryCategoryNav(categories)}${Stories.FeaturedStory(featured)}<div class="scene-story-grid-wrap" data-story-grid-wrap>${Stories.StoryGrid(gridItems)}${Stories.StoryEmptyState()}</div>${Stories.TrendingStories(trending)}<p class="scene-story-demo-note">FICTIONAL EDITORIAL DEMO CONTENT · NO EXTERNAL ARTICLES REPRODUCED</p></section>`;
  };
})(window);
