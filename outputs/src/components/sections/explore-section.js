(function(root){
  const UI=root.Scene233UI;
  UI.ExploreSection=function ExploreSection({content=root.Scene233DiscoveryData||{}}={}){
    const categories=content.categories||[],featured=content.featured||[],trending=content.trending||[];
    return `<section class="scene-explore-section scene-reveal" id="scene-explore" aria-labelledby="sceneExploreTitle">${UI.InteractiveBackground({variant:'explore',intensity:'subtle'})}<header class="scene-explore-intro"><div><span class="scene-kicker">A GUIDE TO WHAT’S MOVING</span><h2 id="sceneExploreTitle">EXPLORE THE <em>SCENE.</em></h2></div><p>Discover the people, ideas, art and culture shaping Ghana’s creative world.</p></header>${UI.CategoryNavigation({categories})}<section class="scene-discovery-featured" aria-labelledby="sceneFeaturedTitle"><div class="scene-discovery-subhead"><div><span class="scene-kicker">PEOPLE · IDEAS · CULTURE</span><h3 id="sceneFeaturedTitle">IN FOCUS.</h3></div><span class="scene-discovery-edition">SCENE NOTES / 001</span></div>${UI.FeaturedGrid({items:featured})}</section>${UI.TrendingSection({items:trending})}</section>`;
  };
})(window);
