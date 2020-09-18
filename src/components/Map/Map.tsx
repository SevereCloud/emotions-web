import React from 'react';
import {
  Snackbar,
  Avatar,
  Spinner,
} from '@vkontakte/vkui';
import type { AppearanceSchemeType, ErrorData } from '@vkontakte/vk-bridge';
import MapboxGl from 'mapbox-gl';
import type { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';
import { Icon16Clear, Icon28LocationOutline } from '@vkontakte/icons';
import ButtonFloating from '../ButtonFloating/ButtonFloating';

/**
 * Токен для mapbox
 */
const TOKEN =
  'pk.eyJ1Ijoic2V2ZXJlY2xvdWQiLCJhIjoiY2lxdW5sc2tjMDA1OWh3bml2c3dlMWZ2eSJ9.HVh-skFXU-Ck2fY1aRmNew';

/**
 * Список лейблов, для которых необходимо установить язык.
 */
const LABELS = [
  'country-label',
  'state-label',
  'settlement-label',
  'settlement-subdivision-label',
  'airport-label',
  'poi-label',
  'water-point-label',
  'water-line-label',
  'natural-point-label',
  'natural-line-label',
  'waterway-label',
];

/**
 * Возвращает стиль карты в зависимости от цветовой схемы
 *
 * @param scheme цветовая схема
 */
const style = (scheme: AppearanceSchemeType) =>
  scheme === 'space_gray'
    ? 'mapbox://styles/mapbox/dark-v10?optimize=true'
    : 'mapbox://styles/mapbox/light-v10?optimize=true';





export interface MapProps {
  vkAPI: VKMiniAppAPI;

  scheme: AppearanceSchemeType;

  updateMap?: (center: [number, number], zoom: number) => void;

  center: [number, number];
  zoom: number;
  movingMethod?: 'jumpTo' | 'easeTo' | 'flyTo';
}

interface MapState {
  map?: MapboxGl.Map;
  ready: boolean;
  userCenter?: [number, number];

  isGetGeodata: boolean;
  isChosePlace: boolean;

  snackbar: JSX.Element | null;

  center: [number, number];
  zoom: number;
}

export class MapComponent extends React.Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props);

    this.state = {
      ready: false,
      isGetGeodata: false,
      isChosePlace: false,
      snackbar: null,
      center: props.center,
      zoom: props.zoom,
    };

    this.error = this.error.bind(this);
    this.flyToUserLocation = this.flyToUserLocation.bind(this);
  }

  mapContainer?: HTMLDivElement;

  public componentDidMount() {
    try {
      const map = new MapboxGl.Map({
        container: this.mapContainer!,
        style: style(this.props.scheme),
        center: this.props.center,
        zoom: this.props.zoom,
        interactive: true,
        logoPosition: 'bottom-left',
        accessToken: TOKEN,
      });

      map.on('load', () => {
        console.log('load');
        this.setState({ ready: true });
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

      map.on('moveend', (e) => {
        const c = e.target.getCenter();
        this.setState({
          center: [c.lng, c.lat],
        });
        if (this.props.updateMap) {
          this.props.updateMap(this.state.center, this.state.zoom);
        }
      });

      map.on('zoomend', (e) => {
        this.setState({
          zoom: e.target.getZoom(),
        });
        if (this.props.updateMap) {
          this.props.updateMap(this.state.center, this.state.zoom);
        }
      });

      this.setState({ map });
    } catch (error) {
      console.error(error);
      this.error('Не удалось загрузить карту', 15e3);
    }
  }

  public componentWillUnmount() {
    const { map } = this.state;

    if (map) {
      map.remove();
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: MapProps) {
    const { map } = this.state;
    if (!map) {
      return null;
    }

    // Update event listeners
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
      isGetGeodata: true,
    });

    // Приближаем если необходимо
    let zoom = this.state.map?.getZoom();
    if (!zoom || zoom < 15) {
      zoom = 15;
    }

    // Получаем геопозицию пользователя через VK Bridge
    this.props.vkAPI
      .getGeodata()
      .then(({ lat, long, isAvailable }) => {
        if (isAvailable) {
          this.state.map?.flyTo({
            center: [long, lat],
            zoom: zoom,
          });

          this.setState({
            userCenter: [long, lat],
          });
        } else {
          this.error('Местоположение не доступно. Включите геолокацию.');
        }
      })
      .catch((e: ErrorData) => {
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
      })
      .finally(() => {
        // Отключаем спиннер
        this.setState({
          isGetGeodata: false,
        });
      });
  }

  /**
   * Показывает ошибку
   *
   * @param msg текст ошибки
   * @param duration время показа ошибки в ms
   */
  error(msg: string, duration: number = 4e3) {
    if (this.state.snackbar) return;
    this.setState({
      snackbar: (
        <Snackbar
          layout="vertical"
          duration={duration}
          onClose={() => this.setState({ snackbar: null })}
          before={
            <Avatar size={24} style={{ backgroundColor: 'var(--dynamic_red)' }}>
              {' '}
              <Icon16Clear fill="#fff" width={14} height={14} />
            </Avatar>
          }
        >
          {msg}
        </Snackbar>
      ),
    });
  }

  render(): JSX.Element {
    const {
      ready,
      isGetGeodata,
      snackbar,
    } = this.state;

    return (
      <>
        <div
          ref={(el) => (this.mapContainer = el!)}
          className="mapContainer"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 48,
          }}
        />

        {ready && (
          <ButtonFloating
            style={{
              position: 'absolute',
              right: 8,
              top: 'var(--panelheader_height_android)',
            }}
            size="m"
            onClick={this.flyToUserLocation}
          >
            {(!isGetGeodata && (
              <Icon28LocationOutline width={24} height={24} />
            )) || <Spinner size="small" />}
          </ButtonFloating>
        )}

        {snackbar}
      </>
    );
  }
}

export default MapComponent;
