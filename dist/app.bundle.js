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

/***/ "./src/scripts/components/dropdownFilters.js":
/*!***************************************************!*\
  !*** ./src/scripts/components/dropdownFilters.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enableDropdown\": () => (/* binding */ enableDropdown),\n/* harmony export */   \"enableSelectFilter\": () => (/* binding */ enableSelectFilter)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// TODO: try to open dropdown with label instead of span\nvar dropdownTriggers = document.querySelectorAll('.dropdown-trigger');\nvar textFields = document.querySelectorAll('.text-field'); // Open / close functions\n\nvar openDropdown = function openDropdown(element, placeholder) {\n  var currentList = document.querySelector(\".\".concat(element, \"__list\"));\n  var currentTextField = document.querySelector(\".\".concat(element, \"__text-field\"));\n  var currentTrigger = document.querySelector(\".\".concat(element, \"__dropdown-trigger\"));\n  var currentLabel = document.querySelector(\".\".concat(element, \"__label\"));\n  currentList.classList.add('show');\n  currentTextField.classList.add('show');\n  currentTextField.setAttribute('placeholder', placeholder);\n  currentTrigger.classList.add('hide');\n  currentLabel.classList.add(\"\".concat(element, \"__label_expanded\"));\n  currentTextField.focus();\n};\n\nvar closeDropdown = function closeDropdown(element) {\n  var currentList = document.querySelector(\".\".concat(element, \"__list\"));\n  var currentTextField = document.querySelector(\".\".concat(element, \"__text-field\"));\n  var currentTrigger = document.querySelector(\".\".concat(element, \"__dropdown-trigger\"));\n  var currentLabel = document.querySelector(\".\".concat(element, \"__label\"));\n  currentList.classList.remove('show');\n  currentTextField.classList.remove('show');\n  currentTextField.value = '';\n  currentLabel.classList.remove(\"\".concat(element, \"__label_expanded\"));\n  currentTrigger.classList.remove('hide');\n}; // Enable dropdown\n\n\nvar enableDropdown = function enableDropdown() {\n  // Open dropdown\n  var _iterator = _createForOfIteratorHelper(dropdownTriggers),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var iterator = _step.value;\n      iterator.addEventListener('mousedown', function (e) {\n        e.preventDefault();\n\n        switch (e.target.className) {\n          case 'ingredients__dropdown-trigger dropdown-trigger':\n            openDropdown('ingredients', 'Rechercher un ingrédient');\n            break;\n\n          case 'appliance__dropdown-trigger dropdown-trigger':\n            openDropdown('appliance', 'Rechercher un appareil');\n            break;\n\n          case 'ustensils__dropdown-trigger dropdown-trigger':\n            openDropdown('ustensils', 'Rechercher un ustensile');\n            break;\n\n          default:\n            break;\n        }\n      });\n    } // Close dropdown\n\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var _iterator2 = _createForOfIteratorHelper(textFields),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var _iterator3 = _step2.value;\n\n      _iterator3.addEventListener('blur', function (e) {\n        switch (e.target.className) {\n          case 'ingredients__text-field text-field show':\n            closeDropdown('ingredients');\n            break;\n\n          case 'appliance__text-field text-field show':\n            closeDropdown('appliance');\n            break;\n\n          case 'ustensils__text-field text-field show':\n            closeDropdown('ustensils');\n            break;\n\n          default:\n            break;\n        }\n      });\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n};\nvar enableSelectFilter = function enableSelectFilter() {\n  var dropdownOptions = document.querySelectorAll('.search-options li');\n\n  var _iterator4 = _createForOfIteratorHelper(dropdownOptions),\n      _step3;\n\n  try {\n    for (_iterator4.s(); !(_step3 = _iterator4.n()).done;) {\n      var iterator = _step3.value;\n      iterator.addEventListener('click', function () {\n        console.log(\"L'option X a été sélectionnée\");\n      });\n    }\n  } catch (err) {\n    _iterator4.e(err);\n  } finally {\n    _iterator4.f();\n  }\n};\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/components/dropdownFilters.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_dropdownFilters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dropdownFilters.js */ \"./src/scripts/components/dropdownFilters.js\");\n// import { recipes } from '../data/recipes.js';\n// import { Recipe } from './classes/Recipe.js';\n// import { FilterList } from './classes/FilterList.js';\n // DOM elements\n// const mainResults = document.querySelector('.results');\n// Display recipes card on page\n// const displayRecipes = (recipe) => {\n//     recipe.forEach((element) => {\n//         let recipeModel = new Recipe(element);\n//         const recipeCard = recipeModel.createRecipeCard();\n//         mainResults.append(recipeCard);\n//     });\n// };\n// Display filter options lists\n// const displayFilterLists = (recipes) => {\n//     recipes.forEach((element) => {\n//         let recipeModel = new FilterList(element);\n//         const listOptionIngredients =\n//             recipeModel.createFilterList('ingredients');\n//         const listOptionAppliance = recipeModel.createFilterList('appliance');\n//         const listOptionUstensils = recipeModel.createFilterList('ustensils');\n//     });\n// };\n// Initialize recipes page\n\nvar initRecipesPage = function initRecipesPage() {\n  // displayRecipes(recipes);\n  //displayFilterLists(recipes);\n  (0,_components_dropdownFilters_js__WEBPACK_IMPORTED_MODULE_0__.enableDropdown)(); //enableSelectFilter();\n};\n\ninitRecipesPage();\n\n//# sourceURL=webpack://les-petits-plats/./src/scripts/index.js?");

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