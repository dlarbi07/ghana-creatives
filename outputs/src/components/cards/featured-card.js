(function(root){
  const UI=root.Scene233UI;
  const safe=UI.escape;
  const imageSource=value=>/^(https?:|data:image\/)/i.test(value||'')?value:(typeof root.Scene233Image==='function'?root.Scene233Image(value):/^photo-/.test(value||'')?`https://images.unsplash.com/${value}?auto=format&fit=crop&w=1000&q=82`:value);
  UI.FeaturedCard=function FeaturedCard({item={},featured=false}={}){
    const route=String(item.href||'').replace(/^#\/?/,''),routeAttr=route?` data-scene-route="${safe(route)}"`:'';
    return `<article class="scene-editorial-card scene-reveal${featured?' scene-editorial-card--lead':''}"><a class="scene-editorial-card__link" href="${safe(item.href||'#')}"${routeAttr}><span class="scene-editorial-card__image"><img src="${safe(imageSource(item.image||''))}" alt="${safe(item.imageAlt||item.title||'Scene story')}" loading="lazy" decoding="async"><span class="scene-editorial-card__arrow" aria-hidden="true">↗</span></span><span class="scene-editorial-card__body"><span class="scene-editorial-card__category">${safe(item.category||'SCENE')}</span><h4 class="scene-editorial-card__title">${safe(item.title||'Untitled')}</h4>${item.description?`<span class="scene-editorial-card__description">${safe(item.description)}</span>`:''}<span class="scene-editorial-card__meta">${safe(item.metadata||'SCENE 233')}</span></span></a></article>`;
  };
  UI.ContentCard=function ContentCard({item={}}={}){
    const route=String(item.href||'').replace(/^#\/?/,''),routeAttr=route?` data-scene-route="${safe(route)}"`:'';
    return `<article class="scene-trending-card scene-reveal"><a class="scene-trending-card__link" href="${safe(item.href||'#')}"${routeAttr}><span class="scene-trending-card__image"><img src="${safe(imageSource(item.image||''))}" alt="${safe(item.imageAlt||item.title||'Trending in the Scene')}" loading="lazy" decoding="async"><span aria-hidden="true">↗</span></span><span class="scene-trending-card__category">${safe(item.category||'SCENE')}</span><h4 class="scene-trending-card__title">${safe(item.title||'Untitled')}</h4><span class="scene-trending-card__meta">${safe(item.metadata||'SCENE 233')}</span></a></article>`;
  };
})(window);
