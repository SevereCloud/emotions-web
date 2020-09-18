function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from '../../../web_modules/react.js';
//@ts-ignore
import isEqual from '../../../web_modules/deep-equal.js';
import diff from './util/diff.js';
const eventToHandler = {
  touchstart: 'onTouchStart',
  touchend: 'onTouchEnd',
  touchcancel: 'onTouchCancel',
  mousemove: 'onMouseMove',
  mouseenter: 'onMouseEnter',
  mouseleave: 'onMouseLeave',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp',
  click: 'onClick'
};
export default class Layer extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "source", {
      type: 'geojson',
      ...this.props.geoJSONSourceOptions,
      data: {
        type: 'FeatureCollection',
        features: []
      }
    });

    _defineProperty(this, "geometry", coordinates => {
      switch (this.props.type) {
        case 'symbol':
        case 'circle':
          return {
            type: 'Point',
            coordinates
          };

        case 'fill':
          if (Array.isArray(coordinates[0][0][0])) {
            return {
              type: 'MultiPolygon',
              coordinates
            };
          }

          return {
            type: 'Polygon',
            coordinates
          };

        case 'line':
          return {
            type: 'LineString',
            coordinates
          };

        default:
          return {
            type: 'Point',
            coordinates
          };
      }
    });

    _defineProperty(this, "makeFeature", (props, id) => ({
      type: 'Feature',
      geometry: this.geometry(props.coordinates),
      properties: { ...props.properties,
        id
      }
    }));

    _defineProperty(this, "initialize", () => {
      const {
        type,
        layout,
        paint,
        sourceId,
        before,
        images,
        id,
        metadata,
        sourceLayer,
        minZoom,
        maxZoom,
        filter
      } = this.props;
      const {
        map
      } = this.props;
      const layer = {
        id,
        source: sourceId || id,
        // TODO: Fix mapbox-gl types
        // tslint:disable-next-line:no-any
        type: type,
        layout,
        paint,
        metadata
      };

      if (sourceLayer) {
        layer['source-layer'] = sourceLayer;
      }

      if (minZoom) {
        layer.minzoom = minZoom;
      }

      if (maxZoom) {
        layer.maxzoom = maxZoom;
      }

      if (filter) {
        layer.filter = filter;
      }

      if (images) {
        const normalizedImages = !Array.isArray(images[0]) ? [images] : images;
        normalizedImages.filter(image => !map.hasImage(image[0])).forEach(image => {
          map.addImage(image[0], image[1], image[2]);
        });
      }

      if (!sourceId && !map.getSource(id)) {
        map.addSource(id, this.source);
      }

      if (!map.getLayer(id)) {
        map.addLayer(layer, before);
      }

      Object.entries(eventToHandler).forEach(([event, propName]) => {
        const handler = this.props[propName];

        if (handler) {
          map.on(event, id, handler);
        }
      });
    });

    _defineProperty(this, "onStyleDataChange", () => {
      // if the style of the map has been updated and we don't have layer anymore,
      // add it back to the map and force re-rendering to redraw it
      if (!this.props.map.getLayer(this.props.id)) {
        this.initialize();
        this.forceUpdate();
      }
    });

    _defineProperty(this, "getChildren", () => {
      const {
        children
      } = this.props;

      if (!children) {
        return [];
      }

      if (Array.isArray(children)) {
        return children.reduce((arr, next) => arr.concat(next), []);
      }

      return [children];
    });
  }

  UNSAFE_componentWillMount() {
    const {
      map
    } = this.props;
    this.initialize();
    map.on('styledata', this.onStyleDataChange);
  }

  componentWillUnmount() {
    const {
      map
    } = this.props;
    const {
      images,
      id
    } = this.props;

    if (!map || !map.getStyle()) {
      return;
    }

    map.off('styledata', this.onStyleDataChange);
    Object.entries(eventToHandler).forEach(([event, propName]) => {
      const handler = this.props[propName];

      if (handler) {
        map.off(event, id, handler);
      }
    });

    if (map.getLayer(id)) {
      map.removeLayer(id);
    } // if pointing to an existing source, don't remove
    // as other layers may be dependent upon it


    if (!this.props.sourceId) {
      map.removeSource(id);
    }

    if (images) {
      const normalizedImages = !Array.isArray(images[0]) ? [images] : images;
      normalizedImages.map(([key, ...rest]) => key).forEach(map.removeImage.bind(map));
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    const {
      paint,
      layout,
      before,
      filter,
      id,
      minZoom,
      maxZoom
    } = this.props;
    const {
      map
    } = this.props;

    if (!isEqual(props.paint, paint)) {
      const paintDiff = diff(paint, props.paint);
      Object.keys(paintDiff).forEach(key => {
        map.setPaintProperty(id, key, paintDiff[key]);
      });
    }

    if (!isEqual(props.layout, layout)) {
      const layoutDiff = diff(layout, props.layout);
      Object.keys(layoutDiff).forEach(key => {
        map.setLayoutProperty(id, key, layoutDiff[key]);
      });
    }

    if (!isEqual(props.filter, filter)) {
      map.setFilter(id, props.filter);
    }

    if (before !== props.before) {
      map.moveLayer(id, props.before);
    }

    if (minZoom !== props.minZoom || maxZoom !== props.maxZoom) {
      // TODO: Fix when PR https://github.com/DefinitelyTyped/DefinitelyTyped/pull/22036 is merged
      map.setLayerZoomRange(id, props.minZoom, props.maxZoom);
    }

    Object.entries(eventToHandler).forEach(([event, propName]) => {
      const oldHandler = this.props[propName];
      const newHandler = props[propName];

      if (oldHandler !== newHandler) {
        if (oldHandler) {
          map.off(event, id, oldHandler);
        }

        if (newHandler) {
          map.on(event, id, newHandler);
        }
      }
    });
  }

  render() {
    const {
      map
    } = this.props;
    const {
      sourceId,
      draggedChildren
    } = this.props;
    let children = this.getChildren();

    if (draggedChildren) {
      const draggableChildrenIds = draggedChildren.map(child => child.key);
      children = children.map(child => {
        const indexChildren = draggableChildrenIds.indexOf(child.key);

        if (indexChildren !== -1) {
          return draggedChildren[indexChildren];
        }

        return child;
      });
    }

    const features = children.map(({
      props
    }, id) => this.makeFeature(props, id)).filter(Boolean);
    const source = map.getSource(sourceId || this.props.id);

    if (source && !sourceId && source.setData) {
      source.setData({
        type: 'FeatureCollection',
        features: features
      });
    }

    return null;
  }

}

_defineProperty(Layer, "defaultProps", {
  type: 'symbol',
  layout: {},
  paint: {}
});