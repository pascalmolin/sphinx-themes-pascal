/* macros for mathjax */
MathJax.Hub.Config({
    extensions: ["tex2jax.js","TeX/AMSmath.js","TeX/AMSsymbols.js"],
    jax: ["input/TeX","output/HTML-CSS"],
    TeX: {
      Macros: {
      C: '{\\mathbb{C}}',
      R: '{\\mathbb{R}}',
      Q: '{\\mathbb{Q}}',
      Z: '{\\mathbb{Z}}',
      F: '{\\mathbb{F}}',
      N: '{\\mathbb{N}}',
      floor: ['{\\lfloor #1 \\rfloor}',1],
      ceil: ['{\\lceil #1 \\rceil}',1],
      }
     }
    })

