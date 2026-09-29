/* Shared responsive layout primitives. Children are trusted app-generated markup. */
(function (root) {
  const Layout = root.Scene233Layout = root.Scene233Layout || {};
  const escape = root.Scene233UI.escape;
  const tags = new Set(['div', 'main', 'section', 'article', 'aside', 'nav']);
  const tagName = value => tags.has(value) ? value : 'div';
  Layout.Container = function Container(content = '', { as = 'div', size = 'wide', className = '', id = '' } = {}) {
    return `<${tagName(as)} class="scene-container scene-container--${escape(size)} ${escape(className)}"${id ? ` id="${escape(id)}"` : ''}>${content}</${tagName(as)}>`;
  };
  Layout.Section = function Section({ content = '', eyebrow = '', title = '', description = '', action = '', className = '', id = '' } = {}) {
    const heading = eyebrow || title || description || action
      ? `<header class="scene-ui-section__head">${eyebrow ? `<span class="scene-kicker">${escape(eyebrow)}</span>` : ''}${title ? `<h2>${escape(title)}</h2>` : ''}${description ? `<p>${escape(description)}</p>` : ''}${action}</header>` : '';
    return `<section class="scene-ui-section ${escape(className)}"${id ? ` id="${escape(id)}"` : ''}>${heading}${content}</section>`;
  };
})(window);
