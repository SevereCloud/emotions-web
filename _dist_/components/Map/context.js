function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// from https://github.com/alex3165/react-mapbox-gl/
// MIT License
import React from '../../../web_modules/react.js';
export const MapContext = /*#__PURE__*/React.createContext(undefined); // tslint:disable-next-line:no-any

export function withMap(Component) {
  return function MappedComponent(props) {
    return /*#__PURE__*/React.createElement(MapContext.Consumer, null, map => /*#__PURE__*/React.createElement(Component, _extends({
      map: map
    }, props)));
  };
}