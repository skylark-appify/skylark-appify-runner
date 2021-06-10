/**
 * skylark-appify-runner - The skylark html application runner library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-appify/skylark-appify-runner/
 * @license MIT
 */
define(["skylark-langx-ns","skylark-loopprotect"],function(t,e){"use strict";var r={};return e.hit=function(t){console.warn("Exiting potential infinite loop at line "+t+'. To disable loop protection: add "// noprotect" to your code'),r.postMessage("loopProtectHit",t)},r.parent={},r.parent.origin="*",r.error=function(){var t=["Runner:"].concat([].slice.call(arguments));if(!("console"in window))return alert(t.join(" "))},r.handleMessage=function(t){if(t.origin){var e=t.data;try{e="string"==typeof t.data?JSON.parse(t.data):t.data}catch(t){return r.error("Error parsing event data:",t.message)}if(r.commands&&"function"!=typeof r.commands[e.type])return r.error("No matching event handler:",e.type);r.parent.source=t.source;try{r.commands[e.type](e.data)}catch(t){r.error(t.message)}}},r.postMessage=function(t,e){if(!r.parent.source)return r.error("No postMessage connection to parent window.");r.parent.source.postMessage(JSON.stringify({type:t,data:e}),r.parent.origin)},t.attach("appify.runner",r)});
//# sourceMappingURL=sourcemaps/runner.js.map
