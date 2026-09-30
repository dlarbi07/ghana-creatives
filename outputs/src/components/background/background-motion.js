/* One shared, throttled pointer/scroll loop updates only visible decorative layers. */
(function (root) {
  const factors = { subtle: 2, medium: 4, strong: 7 };
  let pointer = null;
  let frame = 0;
  let mounted = false;
  let motionQuery;
  let coarseQuery;

  function allowed() {
    return !(motionQuery?.matches || coarseQuery?.matches);
  }
  function schedule() {
    if (!allowed() || frame) return;
    frame = root.requestAnimationFrame(update);
  }
  function update() {
    frame = 0;
    if (!allowed()) return;
    const viewportHeight = root.innerHeight || 900;
    document.querySelectorAll('[data-scene-background]').forEach(background => {
      const rect = background.getBoundingClientRect();
      const factor = factors[background.dataset.intensity] || factors.subtle;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const px = pointer ? Math.max(-1, Math.min(1, (pointer.x - centerX) / Math.max(rect.width / 2, 1))) : 0;
      const py = pointer ? Math.max(-1, Math.min(1, (pointer.y - centerY) / Math.max(rect.height / 2, 1))) : 0;
      const scrollProgress = Math.max(-1, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height) - .5)) * 2;
      background.style.setProperty('--bg-x', `${px * factor}px`);
      background.style.setProperty('--bg-y', `${py * factor}px`);
      background.style.setProperty('--bg-scroll', `${scrollProgress * factor * 1.4}px`);
      if (pointer && pointer.x >= rect.left && pointer.x <= rect.right && pointer.y >= rect.top && pointer.y <= rect.bottom) {
        background.style.setProperty('--cursor-x', `${pointer.x - rect.left}px`);
        background.style.setProperty('--cursor-y', `${pointer.y - rect.top}px`);
        background.classList.add('has-cursor');
      } else {
        background.classList.remove('has-cursor');
      }
    });
  }
  function disable() {
    if (frame) root.cancelAnimationFrame?.(frame);
    frame = 0;
    document.querySelectorAll('[data-scene-background]').forEach(background => {
      background.classList.remove('has-cursor');
      background.style.removeProperty('--bg-x');
      background.style.removeProperty('--bg-y');
      background.style.removeProperty('--bg-scroll');
      background.style.removeProperty('--cursor-x');
      background.style.removeProperty('--cursor-y');
    });
  }
  function mount() {
    motionQuery ||= root.matchMedia?.('(prefers-reduced-motion: reduce)') || { matches: false };
    coarseQuery ||= root.matchMedia?.('(hover: none), (pointer: coarse)') || { matches: false };
    if (!mounted) {
      mounted = true;
      root.addEventListener('pointermove', event => {
        if (!allowed() || event.pointerType !== 'mouse') return;
        pointer = { x: event.clientX, y: event.clientY };
        schedule();
      }, { passive: true });
      root.addEventListener('scroll', schedule, { passive: true });
      motionQuery.addEventListener?.('change', () => allowed() ? schedule() : disable());
      coarseQuery.addEventListener?.('change', () => allowed() ? schedule() : disable());
    }
    if (allowed()) schedule();
    else disable();
  }
  root.Scene233BackgroundMotion = { mount };
})(window);
