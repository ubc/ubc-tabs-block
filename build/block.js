!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=115)}([function(e,t,r){var n=r(26),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();e.exports=a},function(e,t,r){var n=r(52),o=r(58);e.exports=function(e,t){var r=o(e,t);return n(r)?r:void 0}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,r){var n=r(40);e.exports=function(e){return n(e,5)}},function(e,t,r){var n=r(42),o=r(43),a=r(44),c=r(45),s=r(46);function i(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}i.prototype.clear=n,i.prototype.delete=o,i.prototype.get=a,i.prototype.has=c,i.prototype.set=s,e.exports=i},function(e,t,r){var n=r(24);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},function(e,t,r){var n=r(13),o=r(54),a=r(55),c=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?o(e):a(e)}},function(e,t,r){var n=r(1)(Object,"create");e.exports=n},function(e,t,r){var n=r(68);e.exports=function(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},function(e,t,r){var n=r(28),o=r(29);e.exports=function(e,t,r,a){var c=!r;r||(r={});for(var s=-1,i=t.length;++s<i;){var l=t[s],u=a?a(r[l],e[l],l,r,e):void 0;void 0===u&&(u=e[l]),c?o(r,l,u):n(r,l,u)}return r}},,function(e,t,r){var n=r(1)(r(0),"Map");e.exports=n},function(e,t,r){var n=r(0).Symbol;e.exports=n},function(e,t,r){var n=r(30),o=r(82),a=r(34);e.exports=function(e){return a(e)?n(e):o(e)}},function(e,t){var r=Array.isArray;e.exports=r},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){e.exports=function(e){return function(t){return e(t)}}},function(e,t,r){(function(e){var n=r(26),o=t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,c=a&&a.exports===o&&n.process,s=function(){try{var e=a&&a.require&&a.require("util").types;return e||c&&c.binding&&c.binding("util")}catch(e){}}();e.exports=s}).call(this,r(16)(e))},function(e,t){var r=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||r)}},function(e,t,r){var n=r(30),o=r(85),a=r(34);e.exports=function(e){return a(e)?n(e,!0):o(e)}},function(e,t,r){var n=r(90),o=r(35),a=Object.prototype.propertyIsEnumerable,c=Object.getOwnPropertySymbols,s=c?function(e){return null==e?[]:(e=Object(e),n(c(e),(function(t){return a.call(e,t)})))}:o;e.exports=s},function(e,t,r){var n=r(94),o=r(12),a=r(95),c=r(96),s=r(97),i=r(7),l=r(27),u=l(n),b=l(o),p=l(a),f=l(c),d=l(s),v=i;(n&&"[object DataView]"!=v(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=v(new o)||a&&"[object Promise]"!=v(a.resolve())||c&&"[object Set]"!=v(new c)||s&&"[object WeakMap]"!=v(new s))&&(v=function(e){var t=i(e),r="[object Object]"==t?e.constructor:void 0,n=r?l(r):"";if(n)switch(n){case u:return"[object DataView]";case b:return"[object Map]";case p:return"[object Promise]";case f:return"[object Set]";case d:return"[object WeakMap]"}return t}),e.exports=v},function(e,t,r){var n=r(100);e.exports=function(e){var t=new e.constructor(e.byteLength);return new n(t).set(new n(e)),t}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,r){var n=r(7),o=r(2);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(53))},function(e,t){var r=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return r.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e,t,r){var n=r(29),o=r(24),a=Object.prototype.hasOwnProperty;e.exports=function(e,t,r){var c=e[t];a.call(e,t)&&o(c,r)&&(void 0!==r||t in e)||n(e,t,r)}},function(e,t,r){var n=r(73);e.exports=function(e,t,r){"__proto__"==t&&n?n(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},function(e,t,r){var n=r(75),o=r(76),a=r(15),c=r(31),s=r(79),i=r(80),l=Object.prototype.hasOwnProperty;e.exports=function(e,t){var r=a(e),u=!r&&o(e),b=!r&&!u&&c(e),p=!r&&!u&&!b&&i(e),f=r||u||b||p,d=f?n(e.length,String):[],v=d.length;for(var y in e)!t&&!l.call(e,y)||f&&("length"==y||b&&("offset"==y||"parent"==y)||p&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||s(y,v))||d.push(y);return d}},function(e,t,r){(function(e){var n=r(0),o=r(78),a=t&&!t.nodeType&&t,c=a&&"object"==typeof e&&e&&!e.nodeType&&e,s=c&&c.exports===a?n.Buffer:void 0,i=(s?s.isBuffer:void 0)||o;e.exports=i}).call(this,r(16)(e))},function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},function(e,t){e.exports=function(e,t){return function(r){return e(t(r))}}},function(e,t,r){var n=r(25),o=r(32);e.exports=function(e){return null!=e&&o(e.length)&&!n(e)}},function(e,t){e.exports=function(){return[]}},function(e,t,r){var n=r(37),o=r(38),a=r(21),c=r(35),s=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)n(t,a(e)),e=o(e);return t}:c;e.exports=s},function(e,t){e.exports=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}},function(e,t,r){var n=r(33)(Object.getPrototypeOf,Object);e.exports=n},function(e,t,r){var n=r(37),o=r(15);e.exports=function(e,t,r){var a=t(e);return o(e)?a:n(a,r(e))}},function(e,t,r){var n=r(41),o=r(72),a=r(28),c=r(74),s=r(84),i=r(87),l=r(88),u=r(89),b=r(91),p=r(92),f=r(93),d=r(22),v=r(98),y=r(99),h=r(105),m=r(15),g=r(31),j=r(107),x=r(2),_=r(109),w=r(14),O=r(20),E={};E["[object Arguments]"]=E["[object Array]"]=E["[object ArrayBuffer]"]=E["[object DataView]"]=E["[object Boolean]"]=E["[object Date]"]=E["[object Float32Array]"]=E["[object Float64Array]"]=E["[object Int8Array]"]=E["[object Int16Array]"]=E["[object Int32Array]"]=E["[object Map]"]=E["[object Number]"]=E["[object Object]"]=E["[object RegExp]"]=E["[object Set]"]=E["[object String]"]=E["[object Symbol]"]=E["[object Uint8Array]"]=E["[object Uint8ClampedArray]"]=E["[object Uint16Array]"]=E["[object Uint32Array]"]=!0,E["[object Error]"]=E["[object Function]"]=E["[object WeakMap]"]=!1,e.exports=function e(t,r,R,k,A,S){var I,B=1&r,T=2&r,P=4&r;if(R&&(I=A?R(t,k,A,S):R(t)),void 0!==I)return I;if(!x(t))return t;var N=m(t);if(N){if(I=v(t),!B)return l(t,I)}else{var U=d(t),z="[object Function]"==U||"[object GeneratorFunction]"==U;if(g(t))return i(t,B);if("[object Object]"==U||"[object Arguments]"==U||z&&!A){if(I=T||z?{}:h(t),!B)return T?b(t,s(I,t)):u(t,c(I,t))}else{if(!E[U])return A?t:{};I=y(t,U,B)}}S||(S=new n);var D=S.get(t);if(D)return D;S.set(t,I),_(t)?t.forEach((function(n){I.add(e(n,r,R,n,t,S))})):j(t)&&t.forEach((function(n,o){I.set(o,e(n,r,R,o,t,S))}));var C=N?void 0:(P?T?f:p:T?O:w)(t);return o(C||t,(function(n,o){C&&(n=t[o=n]),a(I,o,e(n,r,R,o,t,S))})),I}},function(e,t,r){var n=r(5),o=r(47),a=r(48),c=r(49),s=r(50),i=r(51);function l(e){var t=this.__data__=new n(e);this.size=t.size}l.prototype.clear=o,l.prototype.delete=a,l.prototype.get=c,l.prototype.has=s,l.prototype.set=i,e.exports=l},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,r){var n=r(6),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0)&&(r==t.length-1?t.pop():o.call(t,r,1),--this.size,!0)}},function(e,t,r){var n=r(6);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},function(e,t,r){var n=r(6);e.exports=function(e){return n(this.__data__,e)>-1}},function(e,t,r){var n=r(6);e.exports=function(e,t){var r=this.__data__,o=n(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},function(e,t,r){var n=r(5);e.exports=function(){this.__data__=new n,this.size=0}},function(e,t){e.exports=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}},function(e,t){e.exports=function(e){return this.__data__.get(e)}},function(e,t){e.exports=function(e){return this.__data__.has(e)}},function(e,t,r){var n=r(5),o=r(12),a=r(59);e.exports=function(e,t){var r=this.__data__;if(r instanceof n){var c=r.__data__;if(!o||c.length<199)return c.push([e,t]),this.size=++r.size,this;r=this.__data__=new a(c)}return r.set(e,t),this.size=r.size,this}},function(e,t,r){var n=r(25),o=r(56),a=r(2),c=r(27),s=/^\[object .+?Constructor\]$/,i=Function.prototype,l=Object.prototype,u=i.toString,b=l.hasOwnProperty,p=RegExp("^"+u.call(b).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(n(e)?p:s).test(c(e))}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=r(13),o=Object.prototype,a=o.hasOwnProperty,c=o.toString,s=n?n.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),r=e[s];try{e[s]=void 0;var n=!0}catch(e){}var o=c.call(e);return n&&(t?e[s]=r:delete e[s]),o}},function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},function(e,t,r){var n,o=r(57),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!a&&a in e}},function(e,t,r){var n=r(0)["__core-js_shared__"];e.exports=n},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,r){var n=r(60),o=r(67),a=r(69),c=r(70),s=r(71);function i(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}i.prototype.clear=n,i.prototype.delete=o,i.prototype.get=a,i.prototype.has=c,i.prototype.set=s,e.exports=i},function(e,t,r){var n=r(61),o=r(5),a=r(12);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},function(e,t,r){var n=r(62),o=r(63),a=r(64),c=r(65),s=r(66);function i(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}i.prototype.clear=n,i.prototype.delete=o,i.prototype.get=a,i.prototype.has=c,i.prototype.set=s,e.exports=i},function(e,t,r){var n=r(8);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},function(e,t,r){var n=r(8),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(t,e)?t[e]:void 0}},function(e,t,r){var n=r(8),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return n?void 0!==t[e]:o.call(t,e)}},function(e,t,r){var n=r(8);e.exports=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},function(e,t,r){var n=r(9);e.exports=function(e){var t=n(this,e).delete(e);return this.size-=t?1:0,t}},function(e,t){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},function(e,t,r){var n=r(9);e.exports=function(e){return n(this,e).get(e)}},function(e,t,r){var n=r(9);e.exports=function(e){return n(this,e).has(e)}},function(e,t,r){var n=r(9);e.exports=function(e,t){var r=n(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}},function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}},function(e,t,r){var n=r(1),o=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t,r){var n=r(10),o=r(14);e.exports=function(e,t){return e&&n(t,o(t),e)}},function(e,t){e.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},function(e,t,r){var n=r(77),o=r(3),a=Object.prototype,c=a.hasOwnProperty,s=a.propertyIsEnumerable,i=n(function(){return arguments}())?n:function(e){return o(e)&&c.call(e,"callee")&&!s.call(e,"callee")};e.exports=i},function(e,t,r){var n=r(7),o=r(3);e.exports=function(e){return o(e)&&"[object Arguments]"==n(e)}},function(e,t){e.exports=function(){return!1}},function(e,t){var r=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&r.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t,r){var n=r(81),o=r(17),a=r(18),c=a&&a.isTypedArray,s=c?o(c):n;e.exports=s},function(e,t,r){var n=r(7),o=r(32),a=r(3),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!c[n(e)]}},function(e,t,r){var n=r(19),o=r(83),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return o(e);var t=[];for(var r in Object(e))a.call(e,r)&&"constructor"!=r&&t.push(r);return t}},function(e,t,r){var n=r(33)(Object.keys,Object);e.exports=n},function(e,t,r){var n=r(10),o=r(20);e.exports=function(e,t){return e&&n(t,o(t),e)}},function(e,t,r){var n=r(2),o=r(19),a=r(86),c=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return a(e);var t=o(e),r=[];for(var s in e)("constructor"!=s||!t&&c.call(e,s))&&r.push(s);return r}},function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}},function(e,t,r){(function(e){var n=r(0),o=t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,c=a&&a.exports===o?n.Buffer:void 0,s=c?c.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var r=e.length,n=s?s(r):new e.constructor(r);return e.copy(n),n}}).call(this,r(16)(e))},function(e,t){e.exports=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}},function(e,t,r){var n=r(10),o=r(21);e.exports=function(e,t){return n(e,o(e),t)}},function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,a=[];++r<n;){var c=e[r];t(c,r,e)&&(a[o++]=c)}return a}},function(e,t,r){var n=r(10),o=r(36);e.exports=function(e,t){return n(e,o(e),t)}},function(e,t,r){var n=r(39),o=r(21),a=r(14);e.exports=function(e){return n(e,a,o)}},function(e,t,r){var n=r(39),o=r(36),a=r(20);e.exports=function(e){return n(e,a,o)}},function(e,t,r){var n=r(1)(r(0),"DataView");e.exports=n},function(e,t,r){var n=r(1)(r(0),"Promise");e.exports=n},function(e,t,r){var n=r(1)(r(0),"Set");e.exports=n},function(e,t,r){var n=r(1)(r(0),"WeakMap");e.exports=n},function(e,t){var r=Object.prototype.hasOwnProperty;e.exports=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&r.call(e,"index")&&(n.index=e.index,n.input=e.input),n}},function(e,t,r){var n=r(23),o=r(101),a=r(102),c=r(103),s=r(104);e.exports=function(e,t,r){var i=e.constructor;switch(t){case"[object ArrayBuffer]":return n(e);case"[object Boolean]":case"[object Date]":return new i(+e);case"[object DataView]":return o(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return s(e,r);case"[object Map]":return new i;case"[object Number]":case"[object String]":return new i(e);case"[object RegExp]":return a(e);case"[object Set]":return new i;case"[object Symbol]":return c(e)}}},function(e,t,r){var n=r(0).Uint8Array;e.exports=n},function(e,t,r){var n=r(23);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}},function(e,t){var r=/\w*$/;e.exports=function(e){var t=new e.constructor(e.source,r.exec(e));return t.lastIndex=e.lastIndex,t}},function(e,t,r){var n=r(13),o=n?n.prototype:void 0,a=o?o.valueOf:void 0;e.exports=function(e){return a?Object(a.call(e)):{}}},function(e,t,r){var n=r(23);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}},function(e,t,r){var n=r(106),o=r(38),a=r(19);e.exports=function(e){return"function"!=typeof e.constructor||a(e)?{}:n(o(e))}},function(e,t,r){var n=r(2),o=Object.create,a=function(){function e(){}return function(t){if(!n(t))return{};if(o)return o(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();e.exports=a},function(e,t,r){var n=r(108),o=r(17),a=r(18),c=a&&a.isMap,s=c?o(c):n;e.exports=s},function(e,t,r){var n=r(22),o=r(3);e.exports=function(e){return o(e)&&"[object Map]"==n(e)}},function(e,t,r){var n=r(110),o=r(17),a=r(18),c=a&&a.isSet,s=c?o(c):n;e.exports=s},function(e,t,r){var n=r(22),o=r(3);e.exports=function(e){return o(e)&&"[object Set]"==n(e)}},function(e,t,r){},,,,function(e,t,r){"use strict";r.r(t);var n=(0,wp.element.createContext)(null);const o=wp.blockEditor.InnerBlocks,a=wp.element,c=a.useContext,s=a.useEffect;var i=(0,wp.compose.compose)([(0,wp.data.withSelect)(e=>({getBlockTypes:e("core/blocks").getBlockTypes}))])(e=>{const t=e.getBlockTypes,r=e.setAttributes,a=e.attributes.index,i=c(n),l=i.currentTabSelected,u=i.childTabIds,b=i.tabs,p=t().map(e=>e.name).filter(e=>"ubc/tab"!==e);return s(()=>{if(u.length!==b.length)return;const t=u.findIndex(t=>t===e.clientId);r(a===t?{title:b[a].title,id:b[a].id}:{index:t})},[b,u,e.clientId,a]),l===a?React.createElement("section",{index:a+1,className:"wp-block-ubc-tab ubc-accordion-tabs__tabs-panel",id:"section"+(a+1),role:"tabpanel","aria-labelledby":"tab"+(a+1)},React.createElement("div",{className:"content is-open","aria-hidden":!0},React.createElement(o,{templateLock:!1,allowedBlocks:p,renderAppender:()=>React.createElement(o.ButtonBlockAppender,null)}))):null});var l={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let u;const b=new Uint8Array(16);function p(){if(!u&&(u="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(b)}const f=[];for(let e=0;e<256;++e)f.push((e+256).toString(16).slice(1));function d(e,t=0){return f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]}var v=function(e,t,r){if(l.randomUUID&&!t&&!e)return l.randomUUID();const n=(e=e||{}).random||(e.rng||p)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return d(n)};var y={index:{type:"number",default:null},title:{type:"string",default:"Tab"},id:{type:"string",default:v()}};const h=wp.blockEditor.InnerBlocks;const m=wp.blockEditor.InnerBlocks,g=wp.i18n.__;(0,wp.blocks.registerBlockType)("ubc/tab",{parent:["ubc/tabs"],title:"UBC Tab Block",description:g("Add accessible tabs of content which convert to accordions on smaller screens."),icon:()=>React.createElement("svg",{enableBackground:"new 0 0 32 32",height:"32px",id:"svg2",version:"1.1",viewBox:"0 0 32 32",width:"32px",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg"},React.createElement("g",{id:"background"},React.createElement("rect",{fill:"none",height:"32",width:"32",x:"0"})),React.createElement("g",{id:"tab"},React.createElement("path",{d:"M30,10V6h-8v4h-2V6h-8v4H10V6H0v20h32V10H30z M29.999,24.001H2V8h6v3.999h21.999V24.001z"}))),keywords:[g("tab"),g("accordion")],category:"layout",attributes:y,edit:i,save:e=>{const t=e.attributes,r=t.index,n=t.title,o=t.id;return React.createElement("section",{index:r+1,className:"ubc-accordion-tabs__tabs-panel js-tabs-panel"+(0===r?" active":""),id:"section-"+o,role:"tabpanel","aria-labelledby":"tab-"+o},React.createElement("div",{className:"ubc-accordion-tabs__accordion-trigger js-accordion-trigger","aria-controls":"section-"+o,tabIndex:"0"},n,React.createElement("div",{className:"ubc-accordion-tabs__accordion-trigger-icon"},React.createElement("span",{className:"label--open"},"Open"),React.createElement("span",{className:"label--close"},"Close"),React.createElement("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 20 20"},React.createElement("rect",{className:"vert",height:"18",width:"2",fill:"currentColor",y:"1",x:"9"}),React.createElement("rect",{height:"2",width:"18",fill:"currentColor",y:"9",x:"1"})))),React.createElement("div",{className:"content"},React.createElement(h.Content,null)))},deprecated:[{attributes:y,migrate:()=>({id:"123"}),supports:{},save:e=>{const t=e.attributes,r=t.index,n=t.title;return React.createElement("section",{index:r+1,className:"ubc-accordion-tabs__tabs-panel js-tabs-panel"+(0===r?" active":""),id:"section"+(r+1),role:"tabpanel","aria-labelledby":"tab"+(r+1)},React.createElement("div",{className:"ubc-accordion-tabs__accordion-trigger js-accordeon-trigger","aria-controls":"section"+(r+1),tabIndex:"0"},n,React.createElement("div",{className:"ubc-accordion-tabs__accordion-trigger-icon"},React.createElement("span",{className:"label--open"},"Open"),React.createElement("span",{className:"label--close"},"Close"),React.createElement("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 20 20"},React.createElement("rect",{className:"vert",height:"18",width:"2",fill:"currentColor",y:"1",x:"9"}),React.createElement("rect",{height:"2",width:"18",fill:"currentColor",y:"9",x:"1"})))),React.createElement("div",{className:"content"},React.createElement(m.Content,null)))}}]});var j={tabs:{type:"array",default:[{title:"Tab1",id:v()},{title:"Tab2",id:v()}]},initialTabSelected:{type:"number",default:0},blockInitialized:{type:"boolean",default:!1}},x=r(4),_=r.n(x);function w(e,t,r,n,o,a,c){try{var s=e[a](c),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(n,o)}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,c,s=[],i=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}const R=wp.blockEditor.InspectorControls,k=wp.components,A=k.PanelBody,S=k.PanelRow,I=k.Button,B=k.ButtonGroup,T=wp.blockEditor,P=T.RichText,N=T.InnerBlocks,U=wp.compose.compose,z=wp.data,D=z.withDispatch,C=z.withSelect,M=wp.element,V=M.useState,F=M.useEffect;var L=U([C((e,t)=>({childTabIds:(0,e("core/block-editor").getBlockOrder)(t.clientId),rootId:t.clientId})),D((e,{childTabIds:t,clientId:r})=>{const n=e("core/block-editor"),o=n.removeBlock,a=n.moveBlocksDown,c=n.moveBlocksUp;return{onMoveDown(e){a([t[e]],r)},onMoveUp(e){c([t[e]],r)},removeBlock(e){o(t[e])},insertBlock:n.insertBlock}})])(e=>{const t=e.attributes,r=e.setAttributes,o=e.removeBlock,a=e.onMoveUp,c=e.onMoveDown,s=e.childTabIds,i=e.isSelected,l=e.rootId,u=e.insertBlock,b=t.tabs,p=t.initialTabSelected,f=t.className,d=t.blockInitialized,y=O(V(p||0),2),h=y[0],m=y[1];F(()=>{d||r({blockInitialized:!0,tabs:_()(b)})},[]);const g=e=>e===b.length-1,j=e=>{return h===e?React.createElement("div",{className:"ubc-accordion-tabs__tab-toolbar"},React.createElement(I,{onClick:t=>{t.preventDefault();const n=_()(b);var o=[n[e],n[e-1]];n[e-1]=o[0],n[e]=o[1],r({tabs:n}),a(e),m(e-1)},disabled:(t=e,0===t||b.length<=1)},React.createElement("span",{className:"dashicons dashicons-arrow-left-alt2"})),React.createElement(I,{onClick:t=>{t.preventDefault();const n=_()(b);var o=[n[e+1],n[e]];n[e]=o[0],n[e+1]=o[1],r({tabs:n}),c(e),m(e+1)},disabled:g(e)||b.length<=1},React.createElement("span",{className:"dashicons dashicons-arrow-right-alt2"})),React.createElement(I,{onClick:t=>{t.preventDefault();const n=b.filter((t,r)=>e!==r);r({tabs:n}),o(e),0!==n.length&&m(0)}},React.createElement("span",{className:"dashicons dashicons-trash"})),React.createElement(I,{onClick:function(){var e,t=(e=function*(e){e.preventDefault(),yield u(wp.blocks.createBlock("ubc/tab",{index:s.length}),s.length,l),r({tabs:[...b,{title:"Tab",id:v()}]})},function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){w(a,n,o,c,s,"next",e)}function s(e){w(a,n,o,c,s,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}()},React.createElement("span",{className:"dashicons dashicons-plus",style:{marginTop:"3px"}}))):null;var t};return React.createElement("section",{className:"ubc-accordion-tabs "+(f||"")},React.createElement("ul",{className:"ubc-accordion-tabs__tab-list",role:"tablist"},b.map((e,t)=>React.createElement("li",{role:"presentation",key:t},i?j(t):null,React.createElement("button",{role:"tab",id:"tab"+t,"aria-controls":`section${t} `,"aria-selected":t===h,href:"#section"+(t+1),className:"ubc-accordion-tabs__button"+(t===h?" is-selected":""),onClick:e=>{e.preventDefault(),m(t)}},React.createElement(P,{value:e.title,onChange:e=>((e,t)=>{const n=_()(b);n[e].title=t,r({tabs:n})})(t,e)}))))),React.createElement(n.Provider,{value:{currentTabSelected:h,childTabIds:s,tabs:b}},React.createElement(N,{template:b.map((function(e,t){return["ubc/tab",{index:t}]})),templateLock:!1,allowedBlocks:["ubc/tab"],renderAppender:!1})),React.createElement(R,null,React.createElement(A,{title:"Settings",initialOpen:!0},React.createElement(S,null,"Initial tab selected"),React.createElement(B,{style:{marginTop:"10px"}},b.map((e,t)=>React.createElement(I,{onClick:e=>{e.preventDefault(),r({initialTabSelected:t})},key:t,isPrimary:p===t,isDefault:p!==t},e.title))))))});const $=wp.blockEditor.InnerBlocks;var H=e=>{const t=e.attributes,r=t.tabs,n=t.initialTabSelected,o=t.className;return React.createElement("section",{className:"ubc-accordion-tabs "+(o||""),"data-selected-tab":n},React.createElement("ul",{className:"ubc-accordion-tabs__tab-list",role:"tablist"},r.map((e,t)=>React.createElement("li",{role:"presentation",key:t},React.createElement("a",{role:"tab","aria-controls":"section-"+t,"aria-selected":t===n,className:"ubc-accordion-tabs__tabs-trigger js-tabs-trigger",href:"#section-"+t},e.title)))),React.createElement($.Content,null))};var W=function(e){var t,r;return function(e){if("-"===e.substr(e.length-1))return e.substr(0,e.length-1);return e}(function(e){return e.replace(/ +/g,"-").replace(/-{2,}/g,"-")}((r=e.replace(/<[^>]+>/gi,""),t=function(){if(t)return t;var e=[{base:"-",letters:"–—"},{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹÐ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"OE",letters:"Œ"},{base:"oe",letters:"œ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}];t={};for(var r=0;r<e.length;r++)for(var n=e[r].letters,o=0;o<n.length;o++)t[n[o]]=e[r].base;return t}(),r.replace(/[^\u0000-\u007E]/g,(function(e){return t[e]||e}))).toLowerCase().replace(/[\/\.]/g,"-").replace(/[^\w\s-]+/g,"")))};const G=wp.blockEditor.InnerBlocks;function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){Y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const Z=wp.i18n.__;(0,wp.blocks.registerBlockType)("ubc/tabs",{title:Z("UBC Tabs Block","ubc-tabs"),description:Z("Add accessible tabs of content which convert to accordions on smaller screens.","ubc-tabs"),icon:()=>React.createElement("svg",{enableBackground:"new 0 0 32 32",height:"32px",id:"svg2",version:"1.1",viewBox:"0 0 32 32",width:"32px",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg"},React.createElement("g",{id:"background"},React.createElement("rect",{fill:"none",height:"32",width:"32",x:"0"})),React.createElement("g",{id:"tab"},React.createElement("path",{d:"M30,10V6h-8v4h-2V6h-8v4H10V6H0v20h32V10H30z M29.999,24.001H2V8h6v3.999h21.999V24.001z"}))),keywords:[Z("tabs"),Z("ubc-tabs")],category:"layout",attributes:j,edit:L,save:H,deprecated:[{attributes:{tabTitles:{type:"array",default:["Tab1","Tab2"]},initialTabSelected:{type:"number",default:0}},migrate:e=>J(J({},e),{},{tabs:e.tabTitles.map(e=>({title:e,id:v()})),blockInitialized:!1}),supports:{},save:e=>{const t=e.attributes,r=t.tabTitles,n=t.initialTabSelected,o=t.className;return React.createElement("section",{className:"ubc-accordion-tabs "+(o||""),"data-selected-tab":n},React.createElement("ul",{className:"ubc-accordion-tabs__tab-list",role:"tablist"},r.map((e,t)=>{const r=e.toLowerCase().replace(/ /g,"-");return React.createElement("li",{id:r,role:"presentation",key:t},React.createElement("a",{role:"tab",id:W(e),"aria-controls":`section${t+1} `,"aria-selected":t===n,className:"ubc-accordion-tabs__tabs-trigger js-tabs-trigger",href:"#section"+(t+1)},e))})),React.createElement(G.Content,null))}}]});r(111)}]);