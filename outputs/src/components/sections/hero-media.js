(function(root){
  const UI=root.Scene233UI;
  UI.HeroMedia=function HeroMedia({image='',video='',poster='',alt='A glimpse of Ghanaian creative culture'}={}){
    const safe=UI.escape, fallback=`<div class="scene-hero-media-fallback" role="img" aria-label="SCENE 233 editorial graphic"><span>233</span><i></i><b>SCENE / CULTURE / GHANA</b></div>`;
    const visual=video?`<video class="scene-hero-media-asset" autoplay muted loop playsinline${poster?` poster="${safe(poster)}"`:''} aria-label="${safe(alt)}" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><source src="${safe(video)}"></video>${fallback.replace('scene-hero-media-fallback"','scene-hero-media-fallback" hidden')}`:image?`<img class="scene-hero-media-asset" src="${safe(image)}" alt="${safe(alt)}" fetchpriority="high" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false">${fallback.replace('scene-hero-media-fallback"','scene-hero-media-fallback" hidden')}`:fallback;
    return `<figure class="scene-hero-media" data-hero-media>${visual}<figcaption><span>SCENE 233 / ACCRA</span><span>EST. 233</span></figcaption><span class="scene-media-index" aria-hidden="true">01 — 08</span></figure>`;
  };
})(window);
