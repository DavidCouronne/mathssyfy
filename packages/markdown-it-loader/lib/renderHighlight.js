var hljs = require('@mathssyfy/markdown-it-loader/lib/highlight')
/**
 * renderHighlight
 * @param  {string} str
 * @param  {string} lang
 */
var renderHighlight = function (str, lang) {
  try {
    return hljs(str, lang)
  } catch (err) { }
}
exports.renderHighlight = renderHighlight
