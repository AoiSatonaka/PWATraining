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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/idb.ts":
/*!***********************!*\
  !*** ./src/ts/idb.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Util = __importStar(__webpack_require__(/*! ./utils */ \"./src/ts/utils/index.ts\"));\nvar _DB_NAME = 'PWATrainingDB';\nvar _STORE_NAME = 'number';\nvar _KEY = 'num';\nvar openIdb = function () {\n    return new Promise(function (resolve, reject) {\n        var idbReq = indexedDB.open(_DB_NAME);\n        idbReq.onerror = reject;\n        idbReq.onsuccess = function (evt) { return resolve(evt.target.result); };\n    });\n};\nexports.getNum = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var DB;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, openIdb()];\n            case 1:\n                DB = _a.sent();\n                return [2 /*return*/, new Promise(function (resolve, reject) {\n                        var objStore = DB.transaction(_STORE_NAME, 'readonly').objectStore(_STORE_NAME);\n                        var req = objStore.get(_KEY);\n                        req.onerror = function () { return reject(-1); };\n                        req.onsuccess = function () { return resolve(req.result); };\n                    })];\n        }\n    });\n}); };\nexports.setNum = function (num) { return __awaiter(void 0, void 0, void 0, function () {\n    var DB;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, openIdb()];\n            case 1:\n                DB = _a.sent();\n                return [2 /*return*/, new Promise(function (resolve, reject) {\n                    })];\n        }\n    });\n}); };\nexports.updateNum = function (num) { return __awaiter(void 0, void 0, void 0, function () {\n    var DB, objStore, req;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, openIdb()];\n            case 1:\n                DB = _a.sent();\n                objStore = DB.transaction(_STORE_NAME, 'readwrite').objectStore(_STORE_NAME);\n                req = objStore.get(_KEY);\n                req.onerror = _error;\n                req.onsuccess = function (e) {\n                    var data = req.result;\n                    data = num;\n                    objStore.put(data, _KEY);\n                };\n                return [2 /*return*/];\n        }\n    });\n}); };\nvar _upgradeneeded = function (evt) {\n    Util.idbLog('Upgradeneeded Running');\n    // onupgradeneededはデータベース構成を書き換えられる唯一のタイミング\n    var DB = evt.target.result;\n    // Store(≒Table) Settings\n    var objStore = DB.createObjectStore('number');\n    // Create Store\n    objStore.transaction.oncomplete = function () {\n        var numStore = DB.transaction(_STORE_NAME, 'readwrite').objectStore('number');\n        numStore.add(0, _KEY);\n    };\n};\nvar _success = function (evt) {\n    Util.idbLog('Open Success');\n};\nvar _error = function (evt) { return Util.idbLog('Open Error', \"target: \" + evt.target, \"type:\" + evt.type); };\nexports.idbInit = function () {\n    var idbReq = indexedDB.open(_DB_NAME);\n    // Set EventListers\n    idbReq.onupgradeneeded = _upgradeneeded;\n    idbReq.onsuccess = _success;\n    idbReq.onerror = _error;\n};\n\n\n//# sourceURL=webpack:///./src/ts/idb.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Util = __importStar(__webpack_require__(/*! ./utils */ \"./src/ts/utils/index.ts\"));\nvar Idb = __importStar(__webpack_require__(/*! ./idb */ \"./src/ts/idb.ts\"));\n// this is entry point\n// Set ServiceWorker\nif ('serviceWorker' in navigator) {\n    window.addEventListener('load', function (e) { return __awaiter(void 0, void 0, void 0, function () {\n        var registration, reason_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, navigator.serviceWorker.register('sw.js')];\n                case 1:\n                    registration = _a.sent();\n                    Util.SWLog('Registration Successful!', \"scope: \" + registration.scope);\n                    return [3 /*break*/, 3];\n                case 2:\n                    reason_1 = _a.sent();\n                    Util.SWLog(\"Registration Error: \" + reason_1);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); });\n}\n// Set IndexedDB\nIdb.idbInit();\n// click counter\nvar output = function (num) {\n    var dom = document.getElementById('out');\n    dom.innerHTML = num.toString().padStart(5, '0');\n};\n// set first number\nvar num = -1;\n(function () { return __awaiter(void 0, void 0, void 0, function () { var _a; return __generator(this, function (_b) {\n    switch (_b.label) {\n        case 0:\n            _a = output;\n            return [4 /*yield*/, Idb.getNum()];\n        case 1: return [2 /*return*/, _a.apply(void 0, [num = _b.sent()])];\n    }\n}); }); })();\nvar btn = document.getElementById('btn');\nvar touchSupport = 'ontouch' in window;\nvar TouchOrClick = touchSupport ? 'touchstart' : 'mousedown';\nvar SwipeOrDrag = touchSupport ? 'touchmove' : 'drag';\nconsole.log(TouchOrClick, SwipeOrDrag);\nbtn.addEventListener(TouchOrClick, function (e) {\n    num++;\n    output(num);\n    Idb.updateNum(num);\n});\nbtn.addEventListener(SwipeOrDrag, function (e) {\n    alert('drag!!!!!');\n});\ndocument.addEventListener('touchmove', function (e) { });\n\n\n//# sourceURL=webpack:///./src/ts/index.ts?");

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