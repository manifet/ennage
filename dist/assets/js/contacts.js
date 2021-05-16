/******/ (function() { // webpackBootstrap
/******/ 	"use strict";

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


/******/ })()
;