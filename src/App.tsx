import React from 'react';
import {
  Panel,
  Root,
  View,
  PanelHeader,
} from '@vkontakte/vkui';
import type {
  AppearanceSchemeType,
  UpdateConfigData,
} from '@vkontakte/vk-bridge';
import type { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';
import { Main } from './panels/Main';
import { Newsfeed } from './panels/Newsfeed';

import './components/Post/Post.css';
import './components/PostBar/PostBar.css';

import { Score, Theme, ThemePoint, themeSearch, ThemeWalls } from './types';
import type { ApiNewsfeedSearchResponse, Group, Profile } from './api';
import { distance, getAppID, getCord } from './lib';

interface AppState {
  scheme: AppearanceSchemeType;
  activeView: string;
  activePanel: string;
  popout?: React.ReactNode;
  history: Array<{ view: string; panel: string }>;

  center: [number, number];
  zoom: number;

  /**
   * Все посты по темам
   */
  themeWalls: ThemeWalls;

  /**
   * Количество постов в определенных точках
   */
  themePoints: ThemePoint[];

  /**
   * Предыдущая точка загрузки новостей
   */
  prevLoadCenter: [number, number];

  accessToken: string;
}

export interface AppProps {
  vkAPI: VKMiniAppAPI;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      scheme: 'bright_light',
      activeView: 'main',
      activePanel: 'newsfeed',
      popout: null,
      history: [{ view: 'main', panel: 'map' }],

      center: [30.3, 59.9],
      zoom: 10,

      themeWalls: {
        Осень: [],
        Фильмы: [],
        Работа: [],
        Карантин: [],
        Игры: [],
        Искусство: [],
        Юмор: [],
        Фотографии: [],
      },
      themePoints: [],

      prevLoadCenter: [30.3, 59.9],

      accessToken: '',
    };

    this.setView = this.setView.bind(this);
    this.setPanel = this.setPanel.bind(this);
    this.setPopout = this.setPopout.bind(this);
    this.goBack = this.goBack.bind(this);

    this.loadNews = this.loadNews.bind(this);
    this.updateMap = this.updateMap.bind(this);

    this.getUser = this.getUser.bind(this);
    this.getGroup = this.getGroup.bind(this);
  }

  componentDidMount(): void {
    const { vkAPI } = this.props;

    vkAPI.onUpdateConfig((data: UpdateConfigData) => {
      const schemeAttribute = document.createAttribute('scheme');
      schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
      this.setState({ scheme: data.scheme });
      document.body.attributes.setNamedItem(schemeAttribute);
    });

    vkAPI.initApp();

    vkAPI.getAccessToken(getAppID()).then(({ accessToken }) => {
      this.setState({ accessToken: accessToken });
      this.loadNews(this.state.center);
    });
  }

  setView(view: string, name = 'main'): void {
    const panel = this.state.activePanel;

    const newHistory = [...this.state.history, { view: view, panel: name }];

    this.setState({
      activeView: view,
      activePanel: panel,
      history: newHistory,
    });
  }

  setPanel(panel: string): void {
    console.log('trigger set panel')

    const newHistory = [
      ...this.state.history,
      { view: this.state.activeView, panel },
    ];

    this.setState({ activePanel: panel, history: newHistory });
  }

  setPopout(popout: React.ReactNode): void {
    this.setState({ popout: popout });
  }

  goBack(): void {
    const newHistory = [...this.state.history];
    if (newHistory.length > 1) {
      newHistory.pop();
      const { view, panel } = newHistory[newHistory.length - 1];

      const p = this.state.activePanel;

      this.setState({
        activeView: view,
        activePanel: p,
        history: newHistory,
      });
    }
  }

  /**
   * Загружает новости и распределяет их по точкам
   * @param center координаты
   */
  loadNews(center: [number, number]) {
    const { vkAPI } = this.props;
    const { accessToken } = this.state;

    // От центра ставим 5 точек (в центре и по углам)
    const defaultScore: Score = {
      Осень: 0,
      Фильмы: 0,
      Работа: 0,
      Карантин: 0,
      Игры: 0,
      Искусство: 0,
      Юмор: 0,
      Фотографии: 0,
    };
    const themePoints: ThemePoint[] = [
      { center: center, score: defaultScore },
      { center: [center[0] - 0.04, center[1] - 0.03], score: defaultScore },
      { center: [center[0] - 0.04, center[1] + 0.03], score: defaultScore },
      { center: [center[0] + 0.04, center[1] - 0.03], score: defaultScore },
      { center: [center[0] + 0.04, center[1] + 0.03], score: defaultScore },
    ];

    this.setState({
      prevLoadCenter: center,
      themePoints: themePoints,
    });

    Object.entries(themeSearch).forEach(([key, value]) => {
      const k = key as Theme;

      vkAPI
        .callAPIMethod('newsfeed.search', {
          q: value,
          longitude: center[0].toFixed(5),
          extended: 1,
          latitude: center[1].toFixed(5),
          access_token: accessToken,
          v: '5.124',
        })
        .then((resp: ApiNewsfeedSearchResponse) => {
          this.profiles.push(...resp.profiles);
          this.groups.push(...resp.groups);

          const themePoints = this.state.themePoints;
          const themeWalls = this.state.themeWalls;
          themeWalls[k] = resp.items;

          // Перебираем все новости
          for (let i = 0; i < resp.items.length; i++) {
            const wall = resp.items[i];
            const wallCenter = getCord(wall.geo.coordinates);

            // ищем минимальное расстояние до центра точек
            let minDistance = 1;
            let minIndex = 0;
            for (let c = 0; c < themePoints.length; c++) {
              const d = distance(themePoints[c].center, wallCenter);
              if (d < minDistance) {
                minDistance = d;
                minIndex = c;
              }
            }

            themePoints[minIndex].score[k]++;
          }

          this.setState({
            themeWalls: themeWalls,
            themePoints: themePoints,
          });

          console.log(value);
          console.log(resp.items);
        });
    });
  }

  /**
   * Вызывается каждый раз при перемещении по карте
   * @param center координаты
   * @param zoom зум
   */
  updateMap(center: [number, number], zoom: number) {
    const { prevLoadCenter } = this.state;

    // console.log(`zoom ${zoom} ${zoom > 10}`);
    // console.log(`0 ${center[0]} ${Math.abs(prevLoadCenter[0] - center[0])}`);
    // console.log(`1 ${center[1]} ${Math.abs(prevLoadCenter[1] - center[1])}`);

    // TODO: проверка перемещения карты учитывая зум
    if (
      Math.abs(prevLoadCenter[0] - center[0]) > 0.2 ||
      Math.abs(prevLoadCenter[1] - center[1]) > 0.2
    ) {
      this.loadNews(center);
    }

    this.setState({ zoom, center });
  }

  profiles: Profile[] = [];
  groups: Group[] = [];

  /**
   * Получение пользователя
   * @param id идентификатор
   */
  getUser(id: number): Profile {
    for (let i = 0; i < this.profiles.length; i++) {
      const user = this.profiles[i];
      if (user.id === id) {
        return user;
      }
    }

    // TODO: подгружать из API
    return {
      id: 100,
      first_name: 'Администрация ВКонтакте',
      last_name: '',
      is_closed: false,
      can_access_closed: true,
      sex: 1,
      screen_name: 'id100',
      photo_50:
        'https://sun9-55.userapi.com/impf/c847124/v847124728/335f4/thh2-8S3ZKM.jpg?size=50x0&quality=88&crop=0,0,400,400&sign=658829254def89878c70812be46c5b17&c_uniq_tag=oN9FENR3lUfh_TW4GYODqGnfv8gnmVWyKnwzBfES0HE&ava=1',
      photo_100:
        'https://sun9-55.userapi.com/impf/c847124/v847124728/335f4/thh2-8S3ZKM.jpg?size=100x0&quality=88&crop=0,0,400,400&sign=9d447ea0df27e8bef0548259cb021a9c&c_uniq_tag=DoYZr3U2rDoJSyK9sxS3c5gFGzlBfoPsRfef2P3L2M8&ava=1',
      online: 0,
      online_info: {
        visible: true,
        is_online: false,
        is_mobile: false,
      },
    };
  }

  /**
   * Получение группы
   * @param id идентификатор
   */
  getGroup(id: number): Group {
    id < 0 && (id = -id);
    for (let i = 0; i < this.groups.length; i++) {
      const group = this.groups[i];
      if (group.id === id) {
        return group;
      }
    }

    // TODO: подгружать из API
    return {
      id: 1,
      name: 'ВКонтакте API',
      screen_name: 'apiclub',
      is_closed: 0,
      type: 'group',
      photo_100:
        'https://sun9-67.userapi.com/impf/c638629/v638629852/2afba/o-dvykjSIB4.jpg?size=100x0&quality=88&crop=20,20,560,560&sign=4a7fb48ab9f3396a3cd9abc010b054c1&c_uniq_tag=Y3olJ-3SUUfkZtnggFLMIY4inH3RvHfDCJnQ8VhYeME&ava=1',
      photo_50:
        'https://sun9-67.userapi.com/impf/c638629/v638629852/2afba/o-dvykjSIB4.jpg?size=50x0&quality=88&crop=20,20,560,560&sign=975ed0a750a542668a5e4627812d643a&c_uniq_tag=-vB4dWyEqaAHtQHkUn_9InZsEig2OM-ClXCYaj2NPs0&ava=1',
      photo_200:
        'https://sun9-67.userapi.com/impf/c638629/v638629852/2afba/o-dvykjSIB4.jpg?size=200x0&quality=88&crop=20,20,560,560&sign=76815002ae3786da678c58f69a5dd852&c_uniq_tag=ud-78lAsNkgukzkZJYFVIETQmVsgnmp9Xef4D3xVqBw&ava=1',
    };
  }

  render(): JSX.Element {
    const { vkAPI } = this.props;
    const {
      activeView,
      activePanel,
      scheme,
      center,
      zoom,
      themePoints,
      themeWalls,
    } = this.state;
    console.log('RENDER', activePanel)
    return (
      <Root activeView={activeView}>
        <View id="main" activePanel={activePanel}>
          <Panel id="newsfeed">
            <Newsfeed goBack={() => this.setPanel('map')} />
          </Panel>
          <Panel id="map">
            <Main
              setPanel={this.setPanel}
              scheme={scheme}
              vkAPI={vkAPI}
              center={center}
              zoom={zoom}
              updateMap={(center, zoom) => this.updateMap(center, zoom)}
              themePoints={themePoints}
              themeWalls={themeWalls}
            />
          </Panel>
        </View>
      </Root>
    );
  }
}
