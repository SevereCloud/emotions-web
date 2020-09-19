function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../web_modules/react.js';
import { usePlatform, Tappable, classNames, getClassName } from '../../../web_modules/@vkontakte/vkui.js';
import './ThemeCard.css.proxy.js';

const ThemeCard = ({
  children,
  className,
  title,
  emoji,
  ...restProps
}) => {
  const platform = usePlatform();
  return /*#__PURE__*/React.createElement(Tappable, _extends({}, restProps, {
    Component: restProps.href ? 'a' : 'div',
    className: classNames(className, getClassName('ThemeCard', platform))
  }), /*#__PURE__*/React.createElement("div", {
    className: "ThemeCard__in"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "ThemeCard__title"
  }, title), emoji && /*#__PURE__*/React.createElement("div", {
    className: "ThemeCard__emoji"
  }, /*#__PURE__*/React.createElement("img", {
    src: emoji,
    alt: "emoji"
  })));
};

export default ThemeCard;