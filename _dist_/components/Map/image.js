import * as React from '../../../web_modules/react.js';
import { withMap } from './context.js';

class Image extends React.Component {
  UNSAFE_componentWillMount() {
    this.loadImage(this.props);
  }

  componentWillUnmount() {
    Image.removeImage(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      id
    } = this.props;

    if (nextProps.map !== this.props.map) {
      // Remove image from old map
      Image.removeImage(this.props);
    }

    if (nextProps.map && !nextProps.map.hasImage(id)) {
      // Add missing image to map
      this.loadImage(nextProps);
    }
  }

  render() {
    return null;
  }

  loadImage(props) {
    const {
      map,
      id,
      url,
      data,
      options,
      onError
    } = props;

    if (data) {
      map.addImage(id, data, options);
      this.loaded();
    } else if (url) {
      map.loadImage(url, (error, image) => {
        if (error) {
          if (onError) {
            onError(error);
          }

          return;
        }

        map.addImage(id, image, options);
        this.loaded();
      });
    }
  }

  static removeImage(props) {
    const {
      id,
      map
    } = props;

    if (map && map.getStyle()) {
      map.removeImage(id);
    }
  }

  loaded() {
    const {
      onLoaded
    } = this.props;

    if (onLoaded) {
      onLoaded();
    }
  }

}

export default withMap(Image);