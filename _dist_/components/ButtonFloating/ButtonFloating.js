function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../web_modules/react.js';
import { usePlatform, Tappable, classNames, getClassName } from '../../../web_modules/@vkontakte/vkui.js';
import './ButtonFloating.css.proxy.js';

const ButtonFloating = ({
  children,
  className,
  size,
  ...restProps
}) => {
  const platform = usePlatform();
  return /*#__PURE__*/React.createElement(Tappable, _extends({}, restProps, {
    Component: restProps.href ? 'a' : 'div',
    className: classNames(className, getClassName('ButtonFloating', platform), `ButtonFloating--sz-${size}`)
  }), /*#__PURE__*/React.createElement("div", {
    className: "ButtonFloating__in"
  }, children));
};

ButtonFloating.defaultProps = {
  size: 'd'
};
export default ButtonFloating;