"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-updater-destroy";
exports.ids = ["vendor-chunks/tsparticles-updater-destroy"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-updater-destroy/cjs/DestroyUpdater.js":
/*!************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-destroy/cjs/DestroyUpdater.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DestroyUpdater = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nconst Destroy_1 = __webpack_require__(/*! ./Options/Classes/Destroy */ \"(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/Destroy.js\");\nconst Utils_1 = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Utils.js\");\nclass DestroyUpdater {\n    constructor(engine, container) {\n        this.engine = engine;\n        this.container = container;\n    }\n    init(particle) {\n        const container = this.container, particlesOptions = particle.options, destroyOptions = particlesOptions.destroy;\n        if (!destroyOptions) {\n            return;\n        }\n        particle.splitCount = 0;\n        const destroyBoundsOptions = destroyOptions.bounds;\n        if (!particle.destroyBounds) {\n            particle.destroyBounds = {};\n        }\n        const { bottom, left, right, top } = destroyBoundsOptions, { destroyBounds } = particle, canvasSize = container.canvas.size;\n        if (bottom) {\n            destroyBounds.bottom = ((0, tsparticles_engine_1.getRangeValue)(bottom) * canvasSize.height) / 100;\n        }\n        if (left) {\n            destroyBounds.left = ((0, tsparticles_engine_1.getRangeValue)(left) * canvasSize.width) / 100;\n        }\n        if (right) {\n            destroyBounds.right = ((0, tsparticles_engine_1.getRangeValue)(right) * canvasSize.width) / 100;\n        }\n        if (top) {\n            destroyBounds.top = ((0, tsparticles_engine_1.getRangeValue)(top) * canvasSize.height) / 100;\n        }\n    }\n    isEnabled(particle) {\n        return !particle.destroyed;\n    }\n    loadOptions(options, ...sources) {\n        if (!options.destroy) {\n            options.destroy = new Destroy_1.Destroy();\n        }\n        for (const source of sources) {\n            options.destroy.load(source?.destroy);\n        }\n    }\n    particleDestroyed(particle, override) {\n        if (override) {\n            return;\n        }\n        const destroyOptions = particle.options.destroy;\n        if (destroyOptions && destroyOptions.mode === \"split\") {\n            (0, Utils_1.split)(this.engine, this.container, particle);\n        }\n    }\n    update(particle) {\n        if (!this.isEnabled(particle)) {\n            return;\n        }\n        const position = particle.getPosition(), bounds = particle.destroyBounds;\n        if (!bounds) {\n            return;\n        }\n        if ((bounds.bottom !== undefined && position.y >= bounds.bottom) ||\n            (bounds.left !== undefined && position.x <= bounds.left) ||\n            (bounds.right !== undefined && position.x >= bounds.right) ||\n            (bounds.top !== undefined && position.y <= bounds.top)) {\n            particle.destroy();\n        }\n    }\n}\nexports.DestroyUpdater = DestroyUpdater;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1kZXN0cm95L2Nqcy9EZXN0cm95VXBkYXRlci5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0I7QUFDdEIsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pELGtCQUFrQixtQkFBTyxDQUFDLGtIQUEyQjtBQUNyRCxnQkFBZ0IsbUJBQU8sQ0FBQyw4RUFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkJBQTJCLDBCQUEwQixnQkFBZ0I7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLWRlc3Ryb3kvY2pzL0Rlc3Ryb3lVcGRhdGVyLmpzP2JhMDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRlc3Ryb3lVcGRhdGVyID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuY29uc3QgRGVzdHJveV8xID0gcmVxdWlyZShcIi4vT3B0aW9ucy9DbGFzc2VzL0Rlc3Ryb3lcIik7XG5jb25zdCBVdGlsc18xID0gcmVxdWlyZShcIi4vVXRpbHNcIik7XG5jbGFzcyBEZXN0cm95VXBkYXRlciB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lLCBjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH1cbiAgICBpbml0KHBhcnRpY2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCBwYXJ0aWNsZXNPcHRpb25zID0gcGFydGljbGUub3B0aW9ucywgZGVzdHJveU9wdGlvbnMgPSBwYXJ0aWNsZXNPcHRpb25zLmRlc3Ryb3k7XG4gICAgICAgIGlmICghZGVzdHJveU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0aWNsZS5zcGxpdENvdW50ID0gMDtcbiAgICAgICAgY29uc3QgZGVzdHJveUJvdW5kc09wdGlvbnMgPSBkZXN0cm95T3B0aW9ucy5ib3VuZHM7XG4gICAgICAgIGlmICghcGFydGljbGUuZGVzdHJveUJvdW5kcykge1xuICAgICAgICAgICAgcGFydGljbGUuZGVzdHJveUJvdW5kcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgYm90dG9tLCBsZWZ0LCByaWdodCwgdG9wIH0gPSBkZXN0cm95Qm91bmRzT3B0aW9ucywgeyBkZXN0cm95Qm91bmRzIH0gPSBwYXJ0aWNsZSwgY2FudmFzU2l6ZSA9IGNvbnRhaW5lci5jYW52YXMuc2l6ZTtcbiAgICAgICAgaWYgKGJvdHRvbSkge1xuICAgICAgICAgICAgZGVzdHJveUJvdW5kcy5ib3R0b20gPSAoKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmdldFJhbmdlVmFsdWUpKGJvdHRvbSkgKiBjYW52YXNTaXplLmhlaWdodCkgLyAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnQpIHtcbiAgICAgICAgICAgIGRlc3Ryb3lCb3VuZHMubGVmdCA9ICgoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0UmFuZ2VWYWx1ZSkobGVmdCkgKiBjYW52YXNTaXplLndpZHRoKSAvIDEwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQpIHtcbiAgICAgICAgICAgIGRlc3Ryb3lCb3VuZHMucmlnaHQgPSAoKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmdldFJhbmdlVmFsdWUpKHJpZ2h0KSAqIGNhbnZhc1NpemUud2lkdGgpIC8gMTAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3ApIHtcbiAgICAgICAgICAgIGRlc3Ryb3lCb3VuZHMudG9wID0gKCgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5nZXRSYW5nZVZhbHVlKSh0b3ApICogY2FudmFzU2l6ZS5oZWlnaHQpIC8gMTAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzRW5hYmxlZChwYXJ0aWNsZSkge1xuICAgICAgICByZXR1cm4gIXBhcnRpY2xlLmRlc3Ryb3llZDtcbiAgICB9XG4gICAgbG9hZE9wdGlvbnMob3B0aW9ucywgLi4uc291cmNlcykge1xuICAgICAgICBpZiAoIW9wdGlvbnMuZGVzdHJveSkge1xuICAgICAgICAgICAgb3B0aW9ucy5kZXN0cm95ID0gbmV3IERlc3Ryb3lfMS5EZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICAgICAgb3B0aW9ucy5kZXN0cm95LmxvYWQoc291cmNlPy5kZXN0cm95KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXJ0aWNsZURlc3Ryb3llZChwYXJ0aWNsZSwgb3ZlcnJpZGUpIHtcbiAgICAgICAgaWYgKG92ZXJyaWRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdHJveU9wdGlvbnMgPSBwYXJ0aWNsZS5vcHRpb25zLmRlc3Ryb3k7XG4gICAgICAgIGlmIChkZXN0cm95T3B0aW9ucyAmJiBkZXN0cm95T3B0aW9ucy5tb2RlID09PSBcInNwbGl0XCIpIHtcbiAgICAgICAgICAgICgwLCBVdGlsc18xLnNwbGl0KSh0aGlzLmVuZ2luZSwgdGhpcy5jb250YWluZXIsIHBhcnRpY2xlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocGFydGljbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlZChwYXJ0aWNsZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHBhcnRpY2xlLmdldFBvc2l0aW9uKCksIGJvdW5kcyA9IHBhcnRpY2xlLmRlc3Ryb3lCb3VuZHM7XG4gICAgICAgIGlmICghYm91bmRzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChib3VuZHMuYm90dG9tICE9PSB1bmRlZmluZWQgJiYgcG9zaXRpb24ueSA+PSBib3VuZHMuYm90dG9tKSB8fFxuICAgICAgICAgICAgKGJvdW5kcy5sZWZ0ICE9PSB1bmRlZmluZWQgJiYgcG9zaXRpb24ueCA8PSBib3VuZHMubGVmdCkgfHxcbiAgICAgICAgICAgIChib3VuZHMucmlnaHQgIT09IHVuZGVmaW5lZCAmJiBwb3NpdGlvbi54ID49IGJvdW5kcy5yaWdodCkgfHxcbiAgICAgICAgICAgIChib3VuZHMudG9wICE9PSB1bmRlZmluZWQgJiYgcG9zaXRpb24ueSA8PSBib3VuZHMudG9wKSkge1xuICAgICAgICAgICAgcGFydGljbGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5EZXN0cm95VXBkYXRlciA9IERlc3Ryb3lVcGRhdGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-destroy/cjs/DestroyUpdater.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/Destroy.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/Destroy.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Destroy = void 0;\nconst DestroyBounds_1 = __webpack_require__(/*! ./DestroyBounds */ \"(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/DestroyBounds.js\");\nconst Split_1 = __webpack_require__(/*! ./Split */ \"(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/Split.js\");\nclass Destroy {\n    constructor() {\n        this.bounds = new DestroyBounds_1.DestroyBounds();\n        this.mode = \"none\";\n        this.split = new Split_1.Split();\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.mode) {\n            this.mode = data.mode;\n        }\n        if (data.bounds) {\n            this.bounds.load(data.bounds);\n        }\n        this.split.load(data.split);\n    }\n}\nexports.Destroy = Destroy;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1kZXN0cm95L2Nqcy9PcHRpb25zL0NsYXNzZXMvRGVzdHJveS5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlO0FBQ2Ysd0JBQXdCLG1CQUFPLENBQUMsOEdBQWlCO0FBQ2pELGdCQUFnQixtQkFBTyxDQUFDLDhGQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItZGVzdHJveS9janMvT3B0aW9ucy9DbGFzc2VzL0Rlc3Ryb3kuanM/NWEzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGVzdHJveSA9IHZvaWQgMDtcbmNvbnN0IERlc3Ryb3lCb3VuZHNfMSA9IHJlcXVpcmUoXCIuL0Rlc3Ryb3lCb3VuZHNcIik7XG5jb25zdCBTcGxpdF8xID0gcmVxdWlyZShcIi4vU3BsaXRcIik7XG5jbGFzcyBEZXN0cm95IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib3VuZHMgPSBuZXcgRGVzdHJveUJvdW5kc18xLkRlc3Ryb3lCb3VuZHMoKTtcbiAgICAgICAgdGhpcy5tb2RlID0gXCJub25lXCI7XG4gICAgICAgIHRoaXMuc3BsaXQgPSBuZXcgU3BsaXRfMS5TcGxpdCgpO1xuICAgIH1cbiAgICBsb2FkKGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEubW9kZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gZGF0YS5tb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmJvdW5kcykge1xuICAgICAgICAgICAgdGhpcy5ib3VuZHMubG9hZChkYXRhLmJvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGxpdC5sb2FkKGRhdGEuc3BsaXQpO1xuICAgIH1cbn1cbmV4cG9ydHMuRGVzdHJveSA9IERlc3Ryb3k7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/Destroy.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/DestroyBounds.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/DestroyBounds.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DestroyBounds = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass DestroyBounds {\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.bottom !== undefined) {\n            this.bottom = (0, tsparticles_engine_1.setRangeValue)(data.bottom);\n        }\n        if (data.left !== undefined) {\n            this.left = (0, tsparticles_engine_1.setRangeValue)(data.left);\n        }\n        if (data.right !== undefined) {\n            this.right = (0, tsparticles_engine_1.setRangeValue)(data.right);\n        }\n        if (data.top !== undefined) {\n            this.top = (0, tsparticles_engine_1.setRangeValue)(data.top);\n        }\n    }\n}\nexports.DestroyBounds = DestroyBounds;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1kZXN0cm95L2Nqcy9PcHRpb25zL0NsYXNzZXMvRGVzdHJveUJvdW5kcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUI7QUFDckIsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1kZXN0cm95L2Nqcy9PcHRpb25zL0NsYXNzZXMvRGVzdHJveUJvdW5kcy5qcz80ZmNhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EZXN0cm95Qm91bmRzID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuY2xhc3MgRGVzdHJveUJvdW5kcyB7XG4gICAgbG9hZChkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmJvdHRvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbSA9ICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5zZXRSYW5nZVZhbHVlKShkYXRhLmJvdHRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEubGVmdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuc2V0UmFuZ2VWYWx1ZSkoZGF0YS5sZWZ0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5yaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLnNldFJhbmdlVmFsdWUpKGRhdGEucmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLnRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnRvcCA9ICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5zZXRSYW5nZVZhbHVlKShkYXRhLnRvcCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkRlc3Ryb3lCb3VuZHMgPSBEZXN0cm95Qm91bmRzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/DestroyBounds.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/Split.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/Split.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Split = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nconst SplitFactor_1 = __webpack_require__(/*! ./SplitFactor */ \"(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/SplitFactor.js\");\nconst SplitRate_1 = __webpack_require__(/*! ./SplitRate */ \"(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/SplitRate.js\");\nclass Split {\n    constructor() {\n        this.count = 1;\n        this.factor = new SplitFactor_1.SplitFactor();\n        this.rate = new SplitRate_1.SplitRate();\n        this.sizeOffset = true;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.color !== undefined) {\n            this.color = tsparticles_engine_1.OptionsColor.create(this.color, data.color);\n        }\n        if (data.count !== undefined) {\n            this.count = data.count;\n        }\n        this.factor.load(data.factor);\n        this.rate.load(data.rate);\n        this.particles = (0, tsparticles_engine_1.executeOnSingleOrMultiple)(data.particles, (particles) => {\n            return (0, tsparticles_engine_1.deepExtend)({}, particles);\n        });\n        if (data.sizeOffset !== undefined) {\n            this.sizeOffset = data.sizeOffset;\n        }\n        if (data.colorOffset) {\n            this.colorOffset = this.colorOffset ?? {};\n            if (data.colorOffset.h !== undefined) {\n                this.colorOffset.h = data.colorOffset.h;\n            }\n            if (data.colorOffset.s !== undefined) {\n                this.colorOffset.s = data.colorOffset.s;\n            }\n            if (data.colorOffset.l !== undefined) {\n                this.colorOffset.l = data.colorOffset.l;\n            }\n        }\n    }\n}\nexports.Split = Split;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1kZXN0cm95L2Nqcy9PcHRpb25zL0NsYXNzZXMvU3BsaXQuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYTtBQUNiLDZCQUE2QixtQkFBTyxDQUFDLGdGQUFvQjtBQUN6RCxzQkFBc0IsbUJBQU8sQ0FBQywwR0FBZTtBQUM3QyxvQkFBb0IsbUJBQU8sQ0FBQyxzR0FBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItZGVzdHJveS9janMvT3B0aW9ucy9DbGFzc2VzL1NwbGl0LmpzP2VjNTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNwbGl0ID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuY29uc3QgU3BsaXRGYWN0b3JfMSA9IHJlcXVpcmUoXCIuL1NwbGl0RmFjdG9yXCIpO1xuY29uc3QgU3BsaXRSYXRlXzEgPSByZXF1aXJlKFwiLi9TcGxpdFJhdGVcIik7XG5jbGFzcyBTcGxpdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY291bnQgPSAxO1xuICAgICAgICB0aGlzLmZhY3RvciA9IG5ldyBTcGxpdEZhY3Rvcl8xLlNwbGl0RmFjdG9yKCk7XG4gICAgICAgIHRoaXMucmF0ZSA9IG5ldyBTcGxpdFJhdGVfMS5TcGxpdFJhdGUoKTtcbiAgICAgICAgdGhpcy5zaXplT2Zmc2V0ID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9hZChkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmNvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSB0c3BhcnRpY2xlc19lbmdpbmVfMS5PcHRpb25zQ29sb3IuY3JlYXRlKHRoaXMuY29sb3IsIGRhdGEuY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmNvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBkYXRhLmNvdW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmFjdG9yLmxvYWQoZGF0YS5mYWN0b3IpO1xuICAgICAgICB0aGlzLnJhdGUubG9hZChkYXRhLnJhdGUpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9ICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5leGVjdXRlT25TaW5nbGVPck11bHRpcGxlKShkYXRhLnBhcnRpY2xlcywgKHBhcnRpY2xlcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5kZWVwRXh0ZW5kKSh7fSwgcGFydGljbGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkYXRhLnNpemVPZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zaXplT2Zmc2V0ID0gZGF0YS5zaXplT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmNvbG9yT2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yT2Zmc2V0ID0gdGhpcy5jb2xvck9mZnNldCA/PyB7fTtcbiAgICAgICAgICAgIGlmIChkYXRhLmNvbG9yT2Zmc2V0LmggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JPZmZzZXQuaCA9IGRhdGEuY29sb3JPZmZzZXQuaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLmNvbG9yT2Zmc2V0LnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JPZmZzZXQucyA9IGRhdGEuY29sb3JPZmZzZXQucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLmNvbG9yT2Zmc2V0LmwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JPZmZzZXQubCA9IGRhdGEuY29sb3JPZmZzZXQubDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuU3BsaXQgPSBTcGxpdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/Split.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/SplitFactor.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/SplitFactor.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SplitFactor = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass SplitFactor extends tsparticles_engine_1.ValueWithRandom {\n    constructor() {\n        super();\n        this.value = 3;\n    }\n}\nexports.SplitFactor = SplitFactor;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1kZXN0cm95L2Nqcy9PcHRpb25zL0NsYXNzZXMvU3BsaXRGYWN0b3IuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CLDZCQUE2QixtQkFBTyxDQUFDLGdGQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLWRlc3Ryb3kvY2pzL09wdGlvbnMvQ2xhc3Nlcy9TcGxpdEZhY3Rvci5qcz8zN2RhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TcGxpdEZhY3RvciA9IHZvaWQgMDtcbmNvbnN0IHRzcGFydGljbGVzX2VuZ2luZV8xID0gcmVxdWlyZShcInRzcGFydGljbGVzLWVuZ2luZVwiKTtcbmNsYXNzIFNwbGl0RmFjdG9yIGV4dGVuZHMgdHNwYXJ0aWNsZXNfZW5naW5lXzEuVmFsdWVXaXRoUmFuZG9tIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IDM7XG4gICAgfVxufVxuZXhwb3J0cy5TcGxpdEZhY3RvciA9IFNwbGl0RmFjdG9yO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/SplitFactor.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/SplitRate.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/SplitRate.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SplitRate = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass SplitRate extends tsparticles_engine_1.ValueWithRandom {\n    constructor() {\n        super();\n        this.value = { min: 4, max: 9 };\n    }\n}\nexports.SplitRate = SplitRate;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1kZXN0cm95L2Nqcy9PcHRpb25zL0NsYXNzZXMvU3BsaXRSYXRlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQiw2QkFBNkIsbUJBQU8sQ0FBQyxnRkFBb0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLWRlc3Ryb3kvY2pzL09wdGlvbnMvQ2xhc3Nlcy9TcGxpdFJhdGUuanM/MGNhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3BsaXRSYXRlID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuY2xhc3MgU3BsaXRSYXRlIGV4dGVuZHMgdHNwYXJ0aWNsZXNfZW5naW5lXzEuVmFsdWVXaXRoUmFuZG9tIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHsgbWluOiA0LCBtYXg6IDkgfTtcbiAgICB9XG59XG5leHBvcnRzLlNwbGl0UmF0ZSA9IFNwbGl0UmF0ZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Options/Classes/SplitRate.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles-updater-destroy/cjs/Utils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.split = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nfunction addSplitParticle(engine, container, parent, splitParticlesOptions) {\n    const destroyOptions = parent.options.destroy;\n    if (!destroyOptions) {\n        return;\n    }\n    const splitOptions = destroyOptions.split, options = (0, tsparticles_engine_1.loadParticlesOptions)(engine, container, parent.options), factor = (0, tsparticles_engine_1.getValue)(splitOptions.factor), parentColor = parent.getFillColor();\n    if (splitOptions.color) {\n        options.color.load(splitOptions.color);\n    }\n    else if (splitOptions.colorOffset && parentColor) {\n        options.color.load({\n            value: {\n                hsl: {\n                    h: parentColor.h + (0, tsparticles_engine_1.getRangeValue)(splitOptions.colorOffset.h ?? 0),\n                    s: parentColor.s + (0, tsparticles_engine_1.getRangeValue)(splitOptions.colorOffset.s ?? 0),\n                    l: parentColor.l + (0, tsparticles_engine_1.getRangeValue)(splitOptions.colorOffset.l ?? 0),\n                },\n            },\n        });\n    }\n    else {\n        options.color.load({\n            value: {\n                hsl: parent.getFillColor(),\n            },\n        });\n    }\n    options.move.load({\n        center: {\n            x: parent.position.x,\n            y: parent.position.y,\n            mode: \"precise\",\n        },\n    });\n    if ((0, tsparticles_engine_1.isNumber)(options.size.value)) {\n        options.size.value /= factor;\n    }\n    else {\n        options.size.value.min /= factor;\n        options.size.value.max /= factor;\n    }\n    options.load(splitParticlesOptions);\n    const offset = splitOptions.sizeOffset ? (0, tsparticles_engine_1.setRangeValue)(-parent.size.value, parent.size.value) : 0, position = {\n        x: parent.position.x + (0, tsparticles_engine_1.randomInRange)(offset),\n        y: parent.position.y + (0, tsparticles_engine_1.randomInRange)(offset),\n    };\n    return container.particles.addParticle(position, options, parent.group, (particle) => {\n        if (particle.size.value < 0.5) {\n            return false;\n        }\n        particle.velocity.length = (0, tsparticles_engine_1.randomInRange)((0, tsparticles_engine_1.setRangeValue)(parent.velocity.length, particle.velocity.length));\n        particle.splitCount = (parent.splitCount ?? 0) + 1;\n        particle.unbreakable = true;\n        setTimeout(() => {\n            particle.unbreakable = false;\n        }, 500);\n        return true;\n    });\n}\nfunction split(engine, container, particle) {\n    const destroyOptions = particle.options.destroy;\n    if (!destroyOptions) {\n        return;\n    }\n    const splitOptions = destroyOptions.split;\n    if (splitOptions.count >= 0 && (particle.splitCount === undefined || particle.splitCount++ > splitOptions.count)) {\n        return;\n    }\n    const rate = (0, tsparticles_engine_1.getValue)(splitOptions.rate), particlesSplitOptions = (0, tsparticles_engine_1.itemFromSingleOrMultiple)(splitOptions.particles);\n    for (let i = 0; i < rate; i++) {\n        addSplitParticle(engine, container, particle, particlesSplitOptions);\n    }\n}\nexports.split = split;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1kZXN0cm95L2Nqcy9VdGlscy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxhQUFhO0FBQ2IsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy11cGRhdGVyLWRlc3Ryb3kvY2pzL1V0aWxzLmpzPzhjNGQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNwbGl0ID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuZnVuY3Rpb24gYWRkU3BsaXRQYXJ0aWNsZShlbmdpbmUsIGNvbnRhaW5lciwgcGFyZW50LCBzcGxpdFBhcnRpY2xlc09wdGlvbnMpIHtcbiAgICBjb25zdCBkZXN0cm95T3B0aW9ucyA9IHBhcmVudC5vcHRpb25zLmRlc3Ryb3k7XG4gICAgaWYgKCFkZXN0cm95T3B0aW9ucykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNwbGl0T3B0aW9ucyA9IGRlc3Ryb3lPcHRpb25zLnNwbGl0LCBvcHRpb25zID0gKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmxvYWRQYXJ0aWNsZXNPcHRpb25zKShlbmdpbmUsIGNvbnRhaW5lciwgcGFyZW50Lm9wdGlvbnMpLCBmYWN0b3IgPSAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0VmFsdWUpKHNwbGl0T3B0aW9ucy5mYWN0b3IpLCBwYXJlbnRDb2xvciA9IHBhcmVudC5nZXRGaWxsQ29sb3IoKTtcbiAgICBpZiAoc3BsaXRPcHRpb25zLmNvbG9yKSB7XG4gICAgICAgIG9wdGlvbnMuY29sb3IubG9hZChzcGxpdE9wdGlvbnMuY29sb3IpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzcGxpdE9wdGlvbnMuY29sb3JPZmZzZXQgJiYgcGFyZW50Q29sb3IpIHtcbiAgICAgICAgb3B0aW9ucy5jb2xvci5sb2FkKHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgaHNsOiB7XG4gICAgICAgICAgICAgICAgICAgIGg6IHBhcmVudENvbG9yLmggKyAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0UmFuZ2VWYWx1ZSkoc3BsaXRPcHRpb25zLmNvbG9yT2Zmc2V0LmggPz8gMCksXG4gICAgICAgICAgICAgICAgICAgIHM6IHBhcmVudENvbG9yLnMgKyAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0UmFuZ2VWYWx1ZSkoc3BsaXRPcHRpb25zLmNvbG9yT2Zmc2V0LnMgPz8gMCksXG4gICAgICAgICAgICAgICAgICAgIGw6IHBhcmVudENvbG9yLmwgKyAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0UmFuZ2VWYWx1ZSkoc3BsaXRPcHRpb25zLmNvbG9yT2Zmc2V0LmwgPz8gMCksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5jb2xvci5sb2FkKHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgaHNsOiBwYXJlbnQuZ2V0RmlsbENvbG9yKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3B0aW9ucy5tb3ZlLmxvYWQoe1xuICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICAgIHg6IHBhcmVudC5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogcGFyZW50LnBvc2l0aW9uLnksXG4gICAgICAgICAgICBtb2RlOiBcInByZWNpc2VcIixcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAoKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmlzTnVtYmVyKShvcHRpb25zLnNpemUudmFsdWUpKSB7XG4gICAgICAgIG9wdGlvbnMuc2l6ZS52YWx1ZSAvPSBmYWN0b3I7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zLnNpemUudmFsdWUubWluIC89IGZhY3RvcjtcbiAgICAgICAgb3B0aW9ucy5zaXplLnZhbHVlLm1heCAvPSBmYWN0b3I7XG4gICAgfVxuICAgIG9wdGlvbnMubG9hZChzcGxpdFBhcnRpY2xlc09wdGlvbnMpO1xuICAgIGNvbnN0IG9mZnNldCA9IHNwbGl0T3B0aW9ucy5zaXplT2Zmc2V0ID8gKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLnNldFJhbmdlVmFsdWUpKC1wYXJlbnQuc2l6ZS52YWx1ZSwgcGFyZW50LnNpemUudmFsdWUpIDogMCwgcG9zaXRpb24gPSB7XG4gICAgICAgIHg6IHBhcmVudC5wb3NpdGlvbi54ICsgKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLnJhbmRvbUluUmFuZ2UpKG9mZnNldCksXG4gICAgICAgIHk6IHBhcmVudC5wb3NpdGlvbi55ICsgKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLnJhbmRvbUluUmFuZ2UpKG9mZnNldCksXG4gICAgfTtcbiAgICByZXR1cm4gY29udGFpbmVyLnBhcnRpY2xlcy5hZGRQYXJ0aWNsZShwb3NpdGlvbiwgb3B0aW9ucywgcGFyZW50Lmdyb3VwLCAocGFydGljbGUpID0+IHtcbiAgICAgICAgaWYgKHBhcnRpY2xlLnNpemUudmFsdWUgPCAwLjUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0aWNsZS52ZWxvY2l0eS5sZW5ndGggPSAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEucmFuZG9tSW5SYW5nZSkoKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLnNldFJhbmdlVmFsdWUpKHBhcmVudC52ZWxvY2l0eS5sZW5ndGgsIHBhcnRpY2xlLnZlbG9jaXR5Lmxlbmd0aCkpO1xuICAgICAgICBwYXJ0aWNsZS5zcGxpdENvdW50ID0gKHBhcmVudC5zcGxpdENvdW50ID8/IDApICsgMTtcbiAgICAgICAgcGFydGljbGUudW5icmVha2FibGUgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnVuYnJlYWthYmxlID0gZmFsc2U7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc3BsaXQoZW5naW5lLCBjb250YWluZXIsIHBhcnRpY2xlKSB7XG4gICAgY29uc3QgZGVzdHJveU9wdGlvbnMgPSBwYXJ0aWNsZS5vcHRpb25zLmRlc3Ryb3k7XG4gICAgaWYgKCFkZXN0cm95T3B0aW9ucykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNwbGl0T3B0aW9ucyA9IGRlc3Ryb3lPcHRpb25zLnNwbGl0O1xuICAgIGlmIChzcGxpdE9wdGlvbnMuY291bnQgPj0gMCAmJiAocGFydGljbGUuc3BsaXRDb3VudCA9PT0gdW5kZWZpbmVkIHx8IHBhcnRpY2xlLnNwbGl0Q291bnQrKyA+IHNwbGl0T3B0aW9ucy5jb3VudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByYXRlID0gKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmdldFZhbHVlKShzcGxpdE9wdGlvbnMucmF0ZSksIHBhcnRpY2xlc1NwbGl0T3B0aW9ucyA9ICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5pdGVtRnJvbVNpbmdsZU9yTXVsdGlwbGUpKHNwbGl0T3B0aW9ucy5wYXJ0aWNsZXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF0ZTsgaSsrKSB7XG4gICAgICAgIGFkZFNwbGl0UGFydGljbGUoZW5naW5lLCBjb250YWluZXIsIHBhcnRpY2xlLCBwYXJ0aWNsZXNTcGxpdE9wdGlvbnMpO1xuICAgIH1cbn1cbmV4cG9ydHMuc3BsaXQgPSBzcGxpdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-destroy/cjs/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-updater-destroy/cjs/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles-updater-destroy/cjs/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadDestroyUpdater = void 0;\nconst DestroyUpdater_1 = __webpack_require__(/*! ./DestroyUpdater */ \"(ssr)/./node_modules/tsparticles-updater-destroy/cjs/DestroyUpdater.js\");\nasync function loadDestroyUpdater(engine, refresh = true) {\n    await engine.addParticleUpdater(\"destroy\", (container) => new DestroyUpdater_1.DestroyUpdater(engine, container), refresh);\n}\nexports.loadDestroyUpdater = loadDestroyUpdater;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtdXBkYXRlci1kZXN0cm95L2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwwQkFBMEI7QUFDMUIseUJBQXlCLG1CQUFPLENBQUMsZ0dBQWtCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXVwZGF0ZXItZGVzdHJveS9janMvaW5kZXguanM/NTAxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZERlc3Ryb3lVcGRhdGVyID0gdm9pZCAwO1xuY29uc3QgRGVzdHJveVVwZGF0ZXJfMSA9IHJlcXVpcmUoXCIuL0Rlc3Ryb3lVcGRhdGVyXCIpO1xuYXN5bmMgZnVuY3Rpb24gbG9hZERlc3Ryb3lVcGRhdGVyKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkUGFydGljbGVVcGRhdGVyKFwiZGVzdHJveVwiLCAoY29udGFpbmVyKSA9PiBuZXcgRGVzdHJveVVwZGF0ZXJfMS5EZXN0cm95VXBkYXRlcihlbmdpbmUsIGNvbnRhaW5lciksIHJlZnJlc2gpO1xufVxuZXhwb3J0cy5sb2FkRGVzdHJveVVwZGF0ZXIgPSBsb2FkRGVzdHJveVVwZGF0ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-updater-destroy/cjs/index.js\n");

/***/ })

};
;