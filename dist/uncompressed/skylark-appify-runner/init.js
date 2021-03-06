define([
  "skylark-domx-eventer",
  "./runner",
  "./sandbox",
],function(eventer,runner,sandbox){
    'use strict';


  /** =========================================================================
   * JS Bin Runner
   * ========================================================================== */
  function init(el,options) {


    window.onload = function () {
      // from index.js

      /**
       * Live rendering, basic mode.
       * Fallback - load the bin into a new iframe, and let it keep itself up
       * to date using event stream.
       */
      if (!window.postMessage) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('sandbox', 'allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts');
        iframe.setAttribute('frameBorder', '0');
        document.body.appendChild(iframe);
        iframe.src = window.name;
        return;
      }

      /**
       * Live rendering, postMessage style.
       */

      // Set the sandbox target
      ///sandbox.target = document.getElementById('sandbox-wrapper');
      ///sandbox.init(document.getElementById('sandbox-wrapper'),options);
      sandbox.init(el,options);
      // Hook into postMessage
      eventer.on(window, 'message', runner.handleMessage);

    };

  }

  return runner.init = init;

});
