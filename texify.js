var js = document.createElement("script");

js.type = "text/javascript";
js.src = "https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";

var config = document.createElement("script");
config.type = "text/x-mathjax-config";
config.text = "MathJax.Hub.Config({ tex2jax: { inlineMath: [['$','$'], ['[;', ';]']] } });";

var repeater = document.createElement("script");
repeater.type = "text/javascript";
repeater.text = "\
function reTeX() { \
    MathJax.Hub.Queue([\"Typeset\",MathJax.Hub]); \
}; \
setInterval(reTeX, 3000);";

document.head.appendChild(config);
document.head.appendChild(js);
document.body.appendChild(repeater);
