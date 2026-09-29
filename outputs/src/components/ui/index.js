/* Lightweight HTML UI primitives for the static SCENE 233 app. */
(function (root) {
  const UI = root.Scene233UI = root.Scene233UI || {};
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
  const dataAttrs = data => Object.entries(data || {})
    .filter(([key]) => /^[a-z][a-z0-9-]*$/i.test(key))
    .map(([key, value]) => ` data-${key}="${escape(value)}"`).join('');

  UI.escape = escape;
  UI.Button = function Button({ label = '', html, variant = 'primary', href, type = 'button', className = '', data, ariaLabel } = {}) {
    const content = html ?? escape(label);
    const classes = `scene-ui-button scene-ui-button--${escape(variant)} ${escape(className)}`.trim();
    const aria = ariaLabel ? ` aria-label="${escape(ariaLabel)}"` : '';
    return href
      ? `<a class="${classes}" href="${escape(href)}"${aria}${dataAttrs(data)}>${content}</a>`
      : `<button class="${classes}" type="${escape(type)}"${aria}${dataAttrs(data)}>${content}</button>`;
  };
  UI.IconButton = function IconButton({ label, icon, className = '', data, type = 'button' } = {}) {
    return `<button class="scene-ui-icon-button ${escape(className)}" type="${escape(type)}" aria-label="${escape(label || 'Action')}" title="${escape(label || 'Action')}"${dataAttrs(data)}>${icon || ''}</button>`;
  };
  UI.Logo = function Logo({ variant = 'light', size = 'medium', href, asset = 'src/assets/scene-233-logo-transparent.png', alt = 'SCENE 233', className = '', data } = {}) {
    const image = `<img src="${escape(asset)}" alt="${escape(alt)}" class="scene-logo__image">`;
    const classes = `scene-logo scene-logo--${escape(variant)} scene-logo--${escape(size)} ${escape(className)}`.trim();
    return href ? `<a class="${classes}" href="${escape(href)}"${dataAttrs(data)}>${image}</a>` : `<span class="${classes}"${dataAttrs(data)}>${image}</span>`;
  };
  UI.Badge = function Badge({ label = '', variant = 'category', className = '' } = {}) {
    return `<span class="scene-ui-badge scene-ui-badge--${escape(variant)} ${escape(className)}">${escape(label)}</span>`;
  };
})(window);
