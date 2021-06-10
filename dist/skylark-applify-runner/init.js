/**
 * skylark-applify-runner - The skylark html application runner library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-applify/skylark-applify-runner/
 * @license MIT
 */
define(["skylark-domx-eventer","./runner","./sandbox"],function(e,o,n){"use strict";return o.init=function(t,i){window.onload=function(){if(!window.postMessage){var a=document.createElement("iframe");return a.setAttribute("sandbox","allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts"),a.setAttribute("frameBorder","0"),document.body.appendChild(a),void(a.src=window.name)}n.init(t,i),e.on(window,"message",o.handleMessage)}}});
//# sourceMappingURL=sourcemaps/init.js.map
