(function(root){
  const UI=root.Scene233UI,safe=UI.escape;
  UI.TrendingSection=function TrendingSection({items=[],id='sceneTrending'}={}){
    return `<section class="scene-trending" aria-labelledby="sceneTrendingTitle"><div class="scene-trending__heading"><div><span class="scene-kicker">WHAT PEOPLE ARE READING</span><h3 id="sceneTrendingTitle">TRENDING <em>IN THE SCENE.</em></h3></div><div class="scene-trending__controls"><button type="button" data-trending-scroll="${safe(id)}" data-direction="-1" aria-label="Scroll trending cards left">←</button><button type="button" data-trending-scroll="${safe(id)}" data-direction="1" aria-label="Scroll trending cards right">→</button></div></div><div class="scene-trending__track" id="${safe(id)}" role="region" aria-label="Trending in the Scene" tabindex="0">${items.map(item=>UI.ContentCard({item})).join('')}</div></section>`;
  };
})(window);
