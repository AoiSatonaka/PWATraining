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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/sw/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/sw/index.ts":
/*!****************************!*\
  !*** ./src/ts/sw/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/ts/utils/index.ts\");\nvar CACHE_NAME = 'PWATraining_Cache';\nvar GH_PAGES_URL = 'PWATraining/';\nvar urlsToCache = [\n    'index.html',\n    'styles/style.css',\n    'js/main.bundle.js',\n];\nself.addEventListener('install', function (evt) { return __awaiter(void 0, void 0, void 0, function () {\n    var preCache;\n    return __generator(this, function (_a) {\n        utils_1.SWLog('Install Running');\n        preCache = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, caches.open(CACHE_NAME)];\n                case 1: return [2 /*return*/, (_a.sent()).addAll(urlsToCache)];\n            }\n        }); }); };\n        evt.waitUntil(preCache());\n        return [2 /*return*/];\n    });\n}); });\nself.addEventListener('activate', function (evt) {\n    utils_1.SWLog('Activate Running');\n});\nself.addEventListener('fetch', function (evt) {\n    utils_1.SWLog('Fetch Running');\n    var response = (function () { return __awaiter(void 0, void 0, void 0, function () { var _a; return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0: return [4 /*yield*/, caches.match(evt.request)];\n            case 1: return [2 /*return*/, (_a = _b.sent(), (_a !== null && _a !== void 0 ? _a : fetch(evt.request)))];\n        }\n    }); }); });\n    evt.respondWith(response)();\n});\n\n\n//# sourceURL=webpack:///./src/ts/sw/index.ts?");

/***/ }),

/***/ "./src/ts/utils/index.ts":
/*!*******************************!*\
  !*** ./src/ts/utils/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./log */ \"./src/ts/utils/log.ts\"));\n\n\n//# sourceURL=webpack:///./src/ts/utils/index.ts?");

/***/ }),

/***/ "./src/ts/utils/log.ts":
/*!*****************************!*\
  !*** ./src/ts/utils/log.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar _log = function (tag, title, messages) {\n    (function expantion(messages, count) {\n        if (count === void 0) { count = 0; }\n        messages.forEach(function (msg) {\n            Array.isArray(msg)\n                ? expantion(msg, ++count)\n                : console.log('\\t'.repeat(count) + msg);\n        });\n    })([(new Date).toString(), tag, [_title_shaping(title), messages]]);\n};\nvar _title_shaping = function (title) { return \"----------\" + title + \"----------\"; };\nfunction SWLog(title) {\n    var messages = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        messages[_i - 1] = arguments[_i];\n    }\n    _log('[ServiceWorker]', title, messages);\n}\nexports.SWLog = SWLog;\nfunction idbLog(title) {\n    var messages = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        messages[_i - 1] = arguments[_i];\n    }\n    _log('[IndexedDB]', title, messages);\n}\nexports.idbLog = idbLog;\n\n\n//# sourceURL=webpack:///./src/ts/utils/log.ts?");

/***/ })

/******/ });