(function (root) {
  const layers = root.Scene233BackgroundLayers = root.Scene233BackgroundLayers || {};
  layers.GeometryLayer = variant => {
    const forms = {
      hero: '<span class="scene-bg__shape scene-bg__shape--hero-ring" data-bg-parallax></span><span class="scene-bg__shape scene-bg__shape--hero-grid" data-bg-parallax></span><span class="scene-bg__shape scene-bg__shape--hero-dots" data-bg-parallax></span>',
      explore: '<span class="scene-bg__shape scene-bg__shape--explore-orbit" data-bg-parallax></span><span class="scene-bg__shape scene-bg__shape--explore-lines" data-bg-parallax></span>',
      creators: '<span class="scene-bg__shape scene-bg__shape--creator-dots" data-bg-parallax></span><span class="scene-bg__shape scene-bg__shape--creator-arc" data-bg-parallax></span>',
      default: '<span class="scene-bg__shape scene-bg__shape--default-lines" data-bg-parallax></span>'
    };
    return `<span class="scene-bg__geometry" aria-hidden="true">${forms[variant] || forms.default}</span>`;
  };
})(window);
