/**
 * `{{ }}` => `<span>{{</span> <span>}}</span>`
 * @param  {string} str
 * @return {string}
 */
var replaceDelimiters = function (str) {
  return str.replace(/({{|}})/g, '<span>$1</span>');
};
exports.replaceDelimiters = replaceDelimiters;
