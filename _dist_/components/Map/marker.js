function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from '../../../web_modules/react.js';
import ProjectedLayer from './projected-layer.js';
import { classNames } from '../../../web_modules/@vkontakte/vkui.js';
export const Marker = props => /*#__PURE__*/React.createElement(ProjectedLayer, _extends({ ...props
}, {
  type: "marker",
  className: classNames('mapboxgl-marker', props.className)
}));
export default Marker;