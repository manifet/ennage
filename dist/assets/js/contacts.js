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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./src/js/pages/header.hamburger.js
var header_hamburger = __webpack_require__(235);
// EXTERNAL MODULE: ./src/js/pages/header.fixed.js
var header_fixed = __webpack_require__(599);
;// CONCATENATED MODULE: ./src/js/utils.js
function validateForm(fields) {
  var valid = true;
  fields.forEach(function (item) {
    if (!validateField(item)) {
      valid = false;
      item.setAttribute("data-validate", "invalid");
    }
  });
  return valid;
}
function validateField(field) {
  var regexp;
  var regexpEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

  switch (field.getAttribute("name")) {
    case "email":
      regexp = regexpEmail;
      break;

    default:
      regexp = /^(?!\s*$).+/;
      break;
  }

  var regexpValid = regexp.test(field.value);

  if (field.value === "") {
    field.setAttribute("data-validate", "");
  } else {
    field.setAttribute("data-validate", "".concat(regexpValid));
  }

  return regexpValid;
}
;// CONCATENATED MODULE: ./src/js/pages/form.validate.js

var callbackForm = document.querySelector('.callback__form');
var callbackFields = document.querySelectorAll('.callback__input');
callbackFields.forEach(function (item) {
  item.addEventListener('input', function () {
    validateField(item);
  });
});
callbackForm.addEventListener('submit', function (e) {
  e.preventDefault();
  validateForm(callbackFields);
});
;// CONCATENATED MODULE: ./src/entry_points/contacts.js




}();
/******/ })()
;