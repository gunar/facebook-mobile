(function() {
  'use strict';

  function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
  }

  addGlobalStyle('body { width: 600px; margin-left: calc(50% - 300px) !important; }');
  addGlobalStyle('textarea { height: 300px; }');

})();
