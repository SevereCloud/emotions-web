function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from '../../../web_modules/react.js';
import { Spinner } from '../../../web_modules/@vkontakte/vkui.js';
import MapboxGl from '../../../web_modules/mapbox-gl.js';
import { Icon28LocationOutline } from '../../../web_modules/@vkontakte/icons.js';
import ButtonFloating from '../ButtonFloating/ButtonFloating.js';
import Layer from './layer.js';
import Feature from './feature.js';
import { getCord, isLaunchFromVK } from '../../lib.js';
import { themeImage } from '../../types.js';
import Image from './image.js';
import art from '../../markers/art.png.proxy.js';
import auto from '../../markers/auto.png.proxy.js';
import fall from '../../markers/fall.png.proxy.js';
import film from '../../markers/film.png.proxy.js';
import game from '../../markers/game.png.proxy.js';
import it from '../../markers/it.png.proxy.js';
import music from '../../markers/music.png.proxy.js';
import quarantine from '../../markers/quarantine.png.proxy.js';
import work from '../../markers/work.png.proxy.js';
import comedy from '../../markers/comedy.png.proxy.js';
/**
 * Токен для mapbox
 */

const TOKEN = 'pk.eyJ1Ijoic2V2ZXJlY2xvdWQiLCJhIjoiY2lxdW5sc2tjMDA1OWh3bml2c3dlMWZ2eSJ9.HVh-skFXU-Ck2fY1aRmNew';
/**
 * Список лейблов, для которых необходимо установить язык.
 */

const LABELS = ['country-label', 'state-label', 'settlement-label', 'settlement-subdivision-label', 'airport-label', 'poi-label', 'water-point-label', 'water-line-label', 'natural-point-label', 'natural-line-label', 'waterway-label'];
/**
 * Возвращает стиль карты в зависимости от цветовой схемы
 *
 * @param scheme цветовая схема
 */

const style = scheme => scheme === 'space_gray' ? 'mapbox://styles/mapbox/dark-v10?optimize=true' : 'mapbox://styles/mapbox/light-v10?optimize=true';
/**
 * Возвращает цвет текста
 *
 * @param scheme цветовая схема
 */


const textColor = scheme => scheme === 'space_gray' ? 'hsl(78, 55%, 100%)' : 'hsl(31, 50%, 15%)';
/**
 * Возвращает цвет обводки текста
 *
 * @param scheme цветовая схема
 */


const textHaloColor = scheme => scheme === 'space_gray' ? 'hsl(31, 50%, 15%)' : 'hsl(78, 55%, 100%)';
/**
 * Возвращает accent цвет
 *
 * @param scheme цветовая схема
 */


const accent = scheme => scheme === 'space_gray' ? '#71aaeb' : '#3f8ae0';
/**
 * Возвращает background_content цвет
 *
 * @param scheme цветовая схема
 */


const background_content = scheme => scheme === 'space_gray' ? '#19191a' : '#ffffff';

function sortObjectEntries(obj, n) {
  return Object.entries(obj).sort((a, b) => b[1] - a[1]).map(el => el[0]).slice(0, n);
}

const paddingPoints = [[0.001, -0.003], [-0.005, 0.003], [0.005, 0.003]];
const radius = [50, 40, 30];
const size = [0.8, 0.6, 0.4];
export class MapComponent extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "mapContainer", void 0);

    this.state = {
      ready: false,
      isGetGeodata: false,
      isChosePlace: false,
      center: props.center,
      zoom: props.zoom
    };
    this.error = this.error.bind(this);
    this.flyToUserLocation = this.flyToUserLocation.bind(this);
  }

  componentDidMount() {
    try {
      if (!this.mapContainer) {
        this.error('Не удалось загрузить карту', 15e3);
        return;
      }

      const map = new MapboxGl.Map({
        container: this.mapContainer,
        style: style(this.props.scheme),
        center: this.props.center,
        zoom: this.props.zoom,
        interactive: true,
        logoPosition: 'bottom-left',
        accessToken: TOKEN
      });
      map.on('load', () => {
        console.log('load');
        this.setState({
          ready: true
        });
      });
      map.on('styledataloading', () => {
        console.log('styledataloading');
      });
      map.on('styledata', () => {
        console.log('styledata');

        for (const label of LABELS) {
          map.setLayoutProperty(label, 'text-field', ['get', 'name_ru']);
        }
      });
      map.on('moveend', e => {
        const c = e.target.getCenter();
        this.setState({
          center: [c.lng, c.lat]
        });

        if (this.props.updateMap) {
          this.props.updateMap(this.state.center, this.state.zoom);
        }
      });
      map.on('zoomend', e => {
        this.setState({
          zoom: e.target.getZoom()
        });

        if (this.props.updateMap) {
          this.props.updateMap(this.state.center, this.state.zoom);
        }
      });
      this.setState({
        map
      });
    } catch (error) {
      console.error(error);
      this.error('Не удалось загрузить карту', 15e3);
    }
  }

  componentWillUnmount() {
    const {
      map
    } = this.state;

    if (map) {
      map.remove();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      map
    } = this.state;

    if (!map) {
      return null;
    } // Update event listeners
    // this.listeners = updateEvents(this.listeners, nextProps, map);
    // const center = map.getCenter();
    // const didBearingUpdate =
    //   this.props.bearing !== nextProps.bearing &&
    //   (nextProps.bearing && nextProps.bearing[0]) !== bearing;
    // const didPitchUpdate =
    //   this.props.pitch !== nextProps.pitch &&
    //   (nextProps.pitch && nextProps.pitch[0]) !== pitch;
    // if (nextProps.maxBounds) {
    //   const didMaxBoundsUpdate = this.props.maxBounds !== nextProps.maxBounds;
    //   if (didMaxBoundsUpdate) {
    //     map.setMaxBounds(nextProps.maxBounds);
    //   }
    // }
    // if (nextProps.fitBounds) {
    //   const { fitBounds } = this.props;
    //   const didFitBoundsUpdate =
    //     fitBounds !== nextProps.fitBounds || // Check for reference equality
    //     nextProps.fitBounds.length !== (fitBounds && fitBounds.length) || // Added element
    //     !!fitBounds.filter((c, i) => {
    //       // Check for equality
    //       const nc = nextProps.fitBounds && nextProps.fitBounds[i];
    //       return c[0] !== (nc && nc[0]) || c[1] !== (nc && nc[1]);
    //     })[0];
    //   if (
    //     didFitBoundsUpdate ||
    //     !isEqual(this.props.fitBoundsOptions, nextProps.fitBoundsOptions)
    //   ) {
    //     map.fitBounds(nextProps.fitBounds, nextProps.fitBoundsOptions, {
    //       fitboundUpdate: true
    //     });
    //   }
    // }
    // if (
    //   didZoomUpdate ||
    //   didCenterUpdate //||
    //   // didBearingUpdate ||
    //   // didPitchUpdate
    // ) {
    //   // const { flyToOptions, animationOptions } = nextProps;
    //   const options = {
    //     // ...animationOptions,
    //     // ...flyToOptions,
    //     zoom: didZoomUpdate ? nextProps.zoom : zoom,
    //     center: didCenterUpdate ? nextProps.center : center,
    //     // bearing: didBearingUpdate ? nextProps.bearing : bearing,
    //     // pitch: didPitchUpdate ? nextProps.pitch : pitch
    //   };
    //   switch (nextProps.movingMethod) {
    //     case 'flyTo':
    //       map.flyTo(options);
    //       break;
    //     case 'easeTo':
    //       map.easeTo(options);
    //       break;
    //     case 'jumpTo':
    //       map.jumpTo(options);
    //       break;
    //     default:
    //       map.flyTo(options);
    //       break;
    //   }
    // }


    if (style(this.props.scheme) !== style(nextProps.scheme)) {
      map.setStyle(style(nextProps.scheme));
    }

    return null;
  }
  /**
   * Полет к пользователю
   */


  flyToUserLocation() {
    // Включаем спиннер
    this.setState({
      isGetGeodata: true
    }); // Приближаем если необходимо

    let zoom = this.state.map?.getZoom();

    if (!zoom || zoom < 15) {
      zoom = 15;
    }

    const set = (lat, long) => {
      this.state.map?.flyTo({
        center: [long, lat],
        zoom: zoom
      });
      this.setState({
        userCenter: [long, lat]
      });
    }; // Получаем геопозицию пользователя через VK Bridge


    if (isLaunchFromVK()) {
      this.props.vkAPI.getGeodata().then(({
        lat,
        long,
        isAvailable
      }) => {
        if (isAvailable) {
          set(lat, long);
        } else {
          this.error('Местоположение не доступно. Включите геолокацию.');
        }
      }).catch(e => {
        console.log(e);

        switch (e.error_type) {
          case 'client_error':
            switch (e.error_data.error_code) {
              case 4:
                this.error('Требуется доступ к геопозиции');
                break;

              default:
                break;
            }

            break;

          default:
            this.error('Неизвестная ошибка...');
            break;
        }
      }).finally(() => {
        // Отключаем спиннер
        this.setState({
          isGetGeodata: false
        });
      });
    } else {
      if (!navigator.geolocation) {
        this.error('Браузер не поддерживает геолокацию');
        this.setState({
          isGetGeodata: false
        });
        return;
      }

      navigator.geolocation.getCurrentPosition(position => {
        set(position.coords.latitude, position.coords.longitude);
        this.setState({
          isGetGeodata: false
        });
      }, error => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            this.error('Требуется доступ к геопозиции');
            break;

          case error.POSITION_UNAVAILABLE:
            this.error('Геопозиция недоступна');
            break;

          case error.TIMEOUT:
            this.error('Таймаут получения геопозиции.');
            break;

          default:
            this.error(error.message);
            break;
        }

        console.log(error);
        this.setState({
          isGetGeodata: false
        });
      });
    }
  }
  /**
   * Показывает ошибку
   *
   * @param msg текст ошибки
   * @param duration время показа ошибки в ms
   */


  error(msg, duration = 4e3) {
    this.props.error(msg, duration);
  }

  points(themePoints) {
    const arr = [];
    themePoints.map(themePoint => {
      const top = sortObjectEntries(themePoint.score, 3);
      top.map((k, i) => {
        arr.push({
          image: themeImage[k],
          size: size[i],
          name: 'a',
          center: [themePoint.center[0] + paddingPoints[i][0], themePoint.center[1] + paddingPoints[i][1]],
          radius: radius[i]
        });
      });
    });
    return arr;
  }

  render() {
    const {
      scheme,
      themePoints,
      themeWalls
    } = this.props;
    const {
      ready,
      isGetGeodata,
      map,
      userCenter
    } = this.state;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      ref: el => el && (this.mapContainer = el),
      className: "mapContainer",
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 48
      }
    }), ready && map && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Image, {
      map: map,
      id: "image-art",
      url: art
    }), /*#__PURE__*/React.createElement(Image, {
      map: map,
      id: "image-auto",
      url: auto
    }), /*#__PURE__*/React.createElement(Image, {
      map: map,
      id: "image-fall",
      url: fall
    }), /*#__PURE__*/React.createElement(Image, {
      map: map,
      id: "image-film",
      url: film
    }), /*#__PURE__*/React.createElement(Image, {
      map: map,
      id: "image-game",
      url: game
    }), /*#__PURE__*/React.createElement(Image, {
      map: map,
      id: "image-it",
      url: it
    }), /*#__PURE__*/React.createElement(Image, {
      map: map,
      id: "image-music",
      url: music
    }), /*#__PURE__*/React.createElement(Image, {
      map: map,
      id: "image-quarantine",
      url: quarantine
    }), /*#__PURE__*/React.createElement(Image, {
      map: map,
      id: "image-work",
      url: work
    }), /*#__PURE__*/React.createElement(Image, {
      map: map,
      id: "image-comedy",
      url: comedy
    }), /*#__PURE__*/React.createElement(Layer, {
      map: map,
      id: "user",
      type: "circle",
      paint: {
        'circle-radius': 4,
        'circle-color': accent(scheme),
        'circle-stroke-width': 3,
        'circle-stroke-color': background_content(scheme)
      }
    }, userCenter && /*#__PURE__*/React.createElement(Feature, {
      coordinates: userCenter
    })), /*#__PURE__*/React.createElement(Layer, {
      map: map,
      id: "theme",
      type: "circle",
      paint: {
        'circle-radius': ['get', 'radius'],
        'circle-color': background_content(scheme)
      }
    }, this.points(themePoints).map(point =>
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-key
    React.createElement(Feature, {
      properties: {
        radius: point.radius
      },
      coordinates: point.center
    }))), /*#__PURE__*/React.createElement(Layer, {
      map: map,
      id: "theme-symbol",
      type: "symbol",
      layout: {
        'icon-image': ['get', 'image'],
        'icon-size': ['get', 'size']
      }
    }, this.points(themePoints).map(point =>
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-key
    React.createElement(Feature, {
      properties: {
        image: point.image,
        size: point.size
      },
      coordinates: point.center
    }))), Object.keys(themeWalls).map(key =>
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-key
    React.createElement(Layer, {
      map: map,
      id: `post${key}`,
      type: "circle",
      paint: {
        'circle-radius': 1,
        'circle-color': background_content(scheme),
        'circle-stroke-width': 1,
        'circle-stroke-color': accent(scheme)
      }
    }, themeWalls[key].map(wall =>
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-key
    React.createElement(Feature, {
      coordinates: getCord(wall.geo.coordinates)
    }))))), ready && /*#__PURE__*/React.createElement(ButtonFloating, {
      style: {
        position: 'absolute',
        right: 8,
        top: 'var(--panelheader_height_android)'
      },
      size: "m",
      onClick: this.flyToUserLocation
    }, !isGetGeodata && /*#__PURE__*/React.createElement(Icon28LocationOutline, {
      width: 24,
      height: 24
    }) || /*#__PURE__*/React.createElement(Spinner, {
      size: "small"
    })));
  }

}
export default MapComponent;