"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-remove";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-remove"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-remove/cjs/Options/Classes/Remove.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-remove/cjs/Options/Classes/Remove.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Remove = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass Remove {\n    constructor() {\n        this.quantity = 2;\n    }\n    get particles_nb() {\n        return this.quantity;\n    }\n    set particles_nb(value) {\n        this.quantity = (0, tsparticles_engine_1.setRangeValue)(value);\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        const quantity = data.quantity ?? data.particles_nb;\n        if (quantity !== undefined) {\n            this.quantity = (0, tsparticles_engine_1.setRangeValue)(quantity);\n        }\n    }\n}\nexports.Remove = Remove;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcmVtb3ZlL2Nqcy9PcHRpb25zL0NsYXNzZXMvUmVtb3ZlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWM7QUFDZCw2QkFBNkIsbUJBQU8sQ0FBQyxnRkFBb0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1yZW1vdmUvY2pzL09wdGlvbnMvQ2xhc3Nlcy9SZW1vdmUuanM/Y2E0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVtb3ZlID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuY2xhc3MgUmVtb3ZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IDI7XG4gICAgfVxuICAgIGdldCBwYXJ0aWNsZXNfbmIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1YW50aXR5O1xuICAgIH1cbiAgICBzZXQgcGFydGljbGVzX25iKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuc2V0UmFuZ2VWYWx1ZSkodmFsdWUpO1xuICAgIH1cbiAgICBsb2FkKGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBkYXRhLnF1YW50aXR5ID8/IGRhdGEucGFydGljbGVzX25iO1xuICAgICAgICBpZiAocXVhbnRpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5xdWFudGl0eSA9ICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5zZXRSYW5nZVZhbHVlKShxdWFudGl0eSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlJlbW92ZSA9IFJlbW92ZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-remove/cjs/Options/Classes/Remove.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-remove/cjs/Options/Interfaces/IRemove.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-remove/cjs/Options/Interfaces/IRemove.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcmVtb3ZlL2Nqcy9PcHRpb25zL0ludGVyZmFjZXMvSVJlbW92ZS5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLWV4dGVybmFsLXJlbW92ZS9janMvT3B0aW9ucy9JbnRlcmZhY2VzL0lSZW1vdmUuanM/ZTAyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-remove/cjs/Options/Interfaces/IRemove.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-remove/cjs/Remover.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-remove/cjs/Remover.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Remover = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nconst Remove_1 = __webpack_require__(/*! ./Options/Classes/Remove */ \"(ssr)/./node_modules/tsparticles-interaction-external-remove/cjs/Options/Classes/Remove.js\");\nclass Remover extends tsparticles_engine_1.ExternalInteractorBase {\n    constructor(container) {\n        super(container);\n        this.handleClickMode = (mode) => {\n            const container = this.container, options = container.actualOptions;\n            if (!options.interactivity.modes.remove || mode !== \"remove\") {\n                return;\n            }\n            const removeNb = (0, tsparticles_engine_1.getRangeValue)(options.interactivity.modes.remove.quantity);\n            container.particles.removeQuantity(removeNb);\n        };\n    }\n    clear() {\n    }\n    init() {\n    }\n    async interact() {\n    }\n    isEnabled() {\n        return true;\n    }\n    loadModeOptions(options, ...sources) {\n        if (!options.remove) {\n            options.remove = new Remove_1.Remove();\n        }\n        for (const source of sources) {\n            options.remove.load(source?.remove);\n        }\n    }\n    reset() {\n    }\n}\nexports.Remover = Remover;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcmVtb3ZlL2Nqcy9SZW1vdmVyLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWU7QUFDZiw2QkFBNkIsbUJBQU8sQ0FBQyxnRkFBb0I7QUFDekQsaUJBQWlCLG1CQUFPLENBQUMsNEhBQTBCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcmVtb3ZlL2Nqcy9SZW1vdmVyLmpzP2YxMWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbW92ZXIgPSB2b2lkIDA7XG5jb25zdCB0c3BhcnRpY2xlc19lbmdpbmVfMSA9IHJlcXVpcmUoXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIik7XG5jb25zdCBSZW1vdmVfMSA9IHJlcXVpcmUoXCIuL09wdGlvbnMvQ2xhc3Nlcy9SZW1vdmVcIik7XG5jbGFzcyBSZW1vdmVyIGV4dGVuZHMgdHNwYXJ0aWNsZXNfZW5naW5lXzEuRXh0ZXJuYWxJbnRlcmFjdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tNb2RlID0gKG1vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCBvcHRpb25zID0gY29udGFpbmVyLmFjdHVhbE9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZW1vdmUgfHwgbW9kZSAhPT0gXCJyZW1vdmVcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZU5iID0gKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmdldFJhbmdlVmFsdWUpKG9wdGlvbnMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZW1vdmUucXVhbnRpdHkpO1xuICAgICAgICAgICAgY29udGFpbmVyLnBhcnRpY2xlcy5yZW1vdmVRdWFudGl0eShyZW1vdmVOYik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgIH1cbiAgICBhc3luYyBpbnRlcmFjdCgpIHtcbiAgICB9XG4gICAgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbG9hZE1vZGVPcHRpb25zKG9wdGlvbnMsIC4uLnNvdXJjZXMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLnJlbW92ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5yZW1vdmUgPSBuZXcgUmVtb3ZlXzEuUmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICAgICAgb3B0aW9ucy5yZW1vdmUubG9hZChzb3VyY2U/LnJlbW92ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgfVxufVxuZXhwb3J0cy5SZW1vdmVyID0gUmVtb3ZlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-remove/cjs/Remover.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-remove/cjs/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-remove/cjs/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadExternalRemoveInteraction = void 0;\nconst Remover_1 = __webpack_require__(/*! ./Remover */ \"(ssr)/./node_modules/tsparticles-interaction-external-remove/cjs/Remover.js\");\nasync function loadExternalRemoveInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalRemove\", (container) => new Remover_1.Remover(container), refresh);\n}\nexports.loadExternalRemoveInteraction = loadExternalRemoveInteraction;\n__exportStar(__webpack_require__(/*! ./Options/Classes/Remove */ \"(ssr)/./node_modules/tsparticles-interaction-external-remove/cjs/Options/Classes/Remove.js\"), exports);\n__exportStar(__webpack_require__(/*! ./Options/Interfaces/IRemove */ \"(ssr)/./node_modules/tsparticles-interaction-external-remove/cjs/Options/Interfaces/IRemove.js\"), exports);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcmVtb3ZlL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQ0FBcUM7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsOEZBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyw0SEFBMEI7QUFDL0MsYUFBYSxtQkFBTyxDQUFDLG9JQUE4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLWV4dGVybmFsLXJlbW92ZS9janMvaW5kZXguanM/OTc4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2FkRXh0ZXJuYWxSZW1vdmVJbnRlcmFjdGlvbiA9IHZvaWQgMDtcbmNvbnN0IFJlbW92ZXJfMSA9IHJlcXVpcmUoXCIuL1JlbW92ZXJcIik7XG5hc3luYyBmdW5jdGlvbiBsb2FkRXh0ZXJuYWxSZW1vdmVJbnRlcmFjdGlvbihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZEludGVyYWN0b3IoXCJleHRlcm5hbFJlbW92ZVwiLCAoY29udGFpbmVyKSA9PiBuZXcgUmVtb3Zlcl8xLlJlbW92ZXIoY29udGFpbmVyKSwgcmVmcmVzaCk7XG59XG5leHBvcnRzLmxvYWRFeHRlcm5hbFJlbW92ZUludGVyYWN0aW9uID0gbG9hZEV4dGVybmFsUmVtb3ZlSW50ZXJhY3Rpb247XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vT3B0aW9ucy9DbGFzc2VzL1JlbW92ZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vT3B0aW9ucy9JbnRlcmZhY2VzL0lSZW1vdmVcIiksIGV4cG9ydHMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-remove/cjs/index.js\n");

/***/ })

};
;