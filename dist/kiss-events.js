(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["kissEvents"] = factory();
	else
		root["kissEvents"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Signal__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Signal", function() { return __WEBPACK_IMPORTED_MODULE_0__Signal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Property__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return __WEBPACK_IMPORTED_MODULE_1__Property__["a"]; });



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Signal {
    constructor() {
        this._callbacks = [];
        this._onceCallbacks = [];
    }

    on(callback) {
        this._callbacks.push(callback);
        return callback;
    }

    once(callback) {
        this._onceCallbacks.push(callback);
    }

    off(callback) {
        let index = this._callbacks.indexOf(callback);
        if (index !== -1) {
            this._callbacks.splice(index, 1);
        }
    }

    trigger(data = null) {
        this._callbacks.forEach(callback => callback(data));
        this._onceCallbacks.forEach(callback => callback(data));
        this._onceCallbacks = [];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Signal;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Property {
    constructor(value = null) {
        this._value = value;
        this._callbacks = [];
        this._onceCallbacks = [];
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this.set(value);
    }

    get() {
        return this._value;
    }

    set(value) {
        if (value !== this._value) {
            let oldValue = this._value;
            this._value = value;
            this._callbacks.forEach(callback => callback(value, oldValue));
            this._onceCallbacks.forEach(callback => callback(value, oldValue));
            this._onceCallbacks = [];
        }
    }

    on(callback) {
        this._callbacks.push(callback);
        return callback;
    }

    off(callback) {
        let index = this._callbacks.indexOf(callback);
        if (index !== -1) {
            this._callbacks.splice(index, 1);
        }
    }

    readyOn(callback) {
        if (null !== this._value) {
            callback(this._value);
        }
        this._callbacks.push(callback);
        return callback;
    }

    ready(callback) {
        if (null !== this._value) {
            callback(this._value);
        }
        else {
            this._onceCallbacks.push(callback);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Property;


/***/ })
/******/ ]);
});