newMathJax();

  MathJax.Ajax.loadComplete("~plugins/MathJax.js");


function newMathJax() {
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$', '$']],
      processEscapes: true
    }
  });
}
  