function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from '../../../web_modules/react.js';
import { generateID } from './util/uid.js';
export function layerMouseTouchEvents(WrappedComponent) {
  var _temp;

  return _temp = class EnhancedLayer extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "hover", []);

      _defineProperty(this, "draggedChildren", undefined);

      _defineProperty(this, "id", this.props.id || `layer-${generateID()}`);

      _defineProperty(this, "getChildren", () => [].concat(this.props.children).filter(el => typeof el !== 'undefined'));

      _defineProperty(this, "getChildFromId", (children, id) => children[id]);

      _defineProperty(this, "areFeaturesDraggable", (children, featureIds = this.hover) => !!featureIds.map(id => this.getChildFromId(children, id) ? this.getChildFromId(children, id).props.draggable : false).filter(Boolean).length);

      _defineProperty(this, "onClick", evt => {
        const features = evt.features;
        const children = this.getChildren();
        const {
          map
        } = this.props;

        if (features) {
          features.forEach(feature => {
            const {
              id
            } = feature.properties;

            if (children) {
              const child = this.getChildFromId(children, id);
              const onClick = child && child.props.onClick;

              if (onClick) {
                onClick({ ...evt,
                  feature,
                  map
                });
              }
            }
          });
        }
      });

      _defineProperty(this, "onMouseEnter", evt => {
        const children = this.getChildren();
        const {
          map
        } = this.props;
        this.hover = [];
        evt.features.forEach(feature => {
          const {
            id
          } = feature.properties;
          const child = this.getChildFromId(children, id);
          this.hover.push(id);
          const onMouseEnter = child && child.props.onMouseEnter;

          if (onMouseEnter) {
            onMouseEnter({ ...evt,
              feature,
              map
            });
          }
        });

        if (this.areFeaturesDraggable(children)) {
          map.dragPan.disable();
        }
      });

      _defineProperty(this, "onMouseLeave", evt => {
        const children = this.getChildren();
        const {
          map
        } = this.props;

        if (this.areFeaturesDraggable(children)) {
          map.dragPan.enable();
        }

        this.hover.forEach(id => {
          const child = this.getChildFromId(children, id);
          const onMouseLeave = child && child.props.onMouseLeave;

          if (onMouseLeave) {
            onMouseLeave({ ...evt,
              map
            });
          }
        });

        if (!this.draggedChildren) {
          this.hover = [];
        }
      });

      _defineProperty(this, "onMouseDown", () => {
        // User did this on a feature
        if (this.hover.length) {
          this.onFeatureDown('mousedown');
        }
      });

      _defineProperty(this, "onTouchStart", evt => {
        // tslint:disable-next-line:no-any
        this.hover = evt.features.map(feature => feature.properties.id);

        if (this.hover.length) {
          this.onFeatureDown('touchstart');
        }
      });

      _defineProperty(this, "onFeatureDown", startEvent => {
        const moveEvent = startEvent === 'mousedown' ? 'mousemove' : 'touchmove';
        const endEvent = startEvent === 'mousedown' ? 'mouseup' : 'touchend';
        const {
          map
        } = this.props;
        map.once(moveEvent, this.onFeatureDragStart);
        map.on(moveEvent, this.onFeatureDrag); // tslint:disable-next-line:no-any

        map.once(endEvent, evt => {
          map.off(moveEvent, this.onFeatureDragStart);
          map.off(moveEvent, this.onFeatureDrag);
          this.onFeatureDragEnd(evt);
        });
      });

      _defineProperty(this, "onFeatureDragStart", evt => {
        const {
          map
        } = this.props;
        const children = this.getChildren();
        this.hover.forEach(id => {
          const child = this.getChildFromId(children, id);

          if (child && !child.props.draggable) {
            return;
          }

          const onDragStart = child && child.props.onDragStart;

          if (onDragStart) {
            onDragStart({ ...evt,
              map
            });
          }
        });
      });

      _defineProperty(this, "onFeatureDrag", evt => {
        const children = this.getChildren();
        const {
          map
        } = this.props;
        const {
          lngLat: {
            lng,
            lat
          }
        } = evt;
        this.draggedChildren = [];
        this.hover.forEach(id => {
          const child = this.getChildFromId(children, id);
          const onDrag = child && child.props.onDrag; // drag children if draggable

          if (child && child.props.draggable) {
            this.draggedChildren.push( /*#__PURE__*/React.cloneElement(child, {
              coordinates: [lng, lat]
            }));

            if (onDrag) {
              onDrag({ ...evt,
                map
              });
            }
          }
        });
        this.forceUpdate();
      });

      _defineProperty(this, "onFeatureDragEnd", evt => {
        const {
          map
        } = this.props;
        const children = this.getChildren();
        this.hover.forEach(id => {
          const child = this.getChildFromId(children, id);
          const onDragEnd = child && child.props.onDragEnd;

          if (onDragEnd && child.props.draggable && this.draggedChildren) {
            onDragEnd({ ...evt,
              map
            });
          }
        });
        this.draggedChildren = undefined;
      });
    }

    UNSAFE_componentWillMount() {
      const {
        map
      } = this.props;
      map.on('click', this.id, this.onClick);
      map.on('mouseenter', this.id, this.onMouseEnter);
      map.on('mouseleave', this.id, this.onMouseLeave);
      map.on('mousedown', this.id, this.onMouseDown);
      map.on('touchstart', this.id, this.onTouchStart);
    }

    componentWillUnmount() {
      const {
        map
      } = this.props;
      map.off('click', this.onClick);
      map.off('mouseenter', this.onMouseEnter);
      map.off('mouseleave', this.onMouseLeave);
      map.off('mousedown', this.onMouseDown);
      map.off('touchstart', this.onTouchStart);
    }

    render() {
      return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, this.props, {
        id: this.id,
        map: this.props.map,
        draggedChildren: this.draggedChildren
      }));
    }

  }, _temp;
}
export default layerMouseTouchEvents;