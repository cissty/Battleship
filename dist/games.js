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

/***/ "./app/js/game.js":
/*!************************!*\
  !*** ./app/js/game.js ***!
  \************************/
/***/ (() => {

eval("const grid = document.getElementById('grid-box');\nconst storedUserName = localStorage.getItem('username');\nconst greet = document.querySelector('h2');\nconst userName = firstLetterUpper(storedUserName);\nconst footer = document.querySelector('footer');\nconst title = document.getElementById('title');\nconst readyBut = document.getElementById('ready-button');\ngreet.textContent = `Hello ${userName}`;\nfor (let i = 0; i < 10; i++) {\n  for (let j = 0; j < 10; j++) {\n    const element = document.createElement('div');\n    grid.appendChild(element);\n  }\n}\nfunction firstLetterUpper(string) {\n  const store = string.split('');\n  const firstChar = store[0].toUpperCase();\n  store[0] = firstChar;\n  return store.join('');\n}\nfooter.setAttribute('style', 'filter: blur(2px)');\ntitle.setAttribute('style', 'filter: blur(2px)');\nfunction startGame() {\n  footer.setAttribute('style', 'filter: blur(0px)');\n  title.setAttribute('style', 'filter: blur(0px)');\n}\nreadyBut.addEventListener('click', startGame);\n//ready button will throw error if ships not placed\n\n//# sourceURL=webpack://battleship/./app/js/game.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/js/game.js"]();
/******/ 	
/******/ })()
;