/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/***/ ((module) => {

eval("class View {\n  constructor(game, $el) {}\n\n  bindEvents() {}\n\n  makeMove($square) {}\n\n  setupBoard() {\n    \n  }\n}\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./src/ttt-view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const View = __webpack_require__(/*! ./ttt-view */ \"./src/ttt-view.js\")// require appropriate file\nconst Game = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../solution_2/game.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))// require appropriate file\n\n  $(() => {\n    // Your code here\n    const game = new Game();\n    const view = $('.ttt');\n    new View(game, view);\n  });\n\n  // Complete the require statements in src/index.js to require ttt-view and the game as dependencies. When webpack processes index.js (the entry file), it will include all required files within main.js (the output file).\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;