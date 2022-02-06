/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/api/api.js":
/*!********************************!*\
  !*** ./src/scripts/api/api.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchRecipes\": () => (/* binding */ fetchRecipes)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// Fetch recipes data\nvar genericFetch = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {\n    var err,\n        method,\n        headers,\n        response,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            err = _args.length > 1 && _args[1] !== undefined ? _args[1] : '<p>Une erreur est survenue lors de la récupération des recettes. Veuillez réessayer plus tard.</p>';\n            method = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'GET';\n            headers = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};\n            _context.prev = 3;\n            _context.next = 6;\n            return fetch(url, {\n              method: method,\n              headers: headers\n            });\n\n          case 6:\n            response = _context.sent;\n            _context.next = 9;\n            return response.json();\n\n          case 9:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](3);\n            document.querySelector('.api-error').insertAdjacentHTML('beforeend', err);\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[3, 12]]);\n  }));\n\n  return function genericFetch(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar fetchRecipes = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(path) {\n    var recipesData;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return genericFetch(path);\n\n          case 2:\n            recipesData = _context2.sent;\n            return _context2.abrupt(\"return\", recipesData);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function fetchRecipes(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/api/api.js?");

/***/ }),

/***/ "./src/scripts/factories/recipesFactory.js":
/*!*************************************************!*\
  !*** ./src/scripts/factories/recipesFactory.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Recipes\": () => (/* binding */ Recipes)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Recipes = /*#__PURE__*/function () {\n  function Recipes(data) {\n    _classCallCheck(this, Recipes);\n\n    this.name = data.name;\n    this.ingredients = data.ingredients;\n    this.appliance = data.appliance;\n    this.ustensils = data.ustensils;\n  }\n\n  _createClass(Recipes, [{\n    key: \"createRecipeCard\",\n    value: function createRecipeCard() {\n      /* <article> ... Write structure here to improve readability </article> */\n      var article = document.createElement('article'); // PREVIEW PICTURE\n      // TODO : improve alt text.\n\n      var recipePicture = document.createElement('img');\n      recipePicture.setAttribute('src', 'assets/preview-recipe.jpg');\n      recipePicture.setAttribute('alt', \"Image de la recette\");\n      article.appendChild(recipePicture); // NAME\n\n      var recipeName = document.createElement('h2');\n      recipeName.textContent = this.name;\n      article.appendChild(recipeName); // INGREDIENTS\n      // TODO : check if quantity and unit is available before displaying.\n      // Create ingredient list\n\n      var _iterator = _createForOfIteratorHelper(this.ingredients),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var iterator = _step.value;\n          var recipeIngredients = document.createElement('p');\n          recipeIngredients.textContent = \"\".concat(iterator.ingredient, \" \").concat(iterator.quantity, \" \").concat(iterator.unit);\n          article.appendChild(recipeIngredients);\n        } // APPLIANCE\n\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      var recipeAppliance = document.createElement('p');\n      recipeAppliance.textContent = this.appliance;\n      article.appendChild(recipeAppliance); // USTENSILS\n\n      var recipeUstensils = document.createElement('p');\n      recipeUstensils.textContent = this.ustensils;\n      article.appendChild(recipeUstensils);\n      return article;\n    }\n  }]);\n\n  return Recipes;\n}();\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/factories/recipesFactory.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/api/api.js */ \"./src/scripts/api/api.js\");\n/* harmony import */ var _scripts_factories_recipesFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/factories/recipesFactory.js */ \"./src/scripts/factories/recipesFactory.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n // DOM elements\n\nvar mainResults = document.querySelector('.results'); // Display recipes card on page\n\nvar displayRecipes = function displayRecipes(recipe) {\n  recipe.forEach(function (element) {\n    var recipeModel = new _scripts_factories_recipesFactory_js__WEBPACK_IMPORTED_MODULE_1__.Recipes(element);\n    var recipeCard = recipeModel.createRecipeCard();\n    mainResults.append(recipeCard);\n  });\n}; // Initialize recipes page\n\n\nvar initRecipesPage = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var recipesData, recipesArray;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return (0,_scripts_api_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchRecipes)('src/data/recipesConverted.json');\n\n          case 2:\n            recipesData = _context.sent;\n            _context.next = 5;\n            return recipesData.recipes;\n\n          case 5:\n            recipesArray = _context.sent;\n            displayRecipes(recipesArray);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function initRecipesPage() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\ninitRecipesPage();\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;