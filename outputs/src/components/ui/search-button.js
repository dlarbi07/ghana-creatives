(function(root){
  const UI=root.Scene233UI=root.Scene233UI||{};
  UI.SearchButton=function SearchButton(){
    const icon='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>';
    return UI.IconButton({label:'Open search',icon,className:'scene-search-toggle',ariaExpanded:false,data:{'scene-search':''}});
  };
})(window);
