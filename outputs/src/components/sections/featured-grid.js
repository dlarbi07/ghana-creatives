(function(root){
  const UI=root.Scene233UI;
  UI.FeaturedGrid=function FeaturedGrid({items=[]}={}){
    return `<div class="scene-featured-grid">${items.map((item,index)=>UI.FeaturedCard({item,featured:index===0})).join('')}</div>`;
  };
})(window);
