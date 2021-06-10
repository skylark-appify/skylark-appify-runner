/**
 * skylark-appify-runner - The skylark html application runner library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-appify/skylark-appify-runner/
 * @license MIT
 */
define(["skylark-loopprotect","skylark-domx-plugins-sandboxs/sandbox","./runner","./proxy-console","./processor"],function(e,n,t,o,r){"use strict";var s;return t.sandbox={init:function(e,t){s=new n(e,{cssTextTagId:t.cssTextTagId})},render:function(n){e.reset(),!n.source&&n.codes&&(n.source=r.prepare(n.codes));var c=r.render(n.source,n.options);n.options.proxyConsole=o,n.options.loopProtect=e,s.render(c,n.options),t.postMessage("complete")},injectScript:function(e,n){return s.injectScript(e,n)},injectDOM:function(e,n){return s.injectDOM(e,n)},injectCssText:function(e){return s.injectCssText(e)},eval:function(e){return s.eval(e)},isActive:function(){return!!s.active}}});
//# sourceMappingURL=sourcemaps/sandbox.js.map
