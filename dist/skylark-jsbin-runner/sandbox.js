/**
 * skylark-jsbin-runner - A version of jsbin-runner  that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jsbin-runner/
 * @license MIT
 */
define(["skylark-loopprotect","skylark-domx-plugins-sandboxs/sandbox","./runner","./proxy-console","./processor"],function(e,n,o,t,r){"use strict";var s;return o.sandbox={init:function(e){s=new n(e,{cssTextTagId:"jsbin-css"})},render:function(n){e.reset(),!n.source&&n.codes&&(n.source=r.prepare(n.codes));var c=r.render(n.source,n.options);n.options.proxyConsole=t,n.options.loopProtect=e,s.render(c,n.options),o.postMessage("complete")},injectScript:function(e,n){return s.injectScript(e,n)},injectDOM:function(e,n){return s.injectDOM(e,n)},injectCssText:function(e){return s.injectCssText(e)},eval:function(e){return s.eval(e)},isActive:function(){return!!s.active}}});
//# sourceMappingURL=sourcemaps/sandbox.js.map
