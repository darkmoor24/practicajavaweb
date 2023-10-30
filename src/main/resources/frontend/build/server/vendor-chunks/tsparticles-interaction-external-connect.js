"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-connect";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-connect"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Connector.js":
/*!********************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-connect/cjs/Connector.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Connector = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nconst Connect_1 = __webpack_require__(/*! ./Options/Classes/Connect */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Classes/Connect.js\");\nconst Utils_1 = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Utils.js\");\nclass Connector extends tsparticles_engine_1.ExternalInteractorBase {\n    constructor(container) {\n        super(container);\n    }\n    clear() {\n    }\n    init() {\n        const container = this.container, connect = container.actualOptions.interactivity.modes.connect;\n        if (!connect) {\n            return;\n        }\n        container.retina.connectModeDistance = connect.distance * container.retina.pixelRatio;\n        container.retina.connectModeRadius = connect.radius * container.retina.pixelRatio;\n    }\n    async interact() {\n        const container = this.container, options = container.actualOptions;\n        if (options.interactivity.events.onHover.enable && container.interactivity.status === \"pointermove\") {\n            const mousePos = container.interactivity.mouse.position;\n            if (!container.retina.connectModeDistance ||\n                container.retina.connectModeDistance < 0 ||\n                !container.retina.connectModeRadius ||\n                container.retina.connectModeRadius < 0 ||\n                !mousePos) {\n                return;\n            }\n            const distance = Math.abs(container.retina.connectModeRadius), query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));\n            let i = 0;\n            for (const p1 of query) {\n                const pos1 = p1.getPosition();\n                for (const p2 of query.slice(i + 1)) {\n                    const pos2 = p2.getPosition(), distMax = Math.abs(container.retina.connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);\n                    if (xDiff < distMax && yDiff < distMax) {\n                        (0, Utils_1.drawConnection)(container, p1, p2);\n                    }\n                }\n                ++i;\n            }\n        }\n    }\n    isEnabled(particle) {\n        const container = this.container, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity).events;\n        if (!(events.onHover.enable && mouse.position)) {\n            return false;\n        }\n        return (0, tsparticles_engine_1.isInArray)(\"connect\", events.onHover.mode);\n    }\n    loadModeOptions(options, ...sources) {\n        if (!options.connect) {\n            options.connect = new Connect_1.Connect();\n        }\n        for (const source of sources) {\n            options.connect.load(source?.connect);\n        }\n    }\n    reset() {\n    }\n}\nexports.Connector = Connector;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9janMvQ29ubmVjdG9yLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQiw2QkFBNkIsbUJBQU8sQ0FBQyxnRkFBb0I7QUFDekQsa0JBQWtCLG1CQUFPLENBQUMsK0hBQTJCO0FBQ3JELGdCQUFnQixtQkFBTyxDQUFDLDJGQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLWV4dGVybmFsLWNvbm5lY3QvY2pzL0Nvbm5lY3Rvci5qcz9jNGU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db25uZWN0b3IgPSB2b2lkIDA7XG5jb25zdCB0c3BhcnRpY2xlc19lbmdpbmVfMSA9IHJlcXVpcmUoXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIik7XG5jb25zdCBDb25uZWN0XzEgPSByZXF1aXJlKFwiLi9PcHRpb25zL0NsYXNzZXMvQ29ubmVjdFwiKTtcbmNvbnN0IFV0aWxzXzEgPSByZXF1aXJlKFwiLi9VdGlsc1wiKTtcbmNsYXNzIENvbm5lY3RvciBleHRlbmRzIHRzcGFydGljbGVzX2VuZ2luZV8xLkV4dGVybmFsSW50ZXJhY3RvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsIGNvbm5lY3QgPSBjb250YWluZXIuYWN0dWFsT3B0aW9ucy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmNvbm5lY3Q7XG4gICAgICAgIGlmICghY29ubmVjdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5yZXRpbmEuY29ubmVjdE1vZGVEaXN0YW5jZSA9IGNvbm5lY3QuZGlzdGFuY2UgKiBjb250YWluZXIucmV0aW5hLnBpeGVsUmF0aW87XG4gICAgICAgIGNvbnRhaW5lci5yZXRpbmEuY29ubmVjdE1vZGVSYWRpdXMgPSBjb25uZWN0LnJhZGl1cyAqIGNvbnRhaW5lci5yZXRpbmEucGl4ZWxSYXRpbztcbiAgICB9XG4gICAgYXN5bmMgaW50ZXJhY3QoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLCBvcHRpb25zID0gY29udGFpbmVyLmFjdHVhbE9wdGlvbnM7XG4gICAgICAgIGlmIChvcHRpb25zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uSG92ZXIuZW5hYmxlICYmIGNvbnRhaW5lci5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PT0gXCJwb2ludGVybW92ZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBtb3VzZVBvcyA9IGNvbnRhaW5lci5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKCFjb250YWluZXIucmV0aW5hLmNvbm5lY3RNb2RlRGlzdGFuY2UgfHxcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmV0aW5hLmNvbm5lY3RNb2RlRGlzdGFuY2UgPCAwIHx8XG4gICAgICAgICAgICAgICAgIWNvbnRhaW5lci5yZXRpbmEuY29ubmVjdE1vZGVSYWRpdXMgfHxcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmV0aW5hLmNvbm5lY3RNb2RlUmFkaXVzIDwgMCB8fFxuICAgICAgICAgICAgICAgICFtb3VzZVBvcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMoY29udGFpbmVyLnJldGluYS5jb25uZWN0TW9kZVJhZGl1cyksIHF1ZXJ5ID0gY29udGFpbmVyLnBhcnRpY2xlcy5xdWFkVHJlZS5xdWVyeUNpcmNsZShtb3VzZVBvcywgZGlzdGFuY2UsIChwKSA9PiB0aGlzLmlzRW5hYmxlZChwKSk7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAxIG9mIHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zMSA9IHAxLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwMiBvZiBxdWVyeS5zbGljZShpICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zMiA9IHAyLmdldFBvc2l0aW9uKCksIGRpc3RNYXggPSBNYXRoLmFicyhjb250YWluZXIucmV0aW5hLmNvbm5lY3RNb2RlRGlzdGFuY2UpLCB4RGlmZiA9IE1hdGguYWJzKHBvczEueCAtIHBvczIueCksIHlEaWZmID0gTWF0aC5hYnMocG9zMS55IC0gcG9zMi55KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhEaWZmIDwgZGlzdE1heCAmJiB5RGlmZiA8IGRpc3RNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBVdGlsc18xLmRyYXdDb25uZWN0aW9uKShjb250YWluZXIsIHAxLCBwMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlzRW5hYmxlZChwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgbW91c2UgPSBjb250YWluZXIuaW50ZXJhY3Rpdml0eS5tb3VzZSwgZXZlbnRzID0gKHBhcnRpY2xlPy5pbnRlcmFjdGl2aXR5ID8/IGNvbnRhaW5lci5hY3R1YWxPcHRpb25zLmludGVyYWN0aXZpdHkpLmV2ZW50cztcbiAgICAgICAgaWYgKCEoZXZlbnRzLm9uSG92ZXIuZW5hYmxlICYmIG1vdXNlLnBvc2l0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuaXNJbkFycmF5KShcImNvbm5lY3RcIiwgZXZlbnRzLm9uSG92ZXIubW9kZSk7XG4gICAgfVxuICAgIGxvYWRNb2RlT3B0aW9ucyhvcHRpb25zLCAuLi5zb3VyY2VzKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5jb25uZWN0KSB7XG4gICAgICAgICAgICBvcHRpb25zLmNvbm5lY3QgPSBuZXcgQ29ubmVjdF8xLkNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICAgICAgICBvcHRpb25zLmNvbm5lY3QubG9hZChzb3VyY2U/LmNvbm5lY3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgIH1cbn1cbmV4cG9ydHMuQ29ubmVjdG9yID0gQ29ubmVjdG9yO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Connector.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Classes/Connect.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-connect/cjs/Options/Classes/Connect.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Connect = void 0;\nconst ConnectLinks_1 = __webpack_require__(/*! ./ConnectLinks */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Classes/ConnectLinks.js\");\nclass Connect {\n    constructor() {\n        this.distance = 80;\n        this.links = new ConnectLinks_1.ConnectLinks();\n        this.radius = 60;\n    }\n    get lineLinked() {\n        return this.links;\n    }\n    set lineLinked(value) {\n        this.links = value;\n    }\n    get line_linked() {\n        return this.links;\n    }\n    set line_linked(value) {\n        this.links = value;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.distance !== undefined) {\n            this.distance = data.distance;\n        }\n        this.links.load(data.links ?? data.lineLinked ?? data.line_linked);\n        if (data.radius !== undefined) {\n            this.radius = data.radius;\n        }\n    }\n}\nexports.Connect = Connect;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9janMvT3B0aW9ucy9DbGFzc2VzL0Nvbm5lY3QuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZUFBZTtBQUNmLHVCQUF1QixtQkFBTyxDQUFDLHlIQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1jb25uZWN0L2Nqcy9PcHRpb25zL0NsYXNzZXMvQ29ubmVjdC5qcz9iMzk4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db25uZWN0ID0gdm9pZCAwO1xuY29uc3QgQ29ubmVjdExpbmtzXzEgPSByZXF1aXJlKFwiLi9Db25uZWN0TGlua3NcIik7XG5jbGFzcyBDb25uZWN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDgwO1xuICAgICAgICB0aGlzLmxpbmtzID0gbmV3IENvbm5lY3RMaW5rc18xLkNvbm5lY3RMaW5rcygpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDYwO1xuICAgIH1cbiAgICBnZXQgbGluZUxpbmtlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlua3M7XG4gICAgfVxuICAgIHNldCBsaW5lTGlua2VkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubGlua3MgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGxpbmVfbGlua2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saW5rcztcbiAgICB9XG4gICAgc2V0IGxpbmVfbGlua2VkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubGlua3MgPSB2YWx1ZTtcbiAgICB9XG4gICAgbG9hZChkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmRpc3RhbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSBkYXRhLmRpc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlua3MubG9hZChkYXRhLmxpbmtzID8/IGRhdGEubGluZUxpbmtlZCA/PyBkYXRhLmxpbmVfbGlua2VkKTtcbiAgICAgICAgaWYgKGRhdGEucmFkaXVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gZGF0YS5yYWRpdXM7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkNvbm5lY3QgPSBDb25uZWN0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Classes/Connect.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Classes/ConnectLinks.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-connect/cjs/Options/Classes/ConnectLinks.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ConnectLinks = void 0;\nclass ConnectLinks {\n    constructor() {\n        this.opacity = 0.5;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.opacity !== undefined) {\n            this.opacity = data.opacity;\n        }\n    }\n}\nexports.ConnectLinks = ConnectLinks;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9janMvT3B0aW9ucy9DbGFzc2VzL0Nvbm5lY3RMaW5rcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1jb25uZWN0L2Nqcy9PcHRpb25zL0NsYXNzZXMvQ29ubmVjdExpbmtzLmpzPzRmYjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbm5lY3RMaW5rcyA9IHZvaWQgMDtcbmNsYXNzIENvbm5lY3RMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IDAuNTtcbiAgICB9XG4gICAgbG9hZChkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gZGF0YS5vcGFjaXR5O1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Db25uZWN0TGlua3MgPSBDb25uZWN0TGlua3M7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Classes/ConnectLinks.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Interfaces/IConnect.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-connect/cjs/Options/Interfaces/IConnect.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9janMvT3B0aW9ucy9JbnRlcmZhY2VzL0lDb25uZWN0LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9janMvT3B0aW9ucy9JbnRlcmZhY2VzL0lDb25uZWN0LmpzPzk5NDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Interfaces/IConnect.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Interfaces/IConnectLinks.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-connect/cjs/Options/Interfaces/IConnectLinks.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9janMvT3B0aW9ucy9JbnRlcmZhY2VzL0lDb25uZWN0TGlua3MuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1jb25uZWN0L2Nqcy9PcHRpb25zL0ludGVyZmFjZXMvSUNvbm5lY3RMaW5rcy5qcz9iYWNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Interfaces/IConnectLinks.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Utils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-connect/cjs/Utils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.drawConnection = exports.lineStyle = exports.drawConnectLine = exports.gradient = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nfunction gradient(context, p1, p2, opacity) {\n    const gradStop = Math.floor(p2.getRadius() / p1.getRadius()), color1 = p1.getFillColor(), color2 = p2.getFillColor();\n    if (!color1 || !color2) {\n        return;\n    }\n    const sourcePos = p1.getPosition(), destPos = p2.getPosition(), midRgb = (0, tsparticles_engine_1.colorMix)(color1, color2, p1.getRadius(), p2.getRadius()), grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);\n    grad.addColorStop(0, (0, tsparticles_engine_1.getStyleFromHsl)(color1, opacity));\n    grad.addColorStop(gradStop > 1 ? 1 : gradStop, (0, tsparticles_engine_1.getStyleFromRgb)(midRgb, opacity));\n    grad.addColorStop(1, (0, tsparticles_engine_1.getStyleFromHsl)(color2, opacity));\n    return grad;\n}\nexports.gradient = gradient;\nfunction drawConnectLine(context, width, lineStyle, begin, end) {\n    (0, tsparticles_engine_1.drawLine)(context, begin, end);\n    context.lineWidth = width;\n    context.strokeStyle = lineStyle;\n    context.stroke();\n}\nexports.drawConnectLine = drawConnectLine;\nfunction lineStyle(container, ctx, p1, p2) {\n    const options = container.actualOptions, connectOptions = options.interactivity.modes.connect;\n    if (!connectOptions) {\n        return;\n    }\n    return gradient(ctx, p1, p2, connectOptions.links.opacity);\n}\nexports.lineStyle = lineStyle;\nfunction drawConnection(container, p1, p2) {\n    container.canvas.draw((ctx) => {\n        const ls = lineStyle(container, ctx, p1, p2);\n        if (!ls) {\n            return;\n        }\n        const pos1 = p1.getPosition(), pos2 = p2.getPosition();\n        drawConnectLine(ctx, p1.retina.linksWidth ?? 0, ls, pos1, pos2);\n    });\n}\nexports.drawConnection = drawConnection;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9janMvVXRpbHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCLEdBQUcsaUJBQWlCLEdBQUcsdUJBQXVCLEdBQUcsZ0JBQWdCO0FBQ3ZGLDZCQUE2QixtQkFBTyxDQUFDLGdGQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0JBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9janMvVXRpbHMuanM/OTVlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZHJhd0Nvbm5lY3Rpb24gPSBleHBvcnRzLmxpbmVTdHlsZSA9IGV4cG9ydHMuZHJhd0Nvbm5lY3RMaW5lID0gZXhwb3J0cy5ncmFkaWVudCA9IHZvaWQgMDtcbmNvbnN0IHRzcGFydGljbGVzX2VuZ2luZV8xID0gcmVxdWlyZShcInRzcGFydGljbGVzLWVuZ2luZVwiKTtcbmZ1bmN0aW9uIGdyYWRpZW50KGNvbnRleHQsIHAxLCBwMiwgb3BhY2l0eSkge1xuICAgIGNvbnN0IGdyYWRTdG9wID0gTWF0aC5mbG9vcihwMi5nZXRSYWRpdXMoKSAvIHAxLmdldFJhZGl1cygpKSwgY29sb3IxID0gcDEuZ2V0RmlsbENvbG9yKCksIGNvbG9yMiA9IHAyLmdldEZpbGxDb2xvcigpO1xuICAgIGlmICghY29sb3IxIHx8ICFjb2xvcjIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzb3VyY2VQb3MgPSBwMS5nZXRQb3NpdGlvbigpLCBkZXN0UG9zID0gcDIuZ2V0UG9zaXRpb24oKSwgbWlkUmdiID0gKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmNvbG9yTWl4KShjb2xvcjEsIGNvbG9yMiwgcDEuZ2V0UmFkaXVzKCksIHAyLmdldFJhZGl1cygpKSwgZ3JhZCA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoc291cmNlUG9zLngsIHNvdXJjZVBvcy55LCBkZXN0UG9zLngsIGRlc3RQb3MueSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmdldFN0eWxlRnJvbUhzbCkoY29sb3IxLCBvcGFjaXR5KSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoZ3JhZFN0b3AgPiAxID8gMSA6IGdyYWRTdG9wLCAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0U3R5bGVGcm9tUmdiKShtaWRSZ2IsIG9wYWNpdHkpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0U3R5bGVGcm9tSHNsKShjb2xvcjIsIG9wYWNpdHkpKTtcbiAgICByZXR1cm4gZ3JhZDtcbn1cbmV4cG9ydHMuZ3JhZGllbnQgPSBncmFkaWVudDtcbmZ1bmN0aW9uIGRyYXdDb25uZWN0TGluZShjb250ZXh0LCB3aWR0aCwgbGluZVN0eWxlLCBiZWdpbiwgZW5kKSB7XG4gICAgKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmRyYXdMaW5lKShjb250ZXh0LCBiZWdpbiwgZW5kKTtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHdpZHRoO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBsaW5lU3R5bGU7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbn1cbmV4cG9ydHMuZHJhd0Nvbm5lY3RMaW5lID0gZHJhd0Nvbm5lY3RMaW5lO1xuZnVuY3Rpb24gbGluZVN0eWxlKGNvbnRhaW5lciwgY3R4LCBwMSwgcDIpIHtcbiAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLmFjdHVhbE9wdGlvbnMsIGNvbm5lY3RPcHRpb25zID0gb3B0aW9ucy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmNvbm5lY3Q7XG4gICAgaWYgKCFjb25uZWN0T3B0aW9ucykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBncmFkaWVudChjdHgsIHAxLCBwMiwgY29ubmVjdE9wdGlvbnMubGlua3Mub3BhY2l0eSk7XG59XG5leHBvcnRzLmxpbmVTdHlsZSA9IGxpbmVTdHlsZTtcbmZ1bmN0aW9uIGRyYXdDb25uZWN0aW9uKGNvbnRhaW5lciwgcDEsIHAyKSB7XG4gICAgY29udGFpbmVyLmNhbnZhcy5kcmF3KChjdHgpID0+IHtcbiAgICAgICAgY29uc3QgbHMgPSBsaW5lU3R5bGUoY29udGFpbmVyLCBjdHgsIHAxLCBwMik7XG4gICAgICAgIGlmICghbHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb3MxID0gcDEuZ2V0UG9zaXRpb24oKSwgcG9zMiA9IHAyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGRyYXdDb25uZWN0TGluZShjdHgsIHAxLnJldGluYS5saW5rc1dpZHRoID8/IDAsIGxzLCBwb3MxLCBwb3MyKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZHJhd0Nvbm5lY3Rpb24gPSBkcmF3Q29ubmVjdGlvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-connect/cjs/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadExternalConnectInteraction = void 0;\nconst Connector_1 = __webpack_require__(/*! ./Connector */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Connector.js\");\nasync function loadExternalConnectInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalConnect\", (container) => new Connector_1.Connector(container), refresh);\n}\nexports.loadExternalConnectInteraction = loadExternalConnectInteraction;\n__exportStar(__webpack_require__(/*! ./Options/Classes/Connect */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Classes/Connect.js\"), exports);\n__exportStar(__webpack_require__(/*! ./Options/Classes/ConnectLinks */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Classes/ConnectLinks.js\"), exports);\n__exportStar(__webpack_require__(/*! ./Options/Interfaces/IConnect */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Interfaces/IConnect.js\"), exports);\n__exportStar(__webpack_require__(/*! ./Options/Interfaces/IConnectLinks */ \"(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/Options/Interfaces/IConnectLinks.js\"), exports);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9janMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0NBQXNDO0FBQ3RDLG9CQUFvQixtQkFBTyxDQUFDLG1HQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxhQUFhLG1CQUFPLENBQUMsK0hBQTJCO0FBQ2hELGFBQWEsbUJBQU8sQ0FBQyx5SUFBZ0M7QUFDckQsYUFBYSxtQkFBTyxDQUFDLHVJQUErQjtBQUNwRCxhQUFhLG1CQUFPLENBQUMsaUpBQW9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtY29ubmVjdC9janMvaW5kZXguanM/YTIzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2FkRXh0ZXJuYWxDb25uZWN0SW50ZXJhY3Rpb24gPSB2b2lkIDA7XG5jb25zdCBDb25uZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Nvbm5lY3RvclwiKTtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRFeHRlcm5hbENvbm5lY3RJbnRlcmFjdGlvbihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZEludGVyYWN0b3IoXCJleHRlcm5hbENvbm5lY3RcIiwgKGNvbnRhaW5lcikgPT4gbmV3IENvbm5lY3Rvcl8xLkNvbm5lY3Rvcihjb250YWluZXIpLCByZWZyZXNoKTtcbn1cbmV4cG9ydHMubG9hZEV4dGVybmFsQ29ubmVjdEludGVyYWN0aW9uID0gbG9hZEV4dGVybmFsQ29ubmVjdEludGVyYWN0aW9uO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL09wdGlvbnMvQ2xhc3Nlcy9Db25uZWN0XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9PcHRpb25zL0NsYXNzZXMvQ29ubmVjdExpbmtzXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9PcHRpb25zL0ludGVyZmFjZXMvSUNvbm5lY3RcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL09wdGlvbnMvSW50ZXJmYWNlcy9JQ29ubmVjdExpbmtzXCIpLCBleHBvcnRzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-connect/cjs/index.js\n");

/***/ })

};
;