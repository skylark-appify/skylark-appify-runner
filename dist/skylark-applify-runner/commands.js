/**
 * skylark-applify-runner - The skylark html application runner library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-applify/skylark-applify-runner/
 * @license MIT
 */
define(["./runner","./sandbox"],function(e,o){"use strict";var s={render:function(e){if(e.options.injectCSS&&o.isActive()){let s=e.source||e.codes&&e.codes.css;return o.injectCssText(s)}return o.render(e)},"console:run":function(e){o.eval(e)},"console:load:script":function(s){o.injectScript(s,function(o){if(o)return e.postMessage("console:load:script:error",o);e.postMessage("console:load:script:success",s)})},"console:load:dom":function(s){o.injectDOM(s,function(o){if(o)return e.postMessage("console:load:dom:error",o);e.postMessage("console:load:dom:success")})}};return e.commands=s});
//# sourceMappingURL=sourcemaps/commands.js.map
