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

/***/ "./app/js sync recursive ^\\.\\/languages.*\\.json$":
/*!**********************************************!*\
  !*** ./app/js/ sync ^\.\/languages.*\.json$ ***!
  \**********************************************/
/***/ ((module) => {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = () => ([]);\nwebpackEmptyContext.resolve = webpackEmptyContext;\nwebpackEmptyContext.id = \"./app/js sync recursive ^\\\\.\\\\/languages.*\\\\.json$\";\nmodule.exports = webpackEmptyContext;\n\n//# sourceURL=webpack://battleship/./app/js/_sync_^\\.\\/languages.*\\.json$?");

/***/ }),

/***/ "./app/js/translate.js":
/*!*****************************!*\
  !*** ./app/js/translate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// Translation function\nfunction translate(languageKey, translationKey) {\n  const language = __webpack_require__(\"./app/js sync recursive ^\\\\.\\\\/languages.*\\\\.json$\")(`./languages${languageKey}.json`);\n  return language[translationKey] || translationKey; // Return the translated text or the translation key itself if not found\n}\n\n// Example usage\nconst languageKey = 'en'; // Default language\nlet selectedLanguage = languageKey; // Store the selected language\n\n// Function to update the content based on the selected language\nfunction updateContent() {\n  const translations = {\n    // Language files with translations\n    en: __webpack_require__(/*! ../../../languages/en.json */ \"./languages/en.json\"),\n    tr: __webpack_require__(/*! ../../../languages/tr.json */ \"./languages/tr.json\")\n    // Add more languages as needed\n  };\n\n  // Get the language file based on the selected language\n  const language = translations[selectedLanguage];\n\n  // Update content using translation function\n  const titleElement = document.getElementById('title');\n  const gameObjectiveElement = document.getElementById('t-1');\n  if (titleElement) {\n    titleElement.textContent = translate(languageKey, 'title');\n  }\n  if (gameObjectiveElement) {\n    gameObjectiveElement.textContent = translate(languageKey, 't-1');\n  }\n\n  // Update other content elements as needed\n}\n\n// Function to handle language change\nfunction changeLanguage(language) {\n  selectedLanguage = language;\n  updateContent();\n}\n\n// Set up event listeners for language buttons\nconst turkishBtn = document.getElementById('turkishBtn');\nconst englishBtn = document.getElementById('englishBtn');\nturkishBtn.addEventListener('click', () => {\n  changeLanguage('tr');\n});\nenglishBtn.addEventListener('click', () => {\n  changeLanguage('en');\n});\n\n// Initial content update\nupdateContent();\n\n//# sourceURL=webpack://battleship/./app/js/translate.js?");

/***/ }),

/***/ "./languages/en.json":
/*!***************************!*\
  !*** ./languages/en.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"Battle Ship\",\"t-1\":\"Game Objective\",\"l-1\":\"The object of Battleship is to try and sink all of the other player\\'s before they sink all of your ships.\",\"l-2\":\"Other player\\'s ships are somewhere on the board.\",\"l-3\":\"You try and hit them by calling out the coordinates of one of the squares on the board.\",\"l-4\":\"The other player also tries to hit your ships by calling out coordinates.\",\"l-5\":\"Neither you nor the other player can see the other\\'s board so you must try to guess where they are.\",\"t-2\":\"Starting a New Game\",\"l2-1\":\"Each player places the 5 ships somewhere on their board.\",\"l2-2\":\"The ships can only be placed vertically or horizontally. Diagonal placement is not allowed.\",\"l2-3\":\"No ships may be placed on another ship.\",\"l2-4\":\"h4:The 5 ships are:\",\"l3-1\":\"Carrier (occupies 5 spaces)\",\"l3-2\":\"Battleship (4)\",\"l3-3\":\"Cruiser (3)\",\"l3-4\":\"Submarine (3)\",\"l3-5\":\"Destroyer (2)\",\"t-3\":\"Playing the Game\",\"l4-1\":\"Player\\'s take turns guessing by calling out the coordinates.\",\"l4-2\":\"The opponent responds with \\'hit\\' or \\'miss\\' as appropriate.\",\"l4-3\":\"When all of the squares that one your ships occupies have been hit, the ship will be sunk.\",\"l4-4\":\"As soon as all of one player\\'s ships have been sunk, the game ends.\",\"get-started\":\"Let\\'s Get Started\",\"submit\":\"Submit\",\"Copyright\":\"Copyright © 2023 Cissty\"}');\n\n//# sourceURL=webpack://battleship/./languages/en.json?");

/***/ }),

/***/ "./languages/tr.json":
/*!***************************!*\
  !*** ./languages/tr.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"Savaş Gemisi\",\"t-1\":\"Oyun Hedefi\",\"l-1\":\"Battleship oyununun amacı, diğer oyuncunun tüm gemilerini batırmadan önce kendi gemilerinizin hepsini batırmaktır.\",\"l-2\":\"Diğer oyuncunun gemileri tahtanın bir yerinde bulunmaktadır.\",\"l-3\":\"Tahtadaki karelerin koordinatlarını çağırarak onlara isabet ettirmeye çalışırsınız.\",\"l-4\":\"Diğer oyuncu da koordinatları çağırarak sizin gemilerinizi vurmaya çalışır.\",\"l-5\":\"Siz veya diğer oyuncu birbirinizin tahtasını göremediğiniz için nerede olduklarını tahmin etmeye çalışmanız gerekir.\",\"t-2\":\"Yeni Bir Oyun Başlatma\",\"l2-1\":\"Her oyuncu 5 gemiyi tahtalarının bir yerine yerleştirir.\",\"l2-2\":\"Gemiler sadece dikey veya yatay olarak yerleştirilebilir. Çapraz yerleştirme mümkün değildir.\",\"l2-3\":\"Başka bir geminin üzerine gemi yerleştirilemez.\",\"l2-4\":\"h4:5 gemi şunlardır:\",\"l3-1\":\"Carrier (5 kare kaplar)\",\"l3-2\":\"Battleship (4)\",\"l3-3\":\"Cruiser (3)\",\"l3-4\":\"Submarine (3)\",\"l3-5\":\"Destroyer (2)\",\"t-3\":\"Oyunu Oynama\",\"l4-1\":\"Oyuncular, koordinatları çağırarak sırayla tahminde bulunur.\",\"l4-2\":\"Rakip, \\'isabet\\' veya \\'ışın\\' şeklinde uygun şekilde yanıt verir.\",\"l4-3\":\"Bir geminin kapladığı karelerin tamamı vurulduğunda gemi batırılır.\",\"l4-4\":\"Bir oyuncunun tüm gemileri batırıldığında oyun biter.\",\"get-started\":\"Hadi Başlayalım\",\"submit\":\"Gönder\",\"Copyright\":\"Telif Hakkı © 2023 Cissty\"}');\n\n//# sourceURL=webpack://battleship/./languages/tr.json?");

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/js/translate.js");
/******/ 	
/******/ })()
;