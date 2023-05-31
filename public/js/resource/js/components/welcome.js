"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resource/js/components/welcome"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Welcome.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Welcome.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ideas",
  data: function data() {
    return {
      ideas: [],
      idea: {
        name: '',
        email: '',
        description: ''
      },
      modal: false,
      main: {
        background: 'asset/img/bann-serv.jpg'
      },
      service: {
        title: "<span>Оцените</span> наш сервис",
        description: "<p>Нам очень важно ваше мнение о нашем сервисе.<br> Если у вас есть предложения или вопросы<br> по работе сервиса, напишите нам. Мы будем рады<br> получить ваше сообщение. </p>",
        image: "asset/img/serv.png"
      },
      about: {
        title: "О нашем<br> <span>приложении</span>",
        description: "",
        image: "asset/img/application.png"
      }
    };
  },
  mounted: function mounted() {
    this.getIdeas(), this.getPages();
  },
  methods: {
    getPages: function getPages() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.axios.get('/api/pages').then(function (response) {
                console.log('response.data', response.data);
                response.data.map(function (item) {
                  switch (item.slug) {
                    case 'main':
                      _this.main.background = item.image;
                      break;
                    case 'service':
                      _this.service.title = item.title;
                      _this.service.description = item.description;
                      _this.service.image = item.image;
                      break;
                    case 'about':
                      _this.about.title = item.title;
                      _this.about.description = item.description;
                      _this.about.image = item.image;
                      break;
                  }
                });
              })["catch"](function (error) {
                console.log(error);
                _this.pages = [];
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getIdeas: function getIdeas() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.axios.get('/api/ideas').then(function (response) {
                console.log('response.data', response.data);
                _this2.ideas = response.data.reverse();
              })["catch"](function (error) {
                console.log(error);
                _this2.categories = [];
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    createIdea: function createIdea() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.axios.post('/api/ideas', _this3.idea).then(function (response) {
                console.log('response.data', response.data.idea);
                _this3.modalClose();
                _this3.ideas.unshift(response.data.idea);
              })["catch"](function (error) {
                console.log(error);
                _this3.categories = [];
              });
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    modalOpen: function modalOpen(id) {
      this.modal = true;
    },
    modalClose: function modalClose() {
      this.modal = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Welcome.vue?vue&type=template&id=51777872&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Welcome.vue?vue&type=template&id=51777872& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "wrapper"
  }, [_vm._m(0), _vm._v(" "), _c("main", [_c("section", {
    staticClass: "serv-bann",
    style: {
      "background-image": "url(" + _vm.main.background + ")"
    }
  }, [_vm._m(1)]), _vm._v(" "), _c("section", {
    staticClass: "serv-application"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-7"
  }, [_c("div", {
    staticClass: "serv-application__img"
  }, [_c("img", {
    attrs: {
      src: _vm.about.image,
      alt: ""
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-5"
  }, [_c("div", {
    staticClass: "serv-application__text"
  }, [_c("h2", {
    domProps: {
      innerHTML: _vm._s(_vm.about.title)
    }
  }), _vm._v(" "), _vm._m(2)])])])])]), _vm._v(" "), _c("section", {
    staticClass: "serv-grade"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "serv-grade__inner"
  }, [_c("div", {
    staticClass: "serv-grade__text"
  }, [_c("h2", {
    domProps: {
      innerHTML: _vm._s(_vm.service.title)
    }
  }), _vm._v(" "), _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.service.description)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "serv-grade__img"
  }, [_c("img", {
    attrs: {
      src: _vm.service.image,
      alt: ""
    }
  })])])])]), _vm._v(" "), _c("section", {
    staticClass: "serv-reviews"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "serv-reviews__inner"
  }, [_c("h2", [_vm._v("Улучшим сайт вместе")]), _vm._v(" "), _c("div", {
    staticClass: "serv-reviews__top"
  }, [_vm._m(3), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary btn-md modalButton",
    attrs: {
      type: "submit",
      "data-popup": "popupTw"
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("popupTw");
      }
    }
  }, [_vm._v(" Предложить идею  ")])]), _vm._v(" "), _vm.ideas.length > 0 ? _c("div", {
    staticClass: "serv-reviews__slider js-serv-reviews"
  }, _vm._l(_vm.ideas, function (idea, key) {
    return _c("div", {
      key: key,
      staticClass: "serv-reviews__slider-inner"
    }, [_c("div", {
      staticClass: "serv-reviews__slider-item serv-reviews__slider-item-online"
    }, [_c("div", {
      staticClass: "serv-reviews__slider-text"
    }, [_c("div", {
      staticClass: "serv-reviews__slider-name"
    }, [_vm._v(_vm._s(idea.name))]), _vm._v(" "), _c("div", {
      staticClass: "serv-reviews__slider-time"
    }, [_vm._v(_vm._s(idea.time))]), _vm._v(" "), _c("div", {
      staticClass: "serv-reviews__slider-tx"
    }, [_vm._v(_vm._s(idea.description))])])])]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.ideas.length > 0 ? _c("div", {
    staticClass: "serv-reviews__slider mob js-serv-reviews-mob"
  }, _vm._l(_vm.ideas, function (idea, key) {
    return _c("div", {
      key: key,
      staticClass: "serv-reviews__slider-inner"
    }, [_c("div", {
      staticClass: "serv-reviews__slider-item serv-reviews__slider-item-online"
    }, [_c("div", {
      staticClass: "serv-reviews__slider-text"
    }, [_c("div", {
      staticClass: "serv-reviews__slider-name"
    }, [_vm._v(_vm._s(idea.name))]), _vm._v(" "), _c("div", {
      staticClass: "serv-reviews__slider-time"
    }, [_vm._v(_vm._s(idea.time))]), _vm._v(" "), _c("div", {
      staticClass: "serv-reviews__slider-tx"
    }, [_vm._v(_vm._s(idea.description))])])])]);
  }), 0) : _vm._e()])])])]), _vm._v(" "), _vm._m(4)]), _vm._v(" "), _vm.modal ? _c("section", {
    staticClass: "modal modalWindow",
    staticStyle: {
      display: "block"
    },
    attrs: {
      id: "popupTw"
    }
  }, [_c("div", {
    staticClass: "modal-dialog"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("section", {
    staticClass: "modal-wrapper"
  }, [_c("div", {
    staticClass: "modal-title"
  }, [_vm._v("Предложить идею")]), _vm._v(" "), _c("div", {
    staticClass: "modal-form"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.createIdea.apply(null, arguments);
      }
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.idea.name,
      expression: "idea.name"
    }],
    attrs: {
      type: "name",
      placeholder: "Имя"
    },
    domProps: {
      value: _vm.idea.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.idea, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.idea.email,
      expression: "idea.email"
    }],
    attrs: {
      type: "email",
      placeholder: "E-mail"
    },
    domProps: {
      value: _vm.idea.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.idea, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.idea.description,
      expression: "idea.description"
    }],
    attrs: {
      placeholder: "Описать предложение"
    },
    domProps: {
      value: _vm.idea.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.idea, "description", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary btn-md",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Отправить сообщение")])])]), _vm._v(" "), _c("a", {
    staticClass: "modal-close",
    on: {
      click: _vm.modalClose
    }
  }, [_c("img", {
    attrs: {
      src: "asset/img/close-i.svg",
      alt: ""
    }
  })])])])])]) : _vm._e(), _vm._v(" "), _c("section", {
    staticClass: "modal overlay"
  })]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("header", [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header row"
  }, [_c("div", {
    staticClass: "header__logo col-3 col-md-2"
  }, [_c("a", {
    attrs: {
      href: "/"
    }
  }, [_c("img", {
    attrs: {
      src: "asset/img/logo.svg",
      alt: "Hobbor"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "header__buttons navbar-expand-md col-2 col-md-5"
  }, [_c("button", {
    staticClass: "navbar-toggle collapsed toggle-menu-btn"
  }, [_c("span", {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c("span", {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c("span", {
    staticClass: "icon-bar"
  })]), _vm._v(" "), _c("div", {
    staticClass: "navbar-collapse collapse toggle-menu"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Карта")]), _vm._v(" "), _c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    }
  }, [_vm._v("О сервисе")])])]), _vm._v(" "), _c("div", {
    staticClass: "header__icons col-7 col-md-5"
  }, [_c("ul", {
    staticClass: "navbar-nav"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link icon i-user-nav",
    attrs: {
      href: "#"
    }
  })])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "serv-bann__inner"
  }, [_c("div", {
    staticClass: "serv-bann__list"
  }, [_c("div", {
    staticClass: "serv-bann__list-item"
  }, [_c("div", {
    staticClass: "serv-bann__list-numb"
  }, [_vm._v("\n                                    250 "), _c("span", [_vm._v("тыс")])]), _vm._v(" "), _c("div", {
    staticClass: "serv-bann__list-tx"
  }, [_vm._v("Пользователей")])]), _vm._v(" "), _c("div", {
    staticClass: "serv-bann__list-item"
  }, [_c("div", {
    staticClass: "serv-bann__list-numb"
  }, [_vm._v("\n                                    150+\n                                ")]), _vm._v(" "), _c("div", {
    staticClass: "serv-bann__list-tx"
  }, [_vm._v("Городов России")])]), _vm._v(" "), _c("div", {
    staticClass: "serv-bann__list-item"
  }, [_c("div", {
    staticClass: "serv-bann__list-numb"
  }, [_c("img", {
    attrs: {
      src: "asset/img/all.png",
      alt: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "serv-bann__list-tx"
  }, [_vm._v("Кол-во интересов")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "serv-application__list"
  }, [_c("a", {
    staticClass: "serv-application__list-item",
    attrs: {
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      src: "asset/img/as.jpg",
      alt: ""
    }
  })]), _vm._v(" "), _c("a", {
    staticClass: "serv-application__list-item",
    attrs: {
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      src: "asset/img/gp.jpg",
      alt: ""
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "serv-reviews__top-left"
  }, [_c("div", {
    staticClass: "serv-reviews__top-title"
  }, [_vm._v("Рейтинг предложений")]), _vm._v(" "), _c("p", [_vm._v("Вы можете поддержать предложения других пользователей, а так же прислать нам свое мнение по улучшению ресурса.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("footer", {
    staticClass: "footer"
  }, [_c("div", {
    staticClass: "footer__wrap"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "footer__links d-lg-flex justify-content-between"
  }, [_c("p", [_vm._v("© 2021 Hobbor")]), _vm._v(" "), _c("p", [_vm._v("Разработка сайта — "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Webformula")])]), _vm._v(" "), _c("p", [_c("a", {
    staticClass: "bold",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Политика конфиденциальности")])]), _vm._v(" "), _c("p", [_c("a", {
    staticClass: "bold",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Договор Оферты")])]), _vm._v(" "), _c("p", [_c("a", {
    staticClass: "bold",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Обратиться в техподдержку")])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Welcome.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Welcome.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Welcome_vue_vue_type_template_id_51777872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=51777872& */ "./resources/js/components/Welcome.vue?vue&type=template&id=51777872&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/components/Welcome.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_51777872___WEBPACK_IMPORTED_MODULE_0__.render,
  _Welcome_vue_vue_type_template_id_51777872___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Welcome.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Welcome.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Welcome.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Welcome.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Welcome.vue?vue&type=template&id=51777872&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Welcome.vue?vue&type=template&id=51777872& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_51777872___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_51777872___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_51777872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Welcome.vue?vue&type=template&id=51777872& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Welcome.vue?vue&type=template&id=51777872&");


/***/ })

}]);