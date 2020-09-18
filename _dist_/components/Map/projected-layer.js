function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from '../../../web_modules/react.js';
import { overlayState, overlayTransform } from './util/overlays.js';
import { withMap } from './context.js';
const defaultStyle = {
  zIndex: 3
};
export class ProjectedLayer extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "container", undefined);

    _defineProperty(this, "prevent", false);

    _defineProperty(this, "state", {});

    _defineProperty(this, "setContainer", el => {
      if (el) {
        this.container = el;
      }
    });

    _defineProperty(this, "handleMapMove", () => {
      if (!this.prevent) {
        this.setState(overlayState(this.props, this.props.map, this.container));
      }
    });
  }

  componentDidMount() {
    const {
      map
    } = this.props;
    map.on('move', this.handleMapMove); // Now this.container is rendered and the size of container is known.
    // Recalculate the anchor/position

    this.handleMapMove();
  }

  havePropsChanged(props, nextProps) {
    return props.coordinates[0] !== nextProps.coordinates[0] || props.coordinates[1] !== nextProps.coordinates[1] || props.offset !== nextProps.offset || props.anchor !== nextProps.anchor;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.havePropsChanged(this.props, nextProps)) {
      this.setState(overlayState(nextProps, this.props.map, this.container));
    }
  }

  componentWillUnmount() {
    const {
      map
    } = this.props;
    this.prevent = true;
    map.off('move', this.handleMapMove);
  }

  render() {
    const {
      style,
      children,
      className,
      onClick,
      onDoubleClick,
      onMouseEnter,
      onMouseLeave,
      onScroll,
      onWheel,
      type,
      tabIndex
    } = this.props;
    const {
      anchor
    } = this.state;
    const finalStyle = { ...defaultStyle,
      ...style,
      transform: overlayTransform(this.state).join(' ')
    };
    const anchorClassName = anchor && type === 'popup' ? `mapboxgl-popup-anchor-${anchor}` : '';
    return /*#__PURE__*/React.createElement("div", {
      className: `${className} ${anchorClassName}`,
      onClick: onClick,
      onDoubleClick: onDoubleClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onScroll: onScroll,
      onWheel: onWheel,
      style: finalStyle,
      ref: this.setContainer,
      tabIndex: tabIndex
    }, children);
  }

}

_defineProperty(ProjectedLayer, "defaultProps", {
  offset: 0,
  // tslint:disable-next-line:no-any
  onClick: (...args) => args
});

export default withMap(ProjectedLayer);