const { resolvePlugin } = require('./resolvePlugin')

const { renderVueTemplate } = require('./renderVueTemplate')

const { replaceDelimiters } = require('./replaceDelimiters')

const { renderHighlight } = require('./renderHighlight')

var loaderUtils = require('loader-utils')
var markdown = require('markdown-it')
var component = require('@mathssyfy/markdown/lib/component.js')

module.exports = function (source) {
  this.cacheable()

  var parser
  var params = loaderUtils.getOptions(this)
  var opts = Object.assign({}, params)

  if (typeof (opts.render) === 'function') {
    parser = opts
  } else {
    opts = Object.assign({
      preset: 'default',
      html: true,
      highlight: renderHighlight
    }, opts)

    var plugins = opts.use
    var preprocess = opts.preprocess

    delete opts.use
    delete opts.preprocess

    parser = markdown(opts.preset, opts)
    parser.use(component)
    if (plugins) {
      plugins.forEach(function (plugin) {
        if (Array.isArray(plugin)) {
          plugin[0] = resolvePlugin(plugin[0])
          parser.use.apply(parser, plugin)
        } else {
          parser.use(resolvePlugin(plugin))
        }
      })
    }
  }

  var codeInlineRender = parser.renderer.rules.code_inline
  parser.renderer.rules.code_inline = function () {
    return replaceDelimiters(codeInlineRender.apply(this, arguments))
  }

  if (preprocess) {
    source = preprocess.call(this, parser, source)
  }

  var content = parser.render(source)

  return renderVueTemplate(content)
}
