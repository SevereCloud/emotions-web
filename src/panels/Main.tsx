import React from 'react';
import {
  Avatar,
  Div,
  FixedLayout,
  HorizontalScroll,
  Search,
  Snackbar,
} from '@vkontakte/vkui';
import MapComponent from '../components/Map/Map';
import type { AppearanceSchemeType } from '@vkontakte/vk-bridge';
import type { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';
import { Icon16Clear } from '@vkontakte/icons';
import type { Wall } from '../api';
import type { Theme, ThemePoint, ThemeWalls } from '../types';
import ThemeCard from '../components/ThemeCard/ThemeCard';
import './Main.css';

import high from '../markers/mood/high.png';
import low from '../markers/mood/low.png';
import negative from '../markers/mood/negative.png';
import positive from '../markers/mood/positive.png';

import art from '../markers/art.png';
import auto from '../markers/auto.png';
import fall from '../markers/fall.png';
import film from '../markers/film.png';
import game from '../markers/game.png';
import it from '../markers/it.png';
import music from '../markers/music.png';
import quarantine from '../markers/quarantine.png';
import work from '../markers/work.png';
import comedy from '../markers/comedy.png';
import photo from '../markers/photo.png';

const themes: {
  name: string;
  image: string;
  theme: Theme;
  emoji?: string;
}[] = [
  // { name: 'Музыка', image: music, theme: 'music' },
  { name: 'Фильмы', image: film, theme: 'film', emoji: positive },
  { name: 'Осень', image: fall, theme: 'fall', emoji: low },
  { name: 'Работа', image: work, theme: 'work', emoji: high },
  { name: 'Карантин', image: quarantine, theme: 'quarantine', emoji: negative },
  // { name: 'IT', image: it, theme: 'it' },
  // { name: 'Авто', image: auto, theme: 'auto' },
  { name: 'Игры', image: game, theme: 'game', emoji: positive },
  { name: 'Искусство', image: art, theme: 'art', emoji: high },
  { name: 'Юмор', image: comedy, theme: 'comedy', emoji: positive },
  { name: 'Фото', image: photo, theme: 'photo', emoji: high },
];

interface MainState {
  search: string;
}

export interface MainProps {
  // setView: (view: string, name?: string) => void;
  setPanel: (name: string) => void;
  // setPopout: (popout?: React.ReactNode) => void;
  // goBack: () => void;

  scheme: AppearanceSchemeType;
  vkAPI: VKMiniAppAPI;

  center: [number, number];
  zoom: number;

  updateMap?: (center: [number, number], zoom: number) => void;

  themePoints: ThemePoint[];
  themeWalls: ThemeWalls; // FIXME: удалить, нужно только для дебага
}

interface MainState {
  snackbar: JSX.Element | null;
}

export class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);

    this.state = {
      snackbar: null,
      search: '',
    };

    this.error = this.error.bind(this);
  }

  /**
   * Показывает ошибку
   *
   * @param msg текст ошибки
   * @param duration время показа ошибки в ms
   */
  error(msg: string, duration = 4e3) {
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

  get themes() {
    const search = this.state.search.toLowerCase();
    return themes.filter(({ name }) => name.toLowerCase().indexOf(search) > -1);
  }

  render(): JSX.Element {
    const {
      scheme,
      vkAPI,
      center,
      zoom,
      updateMap,
      themePoints,
      themeWalls,
    } = this.props;
    const { snackbar } = this.state;

    return (
      <>
        <MapComponent
          vkAPI={vkAPI}
          center={center}
          zoom={zoom}
          scheme={scheme}
          updateMap={updateMap}
          error={(a, b) => this.error(a, b)}
          themePoints={themePoints}
          themeWalls={themeWalls}
        />
        <FixedLayout className="Modal" filled vertical="bottom">
          <Search
            placeholder="Поиск по темам и настроению"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
          <HorizontalScroll>
            <div style={{ display: 'flex', minHeight: 100 }}>
              {this.themes.map((theme, key) => (
                <ThemeCard key={key} title={theme.name} emoji={theme.emoji}>
                  <img src={theme.image} alt="" />
                </ThemeCard>
              ))}
            </div>
          </HorizontalScroll>
        </FixedLayout>
        {snackbar}
      </>
    );
  }
}
