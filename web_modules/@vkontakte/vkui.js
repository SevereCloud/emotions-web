import { c as createCommonjsModule, g as getDefaultExportFromCjs } from '../common/_commonjsHelpers-7b2291da.js';
import { r as react } from '../common/index-e3dbc5f6.js';
import { b as browserSprite, a as browserSymbol, e as es6ObjectAssign } from '../common/browser-sprite-a7c324af.js';
import { b as bridge } from '../common/index.es-112d111e.js';

var canUseDOM = !!(typeof window !== 'undefined' && window.document &&
/* eslint-disable */
window.document.createElement
/* eslint-enable */
);

/* eslint-disable */

if (canUseDOM) {
  var ElementProto = Element.prototype; // Element.prototype.matches

  if (!ElementProto.matches) {
    ElementProto.matches = ElementProto.matchesSelector || ElementProto.webkitMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.msMatchesSelector;
  } // Element.prototype.closest


  if (!ElementProto.closest) {
    ElementProto.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) {
          return node;
        } else {
          node = node.parentElement;
        }
      }

      return null;
    };
  }
} // Array.prototype.includes


if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function value(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);
      var len = o.length >>> 0;

      if (len === 0) {
        return false;
      }

      var n = fromIndex | 0;
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      }

      while (k < len) {
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }

        k++;
      }

      return false;
    }
  });
} // Array.prototype.find


if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(callback) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      } else if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
      }

      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];

      for (var i = 0; i < length; i++) {
        var element = list[i];

        if (callback.call(thisArg, element, i, list)) {
          return element;
        }
      }
    }
  });
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function classNames() {
  var result = [];

  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  classnames.forEach(function (item) {
    if (!item) {
      return;
    }

    switch (_typeof_1(item)) {
      case 'string':
        result.push(item);
        break;

      case 'object':
        Object.keys(item).forEach(function (key) {
          if (item[key]) {
            result.push(key);
          }
        });
        break;

      default:
        result.push("".concat(item));
    }
  });
  return result.join(' ');
}

var OS;

(function (OS) {
  OS["ANDROID"] = "android";
  OS["IOS"] = "ios";
  OS["VKCOM"] = "vkcom";
})(OS || (OS = {}));

var ANDROID = OS.ANDROID;
var IOS = OS.IOS;
var VKCOM = OS.VKCOM;
function platform(useragent) {
  var ua = useragent || canUseDOM && navigator.userAgent || '';
  return /iphone|ipad|ipod/i.test(ua) ? IOS : ANDROID;
}
var osname = platform();
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */

var IS_PLATFORM_IOS = osname === IOS;

function getClassname(base) {
  var osname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : platform();
  return "".concat(base, " ").concat(base, "--").concat(osname);
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

var SSRContext = /*#__PURE__*/react.createContext({
  platform: null,
  userAgent: ''
});

var Appearance;

(function (Appearance) {
  Appearance["DARK"] = "dark";
  Appearance["LIGHT"] = "light";
})(Appearance || (Appearance = {}));

var Scheme;

(function (Scheme) {
  Scheme["DEPRECATED_CLIENT_LIGHT"] = "client_light";
  Scheme["DEPRECATED_CLIENT_DARK"] = "client_dark";
  Scheme["BRIGHT_LIGHT"] = "bright_light";
  Scheme["SPACE_GRAY"] = "space_gray";
})(Scheme || (Scheme = {}));

var WebviewType;

(function (WebviewType) {
  WebviewType["VKAPPS"] = "vkapps";
  WebviewType["INTERNAL"] = "internal";
})(WebviewType || (WebviewType = {}));

var defaultConfigProviderProps = {
  webviewType: WebviewType.VKAPPS,
  isWebView: bridge.isWebView(),
  scheme: Scheme.BRIGHT_LIGHT,
  appearance: Appearance.LIGHT,
  transitionMotionEnabled: true,
  platform: platform()
};
var ConfigProviderContext = /*#__PURE__*/react.createContext(defaultConfigProviderProps);

function withPlatform(Component) {
  function WithPlatform(props) {
    var ssrContext = react.useContext(SSRContext);

    var _React$useContext = react.useContext(ConfigProviderContext),
        platform = _React$useContext.platform; // @ts-ignore


    return /*#__PURE__*/react.createElement(Component, _extends_1({}, props, {
      platform: ssrContext.platform || platform
    }));
  }

  return WithPlatform;
}

var SizeType;

(function (SizeType) {
  SizeType["COMPACT"] = "compact";
  SizeType["REGULAR"] = "regular";
})(SizeType || (SizeType = {}));

var ViewWidth;

(function (ViewWidth) {
  ViewWidth[ViewWidth["SMALL_MOBILE"] = 1] = "SMALL_MOBILE";
  ViewWidth[ViewWidth["MOBILE"] = 2] = "MOBILE";
  ViewWidth[ViewWidth["SMALL_TABLET"] = 3] = "SMALL_TABLET";
  ViewWidth[ViewWidth["TABLET"] = 4] = "TABLET";
  ViewWidth[ViewWidth["DESKTOP"] = 5] = "DESKTOP";
})(ViewWidth || (ViewWidth = {}));

var AdaptivityContext = /*#__PURE__*/react.createContext({
  sizeX: SizeType.COMPACT,
  sizeY: SizeType.REGULAR
});

function withAdaptivity(TargetComponent, config) {
  function AdaptivityConsumer(props) {
    var context = react.useContext(AdaptivityContext);
    var update = false;

    if (props.sizeX || props.sizeY) {
      update = true;
    }

    var sizeX = props.sizeX || context.sizeX;
    var sizeY = props.sizeY || context.sizeY;
    var viewWidth = context.viewWidth;
    var adaptivityProps = {};
    config.sizeX ? adaptivityProps.sizeX = sizeX : undefined;
    config.sizeY ? adaptivityProps.sizeY = sizeY : undefined;
    config.viewWidth ? adaptivityProps.viewWidth = viewWidth : undefined; // @ts-ignore

    var target = /*#__PURE__*/react.createElement(TargetComponent, _extends_1({}, props, adaptivityProps));

    if (update) {
      return /*#__PURE__*/react.createElement(AdaptivityContext.Provider, {
        value: {
          sizeX: sizeX,
          sizeY: sizeY,
          viewWidth: viewWidth
        }
      }, target);
    }

    return target;
  }

  return AdaptivityConsumer;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var SplitContext = /*#__PURE__*/react.createContext({
  colRef: null,
  animate: true
});
var SplitCol = /*#__PURE__*/function (_Component2) {
  inherits(SplitCol, _Component2);

  var _super2 = _createSuper(SplitCol);

  function SplitCol() {
    var _this;

    classCallCheck(this, SplitCol);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "baseRef", /*#__PURE__*/react.createRef());

    return _this;
  }

  createClass(SplitCol, [{
    key: "getContext",
    value: function getContext() {
      return {
        colRef: this.baseRef,
        animate: this.props.animate
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          width = _this$props2.width,
          maxWidth = _this$props2.maxWidth,
          minWidth = _this$props2.minWidth,
          spaced = _this$props2.spaced;
      return /*#__PURE__*/react.createElement("div", {
        style: {
          width: width,
          maxWidth: maxWidth,
          minWidth: minWidth,
          margin: spaced ? '0 16px' : null
        },
        ref: this.baseRef,
        className: "SplitLayout__col"
      }, /*#__PURE__*/react.createElement(SplitContext.Provider, {
        value: this.getContext()
      }, children));
    }
  }]);

  return SplitCol;
}(react.Component);

defineProperty(SplitCol, "defaultProps", {
  animate: false
});

function withContext(Component, Ctx, prop) {
  function WithContext(props) {
    var context = react.useContext(Ctx); // @ts-ignore

    return /*#__PURE__*/react.createElement(Component, _extends_1({}, props, defineProperty({}, prop, context)));
  }

  return WithContext;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Root = /*#__PURE__*/function (_Component) {
  inherits(Root, _Component);

  var _super = _createSuper$1(Root);

  function Root(props) {
    var _this;

    classCallCheck(this, Root);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "animationFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "onAnimationEnd", function (e) {
      if (!e || ['root-android-animation-hide-back', 'root-android-animation-show-forward', 'root-ios-animation-hide-back', 'root-ios-animation-show-forward'].includes(e.animationName)) {
        var isBack = _this.state.isBack;
        var prevView = _this.state.prevView;
        var nextView = _this.state.nextView;

        _this.setState({
          activeView: nextView,
          prevView: null,
          nextView: null,
          visibleViews: [nextView],
          transition: false,
          isBack: undefined
        }, function () {
          _this.window.scrollTo(0, isBack ? _this.state.scrolls[_this.state.activeView] : 0);

          _this.props.onTransition && _this.props.onTransition({
            isBack: isBack,
            from: prevView,
            to: nextView
          });
        });
      }
    });

    _this.state = {
      activeView: props.activeView,
      prevView: null,
      nextView: null,
      visibleViews: [props.activeView],
      isBack: undefined,
      scrolls: {},
      transition: false
    };
    return _this;
  }

  createClass(Root, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.props.popout && !prevProps.popout) {
        this.blurActiveElement();
      } // Нужен переход


      if (this.props.activeView !== prevProps.activeView) {
        var pageYOffset = this.window.pageYOffset;
        var firstLayerId = [].concat(prevProps.children).find(function (view) {
          return view.props.id === prevProps.activeView || view.props.id === _this2.props.activeView;
        }).props.id;
        var isBack = firstLayerId === this.props.activeView;
        this.blurActiveElement();
        var nextView = this.props.activeView;
        var prevView = prevProps.activeView;
        this.setState({
          scrolls: _objectSpread(_objectSpread({}, this.state.scrolls), {}, defineProperty({}, prevProps.activeView, pageYOffset)),
          transition: true,
          activeView: null,
          nextView: nextView,
          prevView: prevView,
          visibleViews: [nextView, prevView],
          isBack: isBack
        });
      } // Начался переход


      if (!prevState.transition && this.state.transition) {
        var prevViewElement = this.document.getElementById("view-".concat(this.state.prevView));
        var nextViewElement = this.document.getElementById("view-".concat(this.state.nextView));
        prevViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.prevView];

        if (this.state.isBack) {
          nextViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.nextView];
        }

        this.waitAnimationFinish(this.state.isBack ? prevViewElement : nextViewElement, this.onAnimationEnd);
      }
    }
  }, {
    key: "shouldDisableTransitionMotion",
    value: function shouldDisableTransitionMotion() {
      return this.props.configProvider.transitionMotionEnabled === false || !this.props.splitCol.animate;
    }
  }, {
    key: "waitAnimationFinish",
    value: function waitAnimationFinish(elem, eventHandler) {
      if (this.shouldDisableTransitionMotion()) {
        eventHandler();
        return;
      }

      {
        clearTimeout(this.animationFinishTimeout);
        this.animationFinishTimeout = setTimeout(eventHandler.bind(this), this.props.platform === ANDROID ? 300 : 600);
      }
    }
  }, {
    key: "blurActiveElement",
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          popout = _this$props.popout,
          modal = _this$props.modal,
          platform = _this$props.platform;
      var _this$state = this.state,
          transition = _this$state.transition,
          isBack = _this$state.isBack,
          prevView = _this$state.prevView,
          activeView = _this$state.activeView,
          nextView = _this$state.nextView;
      var Views = this.arrayChildren.filter(function (view) {
        return _this3.state.visibleViews.includes(view.props.id);
      });
      var baseClassName = getClassname('Root', platform);
      return /*#__PURE__*/react.createElement("div", {
        className: classNames(baseClassName, this.props.className, {
          'Root--transition': transition,
          'Root--no-motion': this.shouldDisableTransitionMotion()
        })
      }, Views.map(function (view) {
        return /*#__PURE__*/react.createElement("div", {
          key: view.props.id,
          id: "view-".concat(view.props.id),
          className: classNames('Root__view', {
            'Root__view--hide-back': view.props.id === prevView && isBack,
            'Root__view--hide-forward': view.props.id === prevView && !isBack,
            'Root__view--show-back': view.props.id === nextView && isBack,
            'Root__view--show-forward': view.props.id === nextView && !isBack,
            'Root__view--active': view.props.id === activeView
          })
        }, view);
      }), !!popout && /*#__PURE__*/react.createElement("div", {
        className: "Root__popout"
      }, popout), !!modal && /*#__PURE__*/react.createElement("div", {
        className: "Root__modal"
      }, modal));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: "arrayChildren",
    get: function get() {
      return [].concat(this.props.children);
    }
  }]);

  return Root;
}(react.Component);

defineProperty(Root, "defaultProps", {
  popout: null
});

defineProperty(Root, "contextTypes", {
  window: propTypes.any,
  document: propTypes.any
});

var Root$1 = withContext(withContext(withPlatform(Root), SplitContext, 'splitCol'), ConfigProviderContext, 'configProvider');

/**
 * Функция для js анимации
 * @param {number} duration
 * @param {function} timing тайминг функция анимации
 * @param {function} draw коллбэк, в который прокидывается прогресс [0, 1]
 * @returns {void}
 */
function animate(_ref) {
  var duration = _ref.duration,
      timing = _ref.timing,
      draw = _ref.draw;

  if (typeof window === 'undefined') {
    return;
  }

  var start = window.performance.now();
  window.requestAnimationFrame(function animate(time) {
    var timeFraction = (time - start) / duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    var progress = timing(timeFraction);
    draw(progress);

    if (timeFraction < 1) {
      window.requestAnimationFrame(animate);
    }
  });
}

/*
 * Получает кординату по оси абсцисс из touch- или mouse-события
 */
var coordX = function coordX(e) {
  return e.clientX || e.changedTouches && e.changedTouches[0].clientX;
};
/*
 * Получает кординату по оси ординат из touch- или mouse-события
 */


var coordY = function coordY(e) {
  return e.clientY || e.changedTouches && e.changedTouches[0].clientY;
};

var isClient = typeof window !== 'undefined';
var touchEnabled = isClient && 'ontouchstart' in window;
/*
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 */

function getSupportedEvents() {
  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}
/*
 * Рассчитывает "сопротивление" для iOS тач-событий
 */


function rubber(offset, dimension, resistanceRate, isAndroid) {
  if (isAndroid || offset < 0) {
    return offset;
  }

  var offsettedResistance = offset * resistanceRate;
  return offsettedResistance * dimension / (offsettedResistance + dimension);
}

// Является ли переданное значение числовым
function hasReactNode(value) {
  return value !== undefined && value !== false && value !== null;
}
function setRef(element, ref) {
  if (ref) {
    if (typeof ref === 'function') {
      ref(element);
    } else {
      ref.current = element;
    }
  }
} // eslint-disable-next-line
function createCustomEvent(window, type, eventInitDict) {
  if (typeof window.CustomEvent !== 'function') {
    var options = eventInitDict || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(type, options.bubbles, options.cancelable, options.detail);
    return evt;
  }

  return new window.CustomEvent(type, eventInitDict);
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var events = getSupportedEvents();

var Touch = /*#__PURE__*/function (_Component) {
  inherits(Touch, _Component);

  var _super = _createSuper$2(Touch);

  function Touch(props) {
    var _this;

    classCallCheck(this, Touch);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "cancelClick", void 0);

    defineProperty(assertThisInitialized(_this), "gesture", {});

    defineProperty(assertThisInitialized(_this), "container", void 0);

    defineProperty(assertThisInitialized(_this), "onEnter", function (e) {
      if (_this.props.onEnter) {
        _this.props.onEnter(e);
      }
    });

    defineProperty(assertThisInitialized(_this), "onLeave", function (e) {
      if (_this.props.onLeave) {
        _this.props.onLeave(e);
      }
    });

    defineProperty(assertThisInitialized(_this), "onStart", function (e) {
      _this.gesture = {
        startX: coordX(e),
        startY: coordY(e),
        startT: new Date(),
        isPressed: true
      }; // Вызываем нужные колбеки из props

      var outputEvent = _objectSpread$1(_objectSpread$1({}, _this.gesture), {}, {
        originalEvent: e
      });

      if (_this.props.onStart) {
        _this.props.onStart(outputEvent);
      }

      if (_this.props.onStartX) {
        _this.props.onStartX(outputEvent);
      }

      if (_this.props.onStartY) {
        _this.props.onStartY(outputEvent);
      }

      !touchEnabled && _this.subscribe(_this.document);
    });

    defineProperty(assertThisInitialized(_this), "onMove", function (e) {
      var _this$gesture = _this.gesture,
          isPressed = _this$gesture.isPressed,
          isX = _this$gesture.isX,
          isY = _this$gesture.isY,
          startX = _this$gesture.startX,
          startY = _this$gesture.startY;

      if (isPressed) {
        // смещения
        var shiftX = coordX(e) - startX;
        var shiftY = coordY(e) - startY; // абсолютные значения смещений

        var shiftXAbs = Math.abs(shiftX);
        var shiftYAbs = Math.abs(shiftY); // Если определяем мультитач, то прерываем жест

        if (!!e.touches && e.touches.length > 1) {
          return _this.onEnd(e);
        } // если мы ещё не определились


        if (!isX && !isY) {
          var willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
          var willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
          var willBeSlidedX = willBeX && !!_this.props.onMoveX || !!_this.props.onMove;
          var willBeSlidedY = willBeY && !!_this.props.onMoveY || !!_this.props.onMove;
          _this.gesture.isY = willBeY;
          _this.gesture.isX = willBeX;
          _this.gesture.isSlideX = willBeSlidedX;
          _this.gesture.isSlideY = willBeSlidedY;
          _this.gesture.isSlide = willBeSlidedX || willBeSlidedY;
        }

        if (_this.gesture.isSlide) {
          _this.gesture.shiftX = shiftX;
          _this.gesture.shiftY = shiftY;
          _this.gesture.shiftXAbs = shiftXAbs;
          _this.gesture.shiftYAbs = shiftYAbs; // Вызываем нужные колбеки из props

          var _outputEvent = _objectSpread$1(_objectSpread$1({}, _this.gesture), {}, {
            originalEvent: e
          });

          if (_this.props.onMove) {
            _this.props.onMove(_outputEvent);
          }

          if (_this.gesture.isSlideX && _this.props.onMoveX) {
            _this.props.onMoveX(_outputEvent);
          }

          if (_this.gesture.isSlideY && _this.props.onMoveY) {
            _this.props.onMoveY(_outputEvent);
          }
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnd", function (e) {
      var _this$gesture2 = _this.gesture,
          isPressed = _this$gesture2.isPressed,
          isSlide = _this$gesture2.isSlide,
          isSlideX = _this$gesture2.isSlideX,
          isSlideY = _this$gesture2.isSlideY;

      if (isPressed) {
        // Вызываем нужные колбеки из props
        var _outputEvent2 = _objectSpread$1(_objectSpread$1({}, _this.gesture), {}, {
          originalEvent: e
        });

        if (_this.props.onEnd) {
          _this.props.onEnd(_outputEvent2);
        }

        if (isSlideY && _this.props.onEndY) {
          _this.props.onEndY(_outputEvent2);
        }

        if (isSlideX && _this.props.onEndX) {
          _this.props.onEndX(_outputEvent2);
        }
      }

      var target = e.target; // Если закончили жест на ссылке, выставляем флаг для отмены перехода

      _this.cancelClick = target.tagName === 'A' && isSlide;
      _this.gesture = {}; // Если это был тач-евент, симулируем отмену hover

      if (e.type === 'touchend' || e.type === 'touchcancel') {
        _this.onLeave(e);
      }

      !touchEnabled && _this.unsubscribe(_this.document);
    });

    defineProperty(assertThisInitialized(_this), "onDragStart", function (e) {
      var target = e.target;

      if (target.tagName === 'A' || target.tagName === 'IMG') {
        e.preventDefault();
      }
    });

    defineProperty(assertThisInitialized(_this), "onClick", function (e) {
      if (_this.cancelClick) {
        _this.cancelClick = false;
        e.preventDefault();
      }

      _this.props.onClick && _this.props.onClick(e);
    });

    defineProperty(assertThisInitialized(_this), "getRef", function (container) {
      _this.container = container;
      setRef(container, _this.props.getRootRef);
    });

    _this.cancelClick = false;
    return _this;
  }

  createClass(Touch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (canUseDOM) {
        this.container.addEventListener(events[0], this.onStart, {
          capture: this.props.useCapture,
          passive: false
        });
        touchEnabled && this.subscribe(this.container);
        this.container.addEventListener('mouseenter', this.onEnter, {
          capture: this.props.useCapture,
          passive: true
        });
        this.container.addEventListener('mouseleave', this.onLeave, {
          capture: this.props.useCapture,
          passive: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.container.removeEventListener(events[0], this.onStart);
      touchEnabled && this.unsubscribe(this.container);
      this.container.removeEventListener('mouseenter', this.onEnter);
      this.container.removeEventListener('mouseleave', this.onLeave);
    }
    /**
     * Обработчик событий mouseenter
     *
     * @param {Object} e Браузерное событие
     * @return {void}
     */

  }, {
    key: "subscribe",
    value: function subscribe(element) {
      var listenerParams = {
        capture: this.props.useCapture,
        passive: false
      };
      element.addEventListener(events[1], this.onMove, listenerParams);
      element.addEventListener(events[2], this.onEnd, listenerParams);
      element.addEventListener(events[3], this.onEnd, listenerParams);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(element) {
      // Здесь нужен последний аргумент с такими же параметрами, потому что
      // некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
      // https://github.com/VKCOM/VKUI/issues/444
      var listenerParams = {
        capture: this.props.useCapture,
        passive: false
      };
      element.removeEventListener(events[1], this.onMove, listenerParams);
      element.removeEventListener(events[2], this.onEnd, listenerParams);
      element.removeEventListener(events[3], this.onEnd, listenerParams);
    }
    /**
     * Обработчик событий dragstart
     * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
     *
     * @param {Object} e Браузерное событие
     * @return {void}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onStart = _this$props.onStart,
          onStartX = _this$props.onStartX,
          onStartY = _this$props.onStartY,
          onMove = _this$props.onMove,
          onMoveX = _this$props.onMoveX,
          onMoveY = _this$props.onMoveY,
          onLeave = _this$props.onLeave,
          onEnter = _this$props.onEnter,
          onEnd = _this$props.onEnd,
          onEndX = _this$props.onEndX,
          onEndY = _this$props.onEndY,
          useCapture = _this$props.useCapture,
          Component = _this$props.Component,
          getRootRef = _this$props.getRootRef,
          restProps = objectWithoutProperties(_this$props, ["onStart", "onStartX", "onStartY", "onMove", "onMoveX", "onMoveY", "onLeave", "onEnter", "onEnd", "onEndX", "onEndY", "useCapture", "Component", "getRootRef"]);

      return /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
        onDragStart: this.onDragStart,
        onClick: this.onClick,
        ref: this.getRef
      }), this.props.children);
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return Touch;
}(react.Component);

defineProperty(Touch, "defaultProps", {
  Component: 'div',
  children: '',
  useCapture: false
});

defineProperty(Touch, "contextTypes", {
  document: propTypes.object
});

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function removeObjectKeys(obj) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var newObj = _objectSpread$2({}, obj);

  keys.forEach(function (key) {
    return delete newObj[key];
  });
  return newObj;
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var transitionStartEventName = 'VKUI:View:transition-start';
var transitionEndEventName = 'VKUI:View:transition-end';
var SwipeBackResults;

(function (SwipeBackResults) {
  SwipeBackResults[SwipeBackResults["fail"] = 1] = "fail";
  SwipeBackResults[SwipeBackResults["success"] = 2] = "success";
})(SwipeBackResults || (SwipeBackResults = {}));

var scrollsCache = {};
var swipeBackExcludedTags = ['input', 'textarea'];

var View = /*#__PURE__*/function (_Component) {
  inherits(View, _Component);

  var _super = _createSuper$3(View);

  function View(props) {
    var _this;

    classCallCheck(this, View);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "transitionFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "animationFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "transitionEndHandler", function (e) {
      if (!e || ['animation-ios-next-forward', 'animation-ios-prev-back', 'animation-android-next-forward', 'animation-android-prev-back'].includes(e.animationName)) {
        var activePanel = _this.props.activePanel;
        var isBack = _this.state.isBack;
        var prevPanel = _this.state.prevPanel;

        _this.document.dispatchEvent(createCustomEvent(_this.window, transitionEndEventName));

        _this.setState({
          prevPanel: null,
          nextPanel: null,
          visiblePanels: [activePanel],
          activePanel: activePanel,
          animated: false,
          isBack: undefined,
          scrolls: isBack ? removeObjectKeys(_this.state.scrolls, [prevPanel]) : _this.state.scrolls
        }, function () {
          isBack && _this.window.scrollTo(0, _this.state.scrolls[activePanel]);
          _this.props.onTransition && _this.props.onTransition({
            isBack: isBack,
            from: prevPanel,
            to: activePanel
          });
        });
      }
    });

    defineProperty(assertThisInitialized(_this), "swipingBackTransitionEndHandler", function (e) {
      // indexOf because of vendor prefixes in old browsers
      var target = e.target;

      if (e.propertyName.includes('transform') && target.classList.contains('View__panel--swipe-back-next')) {
        switch (_this.state.swipeBackResult) {
          case SwipeBackResults.fail:
            _this.onSwipeBackCancel();

            break;

          case SwipeBackResults.success:
            _this.onSwipeBackSuccess();

        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onScrollTop", function () {
      var activePanel = _this.state.activePanel;

      if (activePanel) {
        var scrollTop = _this.document.body.scrollTop || _this.document.documentElement.scrollTop;

        if (scrollTop) {
          animate({
            duration: 200,
            timing: function timing(n) {
              return Math.sqrt(n);
            },
            draw: function draw(val) {
              _this.window.scrollTo(0, scrollTop - val * scrollTop);
            }
          });
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onMoveX", function (e) {
      var target = e.originalEvent.target;

      if (target && typeof target.tagName === 'string' && swipeBackExcludedTags.includes(target.tagName.toLowerCase())) {
        return;
      }

      var _this$props = _this.props,
          platform = _this$props.platform,
          configProvider = _this$props.configProvider;

      if (platform === IOS && !configProvider.isWebView && (e.startX <= 70 || e.startX >= _this.window.innerWidth - 70) && !_this.state.browserSwipe) {
        _this.setState({
          browserSwipe: true
        });
      }

      if (platform === IOS && configProvider.isWebView && _this.props.onSwipeBack) {
        if (_this.state.animated && e.startX <= 70) {
          return;
        }

        if (e.startX <= 70 && !_this.state.swipingBack && _this.props.history.length > 1) {
          _this.setState({
            swipingBack: true,
            swipebackStartX: e.startX,
            startT: e.startT,
            swipeBackPrevPanel: _this.state.activePanel,
            swipeBackNextPanel: _this.props.history.slice(-2)[0],
            scrolls: _objectSpread$3(_objectSpread$3({}, _this.state.scrolls), {}, defineProperty({}, _this.state.activePanel, _this.window.pageYOffset))
          });
        }

        if (_this.state.swipingBack) {
          var swipeBackShift;

          if (e.shiftX < 0) {
            swipeBackShift = 0;
          } else if (e.shiftX > _this.window.innerWidth - _this.state.swipebackStartX) {
            swipeBackShift = _this.window.innerWidth;
          } else {
            swipeBackShift = e.shiftX;
          }

          _this.setState({
            swipeBackShift: swipeBackShift
          });
        }
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnd", function () {
      if (_this.state.swipingBack) {
        var speed = _this.state.swipeBackShift / (Date.now() - _this.state.startT.getTime()) * 1000;

        if (_this.state.swipeBackShift === 0) {
          _this.onSwipeBackCancel();
        } else if (_this.state.swipeBackShift >= _this.window.innerWidth) {
          _this.onSwipeBackSuccess();
        } else if (speed > 250 || _this.state.swipebackStartX + _this.state.swipeBackShift > _this.window.innerWidth / 2) {
          _this.setState({
            swipeBackResult: SwipeBackResults.success
          });
        } else {
          _this.setState({
            swipeBackResult: SwipeBackResults.fail
          });
        }
      }
    });

    _this.state = {
      scrolls: scrollsCache[props.id] || {},
      animated: false,
      visiblePanels: [props.activePanel],
      activePanel: props.activePanel,
      isBack: undefined,
      prevPanel: null,
      nextPanel: null,
      swipingBack: false,
      swipebackStartX: 0,
      swipeBackShift: 0,
      swipeBackNextPanel: null,
      swipeBackPrevPanel: null,
      swipeBackResult: null,
      browserSwipe: false
    };
    return _this;
  }

  createClass(View, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.id) {
        scrollsCache[this.props.id] = this.state.scrolls;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      this.props.popout && !prevProps.popout && this.blurActiveElement();
      this.props.modal && !prevProps.modal && this.blurActiveElement(); // Нужен переход

      if (prevProps.activePanel !== this.props.activePanel && !prevState.swipingBack && !prevState.browserSwipe) {
        var firstLayer = this.panels.find(function (panel) {
          return panel.props.id === prevProps.activePanel || panel.props.id === _this2.props.activePanel;
        });
        var isBack = firstLayer && firstLayer.props.id === this.props.activePanel;
        this.blurActiveElement();
        this.setState({
          visiblePanels: [prevProps.activePanel, this.props.activePanel],
          prevPanel: prevProps.activePanel,
          nextPanel: this.props.activePanel,
          activePanel: null,
          animated: true,
          scrolls: _objectSpread$3(_objectSpread$3({}, prevState.scrolls), {}, defineProperty({}, prevProps.activePanel, this.window.pageYOffset)),
          isBack: isBack
        });
      } // Закончилась анимация свайпа назад


      if (prevProps.activePanel !== this.props.activePanel && prevState.swipingBack) {
        var nextPanel = this.props.activePanel;
        var prevPanel = prevProps.activePanel;
        this.setState({
          swipeBackPrevPanel: null,
          swipeBackNextPanel: null,
          swipingBack: false,
          swipeBackResult: null,
          swipebackStartX: 0,
          swipeBackShift: 0,
          activePanel: nextPanel,
          visiblePanels: [nextPanel],
          scrolls: removeObjectKeys(prevState.scrolls, [prevState.swipeBackPrevPanel])
        }, function () {
          _this2.document.dispatchEvent(createCustomEvent(_this2.window, transitionEndEventName));

          window.scrollTo(0, prevState.scrolls[_this2.state.activePanel]);
          prevProps.onTransition && prevProps.onTransition({
            isBack: true,
            from: prevPanel,
            to: nextPanel
          });
        });
      }

      var scrolls = this.state.scrolls; // Начался переход

      if (!prevState.animated && this.state.animated) {
        this.document.dispatchEvent(createCustomEvent(this.window, transitionStartEventName, {
          detail: {
            scrolls: scrolls
          }
        }));
        var nextPanelElement = this.pickPanel(this.state.nextPanel);
        var prevPanelElement = this.pickPanel(this.state.prevPanel);
        prevPanelElement.scrollTop = scrolls[this.state.prevPanel];

        if (this.state.isBack) {
          nextPanelElement.scrollTop = scrolls[this.state.nextPanel];
        }

        this.waitAnimationFinish(this.pickPanel(this.state.isBack ? this.state.prevPanel : this.state.nextPanel), this.transitionEndHandler);
      } // Начался свайп назад


      if (!prevState.swipingBack && this.state.swipingBack) {
        this.document.dispatchEvent(createCustomEvent(this.window, transitionStartEventName, {
          detail: {
            scrolls: scrolls
          }
        }));
        this.props.onSwipeBackStart && this.props.onSwipeBackStart();

        var _nextPanelElement = this.pickPanel(this.state.swipeBackNextPanel);

        var _prevPanelElement = this.pickPanel(this.state.swipeBackPrevPanel);

        _nextPanelElement.scrollTop = scrolls[this.state.swipeBackNextPanel];
        _prevPanelElement.scrollTop = scrolls[this.state.swipeBackPrevPanel];
      } // Началась анимация завершения свайпа назад.


      if (!prevState.swipeBackResult && this.state.swipeBackResult) {
        this.waitTransitionFinish(this.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
      } // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)


      if (prevState.swipeBackResult === SwipeBackResults.fail && !this.state.swipeBackResult) {
        this.window.scrollTo(0, scrolls[this.state.activePanel]);
      } // Закончился Safari свайп


      if (prevProps.activePanel !== this.props.activePanel && this.state.browserSwipe) {
        this.setState({
          browserSwipe: false,
          nextPanel: null,
          prevPanel: null,
          animated: false,
          visiblePanels: [this.props.activePanel],
          activePanel: this.props.activePanel
        });
      }
    }
  }, {
    key: "shouldDisableTransitionMotion",
    value: function shouldDisableTransitionMotion() {
      return this.props.configProvider.transitionMotionEnabled === false || !this.props.splitCol.animate;
    }
  }, {
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(elem, eventHandler) {
      {
        clearTimeout(this.transitionFinishTimeout);
        this.transitionFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID ? 300 : 600);
      }
    }
  }, {
    key: "waitAnimationFinish",
    value: function waitAnimationFinish(elem, eventHandler) {
      if (this.shouldDisableTransitionMotion()) {
        eventHandler();
        return;
      }

      {
        clearTimeout(this.animationFinishTimeout);
        this.animationFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID ? 300 : 600);
      }
    }
  }, {
    key: "blurActiveElement",
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: "pickPanel",
    value: function pickPanel(id) {
      var elem = this.document.getElementById(id);

      if (!elem) {
        console.warn("Element #".concat(id, " not found"));
      }

      return elem && elem.parentNode.parentNode;
    }
  }, {
    key: "onSwipeBackSuccess",
    value: function onSwipeBackSuccess() {
      this.props.onSwipeBack && this.props.onSwipeBack();
    }
  }, {
    key: "onSwipeBackCancel",
    value: function onSwipeBackCancel() {
      var _this3 = this;

      this.setState({
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipeBackResult: null,
        swipebackStartX: 0,
        swipeBackShift: 0
      }, function () {
        _this3.document.dispatchEvent(createCustomEvent(_this3.window, transitionEndEventName));
      });
    }
  }, {
    key: "calcPanelSwipeStyles",
    value: function calcPanelSwipeStyles(panelId) {
      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      if (!isPrev && !isNext || this.state.swipeBackResult) {
        return {};
      }

      var prevPanelTranslate = "".concat(this.state.swipeBackShift, "px");
      var nextPanelTranslate = "".concat(-50 + this.state.swipeBackShift * 100 / this.window.innerWidth / 2, "%");
      var prevPanelShadow = 0.3 * (this.window.innerWidth - this.state.swipeBackShift) / this.window.innerWidth;

      if (this.state.swipeBackResult) {
        return isPrev ? {
          boxShadow: "-2px 0 12px rgba(0, 0, 0, ".concat(prevPanelShadow, ")")
        } : {};
      }

      if (isNext) {
        return {
          transform: "translate3d(".concat(nextPanelTranslate, ", 0, 0)"),
          WebkitTransform: "translate3d(".concat(nextPanelTranslate, ", 0, 0)")
        };
      }

      if (isPrev) {
        return {
          transform: "translate3d(".concat(prevPanelTranslate, ", 0, 0)"),
          WebkitTransform: "translate3d(".concat(prevPanelTranslate, ", 0, 0)"),
          boxShadow: "-2px 0 12px rgba(0, 0, 0, ".concat(prevPanelShadow, ")")
        };
      }

      return {};
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          style = _this$props2.style,
          popout = _this$props2.popout,
          modal = _this$props2.modal,
          platform = _this$props2.platform;
      var _this$state = this.state,
          prevPanel = _this$state.prevPanel,
          nextPanel = _this$state.nextPanel,
          activePanel = _this$state.activePanel,
          swipeBackPrevPanel = _this$state.swipeBackPrevPanel,
          swipeBackNextPanel = _this$state.swipeBackNextPanel,
          swipeBackResult = _this$state.swipeBackResult;
      var hasPopout = !!popout;
      var hasModal = !!modal;
      var panels = this.panels.filter(function (panel) {
        var panelId = panel.props.id;
        return _this4.state.visiblePanels.includes(panelId) || panelId === swipeBackPrevPanel || panelId === swipeBackNextPanel;
      });
      var modifiers = {
        'View--animated': this.state.animated,
        'View--swiping-back': this.state.swipingBack,
        'View--no-motion': this.shouldDisableTransitionMotion()
      };
      return /*#__PURE__*/react.createElement(Touch, {
        Component: "section",
        className: classNames(getClassname('View', platform), this.props.className, modifiers),
        style: style,
        onMoveX: this.onMoveX,
        onEnd: this.onEnd
      }, /*#__PURE__*/react.createElement("div", {
        className: "View__panels"
      }, panels.map(function (panel) {
        var panelId = panel.props.id;
        return /*#__PURE__*/react.createElement("div", {
          className: classNames('View__panel', {
            'View__panel--active': panelId === activePanel,
            'View__panel--prev': panelId === prevPanel,
            'View__panel--next': panelId === nextPanel,
            'View__panel--swipe-back-prev': panelId === swipeBackPrevPanel,
            'View__panel--swipe-back-next': panelId === swipeBackNextPanel,
            'View__panel--swipe-back-success': swipeBackResult === SwipeBackResults.success,
            'View__panel--swipe-back-failed': swipeBackResult === SwipeBackResults.fail
          }),
          style: _this4.calcPanelSwipeStyles(panelId),
          key: panelId
        }, /*#__PURE__*/react.createElement("div", {
          className: "View__panel-in"
        }, panel));
      })), hasPopout && /*#__PURE__*/react.createElement("div", {
        className: "View__popout"
      }, popout), hasModal && /*#__PURE__*/react.createElement("div", {
        className: "View__modal"
      }, modal));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: "panels",
    get: function get() {
      return [].concat(this.props.children);
    }
  }]);

  return View;
}(react.Component);

defineProperty(View, "defaultProps", {
  history: []
});

defineProperty(View, "contextTypes", {
  window: propTypes.any,
  document: propTypes.any
});

var View$1 = withContext(withContext(withPlatform(View), SplitContext, 'splitCol'), ConfigProviderContext, 'configProvider');

var PanelContext = /*#__PURE__*/react.createContext({});

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Panel = /*#__PURE__*/function (_Component) {
  inherits(Panel, _Component);

  var _super = _createSuper$4(Panel);

  function Panel(props) {
    var _this;

    classCallCheck(this, Panel);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "childContext", void 0);

    defineProperty(assertThisInitialized(_this), "container", void 0);

    defineProperty(assertThisInitialized(_this), "getRef", function (container) {
      _this.container = container;
      setRef(container, _this.props.getRootRef);
    });

    _this.childContext = {
      panel: props.id
    };
    return _this;
  }

  createClass(Panel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          centered = _this$props.centered,
          children = _this$props.children,
          platform = _this$props.platform,
          getRootRef = _this$props.getRootRef,
          sizeX = _this$props.sizeX,
          restProps = objectWithoutProperties(_this$props, ["className", "centered", "children", "platform", "getRootRef", "sizeX"]);

      return /*#__PURE__*/react.createElement(PanelContext.Provider, {
        value: this.childContext
      }, /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
        ref: this.getRef,
        className: classNames(getClassname('Panel', platform), className, "Panel--".concat(sizeX), defineProperty({
          'Panel--centered': centered
        }, "Panel--sizeX-".concat(sizeX), true))
      }), /*#__PURE__*/react.createElement(Touch, {
        className: "Panel__in"
      }, platform === IOS && /*#__PURE__*/react.createElement("div", {
        className: "Panel__fade"
      }), /*#__PURE__*/react.createElement("div", {
        className: "Panel__in-before"
      }), centered ? /*#__PURE__*/react.createElement("div", {
        className: "Panel__centered"
      }, children) : children, /*#__PURE__*/react.createElement("div", {
        className: "Panel__in-after"
      }))));
    }
  }]);

  return Panel;
}(react.Component);

defineProperty(Panel, "defaultProps", {
  children: '',
  centered: false
});

var Panel$1 = withAdaptivity(withPlatform(Panel), {
  sizeX: true
});

/**
 * Контекст для компонентов, использующих Touch в качестве корневой обёртки,
 * и для которых важно не предотвращать вспылие тач-событий от дочерних компонентов
 */

var TouchRootContext = /*#__PURE__*/react.createContext(false);

function getOffsetRect(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top,
    left: box.left,
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

var hasMouse;
var hasTouchEvents;
var hasHover;

if (IS_PLATFORM_IOS) {
  hasMouse = false;
  hasHover = false;
  hasTouchEvents = true;
} else {
  hasTouchEvents = 'ontouchstart' in document;

  if (hasTouchEvents) {
    hasMouse = window.matchMedia && matchMedia('(any-pointer)').matches ? matchMedia('(any-pointer: fine)').matches : /android|mobile|tablet/i.test(navigator.userAgent);
    hasHover = hasMouse && (window.matchMedia && matchMedia('(hover)').matches ? matchMedia('(hover: hover)').matches : false);
  } else {
    hasMouse = true;
    hasHover = true;
  }
}

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ts = function ts() {
  return +Date.now();
};

var ACTIVE_DELAY = 70;
var ACTIVE_EFFECT_DELAY = 600;
var storage = {};
/*
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 */

function deactivateOtherInstances(exclude) {
  Object.keys(storage).filter(function (id) {
    return id !== exclude;
  }).forEach(function (id) {
    clearTimeout(storage[id].activeTimeout);
    clearTimeout(storage[id].timeout);
    storage[id].stop();
    delete storage[id];
  });
}

var Tappable = /*#__PURE__*/function (_Component) {
  inherits(Tappable, _Component);

  var _super = _createSuper$5(Tappable);

  function Tappable(props) {
    var _this;

    classCallCheck(this, Tappable);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "id", void 0);

    defineProperty(assertThisInitialized(_this), "isSlide", void 0);

    defineProperty(assertThisInitialized(_this), "insideTouchRoot", void 0);

    defineProperty(assertThisInitialized(_this), "container", void 0);

    defineProperty(assertThisInitialized(_this), "timeout", void 0);

    defineProperty(assertThisInitialized(_this), "wavesTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "onStart", function (_ref) {
      var originalEvent = _ref.originalEvent;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();

      if (originalEvent.touches && originalEvent.touches.length > 1) {
        deactivateOtherInstances();
        return;
      }

      if (_this.props.platform === ANDROID) {
        _this.onDown(originalEvent);
      }

      storage[_this.id] = {
        stop: _this.stop,
        activeTimeout: window.setTimeout(_this.start, ACTIVE_DELAY)
      };
    });

    defineProperty(assertThisInitialized(_this), "onMove", function (_ref2) {
      var originalEvent = _ref2.originalEvent,
          shiftXAbs = _ref2.shiftXAbs,
          shiftYAbs = _ref2.shiftYAbs;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();

      if (shiftXAbs > 20 || shiftYAbs > 20) {
        _this.isSlide = true;

        _this.stop();
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnd", function (_ref3) {
      var originalEvent = _ref3.originalEvent;
      !_this.insideTouchRoot && _this.props.stopPropagation && originalEvent.stopPropagation();
      var now = ts();

      if (originalEvent.touches && originalEvent.touches.length > 0) {
        _this.isSlide = false;

        _this.stop();

        return;
      }

      if (_this.state.active) {
        if (now - _this.state.ts >= 100) {
          // Долгий тап, выключаем подсветку
          _this.stop();
        } else {
          // Короткий тап, оставляем подсветку
          var timeout = window.setTimeout(_this.stop, _this.props.activeEffectDelay - now + _this.state.ts);

          var store = _this.getStorage();

          if (store) {
            store.timeout = timeout;
          }
        }
      } else if (!_this.isSlide) {
        // Очень короткий тап, включаем подсветку
        _this.start();

        var _timeout = window.setTimeout(_this.stop, _this.props.activeEffectDelay);

        if (_this.getStorage()) {
          clearTimeout(_this.getStorage().activeTimeout);
          _this.getStorage().timeout = _timeout;
        } else {
          _this.timeout = _timeout;
        }
      }

      _this.isSlide = false;
    });

    defineProperty(assertThisInitialized(_this), "onDown", function (e) {
      if (_this.props.platform === ANDROID) {
        var _getOffsetRect = getOffsetRect(_this.container),
            top = _getOffsetRect.top,
            left = _getOffsetRect.left;

        var x = coordX(e) - left;
        var y = coordY(e) - top;
        var key = 'wave' + Date.now().toString();

        _this.setState(function (state) {
          return {
            clicks: _objectSpread$4(_objectSpread$4({}, state.clicks), {}, defineProperty({}, key, {
              x: x,
              y: y
            }))
          };
        });

        _this.wavesTimeout = window.setTimeout(function () {
          _this.setState(function (state) {
            var clicks = _objectSpread$4({}, state.clicks);

            delete clicks[key];
            return {
              clicks: clicks
            };
          });
        }, 225);
      }
    });

    defineProperty(assertThisInitialized(_this), "onEnter", function () {
      _this.setState({
        hovered: true
      });
    });

    defineProperty(assertThisInitialized(_this), "onLeave", function () {
      _this.setState({
        hovered: false
      });
    });

    defineProperty(assertThisInitialized(_this), "start", function () {
      if (!_this.state.active) {
        _this.setState({
          active: true,
          ts: ts()
        });
      }

      deactivateOtherInstances(_this.id);
    });

    defineProperty(assertThisInitialized(_this), "stop", function () {
      if (_this.state.active) {
        _this.setState({
          active: false,
          ts: null
        });
      }

      if (_this.getStorage()) {
        clearTimeout(_this.getStorage().activeTimeout);
        delete storage[_this.id];
      }
    });

    defineProperty(assertThisInitialized(_this), "getStorage", function () {
      return storage[_this.id];
    });

    defineProperty(assertThisInitialized(_this), "getRef", function (container) {
      _this.container = container;
      setRef(container, _this.props.getRootRef);
    });

    defineProperty(assertThisInitialized(_this), "containerHasTransparentBackground", function () {
      if (!_this.container) {
        return true;
      }

      if (!_this.container.style.backgroundColor) {
        return true;
      }

      if (_this.container.style.backgroundColor === 'transparent') {
        return true;
      }

      return false;
    });

    _this.id = Math.round(Math.random() * 1e8).toString(16);
    _this.state = {
      clicks: {},
      active: false,
      ts: null
    };
    _this.isSlide = false;
    return _this;
  }

  createClass(Tappable, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (storage[this.id]) {
        clearTimeout(storage[this.id].timeout);
        clearTimeout(storage[this.id].activeTimeout);
        delete storage[this.id];
      }

      clearTimeout(this.wavesTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          clicks = _this$state.clicks,
          active = _this$state.active,
          hovered = _this$state.hovered;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          Component = _this$props.Component,
          activeEffectDelay = _this$props.activeEffectDelay,
          stopPropagation = _this$props.stopPropagation,
          getRootRef = _this$props.getRootRef,
          platform = _this$props.platform,
          restProps = objectWithoutProperties(_this$props, ["children", "className", "Component", "activeEffectDelay", "stopPropagation", "getRootRef", "platform"]);

      var hoverClassModificator = this.containerHasTransparentBackground() ? 'shadowHovered' : 'opacityHovered';
      var classes = classNames(getClassname('Tappable', platform), className, defineProperty({
        'Tappable--active': active,
        'Tappable--inactive': !active
      }, "Tappable--".concat(hoverClassModificator), hasHover && hovered));
      var RootComponent = restProps.disabled ? Component : Touch;
      var props = {};

      if (!restProps.disabled) {
        props.Component = Component;
        /* eslint-disable */

        props.onStart = this.onStart;
        props.onMove = this.onMove;
        props.onEnd = this.onEnd;
        props.onEnter = this.onEnter;
        props.onLeave = this.onLeave;
        /* eslint-enable */

        props.getRootRef = this.getRef;
      } else {
        props.ref = this.getRef;
      }

      return /*#__PURE__*/react.createElement(TouchRootContext.Consumer, null, function (insideTouchRoot) {
        _this2.insideTouchRoot = insideTouchRoot;
        return /*#__PURE__*/react.createElement(RootComponent, _extends_1({}, restProps, {
          className: classes
        }, props), children, platform === ANDROID && /*#__PURE__*/react.createElement("span", {
          className: "Tappable__waves"
        }, Object.keys(clicks).map(function (k) {
          return /*#__PURE__*/react.createElement("span", {
            className: "Tappable__wave",
            style: {
              top: clicks[k].y,
              left: clicks[k].x
            },
            key: k
          });
        })), hasHover && /*#__PURE__*/react.createElement("span", {
          className: "Tappable__hoverShadow"
        }));
      });
    }
  }]);

  return Tappable;
}(react.Component);

defineProperty(Tappable, "defaultProps", {
  Component: 'div',
  role: 'button',
  stopPropagation: false,
  disabled: false,
  activeEffectDelay: ACTIVE_EFFECT_DELAY
});

var Tappable$1 = withPlatform(Tappable);

function usePlatform() {
  var ssrContext = react.useContext(SSRContext);

  var _useContext = react.useContext(ConfigProviderContext),
      platform = _useContext.platform;

  return ssrContext.platform || platform;
}

var PanelHeaderButton = function PanelHeaderButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      label = _ref.label,
      restProps = objectWithoutProperties(_ref, ["className", "children", "primary", "label"]);

  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  var Component = restProps.href ? 'a' : 'button';
  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Tappable$1, _extends_1({}, restProps, {
    Component: Component,
    activeEffectDelay: 200,
    className: classNames(getClassname('PanelHeaderButton', platform), className, {
      'PanelHeaderButton--primary': primary,
      'PanelHeaderButton--primitive': isPrimitive
    })
  }), children, label);
};

PanelHeaderButton.defaultProps = {
  primary: false
};

function withPanelContext(Component) {
  function WithPanelContext(props) {
    var _useContext = react.useContext(PanelContext),
        panel = _useContext.panel; // @ts-ignore


    return /*#__PURE__*/react.createElement(Component, _extends_1({}, props, {
      panel: panel
    }));
  }

  return WithPanelContext;
}

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FixedLayout = /*#__PURE__*/function (_React$Component) {
  inherits(FixedLayout, _React$Component);

  var _super = _createSuper$6(FixedLayout);

  function FixedLayout() {
    var _this;

    classCallCheck(this, FixedLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      position: 'absolute',
      top: null,
      width: ''
    });

    defineProperty(assertThisInitialized(_this), "el", void 0);

    defineProperty(assertThisInitialized(_this), "onMountResizeTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "onViewTransitionStart", function (e) {
      var panelScroll = e.detail.scrolls[_this.props.panel] || 0;

      _this.setState({
        position: 'absolute',
        top: _this.el.offsetTop + panelScroll,
        width: ''
      });
    });

    defineProperty(assertThisInitialized(_this), "onViewTransitionEnd", function () {
      _this.setState({
        position: null,
        top: null
      });

      _this.doResize();
    });

    defineProperty(assertThisInitialized(_this), "doResize", function () {
      var colRef = _this.props.splitCol.colRef;

      if (colRef && colRef.current) {
        var node = colRef.current;
        var width = node.offsetWidth;

        _this.setState({
          width: "".concat(width, "px"),
          position: null
        });
      } else {
        _this.setState({
          width: '',
          position: null
        });
      }
    });

    defineProperty(assertThisInitialized(_this), "getRef", function (element) {
      _this.el = element;
      setRef(element, _this.props.getRootRef);
    });

    return _this;
  }

  createClass(FixedLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.onMountResizeTimeout = setTimeout(function () {
        return _this2.doResize();
      });
      window.addEventListener('resize', this.doResize);
      this.document.addEventListener(transitionStartEventName, this.onViewTransitionStart);
      this.document.addEventListener(transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.onMountResizeTimeout);
      window.removeEventListener('resize', this.doResize);
      this.document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
      this.document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style,
          vertical = _this$props.vertical,
          getRootRef = _this$props.getRootRef,
          platform = _this$props.platform,
          filled = _this$props.filled,
          splitCol = _this$props.splitCol,
          panel = _this$props.panel,
          restProps = objectWithoutProperties(_this$props, ["className", "children", "style", "vertical", "getRootRef", "platform", "filled", "splitCol", "panel"]);

      return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
        ref: this.getRef,
        className: classNames(getClassname('FixedLayout', platform), {
          'FixedLayout--filled': filled
        }, "FixedLayout--".concat(vertical), className),
        style: _objectSpread$5(_objectSpread$5({}, style), this.state)
      }), /*#__PURE__*/react.createElement("div", {
        className: "FixedLayout__in"
      }, children));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return FixedLayout;
}(react.Component);

defineProperty(FixedLayout, "contextTypes", {
  document: propTypes.any
});

var FixedLayout$1 = withContext(withPlatform(withPanelContext(FixedLayout)), SplitContext, 'splitCol');

var Separator = function Separator(_ref) {
  var className = _ref.className,
      wide = _ref.wide,
      expanded = _ref.expanded,
      restProps = objectWithoutProperties(_ref, ["className", "wide", "expanded"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('Separator', platform), className, {
      'Separator--wide': wide
    })
  }), /*#__PURE__*/react.createElement("div", {
    className: classNames('Separator__in', {
      'Separator__in--expanded': expanded
    })
  }));
};

var Separator$1 = /*#__PURE__*/react.memo(Separator);

var PanelHeader = function PanelHeader(_ref) {
  var className = _ref.className,
      left = _ref.left,
      addon = _ref.addon,
      children = _ref.children,
      right = _ref.right,
      separator = _ref.separator,
      visor = _ref.visor,
      transparent = _ref.transparent,
      shadow = _ref.shadow,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      sizeX = _ref.sizeX,
      restProps = objectWithoutProperties(_ref, ["className", "left", "addon", "children", "right", "separator", "visor", "transparent", "shadow", "getRef", "getRootRef", "sizeX"]);

  var platform = usePlatform();

  var _useContext = react.useContext(ConfigProviderContext),
      webviewType = _useContext.webviewType;

  var needShadow = shadow && sizeX === SizeType.REGULAR;
  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('PanelHeader', platform), {
      'PanelHeader--trnsp': transparent,
      'PanelHeader--shadow': needShadow,
      'PanelHeader--vis': visor,
      'PanelHeader--sep': separator && visor,
      'PanelHeader--vkapps': webviewType === WebviewType.VKAPPS,
      'PanelHeader--no-left': left === undefined,
      'PanelHeader--no-right': right === undefined
    }, className),
    ref: getRootRef
  }), /*#__PURE__*/react.createElement(FixedLayout$1, {
    vertical: "top",
    className: classNames('PanelHeader__fixed', {
      'PanelHeader__fixed--shadow': needShadow
    }),
    getRootRef: getRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__in"
  }, /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__left"
  }, left, platform !== ANDROID && addon), /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__content"
  }, isPrimitive ? /*#__PURE__*/react.createElement("span", null, children) : children), /*#__PURE__*/react.createElement("div", {
    className: "PanelHeader__right"
  }, webviewType !== WebviewType.VKAPPS && right))), separator && visor && /*#__PURE__*/react.createElement(Separator$1, {
    className: sizeX === SizeType.COMPACT ? 'PanelHeader__separator' : '',
    expanded: sizeX === SizeType.REGULAR
  }));
};

PanelHeader.defaultProps = {
  separator: true,
  transparent: false,
  visor: true
};
var PanelHeader$1 = withAdaptivity(PanelHeader, {
  sizeX: true
});

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

var sprite = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSpriteSymbol = addSpriteSymbol;
exports.useIsomorphicLayoutEffect = void 0;

var _browserSprite = _interopRequireDefault(browserSprite);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var browserSprite$1;

if (canUseDOM) {
  var spriteId = '__SVG_SPRITE_NODE__';
  browserSprite$1 = new _browserSprite.default({
    attrs: {
      id: spriteId
    }
  });

  var mount = function mount() {
    var spriteNode = document.getElementById(spriteId);

    if (spriteNode) {
      browserSprite$1.attach(spriteNode);
    } else {
      browserSprite$1.mount();
    }
  };

  if (document.querySelector('body')) {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount);
  }
} else {
  browserSprite$1 = null;
}

function addSpriteSymbol(symbol) {
  if (browserSprite$1) {
    browserSprite$1.add(symbol);
  }
}

var useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;

});

var SvgIcon_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgIcon = void 0;

var _react = _interopRequireDefault(react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var svgStyle = {
  display: 'block'
};

var SvgIcon = function SvgIcon(_ref) {
  var width = _ref.width,
      height = _ref.height,
      viewBox = _ref.viewBox,
      id = _ref.id,
      className = _ref.className,
      style = _ref.style,
      fill = _ref.fill,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["width", "height", "viewBox", "id", "className", "style", "fill", "getRootRef"]);

  var size = Math.max(width, height);
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: "Icon Icon--".concat(size, " Icon--w-").concat(width, " Icon--h-").concat(height, " Icon--").concat(id, " ").concat(className),
    style: _objectSpread({}, style, {
      width: width,
      height: height
    })
  }), /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: viewBox,
    width: width,
    height: height,
    style: svgStyle
  }, /*#__PURE__*/_react.default.createElement("use", {
    xlinkHref: "#".concat(id),
    style: {
      fill: 'currentColor',
      color: fill
    }
  })));
};

exports.SvgIcon = SvgIcon;
SvgIcon.defaultProps = {
  className: '',
  style: {}
};

});

var chevron_right = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'chevron_right_24';
var content = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chevron_right_24"><path d="M14.232 12L8.116 5.884a1.25 1.25 0 111.768-1.768l7 7a1.25 1.25 0 010 1.768l-7 7a1.25 1.25 0 01-1.768-1.768z" fill="currentColor" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24ChevronRight = function Icon24ChevronRight(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24ChevronRight.mountIcon = mountIcon;
var _default = Icon24ChevronRight;
exports.default = _default;

});

var Icon24Chevron = /*@__PURE__*/getDefaultExportFromCjs(chevron_right);

/**
 * ease function
 * @param x absolute progress of the animation in bounds 0 (beginning) and 1 (end)
 */
function easeInOutSine(x) {
  return 0.5 * (1 - Math.cos(Math.PI * x));
}
/**
 * timing method
 */


function now() {
  return performance && performance.now ? performance.now() : Date.now();
}
/**
 * Код анимации скрола, на основе полифила: https://github.com/iamdustan/smoothscroll
 * Константа взята из полифила (468), на дизайн-ревью уточнили до 250
 * @var {number} SCROLL_ONE_FRAME_TIME время анимации скролла
 */


var SCROLL_ONE_FRAME_TIME = 250;

function doScroll(_ref) {
  var scrollElement = _ref.scrollElement,
      getScrollPosition = _ref.getScrollPosition,
      animationQueue = _ref.animationQueue,
      onScrollToRightBorder = _ref.onScrollToRightBorder,
      onScrollEnd = _ref.onScrollEnd,
      onScrollStart = _ref.onScrollStart,
      initialScrollWidth = _ref.initialScrollWidth,
      _ref$scrollAnimationD = _ref.scrollAnimationDuration,
      scrollAnimationDuration = _ref$scrollAnimationD === void 0 ? SCROLL_ONE_FRAME_TIME : _ref$scrollAnimationD;

  if (!scrollElement || !getScrollPosition) {
    return;
  }
  /**
   * максимальное значение сдвига влево
   */


  var maxLeft = initialScrollWidth - scrollElement.offsetWidth;
  var startLeft = scrollElement.scrollLeft;
  var endLeft = getScrollPosition(startLeft);
  onScrollStart();

  if (endLeft >= maxLeft) {
    onScrollToRightBorder();
    endLeft = maxLeft;
  }

  var startTime = now();

  (function scroll() {
    if (!scrollElement) {
      onScrollEnd();
      return;
    }

    var time = now();
    var elapsed = Math.min((time - startTime) / scrollAnimationDuration, 1);
    var value = easeInOutSine(elapsed);
    var currentLeft = startLeft + (endLeft - startLeft) * value;
    scrollElement.scrollLeft = Math.ceil(currentLeft);

    if (scrollElement.scrollLeft !== endLeft) {
      requestAnimationFrame(scroll);
      return;
    }

    onScrollEnd();
    animationQueue.shift();

    if (animationQueue.length > 0) {
      animationQueue[0]();
    }
  })();
}

var HorizontalScrollArrow = function HorizontalScrollArrow(props) {
  var onClick = props.onClick,
      direction = props.direction;
  return /*#__PURE__*/react.createElement("div", {
    className: "HorizontalScroll__arrow HorizontalScroll__arrow-".concat(direction),
    onClick: onClick
  }, /*#__PURE__*/react.createElement("div", {
    className: "HorizontalScroll__arrow-icon"
  }, /*#__PURE__*/react.createElement(Icon24Chevron, null)));
};

var HorizontalScroll = function HorizontalScroll(props) {
  var children = props.children,
      getScrollToLeft = props.getScrollToLeft,
      getScrollToRight = props.getScrollToRight,
      _props$showArrows = props.showArrows,
      showArrows = _props$showArrows === void 0 ? false : _props$showArrows,
      scrollAnimationDuration = props.scrollAnimationDuration,
      className = props.className,
      restProps = objectWithoutProperties(props, ["children", "getScrollToLeft", "getScrollToRight", "showArrows", "scrollAnimationDuration", "className"]);

  var _useState = react.useState(false),
      _useState2 = slicedToArray(_useState, 2),
      canScrollLeft = _useState2[0],
      setCanScrollLeft = _useState2[1];

  var _useState3 = react.useState(false),
      _useState4 = slicedToArray(_useState3, 2),
      canScrollRight = _useState4[0],
      setCanScrollRight = _useState4[1];

  var _useState5 = react.useState(0),
      _useState6 = slicedToArray(_useState5, 2),
      initialScrollWidth = _useState6[0],
      setInitialScrollWidth = _useState6[1];

  var isCustomScrollingRef = react.useRef(false);
  var scrollerRef = react.useRef(null);
  var animationQueue = react.useRef([]);

  function scrollTo(getScrollPosition) {
    animationQueue.current.push(function () {
      return doScroll({
        scrollElement: scrollerRef.current,
        getScrollPosition: getScrollPosition,
        animationQueue: animationQueue.current,
        onScrollToRightBorder: function onScrollToRightBorder() {
          return setCanScrollRight(false);
        },
        onScrollEnd: function onScrollEnd() {
          return isCustomScrollingRef.current = false;
        },
        onScrollStart: function onScrollStart() {
          return isCustomScrollingRef.current = true;
        },
        initialScrollWidth: initialScrollWidth,
        scrollAnimationDuration: scrollAnimationDuration
      });
    });

    if (animationQueue.current.length === 1) {
      animationQueue.current[0]();
    }
  }

  var onscroll = react.useCallback(function () {
    if (showArrows && hasMouse && scrollerRef.current && !isCustomScrollingRef.current) {
      setCanScrollLeft(scrollerRef.current.scrollLeft > 0);
      setCanScrollRight(scrollerRef.current.scrollLeft + scrollerRef.current.offsetWidth < scrollerRef.current.scrollWidth);
    }
  }, []);
  react.useEffect(function () {
    scrollerRef.current && scrollerRef.current.addEventListener('scroll', onscroll);
    scrollerRef.current && setInitialScrollWidth(scrollerRef.current.scrollWidth);
    return function () {
      return scrollerRef.current && scrollerRef.current.removeEventListener('scroll', onscroll);
    };
  }, []);
  react.useEffect(onscroll, [scrollerRef]);
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames('HorizontalScroll', className)
  }), showArrows && hasMouse && canScrollLeft && /*#__PURE__*/react.createElement(HorizontalScrollArrow, {
    direction: "left",
    onClick: function onClick() {
      return scrollTo(getScrollToLeft);
    }
  }), showArrows && hasMouse && canScrollRight && /*#__PURE__*/react.createElement(HorizontalScrollArrow, {
    direction: "right",
    onClick: function onClick() {
      return scrollTo(getScrollToRight);
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "HorizontalScroll__in",
    ref: scrollerRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "HorizontalScroll__in-wrapper"
  }, children)));
};

var spinner = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 24 24';
var id = 'spinner_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="spinner_24"><path d="M12 24a1.25 1.25 0 110-2.5A9.5 9.5 0 102.5 12c0 1.1.187 2.175.548 3.188a1.25 1.25 0 01-2.355.84A11.981 11.981 0 010 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" fill="currentColor" fill-rule="nonzero" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Spinner = function Icon24Spinner(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Spinner.mountIcon = mountIcon;
var _default = Icon24Spinner;
exports.default = _default;

});

var Spinner24 = /*@__PURE__*/getDefaultExportFromCjs(spinner);

var spinner$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 32 32';
var id = 'spinner_32';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path d="M16 32a1.5 1.5 0 010-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 11.986 21.54 15.97 15.97 0 010 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" fill="currentColor" fill-rule="nonzero" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon32Spinner = function Icon32Spinner(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 32,
    height: !isNaN(props.height) ? +props.height : 32
  }));
};

Icon32Spinner.mountIcon = mountIcon;
var _default = Icon32Spinner;
exports.default = _default;

});

var Spinner32 = /*@__PURE__*/getDefaultExportFromCjs(spinner$1);

var spinner$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 44 44';
var id = 'spinner_44';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path d="M22 44a1.5 1.5 0 010-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 11-2.825 1.01A21.964 21.964 0 010 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22z" fill="currentColor" fill-rule="nonzero" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon44Spinner = function Icon44Spinner(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 44,
    height: !isNaN(props.height) ? +props.height : 44
  }));
};

Icon44Spinner.mountIcon = mountIcon;
var _default = Icon44Spinner;
exports.default = _default;

});

var Spinner44 = /*@__PURE__*/getDefaultExportFromCjs(spinner$2);

var spinner$3 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 16';
var id = 'spinner_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="spinner_16"><path d="M8 16a1 1 0 110-2 6 6 0 10-5.7-4.12 1 1 0 11-1.9.626A8 8 0 118 16z" fill="currentColor" fill-rule="nonzero" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon16Spinner = function Icon16Spinner(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16Spinner.mountIcon = mountIcon;
var _default = Icon16Spinner;
exports.default = _default;

});

var Spinner16 = /*@__PURE__*/getDefaultExportFromCjs(spinner$3);

var svgSpinner = function svgSpinner(size) {
  switch (size) {
    case 'large':
      return /*#__PURE__*/react.createElement(Spinner44, {
        className: "Spinner__self"
      });

    case 'medium':
      return /*#__PURE__*/react.createElement(Spinner32, {
        className: "Spinner__self"
      });

    case 'small':
      return /*#__PURE__*/react.createElement(Spinner16, {
        className: "Spinner__self"
      });

    default:
      return /*#__PURE__*/react.createElement(Spinner24, {
        className: "Spinner__self"
      });
  }
};

var Spinner = function Spinner(_ref) {
  var className = _ref.className,
      size = _ref.size,
      restProps = objectWithoutProperties(_ref, ["className", "size"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('Spinner', platform), className)
  }), svgSpinner(size));
};

Spinner.defaultProps = {
  size: 'regular'
};
var Spinner$1 = /*#__PURE__*/react.memo(Spinner);

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Snackbar = /*#__PURE__*/function (_PureComponent) {
  inherits(Snackbar, _PureComponent);

  var _super = _createSuper$7(Snackbar);

  function Snackbar(props) {
    var _this;

    classCallCheck(this, Snackbar);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "innerEl", void 0);

    defineProperty(assertThisInitialized(_this), "bodyElRef", void 0);

    defineProperty(assertThisInitialized(_this), "shiftXPercent", void 0);

    defineProperty(assertThisInitialized(_this), "shiftXCurrent", void 0);

    defineProperty(assertThisInitialized(_this), "touchStartTime", void 0);

    defineProperty(assertThisInitialized(_this), "animationFrame", void 0);

    defineProperty(assertThisInitialized(_this), "closeTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "transitionFinishTimeout", void 0);

    defineProperty(assertThisInitialized(_this), "setCloseTimeout", function () {
      if (canUseDOM) {
        _this.closeTimeout = setTimeout(function () {
          _this.close();
        }, _this.props.duration);
      }
    });

    defineProperty(assertThisInitialized(_this), "clearCloseTimeout", function () {
      clearTimeout(_this.closeTimeout);
    });

    defineProperty(assertThisInitialized(_this), "onActionClick", function (e) {
      _this.close();

      if (_this.props.action && typeof _this.props.onActionClick === 'function') {
        _this.props.onActionClick(e);
      }
    });

    defineProperty(assertThisInitialized(_this), "getInnerRef", function (el) {
      return _this.innerEl = el;
    });

    defineProperty(assertThisInitialized(_this), "onTouchStart", function () {
      _this.clearCloseTimeout();
    });

    defineProperty(assertThisInitialized(_this), "onTouchMoveX", function (event) {
      var shiftX = event.shiftX,
          startT = event.startT,
          originalEvent = event.originalEvent;
      originalEvent.preventDefault();

      if (!_this.state.touched) {
        _this.setState({
          touched: true
        });
      }

      _this.shiftXPercent = shiftX / _this.window.innerWidth * 100;
      _this.shiftXCurrent = rubber(_this.shiftXPercent, 72, 1.2, _this.props.platform === ANDROID);
      _this.touchStartTime = startT;

      _this.setBodyTransform(_this.shiftXCurrent);
    });

    defineProperty(assertThisInitialized(_this), "onTouchEnd", function () {
      var newState = {
        touched: false
      };
      var callback;

      if (_this.state.touched) {
        var shiftXReal = _this.shiftXCurrent;
        var expectTranslateY = shiftXReal / (Date.now() - _this.touchStartTime.getTime()) * 240 * 0.6 * (_this.shiftXPercent < 0 ? -1 : 1);
        shiftXReal = shiftXReal + expectTranslateY;

        if (shiftXReal >= 50) {
          _this.clearCloseTimeout();

          _this.waitTransitionFinish(_this.bodyElRef.current, function () {
            _this.props.onClose();
          });

          _this.setBodyTransform(120);
        } else {
          callback = function callback() {
            _this.setCloseTimeout();

            _this.setBodyTransform(0);
          };
        }
      } else {
        _this.setCloseTimeout();
      }

      _this.setState(newState, callback);
    });

    _this.state = {
      closing: false,
      touched: false
    };
    _this.bodyElRef = /*#__PURE__*/react.createRef();
    _this.shiftXPercent = 0;
    _this.shiftXCurrent = 0;
    return _this;
  }

  createClass(Snackbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setCloseTimeout();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimeout();
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      this.setState({
        closing: true
      });
      this.waitTransitionFinish(this.innerEl, function () {
        _this2.props.onClose();
      });
    }
  }, {
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(element, eventHandler) {
      if (element) {
        {
          clearTimeout(this.transitionFinishTimeout);
          this.transitionFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID ? 400 : 320);
        }
      }
    }
  }, {
    key: "setBodyTransform",
    value: function setBodyTransform(percent) {
      var _this3 = this;

      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = requestAnimationFrame(function () {
        _this3.bodyElRef.current.style.transform = "translate3d(".concat(percent, "%, 0, 0)");
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          platform = _this$props.platform,
          layout = _this$props.layout,
          action = _this$props.action,
          before = _this$props.before,
          after = _this$props.after,
          viewWidth = _this$props.viewWidth;
      var isDesktop = viewWidth >= ViewWidth.SMALL_TABLET;
      var resolvedLayout = after || isDesktop ? 'vertical' : layout;
      return /*#__PURE__*/react.createElement(FixedLayout$1, {
        vertical: "bottom",
        className: classNames(getClassname('Snackbar', platform), className, "Snackbar--l-".concat(resolvedLayout), {
          'Snackbar--closing': this.state.closing,
          'Snackbar--touched': this.state.touched,
          'Snackbar--desktop': isDesktop
        })
      }, /*#__PURE__*/react.createElement(Touch, {
        className: "Snackbar__in",
        getRootRef: this.getInnerRef,
        onStart: this.onTouchStart,
        onMoveX: this.onTouchMoveX,
        onEnd: this.onTouchEnd
      }, /*#__PURE__*/react.createElement("div", {
        className: "Snackbar__body",
        ref: this.bodyElRef
      }, before && /*#__PURE__*/react.createElement("div", {
        className: "Snackbar__before"
      }, before), /*#__PURE__*/react.createElement("div", {
        className: "Snackbar__content"
      }, /*#__PURE__*/react.createElement("div", {
        className: "Snackbar__content-text"
      }, children), action && /*#__PURE__*/react.createElement("button", {
        className: "Snackbar__action",
        onClick: this.onActionClick
      }, /*#__PURE__*/react.createElement("div", {
        className: "Snackbar__action-self"
      }, action))), after && /*#__PURE__*/react.createElement("div", {
        className: "Snackbar__after"
      }, after))));
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }]);

  return Snackbar;
}(react.PureComponent);

defineProperty(Snackbar, "defaultProps", {
  duration: 4000
});

defineProperty(Snackbar, "contextTypes", {
  window: propTypes.any,
  document: propTypes.any
});

var Snackbar$1 = withPlatform(withAdaptivity(Snackbar, {
  viewWidth: true
}));

var Text = function Text(_ref) {
  var children = _ref.children,
      className = _ref.className,
      weight = _ref.weight,
      restProps = objectWithoutProperties(_ref, ["children", "className", "weight"]);

  var platform = usePlatform();
  var textWeight = weight;

  if (platform === ANDROID) {
    if (weight === 'semibold') {
      textWeight = 'medium';
    }
  }

  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    className: classNames(getClassname('Text', platform), "Text--w-".concat(textWeight), className)
  }), children);
};

var IconButton = function IconButton(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      restProps = objectWithoutProperties(_ref, ["className", "icon"]);

  var Component = restProps.href ? 'a' : 'button';
  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Tappable$1, _extends_1({}, restProps, {
    Component: Component,
    activeEffectDelay: 200,
    className: classNames(getClassname('IconButton', platform), className)
  }), icon);
};

var Card = function Card(_ref) {
  var size = _ref.size,
      mode = _ref.mode,
      children = _ref.children,
      style = _ref.style,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ["size", "mode", "children", "style", "className"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    style: style,
    className: classNames(className, getClassname('Card', platform), "Card--sz-".concat(size), "Card--md-".concat(mode))
  }), /*#__PURE__*/react.createElement("div", {
    className: "Card__in"
  }, children));
};

Card.defaultProps = {
  size: 'm',
  mode: 'tint'
};

var CardScroll = function CardScroll(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      restProps = objectWithoutProperties(_ref, ["children", "className", "style"]);

  var platform = usePlatform();
  var refs = react.useRef(new Array(react.Children.count(children)));
  var refContainer = react.useRef(null);

  function getScrollToLeft(offset) {
    var containerWidth = refContainer.current.offsetWidth;
    var slideIndex = refs.current.findIndex(function (el) {
      return el.offsetLeft + el.offsetWidth - offset >= 0;
    });

    if (slideIndex === -1) {
      return offset;
    }

    var slide = refs.current[slideIndex];

    if (slideIndex === 0) {
      return 0;
    }

    var marginRight = parseInt(window.getComputedStyle(slide).marginRight);
    var scrollTo = slide.offsetLeft - (containerWidth - slide.offsetWidth) + marginRight;

    if (scrollTo <= 2 * marginRight) {
      return 0;
    }

    return scrollTo;
  }

  function getScrollToRight(offset) {
    var containerWidth = refContainer.current.offsetWidth;
    var slide = refs.current.find(function (el) {
      return el.offsetLeft + el.offsetWidth - offset > containerWidth;
    });

    if (!slide) {
      return offset;
    }

    var marginRight = parseInt(window.getComputedStyle(slide).marginRight);
    return slide.offsetLeft - marginRight;
  }

  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    style: style,
    className: classNames(className, getClassname('CardScroll', platform))
  }), /*#__PURE__*/react.createElement(HorizontalScroll, {
    getScrollToLeft: getScrollToLeft,
    getScrollToRight: getScrollToRight,
    showArrows: true
  }, /*#__PURE__*/react.createElement("div", {
    className: "CardScroll__in",
    ref: refContainer
  }, react.Children.map(children, function (item, i) {
    return /*#__PURE__*/react.createElement("div", {
      className: 'CardScroll__slide' + (item.props.size === 'l' ? ' CardScroll__slide--sz-l' : ''),
      ref: function ref(node) {
        return refs.current[i] = node;
      }
    }, item);
  }))));
};

var chevron = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 24';
var id = 'chevron_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path d="M4.706 7.706a1 1 0 010-1.412l.088-.088a.997.997 0 011.414.002l5.084 5.084a.998.998 0 010 1.416l-5.084 5.084a1.002 1.002 0 01-1.414.002l-.088-.088a.995.995 0 010-1.412L9 12 4.706 7.706z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Chevron = function Icon24Chevron(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Chevron.mountIcon = mountIcon;
var _default = Icon24Chevron;
exports.default = _default;

});

var Icon24Chevron$1 = /*@__PURE__*/getDefaultExportFromCjs(chevron);

var SimpleCell = function SimpleCell(_ref) {
  var before = _ref.before,
      indicator = _ref.indicator,
      children = _ref.children,
      after = _ref.after,
      description = _ref.description,
      className = _ref.className,
      expandable = _ref.expandable,
      multiline = _ref.multiline,
      Component = _ref.Component,
      sizeX = _ref.sizeX,
      restProps = objectWithoutProperties(_ref, ["before", "indicator", "children", "after", "description", "className", "expandable", "multiline", "Component", "sizeX"]);

  var platform = usePlatform();
  var hasAfter = hasReactNode(after) || expandable && platform === IOS;
  var RootComponent = restProps.disabled ? Component : Tappable$1;
  Component = restProps.disabled ? undefined : Component;
  return /*#__PURE__*/react.createElement(RootComponent, _extends_1({}, restProps, {
    Component: restProps.href ? 'a' : Component,
    className: classNames(className, getClassname('SimpleCell', platform), "SimpleCell--sizeX-".concat(sizeX), {
      'SimpleCell--exp': expandable,
      'SimpleCell--mult': multiline
    })
  }), before, /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__main"
  }, /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__children"
  }, children), description && /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__description"
  }, description)), hasReactNode(indicator) && /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__indicator"
  }, indicator), hasAfter && /*#__PURE__*/react.createElement("div", {
    className: "SimpleCell__after"
  }, after, expandable && platform === IOS && /*#__PURE__*/react.createElement(Icon24Chevron$1, null)));
};

SimpleCell.defaultProps = {
  Component: 'div'
};
var SimpleCell$1 = withAdaptivity(SimpleCell, {
  sizeX: true
});

var Div = function Div(_ref) {
  var className = _ref.className,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      restProps = objectWithoutProperties(_ref, ["className", "children", "getRootRef"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({}, restProps, {
    ref: getRootRef,
    className: classNames(getClassname('Div', platform), className)
  }), children);
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      size = _ref.size,
      shadow = _ref.shadow,
      mode = _ref.mode,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      restProps = objectWithoutProperties(_ref, ["src", "size", "shadow", "mode", "style", "className", "children", "getRootRef"]);

  var Component = src ? 'img' : 'div';
  var platform = usePlatform();
  var borderRadius;

  switch (mode) {
    case 'default':
      borderRadius = '50%';
      break;

    case 'image':
      borderRadius = 4;
      break;

    case 'app':
      borderRadius = Math.floor(size * 10 / 48);
      break;
  }

  return /*#__PURE__*/react.createElement("div", {
    className: classNames(getClassname('Avatar', platform), className, "Avatar--type-".concat(mode), "Avatar--sz-".concat(size)),
    ref: getRootRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "Avatar__in",
    style: {
      width: size,
      height: size
    }
  }, /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
    className: "Avatar__img",
    src: src,
    style: _objectSpread$6(_objectSpread$6({}, style), {}, {
      borderRadius: borderRadius
    })
  })), shadow && /*#__PURE__*/react.createElement("span", {
    className: "Avatar__shadow",
    style: {
      borderRadius: borderRadius
    }
  }), children && /*#__PURE__*/react.createElement("div", {
    className: "Avatar__children",
    style: {
      width: size,
      height: size,
      borderRadius: borderRadius
    }
  }, children)));
};

Avatar.defaultProps = {
  size: 48,
  mode: 'default',
  shadow: true
};

var search_outline = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 16';
var id = 'search_outline_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="search_outline_16"><g fill="none" fill-rule="evenodd" opacity=".92"><path opacity=".1" d="M0 0h16v16H0z" /><path d="M9.823 10.884a5.5 5.5 0 111.06-1.06l3.896 3.9a.75.75 0 01-1.061 1.06l-3.895-3.9zM6.5 10.5a4 4 0 100-8 4 4 0 000 8z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon16SearchOutline = function Icon16SearchOutline(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16SearchOutline.mountIcon = mountIcon;
var _default = Icon16SearchOutline;
exports.default = _default;

});

var Icon16SearchOutline = /*@__PURE__*/getDefaultExportFromCjs(search_outline);

var clear = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 16 16';
var id = 'clear_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="clear_16"><path d="M6.729 8.002L4.263 10.47a.9.9 0 101.273 1.273L8 9.275l2.465 2.468a.9.9 0 101.272-1.273L9.273 8.002l2.465-2.469a.9.9 0 10-1.272-1.273L8 6.728 5.536 4.26a.9.9 0 00-1.273 1.273l2.466 2.469zM8 16A8 8 0 118 0a8 8 0 010 16z" fill="currentColor" fill-rule="evenodd" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon16Clear = function Icon16Clear(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16Clear.mountIcon = mountIcon;
var _default = Icon16Clear;
exports.default = _default;

});

var Icon16Clear = /*@__PURE__*/getDefaultExportFromCjs(clear);

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var searchId = 0;

var Search = /*#__PURE__*/function (_Component) {
  inherits(Search, _Component);

  var _super = _createSuper$8(Search);

  function Search(props) {
    var _this;

    classCallCheck(this, Search);

    _this = _super.call(this, props);

    defineProperty(assertThisInitialized(_this), "isControlledOutside", void 0);

    defineProperty(assertThisInitialized(_this), "inputEl", void 0);

    defineProperty(assertThisInitialized(_this), "searchId", void 0);

    defineProperty(assertThisInitialized(_this), "onFocus", function (e) {
      _this.setState({
        focused: true
      });

      _this.props.onFocus && _this.props.onFocus(e);
    });

    defineProperty(assertThisInitialized(_this), "onBlur", function (e) {
      _this.setState({
        focused: false
      });

      _this.props.onBlur && _this.props.onBlur(e);
    });

    defineProperty(assertThisInitialized(_this), "onChange", function (e) {
      var target = e.target;

      if (!_this.isControlledOutside) {
        _this.setState({
          value: target.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });

    defineProperty(assertThisInitialized(_this), "onCancel", function () {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      nativeInputValueSetter.call(_this.inputEl, '');
      var ev2 = new Event('input', {
        bubbles: true
      });

      _this.inputEl.dispatchEvent(ev2);
    });

    defineProperty(assertThisInitialized(_this), "onIconClickStart", function (e) {
      _this.props.onIconClick && _this.props.onIconClick(e.originalEvent);
    });

    defineProperty(assertThisInitialized(_this), "onIconCancelClickStart", function (e) {
      e.originalEvent.preventDefault();

      _this.inputEl.focus();

      _this.onCancel();
    });

    defineProperty(assertThisInitialized(_this), "inputRef", function (element) {
      _this.inputEl = element;
      setRef(element, _this.props.getRef);
    });

    var state = {
      focused: false
    };

    if (props.hasOwnProperty('value')) {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }

    _this.searchId = "search-".concat(searchId++);
    _this.state = state;
    return _this;
  }

  createClass(Search, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          placeholder = _this$props.placeholder,
          after = _this$props.after,
          getRef = _this$props.getRef,
          platform = _this$props.platform,
          icon = _this$props.icon,
          onIconClick = _this$props.onIconClick,
          inputProps = objectWithoutProperties(_this$props, ["className", "onFocus", "onBlur", "onChange", "defaultValue", "value", "placeholder", "after", "getRef", "platform", "icon", "onIconClick"]);

      return /*#__PURE__*/react.createElement("div", {
        className: classNames(getClassname('Search', platform), {
          'Search--focused': this.state.focused,
          'Search--has-value': !!this.value,
          'Search--has-after': !!after,
          'Search--has-icon': !!icon
        }, className)
      }, /*#__PURE__*/react.createElement("div", {
        className: "Search__in"
      }, /*#__PURE__*/react.createElement("div", {
        className: "Search__width"
      }), /*#__PURE__*/react.createElement("div", {
        className: "Search__control"
      }, /*#__PURE__*/react.createElement("input", _extends_1({}, inputProps, {
        ref: this.inputRef,
        type: "text",
        className: "Search__input",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        value: this.value
      })), platform === IOS && after && /*#__PURE__*/react.createElement("div", {
        className: "Search__after-width"
      }, after), /*#__PURE__*/react.createElement("div", {
        className: "Search__placeholder"
      }, /*#__PURE__*/react.createElement("div", {
        className: "Search__placeholder-in"
      }, /*#__PURE__*/react.createElement(Icon16SearchOutline, null), /*#__PURE__*/react.createElement("div", {
        className: "Search__placeholder-text"
      }, placeholder)))), /*#__PURE__*/react.createElement("div", {
        className: "Search__after",
        onClick: this.onCancel
      }, /*#__PURE__*/react.createElement("div", {
        className: "Search__icons"
      }, icon && /*#__PURE__*/react.createElement(Touch, {
        onStart: this.onIconClickStart,
        className: "Search__icon"
      }, icon), !!this.value && /*#__PURE__*/react.createElement(Touch, {
        onStart: this.onIconCancelClickStart,
        className: "Search__icon"
      }, /*#__PURE__*/react.createElement(Icon16Clear, null))), platform === IOS && after && /*#__PURE__*/react.createElement("div", {
        className: "Search__after-in"
      }, after))));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Search;
}(react.Component);

defineProperty(Search, "defaultProps", {
  autoComplete: 'off',
  placeholder: 'Поиск',
  after: 'Отмена'
});

var Search$1 = withPlatform(Search);

var preventDefault = function preventDefault(e) {
  return e.preventDefault();
};

var FormLayout = function FormLayout(props) {
  var children = props.children,
      Component = props.Component,
      className = props.className,
      getRef = props.getRef,
      onSubmit = props.onSubmit,
      restProps = objectWithoutProperties(props, ["children", "Component", "className", "getRef", "onSubmit"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
    className: classNames(getClassname('FormLayout', platform), className),
    onSubmit: onSubmit,
    ref: getRef
  }), /*#__PURE__*/react.createElement("div", {
    className: "FormLayout__container"
  }, react.Children.toArray(children).map(function (field, i) {
    if (field) {
      var _field$props = field.props,
          status = _field$props.status,
          top = _field$props.top,
          bottom = _field$props.bottom;
      return /*#__PURE__*/react.createElement("div", {
        className: classNames('FormLayout__row', defineProperty({}, "FormLayout__row--s-".concat(status), !!status)),
        key: field.key || "row-".concat(i)
      }, top && /*#__PURE__*/react.createElement("div", {
        className: "FormLayout__row-top"
      }, top), field, bottom && /*#__PURE__*/react.createElement("div", {
        className: "FormLayout__row-bottom"
      }, bottom));
    } else {
      return null;
    }
  })), Component === 'form' && /*#__PURE__*/react.createElement("input", {
    type: "submit",
    className: "FormLayout__submit",
    value: ""
  }));
};

FormLayout.defaultProps = {
  Component: 'form',
  onSubmit: preventDefault
};

var FormLayoutGroup = function FormLayoutGroup(_ref) {
  var children = _ref.children,
      top = _ref.top,
      bottom = _ref.bottom,
      className = _ref.className,
      status = _ref.status,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'vertical' : _ref$mode,
      restProps = objectWithoutProperties(_ref, ["children", "top", "bottom", "className", "status", "mode"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement("div", _extends_1({
    className: classNames(getClassname('FormLayoutGroup', platform), "FormLayoutGroup--".concat(mode), className)
  }, restProps), mode === 'vertical' ? children : react.Children.toArray(children).map(function (field, index) {
    if (field) {
      var _field$props = field.props,
          _status = _field$props.status,
          _top = _field$props.top,
          _bottom = _field$props.bottom;
      return /*#__PURE__*/react.createElement("div", {
        className: classNames('FormLayoutGroup__cell', defineProperty({}, "FormLayout__row--s-".concat(_status), !!_status)),
        key: field.key || "row-".concat(index)
      }, _top && /*#__PURE__*/react.createElement("div", {
        className: "FormLayout__row-top"
      }, _top), field, _bottom && /*#__PURE__*/react.createElement("div", {
        className: "FormLayout__row-bottom"
      }, _bottom));
    } else {
      return null;
    }
  }));
};

var FormField = function FormField(_ref) {
  var Component = _ref.Component,
      className = _ref.className,
      children = _ref.children,
      status = _ref.status,
      getRootRef = _ref.getRootRef,
      top = _ref.top,
      bottom = _ref.bottom,
      restProps = objectWithoutProperties(_ref, ["Component", "className", "children", "status", "getRootRef", "top", "bottom"]);

  var platform = usePlatform();

  var _useState = react.useState(false),
      _useState2 = slicedToArray(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var handleMouseEnter = function handleMouseEnter(e) {
    e.stopPropagation();
    setHover(true);
  };

  var handleMouseLeave = function handleMouseLeave(e) {
    e.stopPropagation();
    setHover(false);
  };

  return /*#__PURE__*/react.createElement(Component, _extends_1({}, restProps, {
    ref: getRootRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: classNames(getClassname('FormField', platform), defineProperty({}, "FormField--s-".concat(status), status !== 'default'), className)
  }), children, /*#__PURE__*/react.createElement("div", {
    className: classNames('FormField__border', {
      'FormField__border--hover': hover
    })
  }));
};

FormField.defaultProps = {
  status: 'default',
  Component: 'div'
};

var Input = function Input(_ref) {
  var align = _ref.align,
      status = _ref.status,
      getRef = _ref.getRef,
      className = _ref.className,
      getRootRef = _ref.getRootRef,
      top = _ref.top,
      bottom = _ref.bottom,
      sizeY = _ref.sizeY,
      restProps = objectWithoutProperties(_ref, ["align", "status", "getRef", "className", "getRootRef", "top", "bottom", "sizeY"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(FormField, {
    className: classNames(getClassname('Input', platform), className, defineProperty({}, "Input--".concat(align), !!align), "Input--sizeY-".concat(sizeY)),
    status: status,
    getRootRef: getRootRef
  }, /*#__PURE__*/react.createElement("input", _extends_1({}, restProps, {
    className: "Input__el",
    ref: getRef
  })));
};

Input.defaultProps = {
  type: 'text'
};
var Input$1 = withAdaptivity(Input, {
  sizeY: true
});

var cancel_outline = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 28 28';
var id = 'cancel_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="cancel_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M6.293 6.293a1 1 0 011.414 0L14 12.585l6.293-6.292a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414L15.415 14l6.292 6.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0L14 15.415l-6.293 6.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414L12.585 14 6.293 7.707a1 1 0 01-.083-1.32z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon28CancelOutline = function Icon28CancelOutline(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28CancelOutline.mountIcon = mountIcon;
var _default = Icon28CancelOutline;
exports.default = _default;

});

var Icon28CancelOutline = /*@__PURE__*/getDefaultExportFromCjs(cancel_outline);

var PanelHeaderClose = function PanelHeaderClose(_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ["children"]);

  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(PanelHeaderButton, restProps, platform === ANDROID ? /*#__PURE__*/react.createElement(Icon28CancelOutline, null) : children);
};

PanelHeaderClose.defaultProps = {
  children: 'Отмена'
};

var chevron_back = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 20 28';
var id = 'chevron_back_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 28" id="chevron_back_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v28H0z" /><path d="M4.56 12.94L13 4.5a1.414 1.414 0 012 2L7.5 14l7.5 7.5a1.414 1.414 0 01-2 2l-8.44-8.44a1.5 1.5 0 010-2.12z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon28ChevronBack = function Icon28ChevronBack(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28ChevronBack.mountIcon = mountIcon;
var _default = Icon28ChevronBack;
exports.default = _default;

});

var Icon28ChevronBack = /*@__PURE__*/getDefaultExportFromCjs(chevron_back);

var arrow_left_outline = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _browserSymbol = _interopRequireDefault(browserSymbol);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
// @ts-ignore
var viewBox = '0 0 28 28';
var id = 'arrow_left_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="arrow_left_outline_28"><g fill="none" fill-rule="evenodd"><path d="M28 0H0v28h28z" /><path d="M12.293 6.293a1 1 0 011.414 1.414L8.414 13H22a1 1 0 01.993.883L23 14a1 1 0 01-1 1H8.414l5.293 5.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0l-7-7-.073-.082A1.005 1.005 0 015 14l.004.09A1.006 1.006 0 015 14.02V14a1.02 1.02 0 01.125-.484.878.878 0 01.071-.111.999.999 0 01.097-.112l-.08.09c.025-.031.051-.062.08-.09z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    (0, sprite.addSpriteSymbol)(new _browserSymbol.default({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon28ArrowLeftOutline = function Icon28ArrowLeftOutline(props) {
  (0, sprite.useIsomorphicLayoutEffect)(function () {
    mountIcon();
  }, []);
  return _react.default.createElement(SvgIcon_1.SvgIcon, (0, es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28ArrowLeftOutline.mountIcon = mountIcon;
var _default = Icon28ArrowLeftOutline;
exports.default = _default;

});

var Icon28ArrowLeftOutline = /*@__PURE__*/getDefaultExportFromCjs(arrow_left_outline);

var PanelHeaderBack = function PanelHeaderBack(props) {
  var platform = usePlatform();
  return /*#__PURE__*/react.createElement(PanelHeaderButton, props, platform === ANDROID ? /*#__PURE__*/react.createElement(Icon28ArrowLeftOutline, null) : /*#__PURE__*/react.createElement(Icon28ChevronBack, null));
};

var PanelHeaderBack$1 = /*#__PURE__*/react.memo(PanelHeaderBack);

export { Avatar, Card, CardScroll, Div, FixedLayout$1 as FixedLayout, FormLayout, FormLayoutGroup, HorizontalScroll, IconButton, Input$1 as Input, Panel$1 as Panel, PanelHeader$1 as PanelHeader, PanelHeaderBack$1 as PanelHeaderBack, PanelHeaderClose, Root$1 as Root, Search$1 as Search, SimpleCell$1 as SimpleCell, Snackbar$1 as Snackbar, Spinner$1 as Spinner, Tappable$1 as Tappable, Text, View$1 as View, classNames, getClassname as getClassName, usePlatform };
