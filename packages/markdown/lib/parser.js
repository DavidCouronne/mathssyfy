const Config = require('markdown-it-chain')
const highlight = require('@mathssyfy/markdown-it-loader/lib/highlight')
const componentPlugin = require('@mathssyfy/markdown/lib/component.js')

module.exports = (markdown = {}) => {
  const {
    externalLinks,
    anchor,
    toc,
    lineNumbers,
    beforeInstantiate,
    afterInstantiate
  } = markdown

  const config = new Config()

  config
    .options
      .html(true)
      .highlight(highlight)
      .end()

    .plugin('component')
      .use(componentPlugin)
      .end()

  const md = config.toMd()

  return md
}
