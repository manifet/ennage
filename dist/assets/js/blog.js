/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 599:
/***/ (function() {

var header = document.querySelector(".header");
var headerHeight = header.offsetHeight;
window.addEventListener("scroll", function () {
  console.log(headerHeight);

  if (window.pageYOffset > 0) {
    document.body.style.paddingTop = "".concat(headerHeight, "px");
    header.classList.add("fixed");
  } else {
    document.body.style.paddingTop = 0;
    header.classList.remove("fixed");
  }
});

/***/ }),

/***/ 235:
/***/ (function() {

var header = document.querySelector('.header');
var body = document.body;
var hamburgerOpen = document.querySelector('.hamburger__open');
var hamburgerClose = document.querySelector('.hamburger__close');
var currentScroll;
hamburgerOpen.addEventListener('click', function (e) {
  e.preventDefault();
  currentScroll = pageYOffset;
  header.classList.add('open');
  body.classList.add('fixed');
});
hamburgerClose.addEventListener('click', function (e) {
  e.preventDefault();
  header.classList.remove('open');
  body.classList.remove('fixed');
  window.scrollTo(0, currentScroll);
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/* harmony import */ var SCRIPTS_DIR_pages_header_hamburger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(235);
/* harmony import */ var SCRIPTS_DIR_pages_header_hamburger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(SCRIPTS_DIR_pages_header_hamburger_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var SCRIPTS_DIR_pages_header_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(599);
/* harmony import */ var SCRIPTS_DIR_pages_header_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(SCRIPTS_DIR_pages_header_fixed_js__WEBPACK_IMPORTED_MODULE_1__);



}();
/******/ })()
;