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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Util = __importStar(__webpack_require__(/*! ./utils */ \"./src/js/utils/index.ts\"));\nvar DB_NAME = 'PWATrainingDB';\n// this is entry point\nif ('serviceWorker' in navigator) {\n    window.addEventListener('load', function (e) {\n        navigator.serviceWorker\n            .register('sw.js')\n            .then(function (registration) { return Util.SWLog('Registration Successful!', \"scope: \" + registration.scope); })\n            .catch(function (reason) { return Util.SWLog(\"Registration Error: \" + reason); });\n    });\n}\n// click counter\nvar num = 0;\nvar out = document.getElementById('out');\nout.innerHTML = num.toString();\ndocument.getElementById('btn').onclick = function (e) {\n    num++;\n    out.innerHTML = num.toString();\n    var db = indexedDB.open(DB_NAME);\n    db.onupgradeneeded = function () { return Util.IndbLog('Upgrade Running'); };\n};\n\n\n//# sourceURL=webpack:///./src/js/index.ts?");

/***/ }),

/***/ "./src/js/utils/index.ts":
/*!*******************************!*\
  !*** ./src/js/utils/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./log */ \"./src/js/utils/log.ts\"));\n\n\n//# sourceURL=webpack:///./src/js/utils/index.ts?");

/***/ }),

/***/ "./src/js/utils/log.ts":
/*!*****************************!*\
  !*** ./src/js/utils/log.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar _log = function (tag, title, messages) {\n    (function expantion(messages, count) {\n        if (count === void 0) { count = 0; }\n        messages.forEach(function (msg) {\n            Array.isArray(msg)\n                ? expantion(msg, ++count)\n                : console.log('\\t'.repeat(count) + msg);\n        });\n    })([(new Date).toString(), [title, messages]]);\n};\nvar funcs = [];\nfunction SWLog(title) {\n    var messages = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        messages[_i - 1] = arguments[_i];\n    }\n    _log('[ServiceWorker]', title, messages);\n}\nexports.SWLog = SWLog;\nfunction IndbLog(title) {\n    var messages = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        messages[_i - 1] = arguments[_i];\n    }\n    _log('[IndexedDB]', title, messages);\n}\nexports.IndbLog = IndbLog;\n\n\n//# sourceURL=webpack:///./src/js/utils/log.ts?");

/***/ })

/******/ });