import Prism from 'prismjs';

Prism.languages.markdown = Prism.languages.extend('markup', {});

Prism.languages.insertBefore('markdown', 'prolog', {
  blockquote: { pattern: /^>.*/m, alias: 'punctuation' },
  code: [
    { pattern: /^(?: {4}|\t).+/m, alias: 'keyword' },
    { pattern: /`[^`\n]+`/, alias: 'keyword' }
  ],
  h1: {
    pattern: /(^\s*)#{1}[^#].+/m,
    lookbehind: !0,
    alias: 'important',
    inside: { punctuation: /^#+|#+$/ }
  },
  h2: {
    pattern: /(^\s*)#{2}[^#].+/m,
    lookbehind: !0,
    alias: 'important',
    inside: { punctuation: /^#+|#+$/ }
  },
  h3: {
    pattern: /(^\s*)#{3}[^#].+/m,
    lookbehind: !0,
    alias: 'important',
    inside: { punctuation: /^#+|#+$/ }
  },
  h4: {
    pattern: /(^\s*)#{4}[^#].+/m,
    lookbehind: !0,
    alias: 'important',
    inside: { punctuation: /^#+|#+$/ }
  },
  h5: {
    pattern: /(^\s*)#{5}[^#].+/m,
    lookbehind: !0,
    alias: 'important',
    inside: { punctuation: /^#+|#+$/ }
  },
  h6: {
    pattern: /(^\s*)#{6}.+/m,
    lookbehind: !0,
    alias: 'important',
    inside: { punctuation: /^#+|#+$/ }
  },
  list: {
    pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
    lookbehind: !0,
    alias: 'punctuation'
  },
  'url-reference': {
    pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
    inside: {
      variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
      string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
      punctuation: /^[[\]!:]|[<>]/
    },
    alias: 'url'
  },
  bold: {
    pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: { punctuation: /^\*\*|^__|\*\*$|__$/ }
  },
  italic: {
    pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: { punctuation: /^[*_]|[*_]$/ }
  },
  strikethrough: {
    pattern: /(^|[^\\])(~~)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: { punctuation: /^~~|~~$/ }
  },
  url: {
    pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
    inside: {
      variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
      string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ }
    }
  }
});

Prism.languages.markdown.bold.inside.url = Prism.util.clone(
  Prism.languages.markdown.url
);

Prism.languages.markdown.italic.inside.url = Prism.util.clone(
  Prism.languages.markdown.url
);

Prism.languages.markdown.bold.inside.italic = Prism.util.clone(
  Prism.languages.markdown.italic
);

Prism.languages.markdown.italic.inside.bold = Prism.util.clone(
  Prism.languages.markdown.bold
);

export default Prism;
