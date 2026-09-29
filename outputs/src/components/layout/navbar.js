(function(root){
  const Layout=root.Scene233Layout,UI=root.Scene233UI;
  const routes=[['EXPLORE','explore'],['CREATORS','creators'],['STORIES','stories'],['EVENTS','events'],['CULTURE','culture']];
  Layout.Navbar=function Navbar({logo,searchButton,active='explore',signedIn=false}={}){
    const link=([label,path])=>`<a href="#/${path}" data-scene-route="${path}"${active===path?' aria-current="page"':''}>${label}</a>`;
    const links=routes.map(link).join('');
    const search=`<form class="scene-header-search" id="sceneHeaderSearch" hidden><input name="q" placeholder="Search creators, stories, events…" aria-label="Search creators, stories, events"><button>SEARCH ↗</button></form>`;
    const mobile=`<button class="scene-menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="sceneMobileNav" data-scene-menu><span class="scene-menu-icon" aria-hidden="true"></span></button>`;
    return `<header class="scene-header">${Layout.Container(`${logo}<nav class="scene-nav" aria-label="Main navigation">${links}</nav><div class="scene-header-actions">${searchButton}${signedIn?'<button class="scene-signin" data-scene-dashboard>MY SPACE</button>':'<button class="scene-signin" data-scene-signin>SIGN IN</button>'}${UI.Button({label:'JOIN THE SCENE',html:'JOIN THE SCENE <span aria-hidden="true">→</span>',variant:'primary',className:'scene-join',data:{'scene-join':''}})}</div>${mobile}`,{as:'div',size:'wide',className:'scene-header-inner'})}${search}<nav class="scene-mobile-nav" id="sceneMobileNav" aria-label="Mobile navigation">${links}</nav></header>`;
  };
})(window);
