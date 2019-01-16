export const propsMakrdown = {
  watches: {
    type: Array,
    default: () => ['source', 'show', 'toc'],
  },
  source: {
    type: String,
    default: ``,
  },
  lineNumbers: {
    type: Boolean,
    default: true,
  },
  show: {
    type: Boolean,
    default: true,
  },
  highlight: {
    type: Boolean,
    default: true
  },
  html: {
    type: Boolean,
    default: true,
  },
  xhtmlOut: {
    type: Boolean,
    default: true,
  },
  breaks: {
    type: Boolean,
    default: true,
  },
  linkify: {
    type: Boolean,
    default: true,
  },
  emoji: {
    type: Boolean,
    default: true,
  },
  typographer: {
    type: Boolean,
    default: true,
  },
  langPrefix: {
    type: String,
    default: 'language-',
  },
  quotes: {
    type: String,
    default: '“”‘’',
  },
  tableClass: {
    type: String,
    default: 'table',
  },
  taskLists: {
    type: Boolean,
    default: true
  },
  toc: {
    type: Boolean,
    default: true,
  },
  tocId: {
    type: String,
  },
  tocClass: {
    type: String,
    default: 'table-of-contents',
  },
  tocFirstLevel: {
    type: Number,
    default: 2,
  },
  tocLastLevel: {
    type: Number,
  },
  tocAnchorLink: {
    type: Boolean,
    default: true,
  },
  tocAnchorClass: {
    type: String,
    default: 'toc-anchor',
  },
  tocAnchorLinkSymbol: {
    type: String,
    default: '#',
  },
  tocAnchorLinkSpace: {
    type: Boolean,
    default: true,
  },
  tocAnchorLinkClass: {
    type: String,
    default: 'toc-anchor-link',
  },
  anchorAttributes: {
    type: Object,
    default: () => ({})
  },
  prerender: {
    type: Function,
    default: (sourceData) => { return sourceData; }
  },
  postrender: {
    type: Function,
    default: (htmlData) => { return htmlData; }
  }
};
