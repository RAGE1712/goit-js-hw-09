!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");r("6JpON");var l={formElem:document.querySelector("form")};l.formElem.addEventListener("submit",(function(n){n.preventDefault(),a=l.formElem.elements.amount.value,u=Number(l.formElem.elements.delay.value),f=Number(l.formElem.elements.step.value);var o=0,t=0;for(;t<a;t+=1)c(o+=1,u).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),u+=f;o=0,t=0}));var a=0,u=0,f=0;function c(e,n){return new Promise((function(o,t){var r=Math.random()>.3;timerId=setTimeout((function(){r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}}();
//# sourceMappingURL=03-promises.a51b07d4.js.map
