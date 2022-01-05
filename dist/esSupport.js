!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["es-support"]=e():t["es-support"]=e()}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:this,(function(){return(()=>{"use strict";var __webpack_modules__={200:(t,e,n)=>{n.d(e,{iP:()=>u,kI:()=>c,Pi:()=>f});var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},o=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},_=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,_=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=_.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=_.return)&&n.call(_)}finally{if(o)throw o.error}}return a},a=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,_=e.length;o<_;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};function u(t,e,n){var r=e(n);return n?Array.isArray(r)?r:r?[]:[t]:"boolean"==typeof r?r:0===r.length}function i(t,e){var n,r,i,c;if(e){var f=[];try{for(var l=o(t),s=l.next();!s.done;s=l.next()){var p=_(s.value,2),y=u(p[0],p[1],!0);f.push.apply(f,a([],_(y),!1))}}catch(t){n={error:t}}finally{try{s&&!s.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return f}try{for(var b=o(t),m=b.next();!m.done;m=b.next())if(!(y=u("",_(m.value,2)[1],!1)))return!1}catch(t){i={error:t}}finally{try{m&&!m.done&&(c=b.return)&&c.call(b)}finally{if(i)throw i.error}}return!0}function c(t,e,n){var a,u,c,l;void 0===n&&(n={});var s=r({},n);try{for(var p=o(t),y=p.next();!y.done;y=p.next()){var b=_(y.value,2),m=b[0],d=b[1];s[f(m)]=d}}catch(t){a={error:t}}finally{try{y&&!y.done&&(u=p.return)&&u.call(p)}finally{if(a)throw a.error}}try{for(var v=o(e),w=v.next();!w.done;w=v.next())s[f(w.value)]=function(e){return i(t,e)}}catch(t){c={error:t}}finally{try{w&&!w.done&&(l=v.return)&&l.call(v)}finally{if(c)throw c.error}}return s}function f(t){return t.trim().replace(/[-\s_]+|(es)(\d)/gi,"$1-$2").toLowerCase()}},815:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(200),list=new Map([["const",function(){try{return eval("const a = 1;"),!0}catch(t){return!1}}],["let",function(){try{return eval("let a = 1; a = 2;"),!0}catch(t){return!1}}],["template-literal",function(){try{return eval("`test${42}test\ntest`"),!0}catch(t){return!1}}],["tag-template-literal",function(){try{return eval("function test() {} test`test${42}test\ntest`"),!0}catch(t){return!1}}],["arrow-function",function(){try{return eval("var test = () => 42;"),!0}catch(t){return!1}}],["spread-operator",function(){try{return eval("function test() {} var arr = [1, 2]; test(...arr);"),!0}catch(t){return!1}}],["rest-parameter",function(){try{return eval("function test(...arr) {} test(1, 2);"),!0}catch(t){return!1}}],["destructuring-assignment",function(){try{return eval("var [a, b] = [10, 20];"),eval("var {c, d} = {c: 10, d: 20};"),!0}catch(t){return!1}}],["class",function(){try{return eval("\nclass Test {\n    constructor() {\n        this.value = 42;\n    }\n    get val() {\n        return this.value;\n    }\n    aMethod() {\n        this.value++;\n    }\n}\nclass Test2 extends Test {\n    constructor() {\n        super();\n        this.value = 10;\n    }\n}\nnew Test2();"),!0}catch(t){return!1}}],["symbol",function(){return"function"==typeof Symbol}],["function-default-value",function(){try{return eval("function test(a = 42) {}"),!0}catch(t){return!1}}],["iterator",function(){return"symbol"==typeof(Symbol&&Symbol.iterator)}],["generator",function(){try{return eval("\nfunction* gen() {\n  yield 1;\n  return 2;\n}\ntypeof gen()[Symbol.iterator] === 'function';")}catch(t){return!1}}],["operator-of",function(){try{return eval("for(var a of [1, 2, 3]) {}"),!0}catch(t){return!1}}],["promise",function(){return"function"==typeof Promise}],["proxy",function(){return"function"==typeof Proxy}],["reflect",function(){return"object"==typeof Reflect}],["map",function(){return"function"==typeof Map}],["set",function(){return"function"==typeof Set}],["weakmap",function(){return"function"==typeof WeakMap}],["weakset",function(){return"function"==typeof WeakSet}],["string-repeat",function(){return"function"==typeof"".repeat}],["string-startswith",function(){return"function"==typeof"".startsWith}],["string-endswith",function(){return"function"==typeof"".endsWith}],["string-includes",function(){return"function"==typeof"".includes}],["array-from",function(){return"function"==typeof Array.from}],["array-keys",function(){return"function"==typeof[].keys}],["array-find",function(){return"function"==typeof[].find}],["array-findindex",function(){return"function"==typeof[].findIndex}],["array-fill",function(){return"function"==typeof[].fill}],["math-sign",function(){return"function"==typeof Math.sign}],["math-trunc",function(){return"function"==typeof Math.trunc}],["math-cbrt",function(){return"function"==typeof Math.cbrt}],["math-log2",function(){return"function"==typeof Math.log2}],["math-log10",function(){return"function"==typeof Math.log10}],["number-epsilon",function(){return"number"==typeof Number.EPSILON}],["number-minsafeinteger",function(){return"number"==typeof Number.MIN_SAFE_INTEGER}],["number-maxsafeinteger",function(){return"number"==typeof Number.MAX_SAFE_INTEGER}],["number-maxsafeinteger",function(){return"number"==typeof Number.MAX_SAFE_INTEGER}],["number-isfinite",function(){return"function"==typeof Number.isFinite}],["number-isinteger",function(){return"function"==typeof Number.isInteger}],["number-isnan",function(){return"function"==typeof Number.isNaN}],["number-issafeinteger",function(){return"function"==typeof Number.isSafeInteger}],["arraybuffer",function(){return"function"==typeof ArrayBuffer}],["float32array",function(){return"function"==typeof Float32Array}],["float64array",function(){return"function"==typeof Float64Array}],["int8array",function(){return"function"==typeof Int8Array}],["int16array",function(){return"function"==typeof Int16Array}],["int32array",function(){return"function"==typeof Int32Array}],["uint8array",function(){return"function"==typeof Uint8Array}],["uint16array",function(){return"function"==typeof Uint16Array}],["uint32array",function(){return"function"==typeof Uint32Array}],["intl",function(){return"object"==typeof Intl}],["intl-collator",function(){return"function"==typeof(Intl&&Intl.Collator)}],["intl-numberformat",function(){return"function"==typeof(Intl&&Intl.NumberFormat)}],["intl-datetimeformat",function(){return"function"==typeof(Intl&&Intl.DateTimeFormat)}]]);const __WEBPACK_DEFAULT_EXPORT__=(0,_common__WEBPACK_IMPORTED_MODULE_0__.kI)(list,["es-2015","es-6"])},872:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(200),list=new Map([["array-includes",function(){return"function"==typeof[].includes}],["exponentiation-operator",function(){try{return eval("10 ** 2"),!0}catch(t){return!1}}],["exponentiation-assignation",function(){try{return eval("var a = 10; a **= 2;"),!0}catch(t){return!1}}]]);const __WEBPACK_DEFAULT_EXPORT__=(0,_common__WEBPACK_IMPORTED_MODULE_0__.kI)(list,["es-2016","es-7"])},424:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(200),list=new Map([["async-await",function(){try{return eval("\nasync function test() {\n    return await Promise.resolve(1);\n} test();"),!0}catch(t){return!1}}],["object-entries",function(){return"function"==typeof Object.entries}],["object-values",function(){return"function"==typeof Object.values}],["string-padstart",function(){return"function"==typeof"".padStart}],["string-padend",function(){return"function"==typeof"".padEnd}],["function-trailingcomma",function(){try{return eval("function test(a,b,) {}"),!0}catch(t){return!1}}],["object-getownpropertydescriptors",function(){return"function"==typeof Object.getOwnPropertyDescriptors}],["sharedarraybuffer",function(){return"function"==typeof SharedArrayBuffer}],["atomics",function(){return"object"==typeof Atomics}]]);const __WEBPACK_DEFAULT_EXPORT__=(0,_common__WEBPACK_IMPORTED_MODULE_0__.kI)(list,["es-2017","es-8"])},86:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(200),list=new Map([["regexp-single-line-flag",function(){try{return new RegExp("test","s"),!0}catch(t){return!1}}],["regexp-named-group",function(){try{return new RegExp("(?<test>test)"),!0}catch(t){return!1}}],["regexp-look-behind",function(){try{return new RegExp("(?<=test)test"),new RegExp("(?<!test)test"),!0}catch(t){return!1}}],["regexp-unicode-property-escape",function(){try{return new RegExp("\\p{Alphabetic}\\P{Script=Greek}"),!0}catch(t){return!1}}],["object-spread",function(){try{return eval("var o1 = {a: 1, b: 2}; var a = {...o1, c: 3};"),!0}catch(t){return!1}}],["object-rest-initialization",function(){try{return eval("var {a, ...n} = {a: 1, b: 2, c: 3};"),!0}catch(t){return!1}}],["promise-finally",function(){return"function"==typeof Promise.resolve(1).finally}],["asynchronous-iteration",function(){try{return eval("\nfunction *test () {\n    yield Promise.resolve(1);\n    yield Promise.resolve(2);\n};\n(async function () {\n    for await (var x of test()) {}\n})();"),!0}catch(t){return!1}}],["tag-template-literal-revision",function(){try{return eval("var test = function() {}; test`\\unicode`"),!0}catch(t){return!1}}]]);const __WEBPACK_DEFAULT_EXPORT__=(0,_common__WEBPACK_IMPORTED_MODULE_0__.kI)(list,["es-2018","es-9"])},785:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(200),list=new Map([["string-trimStart",function(){return"function"==typeof"".trimStart}],["string-trimEnd",function(){return"function"==typeof"".trimEnd}],["object-fromentries",function(){return"function"==typeof Object.fromEntries}],["array-flat",function(){return"function"==typeof[].flat}],["array-flatmap",function(){return"function"==typeof[].flatMap}],["symbol-description",function(){return Symbol&&"e"===Symbol("e").description}],["string-line-separator",function(){try{return eval('"\u2028\u2029"'),!0}catch(t){return!1}}],["optional-catch",function(){try{return eval('try { "" } catch { "" }'),!0}catch(t){return!1}}],["json-utf8",function(){return'"\\ud83d"'===JSON.stringify("\ud83d")}],["function-tostring-revision",function(){var str='function /* a comment */ foo() { "" }';return eval("".concat(str," foo.toString() === '").concat(str,"'"))}]]);const __WEBPACK_DEFAULT_EXPORT__=(0,_common__WEBPACK_IMPORTED_MODULE_0__.kI)(list,["es-2019","es-10"])},783:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(200),list=new Map([["bigint",function(){return"function"==typeof BigInt}],["bigint-literal",function(){try{return eval("var test = 10n;"),!0}catch(t){return!1}}],["operator-nullish-coalescing",function(){try{return eval("var test = null ?? 42;"),!0}catch(t){return!1}}],["operator-optional-chaining",function(){try{return eval("var test = {}; test?.a;"),!0}catch(t){return!1}}],["promise-allsettled",function(){return"function"==typeof(Promise&&Promise.allSettled)}],["string-matchall",function(){return"function"==typeof"".matchAll}],["globalthis",function(){return"undefined"!=typeof globalThis}]]);const __WEBPACK_DEFAULT_EXPORT__=(0,_common__WEBPACK_IMPORTED_MODULE_0__.kI)(list,["es-2020","es-11"])},780:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(200),list=new Map([["logical-assignment-or",function(){try{return eval("var test = 0; test ||= 1;"),!0}catch(t){return!1}}],["logical-assignment-and",function(){try{return eval("var test = 0; test &&= 1;"),!0}catch(t){return!1}}],["logical-assignment-nullish",function(){try{return eval("var test = 0; test ??= 1;"),!0}catch(t){return!1}}],["numeric-separator",function(){try{return eval("1_000_000.123_456"),!0}catch(t){return!1}}],["string-replaceall",function(){return"function"==typeof"".replaceAll}],["weakref",function(){return"function"==typeof WeakRef}],["finalizer",function(){return"function"==typeof FinalizationRegistry}],["promise-any",function(){return"function"==typeof(Promise&&Promise.any)}],["intl-listformat",function(){return"function"==typeof(Intl&&Intl.ListFormat)}]]);const __WEBPACK_DEFAULT_EXPORT__=(0,_common__WEBPACK_IMPORTED_MODULE_0__.kI)(list,["es-2021","es-12"],{"logical-assignment":["logical-assignment-or","logical-assignment-and","logical-assignment-nullish"]})},923:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(200),list=new Map([["class-private-field",function(){try{return eval("\nclass Test {\n    #val = 1;\n    inc() {\n        return this.#val++;\n    }\n}\nnew Test();"),!0}catch(t){return!1}}],["class-static-field",function(){try{return eval("\nclass Test {\n    static val = 1;\n}\nTest.val === 1;")}catch(t){return!1}}],["class-static-block",function(){try{return eval("\nclass Test {\n    static #val = 1;\n\n    static {\n        twiceVal = this.#val * 2;\n    }\n}\nTest.twiceVal === 2;")}catch(t){return!1}}],["regexp-indices-flag",function(){try{return new RegExp("test","d"),!0}catch(t){return!1}}],["array-at",function(){return"function"==typeof[].at}],["object-hasown",function(){return"function"==typeof Object.hasOwn}]]);const __WEBPACK_DEFAULT_EXPORT__=(0,_common__WEBPACK_IMPORTED_MODULE_0__.kI)(list,["es-2022","es-13"])}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(t,e)=>{for(var n in e)__webpack_require__.o(e,n)&&!__webpack_require__.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),__webpack_require__.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var __webpack_exports__={};return(()=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>p});var t=__webpack_require__(200),e=__webpack_require__(815),n=__webpack_require__(872),r=__webpack_require__(424),o=__webpack_require__(86),_=__webpack_require__(785),a=__webpack_require__(783),u=__webpack_require__(780),i=__webpack_require__(923),c=function(){return c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)},f=c(c(c(c(c(c(c(c({},e.Z),n.Z),r.Z),o.Z),_.Z),a.Z),u.Z),i.Z);function l(e,n){void 0===n&&(n=!1);var r=(0,t.Pi)(e),o=f[r];return o?Array.isArray(o)?s(o,n?"details":"boolean"):(0,t.iP)(e,o,n):!!n&&[e]}function s(t,e){void 0===e&&(e="boolean");var n=Array.isArray(t)?t:[t],r="details"===e,o=n.reduce((function(t,e){return r?t.push.apply(t,function(t,e,n){if(n||2===arguments.length)for(var r,o=0,_=e.length;o<_;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}([],function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,_=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=_.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=_.return)&&n.call(_)}finally{if(o)throw o.error}}return a}(l(e,!0)),!1)):l(e)||t.push(e),t}),[]);return"boolean"===e?0===o.length:o}s.add=function(e){var n,r,o=Array.isArray(e)?e:[e];try{for(var _=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(o),a=_.next();!a.done;a=_.next()){var u=a.value,i=(0,t.Pi)(u.name);f[i]=u.test}}catch(t){n={error:t}}finally{try{a&&!a.done&&(r=_.return)&&r.call(_)}finally{if(n)throw n.error}}};const p=s})(),__webpack_exports__})()}));