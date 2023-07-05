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

/***/ "./app/js/validate-user.js":
/*!*********************************!*\
  !*** ./app/js/validate-user.js ***!
  \*********************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  const nameInput = document.getElementById('name-input');\n  const submitButton = document.getElementById('submit-btn');\n  const errorText = document.getElementById('error-text');\n\n  // Load name from localStorage if available\n  const savedName = localStorage.getItem('username');\n  if (savedName) {\n    nameInput.value = savedName;\n  }\n  submitButton.addEventListener('click', validateAndSubmit);\n  nameInput.addEventListener('keydown', function (event) {\n    if (event.key === 'Enter') {\n      validateAndSubmit();\n      event.preventDefault();\n    }\n  });\n  function validateAndSubmit() {\n    const name = nameInput.value.trim();\n    if (name === '') {\n      showError('Please enter a name.'); // Show error if name is empty\n    } else if (!validateName(name)) {\n      showError('Invalid name. Only letters, numbers, and spaces are allowed.'); // Show error for invalid name\n    } else {\n      hideError();\n      // Save name to localStorage\n      localStorage.setItem('username', name);\n      console.log(name);\n    }\n  }\n  function validateName(name) {\n    const regex = /^[a-zA-Z0-9\\s]+$/;\n    return regex.test(name);\n  }\n  function showError(errorMessage) {\n    errorText.textContent = errorMessage;\n    errorText.style.display = 'block';\n  }\n  function hideError() {\n    errorText.style.display = 'none';\n  }\n});\n\n//# sourceURL=webpack://battleship/./app/js/validate-user.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/js/validate-user.js"]();
/******/ 	
/******/ })()
;