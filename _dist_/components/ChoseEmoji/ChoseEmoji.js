function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../web_modules/react.js';
import { usePlatform, Tappable, classNames, getClassName } from '../../../web_modules/@vkontakte/vkui.js';
import './ChoseEmoji.css.proxy.js';
import { Icon12Dropdown } from '../../../web_modules/@vkontakte/icons.js';

const ChoseEmoji = ({
  children,
  className,
  title,
  emoji,
  button,
  open,
  ...restProps
}) => {
  const platform = usePlatform();
  return /*#__PURE__*/React.createElement(Tappable, _extends({}, restProps, {
    Component: restProps.href ? 'a' : 'div',
    className: classNames(className, getClassName('ChoseEmoji', platform), {
      'ChoseEmoji--open': open,
      'ChoseEmoji--button': button
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "ChoseEmoji__emoji"
  }, /*#__PURE__*/React.createElement("img", {
    src: emoji,
    alt: "emoji"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ChoseEmoji__title"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "ChoseEmoji__dropdown"
  }, /*#__PURE__*/React.createElement(Icon12Dropdown, null)));
};

export default ChoseEmoji;