function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from '../../../web_modules/react.js';
import { usePlatform, classNames, getClassName } from '../../../web_modules/@vkontakte/vkui.js';
import './Fab.css.proxy.js';
import AppCTX from '../../appContext.js';
import GlobeSVG from './GlobeSVG.js';

const Fab = ({
  children,
  className,
  size,
  ...restProps
}) => {
  const platform = usePlatform();
  const {
    setPanel
  } = useContext(AppCTX);
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    Component: restProps.href ? 'a' : 'div',
    className: classNames(className, getClassName('Fab', platform), `Fab--sz-${size}`),
    onClick: () => setPanel('map')
  }), /*#__PURE__*/React.createElement("div", {
    className: "Fab__in"
  }, /*#__PURE__*/React.createElement(GlobeSVG, null)));
};

Fab.defaultProps = {
  size: 'd'
};
export default Fab;