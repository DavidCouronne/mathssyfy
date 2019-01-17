/**
 * Resolves plguins passed as string
 * @param {String|Object} plugin
 * @return {Object}
 */
var resolvePlugin = function (plugin) {
  if (typeof plugin === 'string') {
    return require(plugin);
  }
  return plugin;
};
exports.resolvePlugin = resolvePlugin;
