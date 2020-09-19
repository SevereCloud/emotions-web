import React from 'react';
import {
  Avatar,
  FixedLayout,
  HorizontalScroll,
  Search,
  Snackbar,
} from '@vkontakte/vkui';
import MapComponent from '../components/Map/Map';
import type { AppearanceSchemeType } from '@vkontakte/vk-bridge';
import type { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';
import { Icon16Clear } from '@vkontakte/icons';
import {
  Theme,
  themeEmoji,
  themeImageSrc,
  themeName,
  ThemePoint,
  themesList,
  ThemeWalls,
} from '../types';
import ThemeCard from '../components/ThemeCard/ThemeCard';
import './Main.css';

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

  setTheme: (theme: Theme) => void;
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
    return themesList.filter(
      (theme) => themeName[theme].toLowerCase().indexOf(search) > -1,
    );
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
      setTheme,
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
              {themesList.map((theme, key) => (
                <ThemeCard
                  key={key}
                  title={themeName[theme]}
                  emoji={themeEmoji[theme]}
                  onClick={() => setTheme(theme)}
                >
                  <img src={themeImageSrc[theme]} alt="" />
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
