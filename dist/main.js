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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* @font-face {\\r\\n    src: url(../fonts/FredokaOne-Regular.ttf);\\r\\n    font-family: frd;\\r\\n} */\\r\\nbody {\\r\\n    background-color: gray;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\nh1 {\\r\\n    padding-top: 50px;\\r\\n    text-align: center;\\r\\n    font-size: 60px;\\r\\n}\\r\\nh2 {\\r\\n    text-align: center;\\r\\n    padding-left: 50px;\\r\\n    padding-right: 50px;\\r\\n}\\r\\n.board-container {\\r\\n    width: 80%;\\r\\n    max-width: 650px;\\r\\n    height: 0;\\r\\n    padding-bottom: 30%; /* this creates a 1:1 aspect ratio */\\r\\n    margin: auto;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n}\\r\\n.player {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(10, 1fr);\\r\\n    grid-template-rows: repeat(10, 1fr);\\r\\n    gap: 1px;\\r\\n}\\r\\n.computer {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(10, 1fr);\\r\\n    grid-template-rows: repeat(10, 1fr);\\r\\n    gap: 1px;\\r\\n}\\r\\n#player-board-container {\\r\\n    margin-right: 5px;\\r\\n}\\r\\n#computer-board-container {\\r\\n    margin-left: 5px;\\r\\n}\\r\\n.square {\\r\\n    width: 30px;\\r\\n    height: 30px;\\r\\n    border: 1px solid black;\\r\\n    padding: 0;\\r\\n    background-color: white;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.red {\\r\\n    background-color: red;\\r\\n}\\r\\n.orange {\\r\\n    background-color: orange;\\r\\n}\\r\\n.yellow {\\r\\n    background-color: yellow;\\r\\n}\\r\\n.blue {\\r\\n    background-color: blue;\\r\\n}\\r\\n.black {\\r\\n    background-color: black;\\r\\n}\\r\\n.interface {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n.placement {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding-top: 20px;\\r\\n}\\r\\n#event-button {\\r\\n    font-size: 60px;\\r\\n    text-align: center;\\r\\n    margin-bottom: 20px;\\r\\n    margin-top: 200px;\\r\\n}\\r\\n#toggle-button {\\r\\n    background-color: #d9534f;\\r\\n    border: none;\\r\\n    color: #fff;\\r\\n    padding: 10px 20px;\\r\\n    border-radius: 20px;\\r\\n    text-transform: uppercase;\\r\\n    letter-spacing: 2px;\\r\\n    font-weight: bold;\\r\\n  }\\r\\n#toggle-button.on {\\r\\n    background-color: #5cb85c;\\r\\n}\\r\\n#toggle-button.off {\\r\\n    background-color: #d9534f;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _src_factories_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/factories/ship */ \"./src/factories/ship.js\");\n/* harmony import */ var _src_factories_gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/factories/gameboard */ \"./src/factories/gameboard.js\");\n/* harmony import */ var _src_factories_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/factories/player */ \"./src/factories/player.js\");\n\r\n\r\n\r\n\r\n\r\nconst startGameButton = document.getElementById('start-game');\r\nconst restartGameButton = document.getElementById('restart-game');\r\nconst toggleButton = document.getElementById('toggle-button');\r\nconst eventButton = document.getElementById('event-button');\r\n\r\nconst board = [];\r\nconst boardComp = [];\r\n\r\nlet playerBoard = document.getElementById('player-board');\r\nlet computerBoard = document.getElementById('computer-board');\r\n\r\nlet gameBoard = (0,_src_factories_gameboard__WEBPACK_IMPORTED_MODULE_2__.Gameboard)();\r\n//let gameOver = Gameboard.isGameOver();\r\nlet isVertical = false;\r\nlet size = 10;\r\nlet shipLength = 1;\r\nlet playerSquares = [];\r\nlet computerSquares = [];\r\nlet playerTurn = true;\r\n\r\nstartGameButton.addEventListener('click', () => {\r\n  createPlayerBoard();\r\n  createCompBoard();\r\n  placingCompShips();\r\n  startGameButton.disabled = true;\r\n  eventButton.textContent = 'Place your Ships!';\r\n});\r\n\r\nrestartGameButton.addEventListener('click', () => {\r\n  location.reload();\r\n});\r\n\r\ntoggleButton.addEventListener('click', () =>  {\r\n  \r\n  if (isVertical === false) {\r\n    toggleButton.textContent = \"On\";\r\n    toggleButton.classList.add('on');\r\n    toggleButton.classList.remove('off');\r\n    isVertical = true;\r\n  } else if (isVertical === true) {\r\n    toggleButton.textContent = \"Off\";\r\n    toggleButton.classList.remove('on');\r\n    toggleButton.classList.add('off');\r\n    isVertical = false;\r\n  }\r\n})\r\n\r\n//Create boards for the logic\r\nfor (let i = 0; i < size; i++) {\r\n  board.push(new Array(size).fill(null).map(() => ({ shipId: null, hit: false })));\r\n}\r\nfor (let i = 0; i < size; i++) {\r\n  boardComp.push(new Array(size).fill(null).map(() => ({ shipId: null, hit: false })));\r\n}\r\n\r\n//Create boards in HTML\r\nfunction createPlayerBoard() {\r\n  playerBoard = document.createElement('div');\r\n  playerBoard.id = 'player-board';\r\n  document.querySelector('#player-board-container').appendChild(playerBoard);\r\n\r\n  // Add squares to the boards\r\n  for (let i = 0; i < size; i++) {\r\n    for (let j = 0; j < size; j++) {\r\n      const square = document.createElement('button');\r\n      square.classList.add('square');\r\n      square.dataset.x = i;\r\n      square.dataset.y = j;\r\n      playerBoard.appendChild(square);\r\n      square.addEventListener('click', playerBoardEvent);\r\n    }\r\n  }\r\n  return { playerSquares, playerBoard }\r\n}\r\n\r\nfunction createCompBoard() {\r\n  computerBoard = document.createElement('div');\r\n  computerBoard.id = 'computer-board';\r\n  document.querySelector('#computer-board-container').appendChild(computerBoard);\r\n\r\n  for (let i = 0; i < size; i++) {\r\n    for (let j = 0; j < size; j++) {\r\n      const square = document.createElement('button');\r\n      square.classList.add('square');\r\n      square.dataset.row = i;\r\n      square.dataset.col = j;\r\n      computerBoard.appendChild(square);\r\n      square.addEventListener('click', compBoardEvent);\r\n    }\r\n  }\r\n  return { computerSquares, computerBoard }\r\n}\r\n\r\nfunction playerBoardEvent(e) {\r\n  const x = parseInt(e.target.dataset.x);\r\n  const y = parseInt(e.target.dataset.y);\r\n  //console.log(`Coordinates are: x: ${x},y: ${y}`);\r\n\r\n  //Check if Placement is fully done\r\n  if (placingPlayerShips(x,y) === true) {\r\n    square.removeEventListener('click', playerBoardEvent);\r\n  } else placingPlayerShips(x,y);\r\n}\r\n\r\nfunction compBoardEvent(e) {\r\n  const row = parseInt(e.target.dataset.row);\r\n  const col = parseInt(e.target.dataset.col);\r\n  //console.log(`Coordinates are: x: ${row},y: ${col}`);\r\n\r\n  if (placingPlayerShips() === true) {\r\n    if (playerTurn === true) {\r\n      startAttack().playerAttack(row,col);\r\n    } \r\n  } //wait...\r\n}\r\n\r\nfunction placingPlayerShips(x, y) {\r\n  let sucessfulPlacements = 0;\r\n  \r\n  if (shipLength >= 6) {\r\n    eventButton.textContent = 'Game started!';\r\n    return true\r\n  }\r\n\r\n  if (gameBoard.placeShip(x, y, shipLength, isVertical, board)) {\r\n    for (let i = 0; i < shipLength; i++) {\r\n      if (isVertical == true) {\r\n        const markShip = document.querySelector(`button[data-x=\"${x+i}\"][data-y=\"${y}\"]`);\r\n        markShip.classList.add('blue');\r\n      } else {\r\n        const markShip = document.querySelector(`button[data-x=\"${x}\"][data-y=\"${y+i}\"]`);\r\n        markShip.classList.add('blue');\r\n      }\r\n    }\r\n    sucessfulPlacements++;\r\n    shipLength++;\r\n    \r\n  } else { console.log('Invalid ship placement'); }\r\n  // console.log(`Sucessfully placed ${sucessfulPlacements} ships.`);\r\n  // console.log(`This is player board:`);\r\n  // console.log(board);\r\n}\r\n\r\nfunction placingCompShips() {\r\n  let shipPlaced = 1;\r\n  let sucessfulPlacements = 0;\r\n  //Place Comp Ships Randomly\r\n  for (let i = 0; i < 5; i++) {\r\n    let placed = false;\r\n    while (!placed) {\r\n      placed = gameBoard.placeRandom(shipPlaced, boardComp);\r\n    }\r\n    shipPlaced++;\r\n    sucessfulPlacements++;\r\n  }\r\n  // console.log(`Sucessfully placed ${sucessfulPlacements} ships.`);\r\n  // console.log(`This is comp board:`);\r\n  // console.log(boardComp);\r\n}\r\n\r\nfunction startAttack() {\r\n  const gameStatus = gameBoard.isGameOver();\r\n\r\n  //Register hits on Computer board\r\n  function playerAttack(x,y) {\r\n    let attackPlayer = gameBoard.receiveAttack(x,y,boardComp);\r\n\r\n    const moveTaken = document.querySelector(`button[data-row=\"${x}\"][data-col=\"${y}\"]`);\r\n\r\n    if (attackPlayer === true) {\r\n      moveTaken.classList.add('black');\r\n      playerTurn = false;\r\n    } else if (attackPlayer === null) {\r\n      moveTaken.classList.add('red');\r\n      playerTurn = false;\r\n    //Since this means it's false which is invalid it should allow the player to repeat a move\r\n    } else {\r\n      eventButton.textContent = 'Invalid Move, try again';\r\n      return\r\n    }\r\n\r\n    if (playerTurn === false) compAttack();\r\n    winCheck();\r\n  }\r\n  //Register hits on Player board\r\n  function compAttack() {\r\n    let row = Math.floor(Math.random() * 10);\r\n    let column = Math.floor(Math.random() * 10);\r\n    let attackComputer = gameBoard.receiveAttackComp(row,column,board);\r\n\r\n    const moveTaken = document.querySelector(`button[data-x=\"${row}\"][data-y=\"${column}\"]`);\r\n    \r\n    if (attackComputer === true) {\r\n      moveTaken.classList.add('black');\r\n      playerTurn = true;\r\n    } else if (attackComputer === null) {\r\n      moveTaken.classList.add('red');\r\n      playerTurn = true;\r\n    //Since this means it's false which is invalid it should allow the computer to repeat a move\r\n    } else {\r\n      //replay\r\n      compAttack();\r\n    }\r\n    winCheck();\r\n  }\r\n\r\n  function winCheck() {\r\n    if (gameStatus.hasPlayerWon() === true) {\r\n      eventButton.textContent = 'You won!'\r\n      square.removeEventListener('click', playerBoardEvent);\r\n    } else if (gameStatus.hasCompWon() === true) {\r\n      eventButton.textContent = 'Computer has won!'\r\n      square.removeEventListener('click', playerBoardEvent);\r\n    } else {\r\n      eventButton.textContent = 'Your turn'; \r\n    }\r\n  }\r\n  \r\n  return { \r\n    playerAttack, \r\n    compAttack,\r\n    winCheck\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/battleship.js?");

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/factories/ship.js\");\n\r\n\r\nfunction Gameboard() {\r\n\r\n    const ships = [];\r\n    const shipsComp = [];\r\n    const missShot = [];\r\n    const boardSize = 10;\r\n    // const board = [];\r\n    // const boardComp = [];\r\n    \r\n    function placeShip(row, column, length, isVertical, board) {\r\n        const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(length);\r\n        \r\n        if (!isPlacement(row, column, length, isVertical, board)) return false\r\n            if (isVertical === true) {\r\n                for (let i = 0; i < length; i++) {\r\n                    //Player Board\r\n                    board[row+i][column].shipId = newShip.shipId;\r\n                    newShip.positions.push([row+i, column]);\r\n                }\r\n            } else if (isVertical === false) {\r\n                for (let j = 0; j < length; j++) {\r\n                    //Player Board\r\n                    board[row][column+j].shipId = newShip.shipId;\r\n                    newShip.positions.push([row, column+j]); \r\n                }\r\n            }\r\n            ships.push(newShip);\r\n\r\n        return { board, ships }\r\n    }\r\n    \r\n    function placeRandom(shipPlaced, boardComp) {\r\n        let row = Math.floor(Math.random() * 10);\r\n        let column = Math.floor(Math.random() * 10);\r\n\r\n        const randomAlign = Math.floor(Math.random() * 2) > 0 ? true : false;\r\n        const newCompShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipPlaced);\r\n     \r\n        if (isPlacement(row, column, shipPlaced, randomAlign, boardComp)) {\r\n            if (randomAlign) {\r\n                for (let i = 0; i < shipPlaced; i++) {\r\n                    boardComp[row+i][column].shipId = newCompShip.shipId;\r\n                    newCompShip.positions.push([row+i, column]);\r\n                }\r\n            } else if (!randomAlign) {\r\n                for (let j = 0; j < shipPlaced; j++) {\r\n                    boardComp[row][column+j].shipId = newCompShip.shipId;\r\n                    newCompShip.positions.push([row, column+j]);\r\n                }\r\n            }\r\n            shipsComp.push(newCompShip)\r\n        }\r\n        else return false\r\n\r\n        return { boardComp, shipsComp }\r\n    }\r\n    function isPlacement(row, column, length, isVertical, board) {\r\n        // case position is out of gameboard\r\n        if (row < 0 || row > boardSize - 1 || column < 0 || column > boardSize - 1) return false \r\n\r\n        //case ship doesn't fit in gameboard\r\n        if (isVertical == true) {\r\n            if (row + length > boardSize - 1) return false\r\n        } else {\r\n            if (column + length > boardSize - 1) return false\r\n        }\r\n        // case any of the fields is already taken\r\n        if (isVertical) {\r\n            for (let i = 0; i < length; i++) {\r\n                if (board[row+i][column].shipId !== null) return false\r\n            }\r\n        } else {\r\n            for (let i = 0; i < length; i++) {\r\n                if (board[row][column+i].shipId !== null) return false\r\n            }\r\n        } \r\n        // case any of the near fields are taken\r\n        if (!isVertical) {\r\n            for (let i = 0; i < length; i++) {\r\n                for (let x = -1; x <= 1; x++) {\r\n                    for (let y = -1; y <= 1; y++) {\r\n                        if (row + x + i < 0 || \r\n                            row + x + i >= boardSize - 1 ||\r\n                            column + y < 0 ||\r\n                            column + y >= boardSize - 1) continue\r\n\r\n                        if (board[row + x + i][column + y].shipId !== null) return false\r\n                    }\r\n                }          \r\n            }\r\n        }  else {\r\n            for (let i = 0; i < length; i++) {\r\n                for (let x = -1; x <= 1; x++) {\r\n                    for (let y = -1; y <= 1; y++) {\r\n                        if (row + x < 0 || \r\n                            row + x >= boardSize - 1 ||\r\n                            column + y + i < 0 ||\r\n                            column + y + i >= boardSize - 1) continue\r\n\r\n                        if (board[row + x][column + y + i].shipId !== null) return false\r\n                    }\r\n                }          \r\n            }\r\n        }\r\n        return true\r\n    }\r\n    function receiveAttack(row, column, boardComp) {\r\n        const target = boardComp[row][column];\r\n        const targetShipId = target.shipId;\r\n        const targetHit = target.hit;\r\n\r\n        //If outside the board\r\n        if (row < 0 || row > boardSize || column < 0 || column > boardSize) return false \r\n\r\n        //Already Hit field or Ship already Hit is basically the same\r\n        if (targetHit === true) {\r\n            //User or AI need to input another field because this is invalid\r\n            return false\r\n        }\r\n\r\n        //If is a miss\r\n        if (targetShipId === null && targetHit === false) {\r\n            boardComp[row][column].hit = true;\r\n            //Register as a miss\r\n            missShot.push([row, column]);\r\n            return null\r\n        }\r\n        \r\n        //Ship has been hit\r\n        if (targetShipId !== null && targetHit === false) {\r\n            for (let i = 0; i < 5; i++) {\r\n                if (shipsComp[i].shipId === target.shipId) {\r\n                    //Update hit on board\r\n                    boardComp[row][column].hit = true;\r\n                    //Update hit on the proper ship\r\n                    shipsComp[i].hit();\r\n                    if (shipsComp[i].getHits() >= shipsComp[i].shipId) {\r\n                        shipsComp[i].isSunk();\r\n                    }\r\n                }\r\n            }\r\n            return true\r\n        }\r\n        return boardComp\r\n    }\r\n    function receiveAttackComp(row, column, board) {\r\n        const target = board[row][column];\r\n        const targetShipId = target.shipId;\r\n        const targetHit = target.hit;\r\n\r\n        //If outside the board\r\n        if (row < 0 || row > boardSize || column < 0 || column > boardSize) return false \r\n\r\n        //Already Hit field or Ship already Hit is basically the same\r\n        if (targetHit === true) {\r\n            //User or AI need to input another field because this is invalid\r\n            return false\r\n        }\r\n\r\n        //If is a miss\r\n        if (targetShipId === null && targetHit === false) {\r\n            board[row][column].hit = true;\r\n            //Register as a miss\r\n            missShot.push([row, column]);\r\n            return null\r\n        }\r\n        \r\n        //Ship has been hit\r\n        if (targetShipId !== null && targetHit === false) {\r\n            for (let i = 0; i < 5; i++) {\r\n                if (ships[i].shipId === target.shipId) {\r\n                    //Update hit on board\r\n                    board[row][column].hit = true;\r\n                    //Update hit on the proper ship\r\n                    ships[i].hit();\r\n                    if (ships[i].getHits() >= ships[i].shipId) {\r\n                        ships[i].isSunk();\r\n                        \r\n                    }\r\n                }\r\n            }\r\n            return true\r\n        }\r\n        return board\r\n    }\r\n    function isGameOver() {\r\n        let gameOver = null;\r\n        \r\n        function hasCompWon() {\r\n            if (ships.every(ship => ship.isSunk())) {\r\n                return gameOver = true;\r\n            }\r\n        }\r\n        function hasPlayerWon() {\r\n            if (shipsComp.every(ship => ship.isSunk())) {\r\n                return gameOver = true;\r\n            }\r\n        }\r\n        return { \r\n            hasPlayerWon,\r\n            hasCompWon,\r\n        }\r\n    }\r\n    \r\n    return {\r\n        ships,\r\n        shipsComp,\r\n        placeShip, \r\n        placeRandom,\r\n        isPlacement,\r\n        receiveAttack,\r\n        receiveAttackComp,\r\n        isGameOver\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/factories/gameboard.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/factories/gameboard.js\");\n\r\n\r\nlet gameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\r\n\r\nfunction Player() {\r\n   let current;\r\n   let player;\r\n   let comp\r\n   \r\n}    \r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(length) {\r\n  const shipId = length;\r\n  const positions = [];\r\n\r\n  let hits = 0;\r\n  let sunk;\r\n\r\n  function hit() {\r\n    hits++\r\n  }\r\n  function getHits() {\r\n    return hits\r\n  }\r\n  function isSunk() {\r\n    if (this.getHits() >= length) {\r\n      sunk = true\r\n      return sunk\r\n    }\r\n  }\r\n\r\n  return {\r\n    shipId,\r\n    positions,\r\n    hit,\r\n    getHits,\r\n    isSunk\r\n  }\r\n}\r\n\r\nconst shipOne = Ship(3);\r\n\r\n// console.log(ship.hit())\r\n// console.log(ship.hit())\r\n// console.log(ship.hit())\r\n// console.log(ship.hit())\r\n// console.log(ship.getHits());\r\n// console.log(ship.isSunk());\r\n\r\n// console.log(ship); // Doesn't show hits\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/factories/ship.js?");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/battleship.js");
/******/ 	
/******/ })()
;