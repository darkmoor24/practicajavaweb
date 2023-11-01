"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-move-parallax";
exports.ids = ["vendor-chunks/tsparticles-move-parallax"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-move-parallax/cjs/ParallaxMover.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsparticles-move-parallax/cjs/ParallaxMover.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ParallaxMover = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass ParallaxMover {\n    init() {\n    }\n    isEnabled(particle) {\n        return (!(0, tsparticles_engine_1.isSsr)() &&\n            !particle.destroyed &&\n            particle.container.actualOptions.interactivity.events.onHover.parallax.enable);\n    }\n    move(particle) {\n        const container = particle.container, options = container.actualOptions, parallaxOptions = options.interactivity.events.onHover.parallax;\n        if ((0, tsparticles_engine_1.isSsr)() || !parallaxOptions.enable) {\n            return;\n        }\n        const parallaxForce = parallaxOptions.force, mousePos = container.interactivity.mouse.position;\n        if (!mousePos) {\n            return;\n        }\n        const canvasSize = container.canvas.size, canvasCenter = {\n            x: canvasSize.width / 2,\n            y: canvasSize.height / 2,\n        }, parallaxSmooth = parallaxOptions.smooth, factor = particle.getRadius() / parallaxForce, centerDistance = {\n            x: (mousePos.x - canvasCenter.x) * factor,\n            y: (mousePos.y - canvasCenter.y) * factor,\n        }, { offset } = particle;\n        offset.x += (centerDistance.x - offset.x) / parallaxSmooth;\n        offset.y += (centerDistance.y - offset.y) / parallaxSmooth;\n    }\n}\nexports.ParallaxMover = ParallaxMover;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtbW92ZS1wYXJhbGxheC9janMvUGFyYWxsYXhNb3Zlci5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUI7QUFDckIsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsSUFBSSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtbW92ZS1wYXJhbGxheC9janMvUGFyYWxsYXhNb3Zlci5qcz80NmNmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYXJhbGxheE1vdmVyID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuY2xhc3MgUGFyYWxsYXhNb3ZlciB7XG4gICAgaW5pdCgpIHtcbiAgICB9XG4gICAgaXNFbmFibGVkKHBhcnRpY2xlKSB7XG4gICAgICAgIHJldHVybiAoISgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5pc1NzcikoKSAmJlxuICAgICAgICAgICAgIXBhcnRpY2xlLmRlc3Ryb3llZCAmJlxuICAgICAgICAgICAgcGFydGljbGUuY29udGFpbmVyLmFjdHVhbE9wdGlvbnMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25Ib3Zlci5wYXJhbGxheC5lbmFibGUpO1xuICAgIH1cbiAgICBtb3ZlKHBhcnRpY2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhcnRpY2xlLmNvbnRhaW5lciwgb3B0aW9ucyA9IGNvbnRhaW5lci5hY3R1YWxPcHRpb25zLCBwYXJhbGxheE9wdGlvbnMgPSBvcHRpb25zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uSG92ZXIucGFyYWxsYXg7XG4gICAgICAgIGlmICgoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuaXNTc3IpKCkgfHwgIXBhcmFsbGF4T3B0aW9ucy5lbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbGxheEZvcmNlID0gcGFyYWxsYXhPcHRpb25zLmZvcmNlLCBtb3VzZVBvcyA9IGNvbnRhaW5lci5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc2l0aW9uO1xuICAgICAgICBpZiAoIW1vdXNlUG9zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FudmFzU2l6ZSA9IGNvbnRhaW5lci5jYW52YXMuc2l6ZSwgY2FudmFzQ2VudGVyID0ge1xuICAgICAgICAgICAgeDogY2FudmFzU2l6ZS53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiBjYW52YXNTaXplLmhlaWdodCAvIDIsXG4gICAgICAgIH0sIHBhcmFsbGF4U21vb3RoID0gcGFyYWxsYXhPcHRpb25zLnNtb290aCwgZmFjdG9yID0gcGFydGljbGUuZ2V0UmFkaXVzKCkgLyBwYXJhbGxheEZvcmNlLCBjZW50ZXJEaXN0YW5jZSA9IHtcbiAgICAgICAgICAgIHg6IChtb3VzZVBvcy54IC0gY2FudmFzQ2VudGVyLngpICogZmFjdG9yLFxuICAgICAgICAgICAgeTogKG1vdXNlUG9zLnkgLSBjYW52YXNDZW50ZXIueSkgKiBmYWN0b3IsXG4gICAgICAgIH0sIHsgb2Zmc2V0IH0gPSBwYXJ0aWNsZTtcbiAgICAgICAgb2Zmc2V0LnggKz0gKGNlbnRlckRpc3RhbmNlLnggLSBvZmZzZXQueCkgLyBwYXJhbGxheFNtb290aDtcbiAgICAgICAgb2Zmc2V0LnkgKz0gKGNlbnRlckRpc3RhbmNlLnkgLSBvZmZzZXQueSkgLyBwYXJhbGxheFNtb290aDtcbiAgICB9XG59XG5leHBvcnRzLlBhcmFsbGF4TW92ZXIgPSBQYXJhbGxheE1vdmVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-move-parallax/cjs/ParallaxMover.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-move-parallax/cjs/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/tsparticles-move-parallax/cjs/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadParallaxMover = void 0;\nconst ParallaxMover_1 = __webpack_require__(/*! ./ParallaxMover */ \"(ssr)/./node_modules/tsparticles-move-parallax/cjs/ParallaxMover.js\");\nasync function loadParallaxMover(engine, refresh = true) {\n    await engine.addMover(\"parallax\", () => new ParallaxMover_1.ParallaxMover(), refresh);\n}\nexports.loadParallaxMover = loadParallaxMover;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtbW92ZS1wYXJhbGxheC9janMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QseUJBQXlCO0FBQ3pCLHdCQUF3QixtQkFBTyxDQUFDLDRGQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1tb3ZlLXBhcmFsbGF4L2Nqcy9pbmRleC5qcz8zZWViIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2FkUGFyYWxsYXhNb3ZlciA9IHZvaWQgMDtcbmNvbnN0IFBhcmFsbGF4TW92ZXJfMSA9IHJlcXVpcmUoXCIuL1BhcmFsbGF4TW92ZXJcIik7XG5hc3luYyBmdW5jdGlvbiBsb2FkUGFyYWxsYXhNb3ZlcihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZE1vdmVyKFwicGFyYWxsYXhcIiwgKCkgPT4gbmV3IFBhcmFsbGF4TW92ZXJfMS5QYXJhbGxheE1vdmVyKCksIHJlZnJlc2gpO1xufVxuZXhwb3J0cy5sb2FkUGFyYWxsYXhNb3ZlciA9IGxvYWRQYXJhbGxheE1vdmVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-move-parallax/cjs/index.js\n");

/***/ })

};
;