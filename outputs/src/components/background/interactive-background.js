/* Configurable decorative background primitive; its children never capture input. */
(function (root) {
  const UI = root.Scene233UI;
  const layers = root.Scene233BackgroundLayers;
  const e = UI.escape;
  UI.InteractiveBackground = function InteractiveBackground({ variant = 'default', intensity = 'subtle' } = {}) {
    const safeVariant = ['hero', 'explore', 'creators', 'default'].includes(variant) ? variant : 'default';
    const safeIntensity = ['subtle', 'medium', 'strong'].includes(intensity) ? intensity : 'subtle';
    return `<div class="scene-bg scene-bg--${e(safeVariant)} scene-bg--${e(safeIntensity)}" data-scene-background data-variant="${e(safeVariant)}" data-intensity="${e(safeIntensity)}" aria-hidden="true">${layers.GrainLayer()}${layers.ParallaxLayer(layers.GeometryLayer(safeVariant))}${layers.CursorGlow()}</div>`;
  };
})(window);
