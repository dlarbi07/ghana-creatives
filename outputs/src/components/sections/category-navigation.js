(function(root){
  const UI=root.Scene233UI,safe=UI.escape;
  UI.CategoryNavigation=function CategoryNavigation({categories=[],active=''}={}){
    return `<nav class="scene-discovery-categories" aria-label="Explore creative categories">${categories.map((item,index)=>`<button type="button" class="scene-discovery-category${active===item.id?' is-active':''}" data-explore-category="${safe(item.id)}" aria-pressed="${active===item.id?'true':'false'}"><span class="scene-discovery-category__index">0${index+1}</span><span class="scene-discovery-category__name">${safe(item.label)}</span><span class="scene-discovery-category__arrow" aria-hidden="true">→</span></button>`).join('')}</nav>`;
  };
})(window);
