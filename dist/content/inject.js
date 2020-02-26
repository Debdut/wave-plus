/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content/inject/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/content/inject/invoice-view/print.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/content/inject/invoice-view/print.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".contemporary-template .wv-table__header .wv-table__cell, .contemporary-template .wv-table__header .wv-table__cell--amount {\\n  text-transform: inherit;\\n  font-weight: 600;\\n  padding-top: 10px;\\n  padding-bottom: 10px;\\n  color: #fff;\\n}\\n.wv-table__cell .middle-align {\\n  text-align: center;\\n}\\n.contemporary-template, .contemporary-template .wv-heading--subtitle, .contemporary-template .wv-heading--title, .contemporary-template .wv-table__cell, .contemporary-template .wv-table__cell--amount, .contemporary-template .wv-text, .contemporary-template .wv-text--strong {\\n  font-family: Helvetica, Arial, sans-serif;\\n}\\n.contemporary-template {\\n  font-size: 16px;\\n  position: relative;\\n  padding: 16px;\\n  min-height: 1024px;\\n  box-sizing: border-box;\\n  border: 1px solid #dee1e2;\\n  background: #fff;\\n}\\n.contemporary-template .wv-table__cell, .contemporary-template .wv-table__cell--amount, .contemporary-template .wv-text, .contemporary-template .wv-text--strong {\\n  font-size: 16px;\\n}\\n.contemporary-template .wv-heading--title {\\n  margin-top: 0;\\n  margin-bottom: 0;\\n  font-size: 42px;\\n  font-weight: 300;\\n}\\n.contemporary-template .wv-heading--subtitle {\\n  word-wrap: break-word;\\n  color: gray;\\n  font-size: 16px;\\n  margin-top: 0;\\n  line-height: 20px;\\n}\\n.contemporary-template .address {\\n  margin-top: 10px;\\n}\\n.contemporary-template .address__field .wv-text {\\n  line-height: 20px;\\n}\\n.contemporary-template .wv-table, .contemporary-template .wv-text {\\n  font-size: 16px;\\n}\\n.contemporary-template .wv-table__cell {\\n  padding-left: 15px;\\n  padding-right: 15px;\\n  vertical-align: top;\\n  white-space: pre-line;\\n  word-break: break-word;\\n}\\n.contemporary-template .wv-table__cell:first-child {\\n  padding-left: 30px;\\n}\\n.contemporary-template .wv-table__cell--smaller {\\n  width: 105px;\\n  white-space: pre-line;\\n}\\n.contemporary-template .wv-table__cell--amount {\\n  padding-left: 15px;\\n  padding-right: 15px;\\n  width: 125px;\\n  vertical-align: top;\\n  white-space: pre-line;\\n}\\n.contemporary-template .wv-table__cell--amount:last-child {\\n  padding-right: 30px;\\n}\\n.contemporary-template .wv-table__row {\\n  border-bottom: inherit;\\n}\\n.contemporary-template .wv-table__row .wv-table__cell--nested {\\n  color: #4c5357;\\n  font-size: 14px;\\n}\\n.contemporary-template__divider--bold .wv-divider {\\n  border-width: 3px;\\n  margin-top: 0;\\n  margin-bottom: 16px;\\n}\\n.contemporary-template__divider--small-margin .wv-divider {\\n  margin: 12px auto;\\n}\\n.contemporary-template__divider--full-width .wv-divider {\\n  margin-left: -16px;\\n  margin-right: -16px;\\n}\\n.contemporary-template__header {\\n  display: flex;\\n  margin: 25px 14px 0;\\n  justify-content: space-between;\\n}\\n.contemporary-template__header__logo img {\\n  max-height: 200px;\\n  max-width: 300px;\\n}\\n.contemporary-template__header__info {\\n  text-align: right;\\n  width: 442px;\\n}\\n.contemporary-template .invoice-template-details .wv-table__row--header .wv-table__cell:first-child {\\n  min-width: 125px;\\n}\\n.contemporary-template__metadata {\\n  margin-left: 14px;\\n  margin-right: -16px;\\n  display: flex;\\n}\\n.contemporary-template__metadata__customer {\\n  flex-grow: 1;\\n  display: flex;\\n  width: 40%;\\n}\\n.contemporary-template__metadata__customer__wrapper {\\n  display: flex;\\n}\\n.contemporary-template__metadata__customer--billing {\\n  flex-grow: 1;\\n  padding-right: 10px;\\n}\\n.contemporary-template__metadata__customer--shipping {\\n  flex-grow: 3;\\n  padding-right: 10px;\\n}\\n.contemporary-template__metadata .invoice-template-details {\\n  margin-top: -5px;\\n}\\n.contemporary-template__metadata .invoice-template-details .wv-table__row:hover {\\n  background: none;\\n}\\n.contemporary-template__metadata .invoice-template-details .wv-table__cell {\\n  padding-top: 0;\\n  padding-bottom: 0;\\n}\\n.contemporary-template__metadata .invoice-template-details .wv-table__cell:first-child {\\n  text-align: right;\\n}\\n.contemporary-template__metadata .invoice-template-details .wv-table__cell:last-child {\\n  padding-left: 0;\\n}\\n.contemporary-template__metadata .invoice-template-details .wv-table__row:last-child {\\n  background: #f4f5f5;\\n}\\n.contemporary-template__metadata .invoice-template-details .wv-table__row:last-child .wv-table__cell {\\n  padding-top: 5px;\\n  padding-bottom: 5px;\\n}\\n.contemporary-template__metadata .invoice-template-details .wv-table__row:last-child .wv-table__cell:nth-child(2) {\\n  padding-right: 30px;\\n  min-width: 125px;\\n}\\n.contemporary-template__metadata .invoice-template-details .wv-table__row:last-child .wv-table__cell:nth-child(2) .wv-text--body {\\n  font-weight: 600;\\n}\\n.contemporary-template__metadata .wv-text--body {\\n  font-size:18px;\\n  line-height: 22px;\\n}\\n.contemporary-template__metadata .wv-text--strong {\\n  font-size:18px;\\n  line-height: 22px;\\n}\\n.contemporary-template__metadata {\\n  margin-top: 20px;\\n}\\n.contemporary-template__items {\\n  margin-top: 26px;\\n  margin-right: -16px;\\n  margin-left: -16px;\\n}\\n.contemporary-template__items .no-items-message, .contemporary-template__items__column--center {\\n  text-align: center;\\n}\\n.contemporary-template__totals {\\n  display: flex;\\n  margin-bottom: 35px;\\n  margin-left: -16px;\\n  margin-right: -16px;\\n}\\n.contemporary-template__totals__blank {\\n  flex-grow: 5;\\n}\\n.contemporary-template__totals__amounts {\\n  display: flex;\\n  flex-direction: column;\\n  text-align: right;\\n  margin-right: 30px;\\n}\\n.contemporary-template__totals__amounts__line {\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n}\\n.contemporary-template__totals__amounts__line__amount {\\n  margin-left: 30px;\\n  min-width: 125px;\\n}\\n.contemporary-template__totals__amounts__line .wv-text--strong {\\n  font-size: 18px;\\n}\\n.contemporary-template__totals__amounts__line .wv-text.wv-text--body {\\n  font-size: 18px;\\n  line-height: 22px;\\n}\\n.contemporary-template__memo {\\n  margin: 0 14px 35px;\\n  white-space: pre-line;\\n  word-wrap: break-word;\\n}\\n.contemporary-template__memo > span {\\n  margin: 8px 0;\\n  display: block;\\n}\\n.contemporary-template__footer .wv-text.wv-text--hint {\\n  margin: 0 14px 15px;\\n  text-align: center;\\n  font-size:18px;\\n  line-height: 20px;\\n  position: absolute;\\n  bottom: 10px;\\n  left: 0;\\n  right: 0;\\n  white-space: pre-wrap;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/content/inject/invoice-view/print.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/content/inject/invoice-view/surgery/consent/index.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/content/inject/invoice-view/surgery/consent/index.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"* {\\n  font-family: Helvetica, Arial, sans-serif;\\n  font-size: 18px;\\n}\\n\\n.contemporary-template {\\n  font-family: Helvetica, Arial, sans-serif;\\n  font-size: 18px;\\n  position: relative;\\n  padding: 10px;\\n  min-height: 1024px;\\n  box-sizing: border-box;\\n  border: 1px solid #dee1e2;\\n  background: #fff;\\n}\\n\\n.contemporary-template__header__info {\\n  text-align: right;\\n  padding-bottom: 10px;\\n}\\n\\n.contemporary-template .wv-heading--title {\\n  margin-top: 0;\\n  margin-bottom: 0;\\n  font-size: 26px;\\n  font-weight: 300;\\n  text-transform: uppercase;\\n}\\n.contemporary-template .wv-heading--subtitle {\\n  word-wrap: break-word;\\n  color: gray;\\n  font-size: 18px;\\n  margin-top: 0;\\n  line-height: 22px;\\n}\\n.contemporary-template .address {\\n  margin-top: 10px;\\n}\\n.contemporary-template .address__field .wv-text {\\n  line-height: 22px;\\n}\\n\\n.block {\\n  border: 1px solid #dee1e2 ;\\n  padding: 20px;\\n  border-radius: 10px;\\n  margin-top: 10px;\\n}\\n\\n.grid {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-gap: 10px;\\n}\\n\\n.doctor {\\n  padding-right: 30px;\\n  width: 50%;\\n  display: inline-block;\\n}\\n\\n.doctor \\n\\n.package {\\n  text-align: right;\\n}\\n\\n.notes .desc {\\n  font-size: 14px;\\n  font-weight: 600;\\n}\\n\\n.package .desc {\\n  margin-top: 5px;\\n  font-size: 16px;\\n}\\n\\n.label {\\n  font-size: 14px;\\n  padding-bottom: 10px;\\n}\\n\\n.contemporary-template__metadata__customer--billing .wv-text--strong {\\n  font-size: 22px;\\n}\\n\\n.package .wv-heading--title {\\n  font-size:16px;\\n}\\n\\n.table-container div {\\n  padding: 5px;\\n}\\n\\n.wv-table {\\n  width: 100%;\\n  font-size: 14px;\\n}\\n\\n.wv-table tr th {\\n  text-align: right;\\n  padding: 0 5px;\\n  font-size: 16px;\\n}\\n\\n.wv-table tr td {\\n  text-align: right;\\n  padding: 0 5px;\\n  font-size: 14px;\\n\\n}\\n\\n.bold {\\n  font-weight: 600;\\n}\\n\\n.wv-table .left-align {\\n  text-align: left;\\n}\\n\\n.wv-table .middle-align {\\n  text-align: center;\\n}\\n\\n.other-table {\\n  width: 100%;\\n  font-size: 14px;\\n  margin-top: 20px;\\n  border: 1px solid #dee1e2;\\n  border-radius: 10px;\\n  border-collapse: collapse;\\n}\\n\\n.other-table tr th {\\n  text-align: center;\\n  padding: 5px;\\n  font-size: 16px;\\n  border: 1px solid #dee1e2;\\n  font-weight: 300;\\n}\\n\\n.other-table tr td {\\n  text-align: center;\\n  padding: 5px;\\n  font-size: 14px;\\n  border: 1px solid #dee1e2;\\n  font-weight: 300;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/content/inject/invoice-view/surgery/consent/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/content/inject/invoice-view/surgery/discharge/index.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/content/inject/invoice-view/surgery/discharge/index.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"* {\\n  font-family: Helvetica, Arial, sans-serif;\\n  font-size: 18px;\\n}\\n\\n.contemporary-template {\\n  font-family: Helvetica, Arial, sans-serif;\\n  font-size: 18px;\\n  position: relative;\\n  padding: 10px;\\n  min-height: 1024px;\\n  box-sizing: border-box;\\n  border: 1px solid #dee1e2;\\n  background: #fff;\\n}\\n\\n.contemporary-template__header__info {\\n  text-align: right;\\n  padding-bottom: 10px;\\n}\\n\\n.contemporary-template .wv-heading--title {\\n  margin-top: 0;\\n  margin-bottom: 0;\\n  font-size: 26px;\\n  font-weight: 300;\\n  text-transform: uppercase;\\n}\\n.contemporary-template .wv-heading--subtitle {\\n  word-wrap: break-word;\\n  color: gray;\\n  font-size: 18px;\\n  margin-top: 0;\\n  line-height: 22px;\\n}\\n.contemporary-template .address {\\n  margin-top: 10px;\\n}\\n.contemporary-template .address__field .wv-text {\\n  line-height: 22px;\\n}\\n\\n.block {\\n  border: 1px solid #dee1e2 ;\\n  padding: 20px;\\n  border-radius: 10px;\\n  margin-top: 10px;\\n}\\n\\n.grid {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-gap: 10px;\\n}\\n\\n.doctor {\\n  padding-right: 30px;\\n  text-align: right;\\n  vertical-align: bottom;\\n}\\n\\n.doctor \\n\\n.package {\\n  text-align: right;\\n}\\n\\n.notes .desc {\\n  font-size: 14px;\\n  font-weight: 600;\\n}\\n\\n.package .desc {\\n  margin-top: 5px;\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n\\n.label {\\n  font-size: 14px;\\n  padding-bottom: 10px;\\n}\\n\\n.contemporary-template__metadata__customer--billing .wv-text--strong {\\n  font-size: 22px;\\n}\\n\\n.package .wv-heading--title {\\n  font-size:16px;\\n}\\n\\n.table-container div {\\n  padding: 5px;\\n}\\n\\n.wv-table {\\n  width: 100%;\\n  font-size: 14px;\\n}\\n\\n.wv-table tr th {\\n  text-align: right;\\n  padding: 0 5px;\\n  font-size: 16px;\\n}\\n\\n.wv-table tr td {\\n  text-align: right;\\n  padding: 0 5px;\\n  font-size: 14px;\\n\\n}\\n\\n.bold {\\n  font-weight: 600;\\n}\\n\\n.wv-table .left-align {\\n  text-align: left;\\n}\\n\\n.wv-table .middle-align {\\n  text-align: center;\\n}\\n\\n.other-table {\\n  width: 100%;\\n  font-size: 14px;\\n  margin-top: 20px;\\n  border: 1px solid #dee1e2;\\n  border-radius: 10px;\\n  border-collapse: collapse;\\n}\\n\\n.other-table tr th {\\n  text-align: center;\\n  padding: 5px;\\n  font-size: 16px;\\n  border: 1px solid #dee1e2;\\n  font-weight: 300;\\n}\\n\\n.other-table tr td {\\n  text-align: center;\\n  padding: 5px;\\n  font-size: 14px;\\n  border: 1px solid #dee1e2;\\n  font-weight: 300;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/content/inject/invoice-view/surgery/discharge/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/content/inject/index.js":
/*!*************************************!*\
  !*** ./src/content/inject/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _invoice_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-add */ \"./src/content/inject/invoice-add/index.js\");\n/* harmony import */ var _invoice_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-view */ \"./src/content/inject/invoice-view/index.js\");\n/* harmony import */ var _invoice_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-list */ \"./src/content/inject/invoice-list/index.js\");\n// Injection\nfunction inject() {\n  console.log('[Injection Started]'); // List of Scripts\n\n  var scripts = {}; // // Xhook script\n  // const xhook = document.createElement('script')\n  // xhook.src = chrome.runtime.getURL('vendor/xhook/xhook.js')\n  // xhook.id = '__injected--lib-xhook'\n  // scripts.xhook = xhook\n  // XHR Interceptor script\n\n  var interceptor = document.createElement('script');\n  interceptor.src = chrome.runtime.getURL('inject/xhr_interceptor.js');\n  interceptor.id = '__injected--custom-xhrinterceptor';\n  scripts.interceptor = interceptor; // Injecting the Scripts\n\n  for (var key in scripts) {\n    if (scripts.hasOwnProperty(key)) {\n      var script = scripts[key];\n      document.documentElement.appendChild(script);\n    }\n  }\n\n  console.log('[Injection Completed]');\n} // Init\n// inject()\n// Content Scripts by Page and Mode\n\n\n\n\n\nvar PagesRegex = {\n  invoiceAdd: '^https://next.waveapps.com/.*/invoices/add$',\n  invoiceView: '^https://next.waveapps.com/.*/invoices/.*/view$',\n  invoiceList: '^https://next.waveapps.com/.*/invoices$'\n};\nvar Executables = {\n  invoiceAdd: _invoice_add__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  invoiceList: _invoice_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  invoiceView: _invoice_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\nfunction getPage() {\n  var url = location.href;\n\n  for (var page in PagesRegex) {\n    if (PagesRegex.hasOwnProperty(page)) {\n      var regex = new RegExp(PagesRegex[page]);\n\n      if (regex.test(url)) {\n        return page;\n      }\n    }\n  }\n\n  return;\n} // Demo Mode Change With Chrome Storage\n\n\nvar modes = {\n  automate: true,\n  surgery: true // optics: true\n\n};\n\nfunction init() {\n  var page = getPage();\n\n  if (page) {\n    Executables[page].init(page, modes);\n  }\n} // Initiate\n\n\nvar url = location.href;\ndocument.body.addEventListener('click', function () {\n  requestAnimationFrame(function () {\n    if (url !== location.href) {\n      init();\n    }\n\n    url = location.href;\n  });\n}, true);\ninit();\n\n//# sourceURL=webpack:///./src/content/inject/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-add/automate/index.js":
/*!**********************************************************!*\
  !*** ./src/content/inject/invoice-add/automate/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ \"./src/content/inject/util.js\");\n\n\nfunction init() {\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"executeOnCreate\"])('.invoice-customer__without-customer__box__button', addCustomer);\n} // Automate Add Customer and Focus\n\n\nfunction addCustomer(selector) {\n  var btn = document.querySelector(selector);\n  btn.click();\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"executeOnCreate\"])('.invoice-customer__without-customer__box .wv-select__footer', function (s) {\n    var btnNext = document.querySelector(s);\n    btnNext.click();\n    Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"executeOnCreate\"])('.invoice-add__body__top-form__customer  .wv-form-field.is-required input', function (s0) {\n      var inp = document.querySelector(s0);\n      inp.focus();\n    });\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init\n});\n\n//# sourceURL=webpack:///./src/content/inject/invoice-add/automate/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-add/index.js":
/*!*************************************************!*\
  !*** ./src/content/inject/invoice-add/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/content/inject/util.js\");\n/* harmony import */ var _automate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./automate */ \"./src/content/inject/invoice-add/automate/index.js\");\n/* harmony import */ var _optics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optics */ \"./src/content/inject/invoice-add/optics/index.js\");\n/* harmony import */ var _surgery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./surgery */ \"./src/content/inject/invoice-add/surgery/index.js\");\n\n\n\n\nvar Executables = {\n  automate: _automate__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  optics: _optics__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  surgery: _surgery__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\nfunction init(page, modes) {\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"print\"])(page, 'page');\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"execute\"])(Executables, modes);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init\n});\n\n//# sourceURL=webpack:///./src/content/inject/invoice-add/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-add/optics/index.js":
/*!********************************************************!*\
  !*** ./src/content/inject/invoice-add/optics/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction init() {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init\n});\n\n//# sourceURL=webpack:///./src/content/inject/invoice-add/optics/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-add/surgery/index.js":
/*!*********************************************************!*\
  !*** ./src/content/inject/invoice-add/surgery/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ \"./src/content/inject/util.js\");\n\n\nfunction init() {\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"executeOnCreate\"])('.invoice-add__body__items', addOptions);\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"executeOnCreate\"])('.invoice-metadata .wv-form-field:nth-child(4) > label > div', changePaymentDueTitle);\n} // Change Text\n\n\nfunction changePaymentDueTitle(selector) {\n  var pdue = document.querySelector(selector);\n  pdue.innerText = 'Operation Date';\n} // Surgery Options\n\n\nvar dataPoints = {};\n\nfunction register(id) {\n  dataPoints[id] = '';\n}\n\nfunction reactChange(data, key) {\n  dataPoints[key] = data;\n  var textArea = document.querySelector('.invoice-memo .wv-textarea');\n\n  if (textArea) {\n    textArea.value = objectToString(dataPoints);\n  }\n}\n\nfunction objectToString(obj) {\n  var str = '';\n\n  for (var key in obj) {\n    if (obj.hasOwnProperty(key)) {\n      if (obj[key]) {\n        str = str + Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"snakeToTitle\"])(key) + ' - ' + obj[key] + '\\n';\n      }\n    }\n  }\n\n  return str;\n}\n\nfunction addOptions(selector) {\n  var referenceNode = document.querySelector(selector);\n  var optionsNode = document.createElement('div');\n  optionsNode.className = '.surgery-options';\n  optionsNode.style = 'padding-bottom: 10px;display:grid;grid-template-columns:1fr 1fr;';\n  optionsNode.appendChild(options(['Left', 'Right'], 'operative-eye'));\n  optionsNode.appendChild(options(['Apurba Samanta', 'Subhra Ghosal', 'Shibram Maji'], 'surgeon'));\n  optionsNode.appendChild(input('biometry'));\n  optionsNode.appendChild(input('addtional-details'));\n  optionsNode.appendChild(input('left-eye-vision'));\n  optionsNode.appendChild(input('right-eye-vision'));\n  referenceNode.parentNode.insertBefore(optionsNode, referenceNode.nextSibling);\n}\n\nfunction options(list, id) {\n  register(id);\n  var btnGroup = document.createElement('div');\n  btnGroup.id = id;\n  var title = document.createElement('h4');\n  title.innerText = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"snakeToTitle\"])(id);\n  btnGroup.appendChild(title);\n  list.forEach(function (op) {\n    var btn = document.createElement('button');\n    btn.className = 'wv-button--secondary';\n    btn.innerText = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"capitalize\"])(op);\n    btnGroup.appendChild(btn);\n    btn.addEventListener('click', function () {\n      reactChange(op, id);\n      var selectedBtn = document.querySelector(\"#\".concat(id, \" .wv-button--primary\"));\n\n      if (selectedBtn) {\n        selectedBtn.className = 'wv-button--secondary';\n      }\n\n      btn.className = 'wv-button--primary';\n    });\n  });\n  return btnGroup;\n}\n\nfunction input(id) {\n  register(id);\n  var inputGroup = document.createElement('div');\n  inputGroup.id = id;\n  var title = document.createElement('h4');\n  title.innerText = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"snakeToTitle\"])(id);\n  inputGroup.appendChild(title);\n  var inp = document.createElement('input');\n  inp.className = 'wv-input wv-input';\n  inputGroup.appendChild(inp);\n  inp.addEventListener('keyup', function () {\n    return reactChange(inp.value, id);\n  });\n  return inputGroup;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init\n});\n\n//# sourceURL=webpack:///./src/content/inject/invoice-add/surgery/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-list/automate/index.js":
/*!***********************************************************!*\
  !*** ./src/content/inject/invoice-list/automate/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction init() {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init\n});\n\n//# sourceURL=webpack:///./src/content/inject/invoice-list/automate/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-list/index.js":
/*!**************************************************!*\
  !*** ./src/content/inject/invoice-list/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/content/inject/util.js\");\n/* harmony import */ var _automate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./automate */ \"./src/content/inject/invoice-list/automate/index.js\");\n/* harmony import */ var _optics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optics */ \"./src/content/inject/invoice-list/optics/index.js\");\n/* harmony import */ var _surgery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./surgery */ \"./src/content/inject/invoice-list/surgery/index.js\");\n\n\n\n\nvar Executables = {\n  automate: _automate__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  optics: _optics__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  surgery: _surgery__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\nfunction init(page, modes) {\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"print\"])(page, 'page');\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"execute\"])(Executables, modes);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init\n});\n\n//# sourceURL=webpack:///./src/content/inject/invoice-list/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-list/optics/index.js":
/*!*********************************************************!*\
  !*** ./src/content/inject/invoice-list/optics/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction init() {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init\n});\n\n//# sourceURL=webpack:///./src/content/inject/invoice-list/optics/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-list/surgery/index.js":
/*!**********************************************************!*\
  !*** ./src/content/inject/invoice-list/surgery/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction init() {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init\n});\n\n//# sourceURL=webpack:///./src/content/inject/invoice-list/surgery/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-view/automate/index.js":
/*!***********************************************************!*\
  !*** ./src/content/inject/invoice-view/automate/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ \"./src/content/inject/util.js\");\n\n\nfunction init() {\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"executeOnCreate\"])('.invoice-view-payment-section__content button', autoPay);\n} // Automate Payment\n\n\nfunction autoPay(selector) {\n  var btn = document.querySelector(selector);\n  btn.click();\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"executeOnCreate\"])('.wv-form--horizontal .wv-select__input', function (s1) {\n    var btn2 = document.querySelector(s1);\n    btn2.click();\n    Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"executeOnCreate\"])('.wv-select__menu > ul > div:nth-child(2)', function (s2) {\n      var btn3 = document.querySelector(s2);\n      btn3.click();\n      Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"executeOnCreate\"])('.wv-form--horizontal .wv-select__input', function (s3) {\n        var btn4 = document.querySelectorAll(s3)[1];\n        btn4.click();\n        Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"executeOnCreate\"])('.wv-select__menu > ul > div:nth-child(1)', function (s4) {\n          var btn5 = document.querySelector(s4);\n          btn5.click();\n        });\n      });\n    });\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init\n});\n\n//# sourceURL=webpack:///./src/content/inject/invoice-view/automate/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-view/index.js":
/*!**************************************************!*\
  !*** ./src/content/inject/invoice-view/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/content/inject/util.js\");\n/* harmony import */ var _automate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./automate */ \"./src/content/inject/invoice-view/automate/index.js\");\n/* harmony import */ var _optics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optics */ \"./src/content/inject/invoice-view/optics/index.js\");\n/* harmony import */ var _surgery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./surgery */ \"./src/content/inject/invoice-view/surgery/index.js\");\n/* harmony import */ var _print_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print.css */ \"./src/content/inject/invoice-view/print.css\");\n/* harmony import */ var _print_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_print_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar Executables = {\n  automate: _automate__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  optics: _optics__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  surgery: _surgery__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\nfunction init(page, modes) {\n  specific();\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"print\"])(page, 'page');\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"execute\"])(Executables, modes);\n}\n\nfunction specific() {\n  var printCss = _print_css__WEBPACK_IMPORTED_MODULE_4___default.a.toString();\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"executeOnCreate\"])('.wv-header__actions', createPrintButton, printCss);\n}\n\nfunction quickPrint(selector, css) {\n  var section = document.querySelector(selector).cloneNode(true);\n  var invoiceNum = document.querySelector('.invoice-template-details tbody > tr:nth-child(1) > td:nth-child(2) > span').innerText;\n  var idDiv = document.createElement('span');\n  idDiv.innerText = invoiceNum;\n  idDiv.style = 'font-size: 50px; font-weight: 700; position: absolute; top: 30px; left: calc(50%);padding:20px;border:2px solid #ddd;transform:translateX(-50%);';\n  var pic = document.querySelector('img');\n  pic.src = chrome.runtime.getURL('img/logo.jpg');\n  pic.style = 'height:200px;border-radius:10px;';\n  var picContainer = document.createElement('div');\n  picContainer.appendChild(pic);\n  picContainer.style = 'position: absolute;top:20px; left:20px;';\n  var body = document.createElement('body');\n  var html = document.createElement('html');\n  var head = document.createElement('head');\n  var style = document.createElement('style');\n  style.type = 'text/css';\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    style.appendChild(document.createTextNode(css));\n  }\n\n  head.appendChild(style);\n  html.appendChild(head);\n  body.appendChild(section);\n  body.appendChild(idDiv);\n  body.appendChild(picContainer);\n  html.appendChild(body);\n  var printWindow = window.open('', '', 'width=900,height=650');\n  printWindow.document.write(html.innerHTML);\n  printWindow.document.close();\n  printWindow.focus();\n\n  printWindow.document.querySelector('img').onload = function () {\n    printWindow.print();\n    printWindow.close();\n  };\n}\n\nfunction createPrintButton(selector, printCss) {\n  var printBtn = document.createElement('button');\n  printBtn.className = 'wv-button--secondary';\n  printBtn.innerText = 'Print Invoice';\n  printBtn.addEventListener('click', function () {\n    return Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"executeOnCreate\"])('.contemporary-template', quickPrint, printCss);\n  });\n  var headerBtnGroup = document.querySelector(selector);\n  headerBtnGroup.appendChild(printBtn);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init\n});\n\n//# sourceURL=webpack:///./src/content/inject/invoice-view/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-view/optics/index.js":
/*!*********************************************************!*\
  !*** ./src/content/inject/invoice-view/optics/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction init() {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init\n});\n\n//# sourceURL=webpack:///./src/content/inject/invoice-view/optics/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-view/print.css":
/*!***************************************************!*\
  !*** ./src/content/inject/invoice-view/print.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n        var result = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./print.css */ \"./node_modules/css-loader/dist/cjs.js!./src/content/inject/invoice-view/print.css\");\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//# sourceURL=webpack:///./src/content/inject/invoice-view/print.css?");

/***/ }),

/***/ "./src/content/inject/invoice-view/surgery/consent/index.css":
/*!*******************************************************************!*\
  !*** ./src/content/inject/invoice-view/surgery/consent/index.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n        var result = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/content/inject/invoice-view/surgery/consent/index.css\");\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//# sourceURL=webpack:///./src/content/inject/invoice-view/surgery/consent/index.css?");

/***/ }),

/***/ "./src/content/inject/invoice-view/surgery/consent/index.js":
/*!******************************************************************!*\
  !*** ./src/content/inject/invoice-view/surgery/consent/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/content/inject/invoice-view/surgery/consent/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util */ \"./src/content/inject/util.js\");\n\n\n\nfunction Header(title) {\n  var header = document.querySelector('.contemporary-template__header__info').cloneNode(true);\n  header.childNodes[0].innerText = title;\n  var dateSelect = document.querySelector('.invoice-preview__body > div > section.contemporary-template__metadata > div.invoice-template-details > table > tbody > tr:nth-child(3) > td:nth-child(2) > span').innerText;\n  var date = document.createElement('div');\n  date.innerText = 'Operation Date' + ' ' + dateSelect;\n  header.appendChild(date);\n  return Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getHTML\"])(header);\n}\n\nfunction Customer() {\n  var cust = document.querySelector('.contemporary-template__metadata__customer--billing').cloneNode(true);\n  var unwantedChild = cust.childNodes[0];\n  cust.removeChild(unwantedChild);\n  var label = document.createElement('div');\n  label.className = 'label';\n  label.innerText = 'Patient';\n  var custCont = document.createElement('div');\n  custCont.className = 'customer';\n  custCont.appendChild(label);\n  custCont.appendChild(cust);\n  return Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getHTML\"])(custCont);\n}\n\nfunction Package() {\n  var eye = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var bio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var lv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n  var rv = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';\n  var pack = document.querySelector('.invoice-preview__body > div > div.contemporary-template__items > table > tbody > tr > td:nth-child(1) > strong');\n\n  if (pack) {\n    pack = pack.innerText;\n  } else {\n    pack = '';\n  }\n\n  var price = document.querySelector('.invoice-preview__body > div > div.contemporary-template__items > table > tbody > tr > td:last-child span');\n\n  if (price) {\n    price = price.innerText;\n  }\n\n  if (price) {\n    pack = [pack, price].join(' ');\n  }\n\n  return \"<div class=\\\"package\\\">\\n  <div class=\\\"label\\\">Package</div>\\n  <div class=\\\"contemporary-template__metadata__customer--billing\\\">\\n    <strong class=\\\"wv-text--strong\\\">\".concat(pack, \"</strong>\\n    <div class=\\\"desc\\\">\").concat(eye, \" Eye</div>\\n    \").concat(bio.length > 0 ? \"<div class=\\\"desc\\\">Biometry \".concat(bio, \"</div>\") : '', \"\\n    \").concat(lv.length > 0 ? \"<div class=\\\"desc\\\">Left Eye Vision \".concat(lv, \"</div>\") : '', \"\\n    \").concat(rv.length > 0 ? \"<div class=\\\"desc\\\">Right Eye Vision \".concat(rv, \"</div>\") : '', \"\\n  </div>\\n</div>\");\n}\n\nfunction template() {\n  var extra = document.querySelector('.contemporary-template__memo > span:nth-child(2)');\n  var data;\n\n  if (extra) {\n    try {\n      data = parseData(extra.innerText);\n    } catch (error) {\n      data = {};\n    }\n  }\n\n  var invoiceNum = document.querySelector('.invoice-template-details tbody > tr:nth-child(1) > td:nth-child(2) > span').innerText;\n  var idDiv = document.createElement('span');\n  idDiv.innerText = invoiceNum;\n  idDiv.style = 'font-size: 50px; font-weight: 700; position: absolute; top: 30px; left: calc(50%);padding:20px;border:2px solid #ddd;transform:translateX(-50%);';\n  var pic = document.querySelector('img');\n  pic.src = chrome.runtime.getURL('img/logo.jpg');\n  pic.style = 'height:200px;border-radius:10px;';\n  var picContainer = document.createElement('div');\n  picContainer.appendChild(pic);\n  picContainer.style = 'position: absolute;top:20px; left:20px;';\n  return \"<div>\\n    <div class=\\\"contemporary-template\\\">\\n      \".concat(Header('Consent'), \"\\n\\n      <div class=\\\"block grid\\\">\\n        \").concat(Customer(), \"\\n        \").concat(Package(data['Operative Eye'], data['Biometry'], data['Left Eye Vision'], data['Right Eye Vision']), \"\\n      </div>\\n    </div>\\n    \").concat(Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getHTML\"])(idDiv), \"\\n    \").concat(Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getHTML\"])(picContainer), \"\\n  </div>\");\n}\n\nfunction Consent() {\n  var css = _index_css__WEBPACK_IMPORTED_MODULE_0___default.a.toString();\n  var body = document.createElement('body');\n  var html = document.createElement('html');\n  var head = document.createElement('head');\n  var style = document.createElement('style');\n  style.type = 'text/css';\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    style.appendChild(document.createTextNode(css));\n  }\n\n  body.innerHTML = template();\n  head.appendChild(style);\n  html.appendChild(head);\n  html.appendChild(body);\n  return Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getHTML\"])(html);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Consent);\n\n//# sourceURL=webpack:///./src/content/inject/invoice-view/surgery/consent/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-view/surgery/discharge/index.css":
/*!*********************************************************************!*\
  !*** ./src/content/inject/invoice-view/surgery/discharge/index.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n        var result = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/content/inject/invoice-view/surgery/discharge/index.css\");\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//# sourceURL=webpack:///./src/content/inject/invoice-view/surgery/discharge/index.css?");

/***/ }),

/***/ "./src/content/inject/invoice-view/surgery/discharge/index.js":
/*!********************************************************************!*\
  !*** ./src/content/inject/invoice-view/surgery/discharge/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/content/inject/invoice-view/surgery/discharge/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util */ \"./src/content/inject/util.js\");\n\n\n\nfunction Header(title) {\n  var header = document.querySelector('.contemporary-template__header__info').cloneNode(true);\n  header.childNodes[0].innerText = title;\n  var dateSelect = document.querySelector('.invoice-preview__body > div > section.contemporary-template__metadata > div.invoice-template-details > table > tbody > tr:nth-child(3) > td:nth-child(2) > span').innerText;\n  var date = document.createElement('div');\n  date.innerText = 'Operation Date' + ' ' + dateSelect;\n  header.appendChild(date);\n  return Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getHTML\"])(header);\n}\n\nfunction Customer() {\n  var cust = document.querySelector('.contemporary-template__metadata__customer--billing').cloneNode(true);\n  var unwantedChild = cust.childNodes[0];\n  cust.removeChild(unwantedChild);\n  var label = document.createElement('div');\n  label.className = 'label';\n  label.innerText = 'Patient';\n  var custCont = document.createElement('div');\n  custCont.className = 'customer';\n  custCont.appendChild(label);\n  custCont.appendChild(cust);\n  return Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getHTML\"])(custCont);\n}\n\nfunction Package() {\n  var eye = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var bio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var lv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n  var rv = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';\n  var pack = document.querySelector('.invoice-preview__body > div > div.contemporary-template__items > table > tbody > tr > td:nth-child(1) > strong');\n\n  if (pack) {\n    pack = pack.innerText;\n  } else {\n    pack = '';\n  } // const KEYWORDS_OT = [\n  //   'SICS',\n  //   'PHACO',\n  //   'DCT',\n  //   'VITRECTOMY'\n  //   ' OT',\n  //   ' O.T'\n  // ]\n  // const isOT = KEYWORDS_OT\n  //   .map((word) => pack.includes(word) || pack.includes(word.toLowerCase()))\n  //   .reduce((a, c) => a || c)\n  // if (!(isOT)) {\n  //   pack = ''\n  // }\n\n\n  var price = document.querySelector('.invoice-preview__body > div > div.contemporary-template__items > table > tbody > tr > td:last-child span');\n\n  if (price) {\n    price = price.innerText;\n  }\n\n  if (price) {\n    pack = [pack, price].join(' ');\n  }\n\n  return \"<div class=\\\"package\\\">\\n  <div class=\\\"label\\\">Package</div>\\n  <div class=\\\"contemporary-template__metadata__customer--billing\\\">\\n    <strong class=\\\"wv-text--strong\\\">\".concat(pack, \"</strong>\\n    <div class=\\\"desc\\\">\").concat(eye, \" Eye</div>\\n    \").concat(bio.length > 0 ? \"<div class=\\\"desc\\\">Biometry \".concat(bio, \"</div>\") : '', \"\\n    \").concat(lv.length > 0 ? \"<div class=\\\"desc\\\">Left Eye Vision \".concat(lv, \"</div>\") : '', \"\\n    \").concat(rv.length > 0 ? \"<div class=\\\"desc\\\">Right Eye Vision \".concat(rv, \"</div>\") : '', \"\\n  </div>\\n</div>\");\n}\n\nfunction Doctor() {\n  var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  return \"<div class=\\\"doctor\\\">\\n  <div class=\\\"label\\\">Surgeon</div>\\n  <div class=\\\"contemporary-template__metadata__customer--billing\\\">\\n    <strong class=\\\"wv-text--strong\\\">\".concat(doc, \"</strong>\\n  </div>\\n</div>\");\n}\n\nfunction Notes() {\n  var pack = document.querySelector('#Content > div > div.wv-frame__wrapper > div.wv-frame__content > div.wv-frame__content__body > div.wv-frame__content__body__main > div > div > div.invoice-view__body > div.invoice-preview > div.invoice-preview__body > div > div.contemporary-template__items > table > tbody > tr > td:nth-child(1) > strong').innerText;\n  var rest = '';\n\n  if (pack.includes('SICS') || pack.includes('Sics')) {\n    rest = 'One Month';\n  } else if (pack.includes('PHACO') || pack.includes('Phaco')) {\n    rest = 'Two Weeks';\n  }\n\n  return \"<div class=\\\"notes\\\">\\n  <div class=\\\"label\\\">Notes</div>\\n  <div class=\\\"desc\\\">I certify that the above mentioned patient has been operated by me under LA.\\n     I hereby advise the patiemt to go under the above mentioned medication, REST for \".concat(rest, \" \\n     and follow the guidelines attached.</div>\\n  </div>\");\n}\n\nfunction parseData(str) {\n  var data = {};\n  var lines = str.trim().split('\\n').filter(function (l) {\n    return l.length > 0;\n  }).map(function (l) {\n    var parts = l.split(' - ');\n    var key = parts.shift();\n    var result = parts.join(' - ');\n    data[key] = result;\n  });\n  return data;\n}\n\nfunction template() {\n  var extra = document.querySelector('.contemporary-template__memo > span:nth-child(2)');\n  var data;\n\n  if (extra) {\n    try {\n      data = parseData(extra.innerText);\n    } catch (error) {\n      data = {};\n    }\n  }\n\n  var invoiceNum = document.querySelector('.invoice-template-details tbody > tr:nth-child(1) > td:nth-child(2) > span').innerText;\n  var idDiv = document.createElement('span');\n  idDiv.innerText = invoiceNum;\n  idDiv.style = 'font-size: 50px; font-weight: 700; position: absolute; top: 30px; left: calc(50%);padding:20px;border:2px solid #ddd;transform:translateX(-50%);';\n  var pic = document.querySelector('img');\n  pic.src = chrome.runtime.getURL('img/logo.jpg');\n  pic.style = 'height:200px;border-radius:10px;';\n  var picContainer = document.createElement('div');\n  picContainer.appendChild(pic);\n  picContainer.style = 'position: absolute;top:20px; left:20px;';\n  return \"<div>\\n    <div class=\\\"contemporary-template\\\">\\n      \".concat(Header('Discharge'), \"\\n\\n      <div class=\\\"block grid\\\">\\n        \").concat(Customer(), \"\\n        \").concat(Package(data['Operative Eye'], data['Biometry'], data['Left Eye Vision'], data['Right Eye Vision']), \"\\n      </div>\\n      \").concat(MedTable(), \"\\n\\n      <div class=\\\"block grid\\\">\\n        \").concat(Notes(), \"\\n        \").concat(Doctor(data['Surgeon']), \"\\n      </div>\\n\\n      \").concat(InfoTable(), \"\\n    </div>\\n    \").concat(Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getHTML\"])(idDiv), \"\\n    \").concat(Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getHTML\"])(picContainer), \"\\n  </div>\");\n}\n\nfunction Discharge() {\n  var css = _index_css__WEBPACK_IMPORTED_MODULE_0___default.a.toString();\n  var body = document.createElement('body');\n  var html = document.createElement('html');\n  var head = document.createElement('head');\n  var style = document.createElement('style');\n  style.type = 'text/css';\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    style.appendChild(document.createTextNode(css));\n  }\n\n  body.innerHTML = template();\n  head.appendChild(style);\n  html.appendChild(head);\n  html.appendChild(body);\n  return Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getHTML\"])(html);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Discharge);\nvar schedule = [{\n  medicine: 'Abdrops PD / Gate PD',\n  times: 6,\n  days: 40\n}, {\n  medicine: 'Tropicacyl Plus / TM Plus',\n  times: 2,\n  days: 10,\n  timing: '8AM 8PM'\n}, {\n  medicine: 'Prednisolone 10 mg Tablet / Cefadrox 500 mg Tablet',\n  times: 2,\n  days: 5\n}, {\n  medicine: 'Rantac Tablet 150mg Tablet',\n  times: 1,\n  days: 5\n}, {\n  medicine: 'Becozyme C Forte Tablet',\n  times: 1,\n  days: 15,\n  timing: 'Bedtime'\n}, {\n  medicine: 'Combiflam Tablet',\n  timing: 'SOS'\n}, {\n  medicine: 'Carboxymethyl Cellulose Eye Drop',\n  times: 3\n}, {\n  medicine: 'Nepafenac Eye Drop',\n  times: 3\n}];\nvar schedule_headers = ['Medicine', 'Times', 'Days', 'Timing'];\n\nfunction MedTable() {\n  return \"<div class=\\\"table-container block\\\">\\n  <div class=\\\"label\\\">Medicine Schedule</div>\\n  <table class=\\\"wv-table\\\">\\n      <thead>\\n        <tr>\\n          \".concat(schedule_headers.map(function (h) {\n    return \"<th>\".concat(h, \"</th>\");\n  }).join('\\n'), \"\\n        </tr>\\n      </thead>\\n      \\n      <tbody>\\n        \").concat(schedule.map(function (m) {\n    return \"<tr>\\n          <td class=\\\"left-align bold\\\">\".concat(m.medicine, \"</td>\\n          <td class=\\\"middle-align\\\">\").concat(m.times, \"</td>\\n          <td>\").concat(m.days, \"</td>\\n          <td>\").concat(m.timing, \"</td>\\n        </tr>\");\n  }).join('\\n'), \"\\n      </tbody>\\n  </table>\\n</div>\");\n}\n\nvar fields = ['RDSPH', 'DCYL ', 'AXIS ', ' VA ', 'LDSPH', 'DCYL ', 'AXIS ', ' VA '];\n\nfunction InfoTable() {\n  return \"<table class=\\\"other-table\\\">\\n  <thead>\\n    <tr>\\n      \".concat(fields.map(function (f) {\n    return \"<th>\".concat(f, \"</th>\");\n  }).join('\\n'), \"\\n    </tr>\\n  </thead>\\n  <tbody>\\n  \").concat([1, 2].map(function (i) {\n    return \"<tr>\\n      \".concat(fields.map(function (f) {\n      return \"<td>&nbsp;</td>\";\n    }).join('\\n'), \"\\n    </tr>\");\n  }).join('\\n'), \"\\n  </tbody>\\n</table>\");\n}\n\n//# sourceURL=webpack:///./src/content/inject/invoice-view/surgery/discharge/index.js?");

/***/ }),

/***/ "./src/content/inject/invoice-view/surgery/index.js":
/*!**********************************************************!*\
  !*** ./src/content/inject/invoice-view/surgery/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _discharge_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discharge/index.js */ \"./src/content/inject/invoice-view/surgery/discharge/index.js\");\n/* harmony import */ var _consent_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consent/index.js */ \"./src/content/inject/invoice-view/surgery/consent/index.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ \"./src/content/inject/util.js\");\n\n\n\n\nfunction printSurgeryDocs(selector, css) {\n  var printWindow = window.open('', '', 'width=900,height=650');\n  printWindow.document.write(Object(_discharge_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  printWindow.document.close();\n  printWindow.focus();\n\n  printWindow.document.querySelector('img').onload = function () {\n    printWindow.print();\n    printWindow.close();\n  };\n\n  var printWindow2 = window.open('', '', 'width=900,height=650');\n  printWindow2.document.write(Object(_consent_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  printWindow2.document.close();\n  printWindow2.focus();\n\n  printWindow2.document.querySelector('img').onload = function () {\n    printWindow2.print();\n    printWindow2.close();\n  };\n} // Print Surgery Docs Button\n\n\nfunction createPrintButton(selector, printCss) {\n  var printBtn = document.createElement('button');\n  printBtn.className = 'wv-button--secondary';\n  printBtn.innerText = 'Print Surgery Docs';\n  printBtn.addEventListener('click', function () {\n    return Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"executeOnCreate\"])('.contemporary-template', printSurgeryDocs);\n  });\n  var headerBtnGroup = document.querySelector(selector);\n  headerBtnGroup.appendChild(printBtn);\n}\n\nfunction specific() {\n  Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"executeOnCreate\"])('.wv-header__actions', createPrintButton);\n}\n\nfunction init() {\n  specific();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: init\n});\n\n//# sourceURL=webpack:///./src/content/inject/invoice-view/surgery/index.js?");

/***/ }),

/***/ "./src/content/inject/util.js":
/*!************************************!*\
  !*** ./src/content/inject/util.js ***!
  \************************************/
/*! exports provided: capitalize, execute, print, executeOnCreate, getHTML, snakeToTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"capitalize\", function() { return capitalize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"execute\", function() { return execute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"print\", function() { return print; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"executeOnCreate\", function() { return executeOnCreate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHTML\", function() { return getHTML; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snakeToTitle\", function() { return snakeToTitle; });\nfunction capitalize(word) {\n  return word.charAt(0).toUpperCase() + word.slice(1);\n}\nfunction execute(exes, modes) {\n  for (var mode in modes) {\n    if (modes.hasOwnProperty(mode)) {\n      if (modes[mode]) {\n        if (exes[mode]) {\n          print(mode, 'mode');\n          exes[mode].init();\n        }\n      }\n    }\n  }\n}\nfunction print(item, type) {\n  var p = item.split(/(?=[A-Z])/).map(function (word) {\n    return capitalize(word);\n  }).join(' ');\n  console.log(\"[Entered \".concat(capitalize(type), \" \").concat(p, \"]\"));\n}\nfunction executeOnCreate(selector, f) {\n  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  }\n\n  var element = document.querySelector(selector);\n\n  if (element) {\n    f.apply(void 0, [selector].concat(args));\n  } else {\n    setTimeout(function () {\n      return executeOnCreate.apply(void 0, [selector, f].concat(args));\n    }, 50);\n  }\n}\nfunction getHTML(node) {\n  var parent = document.createElement('div');\n  parent.appendChild(node);\n  return parent.innerHTML;\n}\nfunction snakeToTitle(text) {\n  return text.split('-').map(function (w) {\n    return capitalize(w);\n  }).join(' ');\n}\n\n//# sourceURL=webpack:///./src/content/inject/util.js?");

/***/ })

/******/ });