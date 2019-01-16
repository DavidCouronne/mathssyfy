var markdown = require('markdown-it')
var loaderUtils = require('loader-utils')

module.exports = function (source) {
  this.cacheable()

  var opts = Object.assign(
    {
      preset: 'default',
      
    },
    loaderUtils.getOptions(this)
  )

  var plugins = opts.use
  delete opts.use

  var parser = markdown(opts.preset, opts)

  if (plugins) {
    plugins.forEach(function (plugin) {
      if (Array.isArray(plugin)) {
        // Allow array of options to be passed.
        parser.use.apply(parser, plugin)
      } else {
        parser.use(plugin)
      }
    })
  }

  return parser.render(source)
}
