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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n// Import our custom CSS\n\n\n// Importe our custom js\n \n\n\n// ####### ROUTER ########\n// #######################\n\nconst callRoute = () => {\n    const { hash } = window.location;\n    const pathParts = hash.substring(1).split('/');\n  \n    const pageName = pathParts[0];\n    const pageArgument = pathParts[1] || '';\n    const pageFunction = _routes__WEBPACK_IMPORTED_MODULE_1__.routes[pageName];\n  \n    if (pageFunction !== undefined) {\n      pageFunction(pageArgument);\n    }\n  };\n  \n  window.addEventListener('hashchange', () => callRoute());\n  window.addEventListener('DOMContentLoaded', () => callRoute());\n\n\n\n\n\n//# sourceURL=webpack://webpack_starter/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageList: () => (/* binding */ PageList)\n/* harmony export */ });\nconst PageList = (argument = '', quantity = 9) => {\n  const articleQuantity = quantity\n\n  const preparePage = () => {\n    const cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n    const API_KEY = \"7f052a404021482ca44e2012ad28545d\"\n\n    const displayResults = (articles) => {\n      const resultsContent = articles.map((article) => (\n        `<article class=\"cardGame\">\n          <div class=\"cardGame__imgBlock\">\n            <div class=\"imgBlock__img\">\n              <img src=\"${article.background_image}\" alt=\"game image\">\n            </div>\n            <div class=\"imgBlock__info\">\n              <p>${article.released}</p>\n              <p>Editeur : ?????</p>\n              <p>${article.rating}/5 - ${article.ratings_count} votes</p>\n              <p class=\"info__genre\">${article.genres.map(genre => genre.name).join(', ')}\n            </div>\n          </div>\n          <a href=\"#pagedetail/${article.id}\"><h3>${article.name}</h3></a>\n          <div class=\"cardGame__platform\">${buildPlatforms(article.parent_platforms.map(e => e.platform.slug))}</div>\n        </article>`\n      ));\n      const resultsContainer = document.querySelector('.page-list .articles');\n      resultsContainer.innerHTML = resultsContent.join(\"\\n\");\n\n      // Check number of articles to display or not \"Show more\" button\n      const articleCount = document.querySelectorAll('.cardGame').length\n      console.log(`articleCount = ${articleCount}`)\n      if (articleCount !== 9 && articleCount !== 18)\n        document.getElementById('showMoreBtn').style.display = \"none\"\n      else\n        document.getElementById('showMoreBtn').style.display = \"flex\"\n    };\n\n    const fetchList = (url, argument, quantity) => {\n      let finalURL = argument ? `${url}&search=${argument}` : `${url}&dates=2024-01-01,2026-12-31`;\n      finalURL = quantity ? `${finalURL}&page_size=${quantity}` : `${finalURL}&page_size=9`\n      console.log(finalURL)\n      fetch(finalURL)\n        .then((response) => response.json())\n        .then((responseData) => {\n          displayResults(responseData.results)\n        });\n    };\n\n    fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument, articleQuantity);\n    // https://api.rawg.io/api/games?dates=2024-01-01,2026-12-31&key=7f052a404021482ca44e2012ad28545d&&page_size=9&search=zelda\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n      <section class=\"page-list\">\n        <div class=\"articles\">Loading...</div>\n      </section>\n    `;\n\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n\n// Set svg icones\nconst buildPlatforms = (platformsArray) => {\n  let svgs = []\n  platformsArray.forEach((element) => {\n    if (element === \"playstation\")\n      svgs.push(`<img src='src/assets/images/ps4.svg' alt='ps4 logo'>`)\n\n    if (element === \"xbox\")\n      svgs.push(`<img src='src/assets/images/xbox.svg' alt='xbox logo'>`)\n\n    if (element === \"pc\")\n      svgs.push(`<img src='src/assets/images/windows.svg' alt='windows logo'>`)\n\n    if (element === \"nintendo\")\n      svgs.push(`<img src='src/assets/images/switch.svg' alt='switch logo'>`)\n\n    if (element === \"mac\")\n      svgs.push(`<img src='src/assets/images/linux.svg' alt='linux logo'>`)\n\n    if (element === \"android\" || element === \"ios\")\n      svgs.push(`<img src='src/assets/images/mobile.svg' alt='mobile logo'>`)\n\n    return \"\"\n  })\n  return svgs.join(\"\")\n}\n\n// ######## FORM #########\n// #######################\n\n// Form constantes\nconst myFormBtn = document.getElementById(\"researchBox__searchBtn\");\nconst research = document.getElementById(\"researchBlock__research\");\n\n// Form submit listener : \nif (research.value !== null) {\n  // On click\n  myFormBtn.addEventListener('click', function() {\n    PageList(research.value);\n  });\n\n  // On \"enter\" key pressed\n  research.addEventListener('keydown', function (event) {\n    if (event.key === 'Enter') {\n      event.preventDefault();\n      PageList(research.value)\n    }\n  })\n}\n\n// ###### SHOW MORE ######\n// #######################\n\n// Constante\nconst showMore = document.getElementById('showMoreBtn')\n\n// Listener\nshowMore.addEventListener('click', function () {\n  const articleCount = document.querySelectorAll('.cardGame').length\n  if (articleCount === 9)\n    PageList(undefined, 18)\n  \n  if (articleCount === 18)\n    PageList(undefined, 27)\n})\n\n\n//# sourceURL=webpack://webpack_starter/./src/js/PageList.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   routes: () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _js_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Home */ \"./src/js/Home.js\");\n/* harmony import */ var _js_PageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _js_PageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/PageDetail */ \"./src/js/PageDetail.js\");\n// Import our js\n \n \n \n\nconst routes = {\n    '': _js_PageList__WEBPACK_IMPORTED_MODULE_1__.PageList,\n    'pagelist': _js_PageList__WEBPACK_IMPORTED_MODULE_1__.PageList,\n    'pagedetail': _js_PageDetail__WEBPACK_IMPORTED_MODULE_2__.PageDetail,\n  };\n\n\n  \n\n//# sourceURL=webpack://webpack_starter/./src/routes.js?");

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