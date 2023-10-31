"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/browser-or-node";
exports.ids = ["vendor-chunks/browser-or-node"];
exports.modules = {

/***/ "(ssr)/./node_modules/browser-or-node/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/browser-or-node/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/* global window self */\n\nvar isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';\n\n/* eslint-disable no-restricted-globals */\nvar isWebWorker = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self.constructor && self.constructor.name === 'DedicatedWorkerGlobalScope';\n/* eslint-enable no-restricted-globals */\n\nvar isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;\n\n/**\n * @see https://github.com/jsdom/jsdom/releases/tag/12.0.0\n * @see https://github.com/jsdom/jsdom/issues/1537\n */\n/* eslint-disable no-undef */\nvar isJsDom = function isJsDom() {\n  return typeof window !== 'undefined' && window.name === 'nodejs' || navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom');\n};\n\nexports.isBrowser = isBrowser;\nexports.isWebWorker = isWebWorker;\nexports.isNode = isNode;\nexports.isJsDom = isJsDom;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1vci1ub2RlL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7O0FBRUYscUdBQXFHLHFCQUFxQixtQkFBbUI7O0FBRTdJOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsY0FBYztBQUNkLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9icm93c2VyLW9yLW5vZGUvbGliL2luZGV4LmpzP2NmMmMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbi8qIGdsb2JhbCB3aW5kb3cgc2VsZiAqL1xuXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xudmFyIGlzV2ViV29ya2VyID0gKHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzZWxmKSkgPT09ICdvYmplY3QnICYmIHNlbGYuY29uc3RydWN0b3IgJiYgc2VsZi5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRGVkaWNhdGVkV29ya2VyR2xvYmFsU2NvcGUnO1xuLyogZXNsaW50LWVuYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cblxudmFyIGlzTm9kZSA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnZlcnNpb25zICE9IG51bGwgJiYgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlICE9IG51bGw7XG5cbi8qKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vanNkb20vanNkb20vcmVsZWFzZXMvdGFnLzEyLjAuMFxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vanNkb20vanNkb20vaXNzdWVzLzE1MzdcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbnZhciBpc0pzRG9tID0gZnVuY3Rpb24gaXNKc0RvbSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYW1lID09PSAnbm9kZWpzJyB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdOb2RlLmpzJykgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnanNkb20nKTtcbn07XG5cbmV4cG9ydHMuaXNCcm93c2VyID0gaXNCcm93c2VyO1xuZXhwb3J0cy5pc1dlYldvcmtlciA9IGlzV2ViV29ya2VyO1xuZXhwb3J0cy5pc05vZGUgPSBpc05vZGU7XG5leHBvcnRzLmlzSnNEb20gPSBpc0pzRG9tOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/browser-or-node/lib/index.js\n");

/***/ })

};
;