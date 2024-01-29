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

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_starter/./src/style/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n// Import our custom CSS\n\n\n// Importe our custom js\n \n\n\nconst callRoute = () => {\n    const { hash } = window.location;\n    const pathParts = hash.substring(1).split('/');\n  \n    const pageName = pathParts[0];\n    const pageArgument = pathParts[1] || '';\n    const pageFunction = _routes__WEBPACK_IMPORTED_MODULE_1__.routes[pageName];\n  \n    if (pageFunction !== undefined) {\n      pageFunction(pageArgument);\n    }\n  };\n  \n  window.addEventListener('hashchange', () => callRoute());\n  window.addEventListener('DOMContentLoaded', () => callRoute());\n\n\n\n\n//# sourceURL=webpack://webpack_starter/./src/index.js?");

/***/ }),

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\nconst Home = (argument = '') => {\n    console.log('Home', argument);\n  };\n\n  \n\n//# sourceURL=webpack://webpack_starter/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageDetail: () => (/* binding */ PageDetail)\n/* harmony export */ });\nconst PageDetail = (argument) => {\n  const preparePage = () => {\n    const cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    const API_KEY = \"7f052a404021482ca44e2012ad28545d\"\n\n    const displayGame = (gameData) => {\n      const { name, released, description } = gameData;\n      const articleDOM = document.querySelector(\".page-detail .article\");\n      articleDOM.querySelector(\"h1.title\").innerHTML = name;\n      articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n      articleDOM.querySelector(\"p.description\").innerHTML = description;\n    };\n\n    const fetchGame = (url, argument) => {\n      fetch(`${url}/${argument}?key=${API_KEY}`)\n        .then((response) => response.json())\n        .then((responseData) => {\n          displayGame(responseData);\n        });\n    };\n\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n      <section class=\"page-detail\">\n        <div class=\"article\">\n          <h1 class=\"title\"></h1>\n          <p class=\"release-date\">Release date : <span></span></p>\n          <p class=\"description\"></p>\n        </div>\n      </section>\n    `;\n\n    preparePage();\n  };\n\n  render();\n};\n\n  \n\n//# sourceURL=webpack://webpack_starter/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageList: () => (/* binding */ PageList)\n/* harmony export */ });\nconst PageList = (argument = '') => {\n  const preparePage = () => {\n    const cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n    const API_KEY = \"7f052a404021482ca44e2012ad28545d\"\n\n    const displayResults = (articles) => {\n      const resultsContent = articles.map((article) => (\n        `<article class=\"cardGame\">\n          <div class=\"cardGame__imgBlock\">\n            <div class=\"imgBlock__img\">\n              <img src=\"${article.background_image}\" alt=\"game image\">\n            </div>\n            <div class=\"imgBlock__info\">\n              <p>${article.released}</p>\n              <p>Editeur : </p>\n            </div>\n          </div>\n          <a href=\"#pagedetail/${article.id}\"><h3>${article.name}</h3></a>\n        </article>`\n      ));\n      const resultsContainer = document.querySelector('.page-list .articles');\n      resultsContainer.innerHTML = resultsContent.join(\"\\n\");\n    };\n\n    const fetchList = (url, argument) => {\n      const finalURL = argument ? `${url}&search=${argument}` : url;\n      fetch(finalURL)\n        .then((response) => response.json())\n        .then((responseData) => {\n          displayResults(responseData.results)\n        });\n    };\n\n    fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);\n    // https://api.rawg.io/api/games?key=7f052a404021482ca44e2012ad28545d\n  };\n\n  const addHoverEffect = () => {\n    const imgBlocks = document.querySelectorAll('.imgBlock__img');\n\n    imgBlocks.forEach((imgBlock) => {\n      imgBlock.addEventListener('mouseenter', () => {\n        console.log('HELLO')\n        imgBlock.classList.add('hovered');\n      });\n\n      imgBlock.addEventListener('mouseleave', () => {\n        imgBlock.classList.remove('hovered');\n      });\n    });\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n      <section class=\"page-list\">\n        <div class=\"articles\">Loading...</div>\n      </section>\n    `;\n\n    preparePage();\n    addHoverEffect();\n  };\n\n  render();\n};\n\n  \n\n//# sourceURL=webpack://webpack_starter/./src/js/PageList.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   routes: () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _js_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Home */ \"./src/js/Home.js\");\n/* harmony import */ var _js_PageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _js_PageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/PageDetail */ \"./src/js/PageDetail.js\");\n// Import our js\n \n \n \n\nconst routes = {\n    '': _js_Home__WEBPACK_IMPORTED_MODULE_0__.Home,\n    'pagelist': _js_PageList__WEBPACK_IMPORTED_MODULE_1__.PageList,\n    'pagedetail': _js_PageDetail__WEBPACK_IMPORTED_MODULE_2__.PageDetail,\n  };\n\n\n  \n\n//# sourceURL=webpack://webpack_starter/./src/routes.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;