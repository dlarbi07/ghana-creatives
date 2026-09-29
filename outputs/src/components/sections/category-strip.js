(function(root){
  const UI=root.Scene233UI;
  const categories=['FILM','MUSIC','DESIGN','PHOTOGRAPHY','FASHION','ART','TECH','WRITING'];
  UI.CategoryStrip=function CategoryStrip(){return `<nav class="scene-category-bar" id="scene-categories" aria-label="Explore creative categories">${categories.map((label,i)=>`<button type="button" data-scene-category="${['Videography','Music','Graphic Design','Photography','Fashion','Art','Web Design','Writing'][i]}">${label}<span aria-hidden="true">↗</span></button>`).join('')}</nav>`};
})(window);
