(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("NumericKeyboard", [], factory);
	else if(typeof exports === 'object')
		exports["NumericKeyboard"] = factory();
	else
		root["NumericKeyboard"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return lib_keys_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericKeyboard", function() { return _keyboard_js__WEBPACK_IMPORTED_MODULE_1__["NumericKeyboard"]; });

/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericInput", function() { return _input_js__WEBPACK_IMPORTED_MODULE_2__["NumericInput"]; });






/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE", function() { return ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO", function() { return TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THREE", function() { return THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUR", function() { return FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIVE", function() { return FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIX", function() { return SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEVEN", function() { return SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT", function() { return EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NINE", function() { return NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOT", function() { return DOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL", function() { return DEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESC", function() { return ESC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLANK", function() { return BLANK; });
var ZERO = '0';
var ONE = '1';
var TWO = '2';
var THREE = '3';
var FOUR = '4';
var FIVE = '5';
var SIX = '6';
var SEVEN = '7';
var EIGHT = '8';
var NINE = '9';
var DOT = '.';
var DEL = 'del';
var ENTER = 'enter';
var ESC = 'esc';
var BLANK = '';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericKeyboard", function() { return NumericKeyboard; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_utils_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var lib_keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var lib_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var lib_styles_keyboard_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var lib_styles_keyboard_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lib_styles_keyboard_styl__WEBPACK_IMPORTED_MODULE_4__);





var NumericKeyboard = function NumericKeyboard(el, options) {
  var _this = this;

  if (typeof el === 'string') {
    el = document.querySelector(el);
  }

  options = Object.assign({}, lib_keyboard_js__WEBPACK_IMPORTED_MODULE_2__["Options"], options);
  this.init(options);
  var element = Object(lib_utils_string_js__WEBPACK_IMPORTED_MODULE_1__["createdom"])({
    tag: 'table',
    attrs: {
      'class': 'numeric-keyboard'
    },
    children: this.ks.resolvedLayout.map(function (r) {
      return {
        tag: 'tr',
        children: r.map(function (c) {
          return {
            tag: 'td',
            attrs: {
              rowspan: c.rowspan,
              colspan: c.colspan,
              'data-key': c.key,
              'data-icon': c.key === lib_keys_js__WEBPACK_IMPORTED_MODULE_3__["ENTER"] ? _this.kp.entertext : c.key,
              class: 'numeric-keyboard-key'
            }
          };
        })
      };
    })
  });
  el.parentNode.replaceChild(element, el);
  element.addEventListener('touchend', this.touchend.bind(this), false);
};
NumericKeyboard.prototype = lib_keyboard_js__WEBPACK_IMPORTED_MODULE_2__["Mixins"];
NumericKeyboard.prototype.constructor = NumericKeyboard;

NumericKeyboard.prototype.dispatch = function (event) {
  var callback = this.kp["on".concat(Object(lib_utils_string_js__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(event))];

  if (callback) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    callback.apply(void 0, args);
  }
};

NumericKeyboard.prototype.touchend = function (e) {
  if (e.target.tagName === 'TD') {
    var key = e.target.getAttribute('data-key');
    this.onTouchend(key, e);
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(4);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(25) });


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(6);
var hide = __webpack_require__(7);
var redefine = __webpack_require__(17);
var ctx = __webpack_require__(23);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(16);
module.exports = __webpack_require__(12) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(11);
var toPrimitive = __webpack_require__(15);
var dP = Object.defineProperty;

exports.f = __webpack_require__(12) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(12) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(14)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var hide = __webpack_require__(7);
var has = __webpack_require__(18);
var SRC = __webpack_require__(19)('src');
var $toString = __webpack_require__(20);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(6).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21)('native-function-to-string', Function.toString);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var global = __webpack_require__(5);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(22) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(38);
var pIE = __webpack_require__(39);
var toObject = __webpack_require__(40);
var IObject = __webpack_require__(29);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(13)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(27);
var enumBugKeys = __webpack_require__(37);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(18);
var toIObject = __webpack_require__(28);
var arrayIndexOf = __webpack_require__(32)(false);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(29);
var defined = __webpack_require__(31);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(28);
var toLength = __webpack_require__(33);
var toAbsoluteIndex = __webpack_require__(35);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(21)('keys');
var uid = __webpack_require__(19);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 38 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(31);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createdom", function() { return createdom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
var createdom = function createdom(tree) {
  var el = document.createElement(tree.tag);

  if (tree.attrs) {
    for (var name in tree.attrs) {
      el.setAttribute(name, tree.attrs[name]);
    }
  }

  if (tree.children) {
    for (var i = 0; i < tree.children.length; i++) {
      el.appendChild(createdom(tree.children[i]));
    }
  }

  return el;
};
var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
};

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mixins", function() { return Mixins; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _layouts_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);


var Options = {
  layout: 'number',
  entertext: 'enter'
};
var Mixins = {
  init: function init(options) {
    var layout = options.layout;
    var resolvedLayout;

    if (typeof layout === 'string') {
      resolvedLayout = _layouts_index_js__WEBPACK_IMPORTED_MODULE_1__["default"][layout];

      if (!Array.isArray(resolvedLayout)) {
        throw new Error("".concat(layout, " is not a build-in layout."));
      }
    } else {
      resolvedLayout = layout;

      if (!Array.isArray(resolvedLayout) || !resolvedLayout.every(function (i) {
        return Array.isArray(i);
      })) {
        throw new Error("custom layout must be a two-dimensional array.");
      }
    }

    this.kp = options;
    this.ks = {
      resolvedLayout: resolvedLayout
    };
  },
  destroy: function destroy() {},
  set: function set(key, value) {
    this.ks[key] = value;
  },
  onTouchend: function onTouchend(key) {
    this.dispatch('press', key);

    if (key === _keys_js__WEBPACK_IMPORTED_MODULE_0__["ENTER"]) {
      this.dispatch('enterpress');
    }
  },
  dispatch: function dispatch()
  /* event, payload */
  {
    throw new Error('dispatch method must be overrided!');
  }
};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _tel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);


/* harmony default export */ __webpack_exports__["default"] = ({
  number: _number_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  tel: _tel_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ([[{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ONE"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["TWO"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["THREE"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["DEL"],
  rowspan: 2
}], [{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["FOUR"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["FIVE"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["SIX"]
}], [{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["SEVEN"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["EIGHT"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["NINE"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ENTER"],
  rowspan: 2
}], [{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["DOT"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ZERO"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ESC"]
}]]);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ([[{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ONE"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["TWO"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["THREE"]
}], [{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["FOUR"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["FIVE"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["SIX"]
}], [{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["SEVEN"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["EIGHT"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["NINE"]
}], [{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["DEL"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ZERO"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ENTER"]
}]]);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(47);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(51)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// Imports
var urlEscape = __webpack_require__(49);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(50));

// Module
exports.push([module.i, "@font-face {\n  font-family: numeric-keyboard;\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n.numeric-keyboard {\n  width: 100%;\n  height: 100%;\n  background: #cfd4da;\n  table-layout: fixed;\n  border-collapse: separate;\n  border-spacing: 1px;\n  font-size: 2em;\n  text-align: center;\n}\n.numeric-keyboard-key {\n  touch-action: manipulation;\n  transition: background 0.5s;\n  color: #000;\n  background: #fff;\n}\n.numeric-keyboard-key:active {\n  background: #929ca8;\n}\n.numeric-keyboard-key[data-key=\"\"] {\n  pointer-events: none;\n}\n.numeric-keyboard-key[data-key=enter] {\n  color: #fff;\n  background: #007aff;\n}\n.numeric-keyboard-key[data-key=enter]:active {\n  background: #0051a8;\n}\n.numeric-keyboard-key[data-icon]::before {\n  content: attr(data-icon);\n}\n.numeric-keyboard-key[data-icon=del]::before,\n.numeric-keyboard-key[data-icon=esc]::before {\n  font-family: numeric-keyboard !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  letter-spacing: 0;\n  -webkit-font-feature-settings: \"liga\";\n  font-feature-settings: \"liga\";\n  -webkit-font-variant-ligatures: discretionary-ligatures;\n  font-variant-ligatures: discretionary-ligatures;\n  -webkit-font-smoothing: antialiased;\n}\n", ""]);



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,d09GRgABAAAAAAfsAAwAAAAAB5wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABHAAAAHIAAABy2arcWE9TLzIAAAGQAAAAYAAAAGAPEgWBY21hcAAAAfAAAABsAAAAbOm3AapnYXNwAAACXAAAAAgAAAAIAAAAEGdseWYAAAJkAAACfAAAAnw0f1YEaGVhZAAABOAAAAA2AAAANg8HzfloaGVhAAAFGAAAACQAAAAkB8IDzWhtdHgAAAU8AAAAMAAAADAOAABgbG9jYQAABWwAAAAaAAAAGgKeAfxtYXhwAAAFiAAAACAAAAAgAB4ATm5hbWUAAAWoAAACIgAAAiI2PD88cG9zdAAAB8wAAAAgAAAAIAADAAAAAQAAAAoAHgAsAAFsYXRuAAgABAAAAAAAAAABAAAAAWxpZ2EACAAAAAEAAAABAAQABAAAAAEACgAAAAEADAADABYAIgAuAAEAAwAFAAYACwABAAQACQADAAYABwABAAQACgADAAgABAABAAQACgACAAsAAAADA1UBkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOkCA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABABQAAAAEAAQAAMAAAABACAAZQBsAHPpAv/9//8AAAAAACAAYwBsAHPpAP/9//8AAf/j/6H/m/+VFwkAAwABAAAAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAADAGAAgAOgAwAAGwA8AEgAAAEhIgYHDgExDgEVFBYXMBYXHgEzITI2NRE0JiMTFAYHDgEjISImLwEuATU0Nj8BPgE3PgEzITIWFx4BFRElNycHJwcXBxc3FzcDFv62RlsrK2UICAgIVzk5T0QBSjpQUDpqEA8PJxX+tjE+KqsDBQUDphIkFBQpFwFKFScPDxD++X8df38df38df38dAwBUKytqCRUMDBYIXjk5SFQ6AWg6UP4OFigPEBEvLLIDCwcHCwOsEyINDg0PDxAmFv6Ysn8df34dfn4dfn8dAAAAABEAAABSBAADLgADAAgADAAQABQAGAAcACEAJgArADAANQA6AD8AQwBIAEsAACUhESEBIREhERMzFSM3MxUjNzMVIzczFSM3MxUjJTMVIzU7ARUjNTsBFSM1OwEVIzU7ARUjNTsBFSM1ATMVIzUhMxUjJSEVITUFBycEAPwABAD8LAOo/FiEV1eSWFiSWFiSWFiTV1f9bVhYk1dXklhYklhYk1dXklhY/TNYWAK+WFj91AHy/g4BbnV11gJY/dQCAP4AATNYWFhYWFhYWFjqV1dXV1dXV1dXV1dX/txYWFhYWFj5WFgAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAABAAAtcRXTXw889QALBAAAAAAA1fTE5wAAAADV9MTnAAAAAAQAAy4AAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAwEAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAABgBAAAAAAAAAAAAAAAAAoAFAAeACgAMgA8AEYAUADAATQBPgAAAAEAAAAMAEwAEQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAUAAAAAQAAAAAAAgAHANUAAQAAAAAAAwAUAF0AAQAAAAAABAAUAOoAAQAAAAAABQALADwAAQAAAAAABgAUAJkAAQAAAAAACgAaASYAAwABBAkAAQAoABQAAwABBAkAAgAOANwAAwABBAkAAwAoAHEAAwABBAkABAAoAP4AAwABBAkABQAWAEcAAwABBAkABgAoAK0AAwABBAkACgA0AUB2dWUtbnVtZXJpYy1rZXlib2FyZAB2AHUAZQAtAG4AdQBtAGUAcgBpAGMALQBrAGUAeQBiAG8AYQByAGRWZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADB2dWUtbnVtZXJpYy1rZXlib2FyZAB2AHUAZQAtAG4AdQBtAGUAcgBpAGMALQBrAGUAeQBiAG8AYQByAGR2dWUtbnVtZXJpYy1rZXlib2FyZAB2AHUAZQAtAG4AdQBtAGUAcgBpAGMALQBrAGUAeQBiAG8AYQByAGRSZWd1bGFyAFIAZQBnAHUAbABhAHJ2dWUtbnVtZXJpYy1rZXlib2FyZAB2AHUAZQAtAG4AdQBtAGUAcgBpAGMALQBrAGUAeQBiAG8AYQByAGRGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(52);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 52 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericInput", function() { return NumericInput; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_utils_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var lib_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var lib_styles_input_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var lib_styles_input_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lib_styles_input_styl__WEBPACK_IMPORTED_MODULE_4__);





var NumericInput = function NumericInput(el, options) {
  if (typeof el === 'string') {
    el = document.querySelector(el);
  }

  options = Object.assign({}, lib_input_js__WEBPACK_IMPORTED_MODULE_3__["Options"], options);
  this.init(options);
  var classnames = ['numeric-input'];

  if (this.kp.readonly) {
    classnames.push('readonly');
  }

  if (this.kp.disabled) {
    classnames.push('disabled');
  }

  var element = Object(lib_utils_string_js__WEBPACK_IMPORTED_MODULE_1__["createdom"])({
    tag: 'div',
    attrs: {
      'class': classnames.join(' ')
    },
    children: [{
      tag: 'input',
      attrs: {
        type: 'hidden',
        name: this.kp.name,
        value: this.kp.value
      }
    }, {
      tag: 'div'
    }]
  });
  this.$input = element.querySelector('input');
  this.$fakeinput = element.querySelector('div');
  el.parentNode.replaceChild(element, el);
  this.renderInput();
  this.onMounted(element);
  element.addEventListener('touchend', this.onFocus.bind(this), false);
};
NumericInput.prototype = Object.assign({}, lib_input_js__WEBPACK_IMPORTED_MODULE_3__["Mixins"]);
NumericInput.prototype.constructor = NumericInput;

NumericInput.prototype.set = function (key, value) {
  lib_input_js__WEBPACK_IMPORTED_MODULE_3__["Mixins"].set.call(this, key, value);

  if (key === 'cursorActive' || key === 'rawValue') {
    this.renderInput();
  }
};

NumericInput.prototype.dispatch = function (event) {
  var callback = this.kp["on".concat(Object(lib_utils_string_js__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(event))];

  if (callback) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    callback.apply(void 0, args);
  }
};

NumericInput.prototype.createKeyboard = function (el, options, events, callback) {
  var element = document.createElement('div');
  el.appendChild(element);

  for (var event in events) {
    options["on".concat(Object(lib_utils_string_js__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(event))] = events[event];
  }

  callback(new _keyboard_js__WEBPACK_IMPORTED_MODULE_2__["NumericKeyboard"](element, options));
};

NumericInput.prototype.destroyKeyboard = function (el, keyboard) {
  keyboard.destroy();
};

NumericInput.prototype.renderInput = function () {
  var _this = this;

  var html = '';
  html += '<div class="numeric-input-text">';

  for (var i = 0; i < this.ks.rawValue.length; i++) {
    html += "<span data-index=\"".concat(i, "\">").concat(this.ks.rawValue[i], "</span>");
  }

  html += '</div>';

  if (this.ks.rawValue.length === 0) {
    html += "<div class=\"numeric-input-placeholder\">".concat(this.kp.placeholder, "</div>");
  }

  if (this.ks.cursorActive) {
    html += "<div class=\"numeric-input-cursor\" style=\"background: ".concat(this.ks.cursorColor, "\"></div>");
  }

  this.$fakeinput.innerHTML = html;
  setTimeout(function () {
    _this.onUpdated();
  }, 0);
};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mixins", function() { return Mixins; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _utils_animate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);





var RNumber = /^\d*(?:\.\d*)?$/;
var RTel = /^\d*$/;

var KeyboardCenter = function () {
  var activeInput;
  return {
    register: function register(input) {
      this.unregister();
      activeInput = input;
      document.addEventListener('touchend', this.unregister, false);
    },
    unregister: function unregister(e) {
      if (!activeInput) {
        return;
      }

      if (e && (activeInput.ks.inputElement.contains(e.target) || activeInput.ks.keyboardElement.contains(e.target))) {
        return;
      }

      activeInput.closeKeyboard();
      activeInput = null;
      document.removeEventListener('touchend', this.unregister, false);
    }
  };
}();

var Options = {
  type: 'number',
  value: '',
  autofocus: false,
  disabled: false,
  readonly: false,
  maxlength: Infinity,
  name: '',
  placeholder: '',
  format: '^',
  layout: 'number',
  entertext: 'enter'
};
var Mixins = {
  init: function init(options) {
    var formatFn = options.format;

    if (typeof formatFn === 'string') {
      formatFn = function (rformat) {
        return function (val) {
          return rformat.test(val);
        };
      }(new RegExp(options.format));
    }

    var rawValue = options.value.toString().split('');
    var cursorPos = rawValue.length;
    this.kp = options;
    this.ks = {
      formatFn: formatFn,
      rawValue: rawValue,
      cursorPos: cursorPos,
      cursorColor: null,
      cursorActive: false,
      keyboard: null,
      inputElement: null,
      keyboardElement: null
    };
  },
  destroy: function destroy() {
    KeyboardCenter.unregister();
  },
  set: function set(key, value) {
    this.ks[key] = value;
  },
  onMounted: function onMounted(el) {
    var _this = this;

    this.set('inputElement', el);
    this.set('cursorColor', window.getComputedStyle(el).getPropertyValue('color'));

    if (this.kp.autofocus && !this.kp.readonly && !this.kp.disabled) {
      setTimeout(function () {
        return _this.openKeyboard();
      }, 500);
    }
  },
  onUpdated: function onUpdated() {
    this.moveCursor();
  },
  onFocus: function onFocus(e) {
    e.stopPropagation();
    this.openKeyboard();
    var cursorPos = +e.target.dataset.index;
    this.set('cursorPos', isNaN(cursorPos) ? this.ks.rawValue.length : cursorPos);
  },
  input: function input(key) {
    var _this2 = this;

    var _this$kp = this.kp,
        type = _this$kp.type,
        maxlength = _this$kp.maxlength;
    var _this$ks = this.ks,
        rawValue = _this$ks.rawValue,
        cursorPos = _this$ks.cursorPos,
        formatFn = _this$ks.formatFn;

    var input = function input(key) {
      var isAdd = typeof key !== 'undefined';
      var newRawValue = rawValue.slice();

      if (isAdd) {
        newRawValue.splice(cursorPos, 0, key);
      } else {
        newRawValue.splice(cursorPos - 1, 1);
      }

      var newValue = newRawValue.join('');

      if (formatFn(newValue)) {
        if (type === 'number') {
          if (!RNumber.test(newValue)) {
            return;
          }

          if (newValue.length > maxlength) {
            return;
          }

          newValue = parseFloat(newValue, 10);

          if (isNaN(newValue)) {
            newValue = '';
          }
        } else if (newValue.length > maxlength || type === 'tel' && !RTel.test(newValue)) {
          return;
        }

        _this2.set('rawValue', newRawValue);

        _this2.set('cursorPos', isAdd ? cursorPos + 1 : cursorPos - 1);

        _this2.dispatch('input', newValue);
      }
    };

    switch (key) {
      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["BLANK"]:
        break;

      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["ESC"]:
        this.closeKeyboard();
        break;

      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["ENTER"]:
        this.closeKeyboard();
        this.dispatch('enterpress');
        break;

      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["DEL"]:
        if (cursorPos > 0) {
          input();
        }

        break;

      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["DOT"]:
      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["ZERO"]:
      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["ONE"]:
      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["TWO"]:
      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["THREE"]:
      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["FOUR"]:
      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["FIVE"]:
      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["SIX"]:
      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["SEVEN"]:
      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["EIGHT"]:
      case _keys_js__WEBPACK_IMPORTED_MODULE_3__["NINE"]:
      default:
        input(key);
        break;
    }
  },
  moveCursor: function moveCursor() {
    if (!this.ks.cursorActive) {
      return;
    }

    var elCursor = this.ks.inputElement.querySelector('.numeric-input-cursor');
    var elText = this.ks.inputElement.querySelector('.numeric-input-text');
    var elCharactor = elText.querySelector("span:nth-child(".concat(this.ks.cursorPos, ")"));

    if (!elCharactor) {
      elCursor.style.transform = 'translateX(0)';
      elText.style.transform = 'translateX(0)';
      return;
    }

    var cursorOffset = elCharactor.offsetLeft + elCharactor.offsetWidth;
    var maxVisibleWidth = elText.parentNode.offsetWidth;
    elCursor.style.transform = "translateX(".concat(Math.min(maxVisibleWidth - 1, cursorOffset), "px)");
    elText.style.transform = "translateX(".concat(Math.min(0, maxVisibleWidth - cursorOffset), "px)");
  },
  openKeyboard: function openKeyboard() {
    var _this3 = this;

    if (this.ks.keyboard) {
      return;
    }

    var elContainer = document.createElement('div');
    var elShadow = document.createElement('div');
    var elKeyboard = document.createElement('div');
    elContainer.style.cssText = 'position:fixed; bottom:0; left:0; width:100%; height:36%;';
    elShadow.style.cssText = 'height:100%;';
    elKeyboard.style.cssText = 'position:absolute; top:0; right: 0; bottom: 0; left:0; transform: translateY(100%); box-shadow: 0 -2px 4px 0 #cfd4da';
    elContainer.appendChild(elShadow);
    elContainer.appendChild(elKeyboard);
    document.body.appendChild(elContainer);
    this.createKeyboard(elKeyboard, {
      layout: this.kp.layout || this.kp.type,
      entertext: this.kp.entertext
    }, {
      press: this.input.bind(this)
    }, function (keyboard) {
      return _this3.set('keyboard', keyboard);
    });
    Object(_utils_animate_js__WEBPACK_IMPORTED_MODULE_4__["animate"])(function (timestamp, frame, frames) {
      elKeyboard.style.transform = "translateY(".concat((frames - frame) / frames * 100, "%)");
    }, function () {}, 10);
    this.set('keyboardElement', elKeyboard);
    this.set('cursorActive', true);
    this.set('cursorPos', this.ks.rawValue.length);
    this.dispatch('focus');
    KeyboardCenter.register(this);
  },
  closeKeyboard: function closeKeyboard() {
    var _this4 = this;

    if (!this.ks.keyboard) {
      return;
    }

    var keyboard = this.ks.keyboard;
    var elKeyboard = this.ks.keyboardElement;
    Object(_utils_animate_js__WEBPACK_IMPORTED_MODULE_4__["animate"])(function (timestamp, frame, frames) {
      elKeyboard.style.transform = "translateY(".concat(frame / frames * 100, "%)");
    }, function () {
      setTimeout(function () {
        _this4.destroyKeyboard(elKeyboard, keyboard);

        document.body.removeChild(elKeyboard.parentNode);
      }, 300);
    }, 10);
    this.set('keyboard', null);
    this.set('keyboardElement', null);
    this.set('cursorActive', false);
    this.set('cursorPos', 0);
    this.dispatch('blur');
    KeyboardCenter.unregister();
  },
  createKeyboard: function createKeyboard()
  /* el, options, events, callback */
  {
    throw new Error('createKeyboard method must be overrided!');
  },
  destroyKeyboard: function destroyKeyboard()
  /* el, keyboard */
  {
    throw new Error('destroyKeyboard method must be overrided!');
  },
  dispatch: function dispatch()
  /* event, payload */
  {
    throw new Error('dispatch method must be overrided!');
  }
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(56);
var anObject = __webpack_require__(9);
var $flags = __webpack_require__(57);
var DESCRIPTORS = __webpack_require__(12);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(17)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(13)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(12) && /./g.flags != 'g') __webpack_require__(8).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(57)
});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(9);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(59);
var anObject = __webpack_require__(9);
var speciesConstructor = __webpack_require__(61);
var advanceStringIndex = __webpack_require__(62);
var toLength = __webpack_require__(33);
var callRegExpExec = __webpack_require__(64);
var regexpExec = __webpack_require__(66);
var fails = __webpack_require__(13);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(67)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(10);
var cof = __webpack_require__(30);
var MATCH = __webpack_require__(60)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(21)('wks');
var uid = __webpack_require__(19);
var Symbol = __webpack_require__(5).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(9);
var aFunction = __webpack_require__(24);
var SPECIES = __webpack_require__(60)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(63)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var defined = __webpack_require__(31);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(65);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(30);
var TAG = __webpack_require__(60)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(57);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(68);
var redefine = __webpack_require__(17);
var hide = __webpack_require__(7);
var fails = __webpack_require__(13);
var defined = __webpack_require__(31);
var wks = __webpack_require__(60);
var regexpExec = __webpack_require__(66);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(66);
__webpack_require__(4)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var inheritIfRequired = __webpack_require__(70);
var dP = __webpack_require__(8).f;
var gOPN = __webpack_require__(73).f;
var isRegExp = __webpack_require__(59);
var $flags = __webpack_require__(57);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(12) && (!CORRECT_NEW || __webpack_require__(13)(function () {
  re2[__webpack_require__(60)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(17)(global, 'RegExp', $RegExp);
}

__webpack_require__(74)('RegExp');


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var setPrototypeOf = __webpack_require__(71).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(10);
var anObject = __webpack_require__(9);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(23)(Function.call, __webpack_require__(72).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(39);
var createDesc = __webpack_require__(16);
var toIObject = __webpack_require__(28);
var toPrimitive = __webpack_require__(15);
var has = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(11);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(12) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(27);
var hiddenKeys = __webpack_require__(37).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var dP = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(12);
var SPECIES = __webpack_require__(60)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
var requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
var animate = function animate(iterable) {
  var done = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var frames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;
  var running = true;
  var frame = 0;

  var closure = function closure(timestamp) {
    if (!running) {
      return;
    }

    iterable(timestamp, ++frame, frames);

    if (frame < frames) {
      requestAnimationFrame(closure, 0);
    } else {
      done();
    }
  };

  requestAnimationFrame(closure, 0);
  return function () {
    running = false;
  };
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(77);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(51)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// Module
exports.push([module.i, ".numeric-input {\n  display: inline-block;\n  background: #fff;\n  width: 12em;\n  height: 1.2em;\n  padding: 2px;\n  text-align: left;\n}\n.numeric-input.readonly,\n.numeric-input.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.numeric-input > div {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.numeric-input-placeholder {\n  color: #757575;\n}\n.numeric-input-text {\n  width: 10000%;\n}\n.numeric-input-cursor {\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  animation: numeric-input-cursor 1s infinite;\n}\n@-moz-keyframes numeric-input-cursor {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes numeric-input-cursor {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-o-keyframes numeric-input-cursor {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes numeric-input-cursor {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n", ""]);



/***/ })
/******/ ]);
});