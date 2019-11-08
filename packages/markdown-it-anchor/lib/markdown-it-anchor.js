const anchor = require('markdown-it-anchor')
const uslug = require('uslug')
const uslugify = s => uslug(s)
module.exports = md => {
  md
        .use(anchor, {
          slugify: uslugify,
          permalink: true,
          permalinkBefore: true,
          permalinkSymbol: '#'
        })
}
