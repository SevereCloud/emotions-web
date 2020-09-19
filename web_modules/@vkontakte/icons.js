import '../common/_commonjsHelpers-7b2291da.js';
import { r as react } from '../common/index-e3dbc5f6.js';
import { b as browserSprite$1, e as es6ObjectAssign, a as browserSymbol } from '../common/browser-sprite-a7c324af.js';

// @ts-ignore
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var browserSprite;

if (canUseDOM) {
  var spriteId = '__SVG_SPRITE_NODE__';
  browserSprite = new browserSprite$1({
    attrs: {
      id: spriteId
    }
  });

  var mount = function mount() {
    var spriteNode = document.getElementById(spriteId);

    if (spriteNode) {
      browserSprite.attach(spriteNode);
    } else {
      browserSprite.mount();
    }
  };

  if (document.querySelector('body')) {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount);
  }
} else {
  browserSprite = null;
}

function addSpriteSymbol(symbol) {
  if (browserSprite) {
    browserSprite.add(symbol);
  }
}
var useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;

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
  return /*#__PURE__*/react.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: "Icon Icon--".concat(size, " Icon--w-").concat(width, " Icon--h-").concat(height, " Icon--").concat(id, " ").concat(className),
    style: _objectSpread({}, style, {
      width: width,
      height: height
    })
  }), /*#__PURE__*/react.createElement("svg", {
    viewBox: viewBox,
    width: width,
    height: height,
    style: svgStyle
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#".concat(id),
    style: {
      fill: 'currentColor',
      color: fill
    }
  })));
};
SvgIcon.defaultProps = {
  className: '',
  style: {}
};

var viewBox = '0 0 12 8';
var id = 'dropdown_12';
var content = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" id="dropdown_12"><path clip-rule="evenodd" d="M2.156 2.295a.75.75 0 011.051-.137L6 4.306l2.793-2.148a.75.75 0 11.914 1.189l-3.25 2.5a.75.75 0 01-.914 0l-3.25-2.5a.75.75 0 01-.137-1.052z" fill="currentColor" fill-rule="evenodd" /></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    addSpriteSymbol(new browserSymbol({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon12Dropdown = function Icon12Dropdown(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 12,
    height: !isNaN(props.height) ? +props.height : 8
  }));
};

Icon12Dropdown.mountIcon = mountIcon;

var viewBox$1 = '0 0 16 16';
var id$1 = 'clear_16';
var content$1 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="clear_16"><path d="M6.729 8.002L4.263 10.47a.9.9 0 101.273 1.273L8 9.275l2.465 2.468a.9.9 0 101.272-1.273L9.273 8.002l2.465-2.469a.9.9 0 10-1.272-1.273L8 6.728 5.536 4.26a.9.9 0 00-1.273 1.273l2.466 2.469zM8 16A8 8 0 118 0a8 8 0 010 16z" fill="currentColor" fill-rule="evenodd" /></symbol>';
var isMounted$1 = false;

function mountIcon$1() {
  if (!isMounted$1) {
    addSpriteSymbol(new browserSymbol({
      id: id$1,
      viewBox: viewBox$1,
      content: content$1
    }));
    isMounted$1 = true;
  }
}

var Icon16Clear = function Icon16Clear(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$1();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$1,
    id: id$1,
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
};

Icon16Clear.mountIcon = mountIcon$1;

var viewBox$2 = '0 0 24 24';
var id$2 = 'comment_outline_24';
var content$2 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="comment_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M16.895 4h-9.79c-1.152 0-1.74.113-2.35.44A3.171 3.171 0 003.44 5.755c-.327.61-.44 1.198-.44 2.35v5.79c0 1.152.113 1.74.44 2.35.302.565.75 1.013 1.315 1.315l.14.071c.517.25 1.05.352 1.954.367L7.1 18v2.215c0 .432.17.846.472 1.155l.116.108a1.65 1.65 0 002.217-.085L13.366 18h3.53c1.151 0 1.738-.113 2.35-.44a3.171 3.171 0 001.314-1.315c.327-.61.44-1.198.44-2.35v-5.79c0-1.152-.113-1.74-.44-2.35a3.171 3.171 0 00-1.315-1.315c-.61-.327-1.198-.44-2.35-.44zM6.912 5.801l9.983-.001c.88 0 1.187.06 1.502.228.25.134.441.325.575.575.169.315.228.622.228 1.502v5.79l-.004.368c-.017.607-.081.867-.224 1.134-.134.25-.325.441-.575.575-.315.169-.622.228-1.502.228H13l-.117.008a.9.9 0 00-.513.25L8.9 19.856V17.1a.9.9 0 00-.9-.9h-.895l-.368-.004c-.607-.017-.867-.081-1.134-.224a1.372 1.372 0 01-.575-.575c-.169-.315-.228-.622-.228-1.502v-5.79l.004-.368c.017-.607.081-.867.224-1.134.134-.25.325-.441.575-.575.291-.156.574-.218 1.309-.227z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$2 = false;

function mountIcon$2() {
  if (!isMounted$2) {
    addSpriteSymbol(new browserSymbol({
      id: id$2,
      viewBox: viewBox$2,
      content: content$2
    }));
    isMounted$2 = true;
  }
}

var Icon24CommentOutline = function Icon24CommentOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$2();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$2,
    id: id$2,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24CommentOutline.mountIcon = mountIcon$2;

var viewBox$3 = '0 0 24 24';
var id$3 = 'like_outline_24';
var content$3 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="like_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M15.992 4.006c-1.451.064-2.753.637-3.881 1.694l-.117.113-.122-.118C10.662 4.576 9.275 4 7.734 4 4.577 4 2 6.56 2 9.717c0 3.088 1.127 4.552 6.182 8.546l2.688 2.098a1.837 1.837 0 002.26 0l2.364-1.843.933-.74C20.965 14.144 22 12.676 22 9.718 22 6.56 19.423 4 16.266 4zm.274 1.794c2.165 0 3.934 1.757 3.934 3.917l-.005.294c-.076 2.156-1.062 3.341-5.509 6.852l-2.663 2.078a.038.038 0 01-.046 0l-2.364-1.843-.874-.691c-4.142-3.31-4.939-4.44-4.939-6.69C3.8 7.557 5.569 5.8 7.734 5.8c1.333 0 2.507.618 3.57 1.915a.9.9 0 001.398-.007C13.739 6.416 14.909 5.8 16.266 5.8z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$3 = false;

function mountIcon$3() {
  if (!isMounted$3) {
    addSpriteSymbol(new browserSymbol({
      id: id$3,
      viewBox: viewBox$3,
      content: content$3
    }));
    isMounted$3 = true;
  }
}

var Icon24LikeOutline = function Icon24LikeOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$3();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$3,
    id: id$3,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24LikeOutline.mountIcon = mountIcon$3;

var viewBox$4 = '0 0 24 24';
var id$4 = 'share_outline_24';
var content$4 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="share_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M11.996 3.725A2.15 2.15 0 0010 5.87l-.001 2.117-.02.005a9.904 9.904 0 00-7.827 10.721c.083.811 1.116 1.103 1.611.455l.187-.237a9.082 9.082 0 015.836-3.265l.213-.026.001 2.494a2.15 2.15 0 003.476 1.692l7.824-6.132a2.15 2.15 0 000-3.384l-7.824-6.132a2.15 2.15 0 00-1.326-.458zm.154 1.795a.35.35 0 01.216.075l7.824 6.132a.35.35 0 010 .55l-7.824 6.133a.35.35 0 01-.566-.276l-.001-3.447a.9.9 0 00-.915-.9l-.233.004-.342.017a10.88 10.88 0 00-6.119 2.365l-.174.144.024-.135a8.103 8.103 0 016.968-6.537.9.9 0 00.791-.893L11.8 5.87a.35.35 0 01.35-.35z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$4 = false;

function mountIcon$4() {
  if (!isMounted$4) {
    addSpriteSymbol(new browserSymbol({
      id: id$4,
      viewBox: viewBox$4,
      content: content$4
    }));
    isMounted$4 = true;
  }
}

var Icon24ShareOutline = function Icon24ShareOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$4();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$4,
    id: id$4,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24ShareOutline.mountIcon = mountIcon$4;

var viewBox$5 = '0 0 24 24';
var id$5 = 'upload_24';
var content$5 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="upload_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M9 16h6v-6h3.034a.4.4 0 00.283-.683l-6.034-6.034a.4.4 0 00-.566 0L5.683 9.317a.4.4 0 00.283.683H9v6zm-3 2h12a1 1 0 010 2H6a1 1 0 010-2z" fill="currentColor" /></g></symbol>';
var isMounted$5 = false;

function mountIcon$5() {
  if (!isMounted$5) {
    addSpriteSymbol(new browserSymbol({
      id: id$5,
      viewBox: viewBox$5,
      content: content$5
    }));
    isMounted$5 = true;
  }
}

var Icon24Upload = function Icon24Upload(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$5();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$5,
    id: id$5,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Upload.mountIcon = mountIcon$5;

var viewBox$6 = '0 0 24 24';
var id$6 = 'view_24';
var content$6 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="view_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M12 19c-6 0-10-5.6-10-7 0-1.4 4-7 10-7s10 5.6 10 7c0 1.4-4 7-10 7zm0-2a5 5 0 100-10 5 5 0 000 10zm.001-2.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor" /></g></symbol>';
var isMounted$6 = false;

function mountIcon$6() {
  if (!isMounted$6) {
    addSpriteSymbol(new browserSymbol({
      id: id$6,
      viewBox: viewBox$6,
      content: content$6
    }));
    isMounted$6 = true;
  }
}

var Icon24View = function Icon24View(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$6();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$6,
    id: id$6,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24View.mountIcon = mountIcon$6;

var viewBox$7 = '0 0 28 28';
var id$7 = 'location_outline_28';
var content$7 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="location_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M12.326 16.08l-7.084-.738a2.5 2.5 0 01-.591-4.837l14.735-5.326a3 3 0 013.841 3.84l-5.326 14.736a2.5 2.5 0 01-4.838-.59l-.737-7.085zm-7.077-3.656a.5.5 0 00.2.929l7.89.822a1 1 0 01.892.891l.822 7.89a.5.5 0 00.967.119L21.346 8.34a1 1 0 00-1.28-1.28L5.33 12.385l-.082.039z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$7 = false;

function mountIcon$7() {
  if (!isMounted$7) {
    addSpriteSymbol(new browserSymbol({
      id: id$7,
      viewBox: viewBox$7,
      content: content$7
    }));
    isMounted$7 = true;
  }
}

var Icon28LocationOutline = function Icon28LocationOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$7();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$7,
    id: id$7,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28LocationOutline.mountIcon = mountIcon$7;

export { Icon12Dropdown, Icon16Clear, Icon24CommentOutline, Icon24LikeOutline, Icon24ShareOutline, Icon24Upload, Icon24View, Icon28LocationOutline };
