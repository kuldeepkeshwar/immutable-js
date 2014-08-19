/**
 *  Copyright (c) 2014, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */
function t(){function t(t,e,r,n){var i;if(n){var u=n.prototype;i=$.create(u)}else i=t.prototype;return $.keys(e).forEach(function(t){i[t]=e[t]}),$.keys(r).forEach(function(e){t[e]=r[e]}),i.constructor=t,t.prototype=i,t}function e(t,e,r,n){return $.getPrototypeOf(e)[r].apply(t,n)}function r(t,r,n){e(t,r,"constructor",n)}function n(){return Object.create(ne)}function i(t){var e=Object.create(se);return e.__reversedIndices=t?t.__reversedIndices:!1,e}function u(t,e,r,n){var i=t.get?t.get(e[n],ve):ve;return i===ve?r:++n===e.length?i:u(i,e,r,n)}function s(t,e,r){return(0===t||null!=r&&-r>=t)&&(null==e||null!=r&&e>=r)}function a(t,e){return 0>t?Math.max(0,e+t):e?Math.min(e,t):t}function h(t,e){return null==t?e:0>t?Math.max(0,e+t):e?Math.min(e,t):t}function o(t){return t}function c(t,e){return[e,t]}function f(){return!0}function l(){return this}function _(t){return(t||0)+1}function v(t,e,r,n,i){var u=t.__makeSequence();return u.__iterateUncached=function(u,s,a){var h=0,o=t.__iterate(function(t,i,s){if(e.call(r,t,i,s)){if(u(t,n?i:h,s)===!1)return!1;h++}},s,a);return i?o:h},u}function g(t){return function(){return!t.apply(this,arguments)}}function p(t){return"string"==typeof t?JSON.stringify(t):t}function m(t,e){for(var r="";e;)1&e&&(r+=t),(e>>=1)&&(t+=t);return r}function d(t,e){return t>e?1:e>t?-1:0}function y(t){I(1/0!==t,"Cannot perform this action with an infinite sequence.")}function w(t,e){return t===e?0!==t||0!==e||1/t===1/e:t!==t?e!==e:t instanceof ee?t.equals(e):!1}function I(t,e){if(!t)throw Error(e)}function D(t,e,r){var n=t._rootData.updateIn(t._keyPath,e),i=t._keyPath||[];return t._onChange&&t._onChange.call(void 0,n,t._rootData,r?i.concat(r):i),new oe(n,t._keyPath,t._onChange)}function O(){}function b(t){for(var e=t.length,r=Array(e),n=0;e>n;n++)r[n]=t[n];return r}function M(t){return Se.value=t,Se}function k(t,e,r){var n=Object.create(me);return n.length=t,n._root=e,n.__ownerID=r,n}function S(t,e,r){var n=M(),i=x(t._root,t.__ownerID,0,W(e),e,r,n),u=t.length+(n.value?r===ve?-1:1:0);return t.__ownerID?(t.length=u,t._root=i,t):i?i===t._root?t:k(u,i):ge.empty()
}function x(t,e,r,n,i,u,s){return t?t.update(e,r,n,i,u,s):u===ve?t:(s&&(s.value=!0),new be(e,n,[i,u]))}function E(t){return t.constructor===be||t.constructor===De}function C(t,e,r,n,i){if(t.hash===n)return new De(e,n,[t.entry,i]);var u,s=t.hash>>>r&_e,a=n>>>r&_e,h=s===a?[C(t,e,r+fe,n,i)]:(u=new be(e,n,i),a>s?[t,u]:[u,t]);return new de(e,1<<s|1<<a,h)}function A(t,e,r){for(var n=[],i=0;r.length>i;i++){var u=r[i];u&&n.push(Array.isArray(u)?ee(u).fromEntries():ee(u))}return j(t,e,n)}function q(t){return function(e,r){return e&&e.mergeDeepWith?e.mergeDeepWith(t,r):t?t(e,r):r}}function j(t,e,r){return 0===r.length?t:t.withMutations(function(t){for(var n=e?function(r,n){var i=t.get(n,ve);t.set(n,i===ve?r:e(i,r))}:function(e,r){t.set(r,e)},i=0;r.length>i;i++)r[i].forEach(n)})}function P(t,e,r,n){var i=e[n],u=t.get?t.get(i,ve):ve;return u===ve&&(u=ge.empty()),I(t.set,"updateIn with invalid keyPath"),t.set(i,++n===e.length?r(u):P(u,e,r,n))}function U(t){return t-=t>>1&1431655765,t=(858993459&t)+(t>>2&858993459),t=t+(t>>4)&252645135,t+=t>>8,t+=t>>16,127&t}function z(t,e,r,n){var i=t.length+1;if(n&&e+1===i)return t[e]=r,t;for(var u=Array(i),s=0,a=0;i>a;a++)a===e?(u[a]=r,s=-1):u[a]=t[a+s];return u}function R(t,e,r){var n=t.length-1;if(r&&e===n)return t.pop(),t;for(var i=Array(n),u=0,s=0;n>s;s++)s===e&&(u=1),i[s]=t[s+u];return i}function W(t){if(!t)return 0;if(t===!0)return 1;var e=typeof t;if("number"===e){if((0|t)===t)return t%xe;t=""+t,e="string"}if("string"===e)return t.length>Ee?J(t):B(t);if(t.hashCode&&"function"==typeof t.hashCode)return t.hashCode();throw Error("Unable to hash: "+t)}function J(t){var e=qe[t];return null==e&&(e=B(t),Ae===Ce&&(Ae=0,qe={}),Ae++,qe[t]=e),e}function B(t){for(var e=0,r=0;t.length>r;r++)e=31*e+t.charCodeAt(r);return e%xe}function L(t,e,r,n,i,u){var s=Object.create(Re);return s.length=e-t,s._origin=t,s._size=e,s._level=r,s._root=n,s._tail=i,s.__ownerID=u,s}function V(t,e){if(e>=G(t._size))return t._tail;if(1<<t._level+fe>e){for(var r=t._root,n=t._level;r&&n>0;)r=r.array[e>>>n&_e],n-=fe;return r
}}function K(t,e,r){var n=t.__ownerID||new O,i=t._origin,u=t._size,s=i+e,a=null==r?u:0>r?u+r:i+r;if(s===i&&a===u)return t;if(s>=a)return t.clear();for(var h=t._level,o=t._root,c=0;0>s+c;)o=new We(o.array.length?[,o]:[],n),h+=fe,c+=1<<h;c&&(s+=c,i+=c,a+=c,u+=c);for(var f=G(u),l=G(a);l>=1<<h+fe;)o=new We(o.array.length?[o]:[],n),h+=fe;var _=t._tail,v=f>l?V(t,a-1):l>f?new We([],n):_;if(l>f&&u>s&&_.array.length){o=o.ensureOwner(n);for(var g=o,p=h;p>fe;p-=fe){var m=f>>>p&_e;g=g.array[m]=g.array[m]?g.array[m].ensureOwner(n):new We([],n)}g.array[f>>>fe&_e]=_}if(u>a&&(v=v.removeAfter(n,0,a)),s>=l)s-=l,a-=l,h=fe,o=Ve,v=v.removeBefore(n,0,s);else if(s>i||f>l){var d,y;c=0;do d=s>>>h&_e,y=l-1>>>h&_e,d===y&&(d&&(c+=(1<<h)*d),h-=fe,o=o&&o.array[d]);while(o&&d===y);o&&s>i&&(o=o.removeBefore(n,h,s-c)),o&&f>l&&(o=o.removeAfter(n,h,l-c)),c&&(s-=c,a-=c),o=o||Ve}return t.__ownerID?(t.length=a-s,t._origin=s,t._size=a,t._level=h,t._root=o,t._tail=v,t):L(s,a,h,o,v)}function N(t,e,r){for(var n=[],i=0;r.length>i;i++){var u=r[i];u&&n.push(u.forEach?u:ee(u))}var s=Math.max.apply(null,n.map(function(t){return t.length||0}));return s>t.length&&(t=t.setLength(s)),j(t,e,n)}function F(t,e){return I(t>=0,"Index out of bounds"),t+e}function G(t){return le>t?0:t-1>>>fe<<fe}function H(t,e){var r=Object.create(Fe);return r.length=t?t.length:0,r._map=t,r.__ownerID=e,r}function Q(t,e,r){var n=Object.create(He.prototype);return n.length=t?t.length:0,n._map=t,n._vector=e,n.__ownerID=r,n}function T(t,e,r){var n=Object.create(Object.getPrototypeOf(t));return n._map=e,n.__ownerID=r,n}function X(t,e){return e?Y(e,t,"",{"":t}):Z(t)}function Y(t,e,r,n){return e&&(Array.isArray(e)||e.constructor===Object)?t.call(n,r,ee(e).map(function(r,n){return Y(t,r,n,e)})):e}function Z(t){if(t){if(Array.isArray(t))return ee(t).map(Z).toVector();if(t.constructor===Object)return ee(t).map(Z).toMap()}return t}var $=Object,te={};te.createClass=t,te.superCall=e,te.defaultSuperCall=r;var ee=function(t){return re.from(1===arguments.length?t:Array.prototype.slice.call(arguments))},re=ee;
te.createClass(ee,{toString:function(){return this.__toString("Seq {","}")},__toString:function(t,e){return 0===this.length?t+e:t+" "+this.map(this.__toStringMapper).join(", ")+" "+e},__toStringMapper:function(t,e){return e+": "+p(t)},toJS:function(){return this.map(function(t){return t instanceof re?t.toJS():t}).__toJS()},toArray:function(){y(this.length);var t=Array(this.length||0);return this.values().forEach(function(e,r){t[r]=e}),t},toObject:function(){y(this.length);var t={};return this.forEach(function(e,r){t[r]=e}),t},toVector:function(){return y(this.length),Ue.from(this)},toMap:function(){return y(this.length),ge.from(this)},toOrderedMap:function(){return y(this.length),He.from(this)},toSet:function(){return y(this.length),Ke.from(this)},equals:function(t){if(this===t)return!0;if(!(t instanceof re))return!1;if(null!=this.length&&null!=t.length){if(this.length!==t.length)return!1;if(0===this.length&&0===t.length)return!0}return this.__deepEquals(t)},__deepEquals:function(t){var e=this.cacheResult().entries().toArray(),r=0;return t.every(function(t,n){var i=e[r++];return w(n,i[0])&&w(t,i[1])})},join:function(t){t=t||",";var e="",r=!0;return this.forEach(function(n){r?(r=!1,e+=n):e+=t+n}),e},count:function(t,e){return t?this.filter(t,e).count():(null==this.length&&(this.length=this.forEach(f)),this.length)},countBy:function(t){var e=this;return He.empty().withMutations(function(r){e.forEach(function(e,n,i){r.update(t(e,n,i),_)})})},concat:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];var r=[this].concat(t.map(function(t){return re(t)})),n=this.__makeSequence();return n.length=r.reduce(function(t,e){return null!=t&&null!=e.length?t+e.length:void 0},0),n.__iterateUncached=function(t,e){for(var n,i=0,u=r.length-1,s=0;u>=s&&!n;s++){var a=r[e?u-s:s];i+=a.__iterate(function(e,r,i){return t(e,r,i)===!1?(n=!0,!1):void 0},e)}return i},n},reverse:function(){var t=this,e=t.__makeSequence();return e.length=t.length,e.__iterateUncached=function(e,r){return t.__iterate(e,!r)},e.reverse=function(){return t
},e},keys:function(){return this.flip().values()},values:function(){var t=this,e=i(t);return e.length=t.length,e.values=l,e.__iterateUncached=function(e,r,n){if(n&&null==this.length)return this.cacheResult().__iterate(e,r,n);var i,u=0;return n?(u=this.length-1,i=function(t,r,n){return e(t,u--,n)!==!1}):i=function(t,r,n){return e(t,u++,n)!==!1},t.__iterate(i,r),n?this.length:u},e},entries:function(){var t=this;if(t._cache)return re(t._cache);var e=t.map(c).values();return e.fromEntries=function(){return t},e},forEach:function(t,e){return this.__iterate(e?t.bind(e):t)},reduce:function(t,e,r){var n=e;return this.forEach(function(e,i,u){n=t.call(r,n,e,i,u)}),n},reduceRight:function(t,e,r){return this.reverse(!0).reduce(t,e,r)},every:function(t,e){var r=!0;return this.forEach(function(n,i,u){return t.call(e,n,i,u)?void 0:(r=!1,!1)}),r},some:function(t,e){return!this.every(g(t),e)},first:function(){return this.find(f)},last:function(){return this.findLast(f)},rest:function(){return this.slice(1)},butLast:function(){return this.slice(0,-1)},has:function(t){return this.get(t,ve)!==ve},get:function(t,e){return this.find(function(e,r){return w(r,t)},null,e)},getIn:function(t,e){return t&&0!==t.length?u(this,t,e,0):this},contains:function(t){return this.find(function(e){return w(e,t)},null,ve)!==ve},find:function(t,e,r){var n=r;return this.forEach(function(r,i,u){return t.call(e,r,i,u)?(n=r,!1):void 0}),n},findKey:function(t,e){var r;return this.forEach(function(n,i,u){return t.call(e,n,i,u)?(r=i,!1):void 0}),r},findLast:function(t,e,r){return this.reverse(!0).find(t,e,r)},findLastKey:function(t,e){return this.reverse(!0).findKey(t,e)},flip:function(){var t=this,e=n();return e.length=t.length,e.flip=function(){return t},e.__iterateUncached=function(e,r){return t.__iterate(function(t,r,n){return e(r,t,n)!==!1},r)},e},map:function(t,e){var r=this,n=r.__makeSequence();return n.length=r.length,n.__iterateUncached=function(n,i){return r.__iterate(function(r,i,u){return n(t.call(e,r,i,u),i,u)!==!1},i)},n},mapKeys:function(t,e){var r=this,n=r.__makeSequence();
return n.length=r.length,n.__iterateUncached=function(n,i){return r.__iterate(function(r,i,u){return n(r,t.call(e,i,r,u),u)!==!1},i)},n},filter:function(t,e){return v(this,t,e,!0,!1)},slice:function(t,e){if(s(t,e,this.length))return this;var r=a(t,this.length),n=h(e,this.length);if(r!==r||n!==n)return this.entries().slice(t,e).fromEntries();var i=0===r?this:this.skip(r);return null==n||n===this.length?i:i.take(n-r)},take:function(t){var e=0,r=this.takeWhile(function(){return e++<t});return r.length=this.length&&Math.min(this.length,t),r},takeLast:function(t,e){return this.reverse(e).take(t).reverse(e)},takeWhile:function(t,e){var r=this,n=r.__makeSequence();return n.__iterateUncached=function(n,i,u){if(i)return this.cacheResult().__iterate(n,i,u);var s=0;return r.__iterate(function(r,i,u){return t.call(e,r,i,u)&&n(r,i,u)!==!1?void s++:!1},i,u),s},n},takeUntil:function(t,e,r){return this.takeWhile(g(t),e,r)},skip:function(t,e){if(0===t)return this;var r=0,n=this.skipWhile(function(){return r++<t},null,e);return n.length=this.length&&Math.max(0,this.length-t),n},skipLast:function(t,e){return this.reverse(e).skip(t).reverse(e)},skipWhile:function(t,e){var r=this,n=r.__makeSequence();return n.__iterateUncached=function(n,i,u){if(i)return this.cacheResult().__iterate(n,i,u);var s=!0,a=0;return r.__iterate(function(r,i,u){if(!s||!(s=t.call(e,r,i,u))){if(n(r,i,u)===!1)return!1;a++}},i,u),a},n},skipUntil:function(t,e,r){return this.skipWhile(g(t),e,r)},groupBy:function(t){var e=this,r=He.empty().withMutations(function(r){e.forEach(function(e,n,i){var u=t(e,n,i),s=r.get(u,ve);s===ve&&(s=[],r.set(u,s)),s.push([n,e])})});return r.map(function(t){return re(t).fromEntries()})},sort:function(t,e){return this.sortBy(o,t,e)},sortBy:function(t,e){e=e||d;var r=this;return re(this.entries().entries().toArray().sort(function(n,i){return e(t(n[1][1],n[1][0],r),t(i[1][1],i[1][0],r))||n[0]-i[0]})).fromEntries().values().fromEntries()},cacheResult:function(){return!this._cache&&this.__iterateUncached&&(y(this.length),this._cache=this.entries().toArray(),null==this.length&&(this.length=this._cache.length)),this
},__iterate:function(t,e,r){if(!this._cache)return this.__iterateUncached(t,e,r);var n=this.length-1,i=this._cache,u=this;if(e)for(var s=i.length-1;s>=0;s--){var a=i[s];if(t(a[1],r?a[0]:n-a[0],u)===!1)break}else i.every(r?function(e){return t(e[1],n-e[0],u)!==!1}:function(e){return t(e[1],e[0],u)!==!1});return this.length},__makeSequence:function(){return n()}},{from:function(t){if(t instanceof re)return t;if(!Array.isArray(t)){if(t&&t.constructor===Object)return new ae(t);t=[t]}return new he(t)}});var ne=ee.prototype;ne.toJSON=ne.toJS,ne.__toJS=ne.toObject,ne.inspect=ne.toSource=function(){return""+this};var ie=function(){te.defaultSuperCall(this,ue.prototype,arguments)},ue=ie;te.createClass(ie,{toString:function(){return this.__toString("Seq [","]")},toArray:function(){y(this.length);var t=Array(this.length||0);return t.length=this.forEach(function(e,r){t[r]=e}),t},fromEntries:function(){var t=this,e=n();return e.length=t.length,e.entries=function(){return t},e.__iterateUncached=function(e,r,n){return t.__iterate(function(t,r,n){return e(t[1],t[0],n)},r,n)},e},join:function(t){t=t||",";var e="",r=0;return this.forEach(function(n,i){var u=i-r;r=i,e+=(1===u?t:m(t,u))+n}),this.length&&this.length-1>r&&(e+=m(t,this.length-1-r)),e},concat:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];var r=[this].concat(t).map(function(t){return ee(t)}),n=this.__makeSequence();return n.length=r.reduce(function(t,e){return null!=t&&null!=e.length?t+e.length:void 0},0),n.__iterateUncached=function(t,e,n){if(n&&!this.length)return this.cacheResult().__iterate(t,e,n);for(var i,u=0,s=n&&this.length-1,a=r.length-1,h=0;a>=h&&!i;h++){var o=r[e?a-h:h];o instanceof ue||(o=o.values()),u+=o.__iterate(function(e,r,a){return r+=u,t(e,n?s-r:r,a)===!1?(i=!0,!1):void 0},e)}return u},n},reverse:function(t){var e=this,r=e.__makeSequence();return r.length=e.length,r.__reversedIndices=!!(t^e.__reversedIndices),r.__iterateUncached=function(r,n,i){return e.__iterate(r,!n,i^t)},r.reverse=function(r){return t===r?e:se.reverse.call(this,r)
},r},values:function(){var t=te.superCall(this,ue.prototype,"values",[]);return t.length=void 0,t},filter:function(t,e,r){var n=v(this,t,e,r,r);return r&&(n.length=this.length),n},indexOf:function(t){return this.findIndex(function(e){return w(e,t)})},lastIndexOf:function(t){return this.reverse(!0).indexOf(t)},findIndex:function(t,e){var r=this.findKey(t,e);return null==r?-1:r},findLastIndex:function(t,e){return this.reverse(!0).findIndex(t,e)},slice:function(t,e,r){var n=this;if(s(t,e,n.length))return n;var i=n.__makeSequence(),u=a(t,n.length),o=h(e,n.length);return i.length=n.length&&(r?n.length:o-u),i.__reversedIndices=n.__reversedIndices,i.__iterateUncached=function(i,s,c){if(s)return this.cacheResult().__iterate(i,s,c);var f=this.__reversedIndices^c;if(u!==u||o!==o||f&&null==n.length){var l=n.count();u=a(t,l),o=h(e,l)}var _=f?n.length-o:u,v=f?n.length-u:o,g=n.__iterate(function(t,e,n){return f?null!=v&&e>=v||e>=_&&i(t,r?e:e-_,n)!==!1:_>e||(null==v||v>e)&&i(t,r?e:e-_,n)!==!1},s,c);return null!=this.length?this.length:r?g:Math.max(0,g-_)},i},splice:function(t,e){for(var r=[],n=2;arguments.length>n;n++)r[n-2]=arguments[n];return 0===e&&0===r.length?this:this.slice(0,t).concat(r,this.slice(t+e))},takeWhile:function(t,e,r){var n=this,i=n.__makeSequence();return i.__iterateUncached=function(u,s,a){if(s)return this.cacheResult().__iterate(u,s,a);var h=0,o=!0,c=n.__iterate(function(r,n,i){return t.call(e,r,n,i)&&u(r,n,i)!==!1?void(h=n):(o=!1,!1)},s,a);return r?i.length:o?c:h+1},r&&(i.length=this.length),i},skipWhile:function(t,e,r){var n=this,i=n.__makeSequence();return r&&(i.length=this.length),i.__iterateUncached=function(i,u,s){if(u)return this.cacheResult().__iterate(i,u,s);var a=n.__reversedIndices^s,h=!0,o=0,c=n.__iterate(function(n,u,a){return h&&(h=t.call(e,n,u,a),h||(o=u)),h||i(n,s||r?u:u-o,a)!==!1},u,s);return r?c:a?o+1:c-o},i},groupBy:function(t,e,r){var n=this,i=He.empty().withMutations(function(e){n.forEach(function(i,u,s){var a=t(i,u,s),h=e.get(a,ve);h===ve&&(h=Array(r?n.length:0),e.set(a,h)),r?h[u]=i:h.push(i)
})});return i.map(function(t){return ee(t)})},sortBy:function(t,e,r){var n=te.superCall(this,ue.prototype,"sortBy",[t,e]);return r||(n=n.values()),n.length=this.length,n},__makeSequence:function(){return i(this)}},{},ee);var se=ie.prototype;se.__toJS=se.toArray,se.__toStringMapper=p;var ae=function(t){var e=Object.keys(t);this._object=t,this._keys=e,this.length=e.length};te.createClass(ae,{toObject:function(){return this._object},get:function(t,e){return void 0===e||this.has(t)?this._object[t]:e},has:function(t){return this._object.hasOwnProperty(t)},__iterate:function(t,e){for(var r=this._object,n=this._keys,i=n.length-1,u=0;i>=u;u++){var s=e?i-u:u;if(t(r[n[s]],n[s],r)===!1)break}return u}},{},ee);var he=function(t){this._array=t,this.length=t.length};te.createClass(he,{toArray:function(){return this._array},__iterate:function(t,e,r){var n=this._array,i=n.length-1,u=-1;if(e){for(var s=i;s>=0;s--){if(n.hasOwnProperty(s)&&t(n[s],r?s:i-s,n)===!1)return u+1;u=s}return n.length}var a=n.every(function(e,s){return t(e,r?i-s:s,n)===!1?!1:(u=s,!0)});return a?n.length:u+1}},{},ie),he.prototype.get=ae.prototype.get,he.prototype.has=ae.prototype.has;var oe=function(t,e,r){this._rootData=t,this._keyPath=e,this._onChange=r},ce=oe;te.createClass(oe,{get:function(t,e){var r=this._rootData.getIn(this._keyPath,ge.empty());return t?r.get(t,e):r},set:function(t,e){return D(this,function(r){return r.set(t,e)},t)},"delete":function(t){return D(this,function(e){return e.delete(t)},t)},update:function(t,e){var r;return"function"==typeof t?(r=t,t=void 0):r=function(r){return r.update(t,e)},D(this,r,t)},cursor:function(t){return t&&!Array.isArray(t)&&(t=[t]),t&&0!==t.length?new ce(this._rootData,this._keyPath?this._keyPath.concat(t):t,this._onChange):this}},{});var fe=5,le=1<<fe,_e=le-1,ve={},ge=function(t){return t&&t.constructor===pe?t:t&&0!==t.length?pe.empty().merge(t):pe.empty()},pe=ge;te.createClass(ge,{toString:function(){return this.__toString("Map {","}")},get:function(t,e){return this._root?this._root.get(0,W(t),t,e):e},set:function(t,e){return S(this,t,e)
},"delete":function(t){return S(this,t,ve)},update:function(t,e){return this.set(t,e(this.get(t)))},clear:function(){return this.__ownerID?(this.length=0,this._root=null,this):pe.empty()},merge:function(){return A(this,null,arguments)},mergeWith:function(t){for(var e=[],r=1;arguments.length>r;r++)e[r-1]=arguments[r];return A(this,t,e)},mergeDeep:function(){return A(this,q(null),arguments)},mergeDeepWith:function(t){for(var e=[],r=1;arguments.length>r;r++)e[r-1]=arguments[r];return A(this,q(t),e)},updateIn:function(t,e){return t&&0!==t.length?P(this,t,e,0):e(this)},cursor:function(t,e){return e||"function"!=typeof t||(e=t,t=null),t&&!Array.isArray(t)&&(t=[t]),new oe(this,t,e)},withMutations:function(t){var e=this.asMutable();return t(e),e.__ensureOwner(this.__ownerID)},asMutable:function(){return this.__ownerID?this:this.__ensureOwner(new O)},asImmutable:function(){return this.__ensureOwner()},__iterate:function(t,e){var r=this;if(!r._root)return 0;var n=0;return this._root.iterate(function(e){return t(e[1],e[0],r)===!1?!1:void n++},e),n},__deepEqual:function(t){var e=this;return t.every(function(t,r){return w(e.get(r,ve),t)})},__ensureOwner:function(t){return t===this.__ownerID?this:t?k(this.length,this._root,t):(this.__ownerID=t,this)}},{empty:function(){return ke||(ke=k(0))}},ee);var me=ge.prototype;ge.from=ge;var de=function(t,e,r){this.ownerID=t,this.bitmap=e,this.nodes=r},ye=de;te.createClass(de,{get:function(t,e,r,n){var i=1<<(e>>>t&_e),u=this.bitmap;return 0===(u&i)?n:this.nodes[U(u&i-1)].get(t+fe,e,r,n)},update:function(t,e,r,n,i,u){var s=r>>>e&_e,a=1<<s,h=this.bitmap,o=0!==(h&a);if(!o&&i===ve)return this;var c=U(h&a-1),f=this.nodes,l=o?f[c]:null,_=x(l,t,e+fe,r,n,i,u);if(_===l)return this;if(!o&&_&&f.length>=je){for(var v=0,g=[],p=0;0!==h;p++,h>>>=1)1&h&&(g[p]=f[v++]);return g[s]=_,new we(t,v+1,g)}if(o&&!_&&2===f.length&&E(f[1^c]))return f[1^c];if(o&&_&&1===f.length&&E(_))return _;var m,d=t&&t===this.ownerID,y=h;return o?_?(m=d?f:b(f),m[c]=_):(m=R(f,c,d),y^=a):(m=z(f,c,_,d),y|=a),d?(this.bitmap=y,this.nodes=m,this):new ye(t,y,m)
},iterate:function(t,e){for(var r=this.nodes,n=0,i=r.length-1;i>=n;n++)if(r[e?i-n:n].iterate(t,e)===!1)return!1}},{});var we=function(t,e,r){this.ownerID=t,this.count=e,this.nodes=r},Ie=we;te.createClass(we,{get:function(t,e,r,n){var i=e>>>t&_e,u=this.nodes[i];return u?u.get(t+fe,e,r,n):n},update:function(t,e,r,n,i,u){var s=r>>>e&_e,a=i===ve,h=this.nodes,o=h[s];if(a&&!o)return this;var c=x(o,t,e+fe,r,n,i,u);if(c===o)return this;var f=this.count;if(o){if(!c&&(f--,Pe>=f)){for(var l=[],_=0,v=0,g=1,p=h.length;p>v;v++,g<<=1){var m=h[v];v!==s&&m&&(l.push(m),_|=g)}return new de(t,_,l)}}else f++;var d=t&&t===this.ownerID,y=d?h:b(h);return y[s]=c,t&&t===this.ownerID?(this.count=f,this.nodes=y,this):new Ie(t,f,y)},iterate:function(t,e){for(var r=this.nodes,n=0,i=r.length-1;i>=n;n++){var u=r[e?i-n:n];if(u&&u.iterate(t,e)===!1)return!1}}},{});var De=function(t,e,r){this.ownerID=t,this.hash=e,this.entries=r},Oe=De;te.createClass(De,{get:function(t,e,r,n){for(var i=this.entries,u=0,s=i.length;s>u;u++)if(r===i[u][0])return i[u][1];return n},update:function(t,e,r,n,i,u){var s=i===ve;if(r!==this.hash)return s?this:(u&&(u.value=!0),C(this,t,e,r,[n,i]));for(var a=this.entries,h=0,o=a.length;o>h&&n!==a[h][0];h++);var c=o>h;if(s&&!c)return this;if((s||!c)&&u&&(u.value=!0),s&&2===o)return new be(t,this.hash,a[1^h]);var f=t&&t===this.ownerID,l=f?a:b(a);return c?s?h===o-1?l.pop():l[h]=l.pop():l[h]=[n,i]:l.push([n,i]),f?(this.entries=l,this):new Oe(t,this.hash,l)},iterate:function(t,e){for(var r=this.entries,n=0,i=r.length-1;i>=n;n++)if(t(r[e?i-n:n])===!1)return!1}},{});var be=function(t,e,r){this.ownerID=t,this.hash=e,this.entry=r},Me=be;te.createClass(be,{get:function(t,e,r,n){return r===this.entry[0]?this.entry[1]:n},update:function(t,e,r,n,i,u){var s=n===this.entry[0];return i===ve?(s&&u&&(u.value=!0),s?null:this):s?i===this.entry[1]?this:t&&t===this.ownerID?(this.entry[1]=i,this):new Me(t,r,[n,i]):(u&&(u.value=!0),C(this,t,e,r,[n,i]))},iterate:function(t){return t(this.entry)}},{});var ke,Se={value:!1},xe=4294967296,Ee=16,Ce=255,Ae=0,qe={},je=le/2,Pe=le/4,Ue=function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];
return ze.from(t)},ze=Ue;te.createClass(Ue,{toString:function(){return this.__toString("Vector [","]")},get:function(t,e){if(t=F(t,this._origin),t>=this._size)return e;var r=V(this,t),n=t&_e;return r&&(void 0===e||r.array.hasOwnProperty(n))?r.array[n]:e},first:function(){return this.get(0)},last:function(){return this.get(this.length?this.length-1:0)},set:function(t,e){var r=G(this._size);if(t>=this.length)return this.withMutations(function(r){return K(r,0,t+1).set(t,e)});if(this.get(t,ve)===e)return this;if(t=F(t,this._origin),t>=r){var n=this._tail.ensureOwner(this.__ownerID);n.array[t&_e]=e;var i=t>=this._size?t+1:this._size;return this.__ownerID?(this.length=i-this._origin,this._size=i,this._tail=n,this):L(this._origin,i,this._level,this._root,n)}for(var u=this._root.ensureOwner(this.__ownerID),s=u,a=this._level;a>0;a-=fe){var h=t>>>a&_e;s=s.array[h]=s.array[h]?s.array[h].ensureOwner(this.__ownerID):new We([],this.__ownerID)}return s.array[t&_e]=e,this.__ownerID?(this._root=u,this):L(this._origin,this._size,this._level,u,this._tail)},"delete":function(t){if(!this.has(t))return this;var e=G(this._size);if(t=F(t,this._origin),t>=e){var r=this._tail.ensureOwner(this.__ownerID);return delete r.array[t&_e],this.__ownerID?(this._tail=r,this):L(this._origin,this._size,this._level,this._root,r)}for(var n=this._root.ensureOwner(this.__ownerID),i=n,u=this._level;u>0;u-=fe){var s=t>>>u&_e;i=i.array[s]=i.array[s].ensureOwner(this.__ownerID)}return delete i.array[t&_e],this.__ownerID?(this._root=n,this):L(this._origin,this._size,this._level,n,this._tail)},clear:function(){return this.__ownerID?(this.length=this._origin=this._size=0,this._level=fe,this._root=this._tail=Ve,this):ze.empty()},push:function(){var t=arguments,e=this.length;return this.withMutations(function(r){K(r,0,e+t.length);for(var n=0;t.length>n;n++)r.set(e+n,t[n])})},pop:function(){return K(this,0,-1)},unshift:function(){var t=arguments;return this.withMutations(function(e){K(e,-t.length);for(var r=0;t.length>r;r++)e.set(r,t[r])})},shift:function(){return K(this,1)
},merge:function(){return N(this,null,arguments)},mergeWith:function(t){for(var e=[],r=1;arguments.length>r;r++)e[r-1]=arguments[r];return N(this,t,e)},mergeDeep:function(){return N(this,q(null),arguments)},mergeDeepWith:function(t){for(var e=[],r=1;arguments.length>r;r++)e[r-1]=arguments[r];return N(this,q(t),e)},setLength:function(t){return K(this,0,t)},slice:function(t,e,r){var n=te.superCall(this,ze.prototype,"slice",[t,e,r]);if(!r&&n!==this){var i=this,u=i.length;n.toVector=function(){return K(i,0>t?Math.max(0,u+t):u?Math.min(u,t):t,null==e?u:0>e?Math.max(0,u+e):u?Math.min(u,e):e)}}return n},iterator:function(){return new Be(this,this._origin,this._size,this._level,this._root,this._tail)},__iterate:function(t,e,r){var n=this,i=0,u=n.length-1;r^=e;var s,a=function(e,s){return t(e,r?u-s:s,n)===!1?!1:(i=s,!0)},h=G(this._size);return s=e?this._tail.iterate(0,h-this._origin,this._size-this._origin,a,e)&&this._root.iterate(this._level,-this._origin,h-this._origin,a,e):this._root.iterate(this._level,-this._origin,h-this._origin,a,e)&&this._tail.iterate(0,h-this._origin,this._size-this._origin,a,e),(s?u:e?u-i:i)+1},__deepEquals:function(t){var e=this.iterator();return t.every(function(t,r){var n=e.next().value;return n&&r===n[0]&&w(t,n[1])})},__ensureOwner:function(t){return t===this.__ownerID?this:t?L(this._origin,this._size,this._level,this._root,this._tail,t):(this.__ownerID=t,this)}},{empty:function(){return Le||(Le=L(0,0,fe,Ve,Ve))},from:function(t){if(t&&t.constructor===ze)return t;if(!t||0===t.length)return ze.empty();var e=Array.isArray(t);return t.length>0&&le>t.length?L(0,t.length,fe,Ve,new We(e?t.slice():ee(t).toArray())):(e||(t=ee(t),t instanceof ie||(t=t.values())),ze.empty().merge(t))}},ie);var Re=Ue.prototype;Re["@@iterator"]=Re.__iterator__,Re.update=me.update,Re.updateIn=me.updateIn,Re.cursor=me.cursor,Re.withMutations=me.withMutations,Re.asMutable=me.asMutable,Re.asImmutable=me.asImmutable;var We=function(t,e){this.array=t,this.ownerID=e},Je=We;te.createClass(We,{ensureOwner:function(t){return t&&t===this.ownerID?this:new Je(this.array.slice(),t)
},removeBefore:function(t,e,r){if(r===e?1<<e:0||0===this.array.length)return this;var n=r>>>e&_e;if(n>=this.array.length)return new Je([],t);var i,u=0===n;if(e>0){var s=this.array[n];if(i=s&&s.removeBefore(t,e-fe,r),i===s&&u)return this}if(u&&!i)return this;var a=this.ensureOwner();if(!u)for(var h=0;n>h;h++)delete a.array[h];return i&&(a.array[n]=i),a},removeAfter:function(t,e,r){if(r===e?1<<e:0||0===this.array.length)return this;var n=r-1>>>e&_e;if(n>=this.array.length)return this;var i,u=n===this.array.length-1;if(e>0){var s=this.array[n];if(i=s&&s.removeAfter(t,e-fe,r),i===s&&u)return this}if(u&&!i)return this;var a=this.ensureOwner();return u||(a.array.length=n+1),i&&(a.array[n]=i),a},iterate:function(t,e,r,n,i){if(0===t){if(i){for(var u=this.array.length-1;u>=0;u--)if(this.array.hasOwnProperty(u)){var s=u+e;if(s>=0&&r>s&&n(this.array[u],s)===!1)return!1}return!0}return this.array.every(function(t,i){var u=i+e;return 0>u||u>=r||n(t,u)!==!1})}var a=1<<t,h=t-fe;if(i){for(var o=this.array.length-1;o>=0;o--){var c=e+o*a;if(r>c&&c+a>0&&this.array.hasOwnProperty(o)&&!this.array[o].iterate(h,c,r,n,i))return!1}return!0}return this.array.every(function(t,u){var s=e+u*a;return s>=r||0>=s+a||t.iterate(h,s,r,n,i)})}},{});var Be=function(t,e,r,n,i,u){var s=G(r);this._stack={node:i.array,level:n,offset:-e,max:s-e,__prev:{node:u.array,level:0,offset:s-e,max:r-e}}};te.createClass(Be,{next:function(){var t=this._stack;t:for(;t;){if(0===t.level)for(t.rawIndex||(t.rawIndex=0);t.node.length>t.rawIndex;){var e=t.rawIndex+t.offset;if(e>=0&&t.max>e&&t.node.hasOwnProperty(t.rawIndex)){var r=t.node[t.rawIndex];return t.rawIndex++,{value:[e,r],done:!0}}t.rawIndex++}else{var n=1<<t.level;for(t.levelIndex||(t.levelIndex=0);t.node.length>t.levelIndex;){var i=t.offset+t.levelIndex*n;if(i+n>0&&t.max>i&&t.node.hasOwnProperty(t.levelIndex)){var u=t.node[t.levelIndex].array;t.levelIndex++,t=this._stack={node:u,level:t.level-fe,offset:i,max:t.max,__prev:t};continue t}t.levelIndex++}}t=this._stack=this._stack.__prev}return{done:!0}}},{});var Le,Ve=new We([]),Ke=function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];
return Ne.from(t)},Ne=Ke;te.createClass(Ke,{toString:function(){return this.__toString("Set {","}")},has:function(t){return this._map?this._map.has(t):!1},get:function(t,e){return this.has(t)?t:e},add:function(t){if(null==t)return this;var e=this._map;return e||(e=ge.empty().__ensureOwner(this.__ownerID)),e=e.set(t,null),this.__ownerID?(this.length=e.length,this._map=e,this):e===this._map?this:H(e)},"delete":function(t){if(null==t||null==this._map)return this;var e=this._map.delete(t);return 0===e.length?this.clear():this.__ownerID?(this.length=e.length,this._map=e,this):e===this._map?this:H(e)},clear:function(){return this.__ownerID?(this.length=0,this._map=null,this):Ne.empty()},union:function(){var t=arguments;return 0===t.length?this:this.withMutations(function(e){for(var r=0;t.length>r;r++){var n=t[r];n=n.forEach?n:ee(n),n.forEach(function(t){return e.add(t)})}})},intersect:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];if(0===t.length)return this;t=t.map(function(t){return ee(t)});var r=this;return this.withMutations(function(e){r.forEach(function(r){t.every(function(t){return t.contains(r)})||e.delete(r)})})},subtract:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];if(0===t.length)return this;t=t.map(function(t){return ee(t)});var r=this;return this.withMutations(function(e){r.forEach(function(r){t.some(function(t){return t.contains(r)})&&e.delete(r)})})},isSubset:function(t){return t=ee(t),this.every(function(e){return t.contains(e)})},isSuperset:function(t){var e=this;return t=ee(t),t.every(function(t){return e.contains(t)})},__iterate:function(t,e){var r=this;return this._map?this._map.__iterate(function(e,n){return t(n,n,r)},e):0},__deepEquals:function(t){return!(this._map||t._map)||this._map.equals(t._map)},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t);return t?H(e,t):(this.__ownerID=t,this._map=e,this)}},{empty:function(){return Ge||(Ge=H())},from:function(t){return t&&t.constructor===Ne?t:t&&0!==t.length?Ne.empty().union(t):Ne.empty()
},fromKeys:function(t){return Ne.from(ee(t).flip())}},ee);var Fe=Ke.prototype;Fe.contains=Fe.has,Fe.withMutations=ge.prototype.withMutations,Fe.asMutable=ge.prototype.asMutable,Fe.asImmutable=ge.prototype.asImmutable,Fe.__toJS=ie.prototype.__toJS,Fe.__toStringMapper=ie.prototype.__toStringMapper;var Ge,He=function(t){return t&&t.constructor===Qe?t:t&&0!==t.length?Qe.empty().merge(t):Qe.empty()},Qe=He;te.createClass(He,{toString:function(){return this.__toString("OrderedMap {","}")},get:function(t,e){if(null!=t&&this._map){var r=this._map.get(t);if(null!=r)return this._vector.get(r)[1]}return e},clear:function(){return this.__ownerID?(this.length=0,this._map=this._vector=null,this):Qe.empty()},set:function(t,e){if(null==t)return this;var r=this._map,n=this._vector;if(r){var i=r.get(t);null==i?(r=r.set(t,n.length),n=n.push([t,e])):n.get(i)[1]!==e&&(n=n.set(i,[t,e]))}else n=Ue.empty().__ensureOwner(this.__ownerID).set(0,[t,e]),r=ge.empty().__ensureOwner(this.__ownerID).set(t,0);return this.__ownerID?(this.length=r.length,this._map=r,this._vector=n,this):n===this._vector?this:Q(r,n)},"delete":function(t){if(null==t||null==this._map)return this;var e=this._map.get(t);if(null==e)return this;var r=this._map.delete(t),n=this._vector.delete(e);return 0===r.length?this.clear():this.__ownerID?(this.length=r.length,this._map=r,this._vector=n,this):r===this._map?this:Q(r,n)},__iterate:function(t,e){return this._vector?this._vector.fromEntries().__iterate(t,e):0},__deepEqual:function(t){var e=this._vector.__iterator__();return t.every(function(t,r){var n=e.next();return n&&(n=n[1]),n&&w(r,n[0])&&w(t,n[1])})},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t),r=this._vector&&this._vector.__ensureOwner(t);return t?Q(e,r,t):(this.__ownerID=t,this._map=e,this._vector=r,this)}},{empty:function(){return Te||(Te=Q())}},ge),He.from=He;var Te,Xe=function(t,e){var r=function(t){this._map=ge(t)};t=ee(t);var n=r.prototype=Object.create(Ze);n.constructor=r,n._name=e,n._defaultValues=t;var i=Object.keys(t);
return r.prototype.length=i.length,Object.defineProperty&&t.forEach(function(t,e){Object.defineProperty(r.prototype,e,{get:function(){return this.get(e)},set:function(t){I(this.__ownerID,"Cannot set on an immutable record."),this.set(e,t)}})}),r},Ye=Xe;te.createClass(Xe,{toString:function(){return this.__toString((this._name||"Record")+" {","}")},has:function(t){return this._defaultValues.has(t)},get:function(t,e){return void 0===e||this.has(t)?this._map.get(t,this._defaultValues.get(t)):e},clear:function(){if(this.__ownerID)return this._map.clear(),this;Object.getPrototypeOf(this).constructor;return Ye._empty||(Ye._empty=T(this,ge.empty()))},set:function(t,e){if(null==t||!this.has(t))return this;var r=this._map.set(t,e);return this.__ownerID||r===this._map?this:T(this,r)},"delete":function(t){if(null==t||!this.has(t))return this;var e=this._map.delete(t);return this.__ownerID||e===this._map?this:T(this,e)},__iterate:function(t,e){var r=this;return this._defaultValues.map(function(t,e){return r.get(e)}).__iterate(t,e)},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t);return t?T(this,e,t):(this.__ownerID=t,this._map=e,this)}},{},ee);var Ze=Xe.prototype;Ze.__deepEqual=me.__deepEqual,Ze.merge=me.merge,Ze.mergeWith=me.mergeWith,Ze.mergeDeep=me.mergeDeep,Ze.mergeDeepWith=me.mergeDeepWith,Ze.update=me.update,Ze.updateIn=me.updateIn,Ze.cursor=me.cursor,Ze.withMutations=me.withMutations,Ze.asMutable=me.asMutable,Ze.asImmutable=me.asImmutable;var $e=function(t,e,r){return this instanceof tr?(I(0!==r,"Cannot step a Range by 0"),t=t||0,null==e&&(e=1/0),t===e&&rr?rr:(r=null==r?1:Math.abs(r),t>e&&(r=-r),this._start=t,this._end=e,this._step=r,void(this.length=Math.max(0,Math.ceil((e-t)/r-1)+1)))):new tr(t,e,r)},tr=$e;te.createClass($e,{toString:function(){return 0===this.length?"Range []":"Range [ "+this._start+"..."+this._end+(this._step>1?" by "+this._step:"")+" ]"},has:function(t){return I(t>=0,"Index out of bounds"),this.length>t},get:function(t,e){return I(t>=0,"Index out of bounds"),1/0===this.length||this.length>t?this._start+t*this._step:e
},contains:function(t){var e=(t-this._start)/this._step;return e>=0&&this.length>e&&e===Math.floor(e)},slice:function(t,e,r){return s(t,e,this.length)?this:r?te.superCall(this,tr.prototype,"slice",[t,e,r]):(t=a(t,this.length),e=h(e,this.length),t>=e?rr:new tr(this.get(t,this._end),this.get(e,this._end),this._step))},indexOf:function(t){var e=t-this._start;if(e%this._step===0){var r=e/this._step;if(r>=0&&this.length>r)return r}return-1},lastIndexOf:function(t){return this.indexOf(t)},take:function(t){return this.slice(0,t)},skip:function(t,e){return e?te.superCall(this,tr.prototype,"skip",[t]):this.slice(t)},__iterate:function(t,e,r){for(var n=e^r,i=this.length-1,u=this._step,s=e?this._start+i*u:this._start,a=0;i>=a&&t(s,n?i-a:a,this)!==!1;a++)s+=e?-u:u;return n?this.length:a},__deepEquals:function(t){return this._start===t._start&&this._end===t._end&&this._step===t._step}},{},ie);var er=$e.prototype;er.__toJS=er.toArray,er.first=Re.first,er.last=Re.last;var rr=$e(0,0),nr=function(t,e){return 0===e&&sr?sr:this instanceof ir?(this._value=t,void(this.length=null==e?1/0:Math.max(0,e))):new ir(t,e)},ir=nr;te.createClass(nr,{toString:function(){return 0===this.length?"Repeat []":"Repeat [ "+this._value+" "+this.length+" times ]"},get:function(t,e){return I(t>=0,"Index out of bounds"),1/0===this.length||this.length>t?this._value:e},first:function(){return this._value},contains:function(t){return w(this._value,t)},slice:function(t,e,r){if(r)return te.superCall(this,ir.prototype,"slice",[t,e,r]);var n=this.length;return t=0>t?Math.max(0,n+t):Math.min(n,t),e=null==e?n:e>0?Math.min(n,e):Math.max(0,n+e),e>t?new ir(this._value,e-t):sr},reverse:function(t){return t?te.superCall(this,ir.prototype,"reverse",[t]):this},indexOf:function(t){return w(this._value,t)?0:-1},lastIndexOf:function(t){return w(this._value,t)?this.length:-1},__iterate:function(t,e,r){var n=e^r;I(!n||1/0>this.length,"Cannot access end of infinite range.");for(var i=this.length-1,u=0;i>=u&&t(this._value,n?i-u:u,this)!==!1;u++);return n?this.length:u},__deepEquals:function(t){return w(this._value,t._value)
}},{},ie);var ur=nr.prototype;ur.last=ur.first,ur.has=er.has,ur.take=er.take,ur.skip=er.skip,ur.__toJS=er.__toJS;var sr=new nr(void 0,0),ar={Sequence:ee,Map:ge,Vector:Ue,Set:Ke,OrderedMap:He,Record:Xe,Range:$e,Repeat:nr,is:w,fromJS:X};return ar}"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):Immutable=t();