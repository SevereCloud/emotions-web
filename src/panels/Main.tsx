import React from 'react';
import { Avatar, Div, FixedLayout, Snackbar } from '@vkontakte/vkui';
import MapComponent from '../components/Map/Map';
import type { AppearanceSchemeType } from '@vkontakte/vk-bridge';
import type { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';
import { Icon16Clear } from '@vkontakte/icons';

// interface MainState {}

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
}

interface MainState {
  snackbar: JSX.Element | null;
}

export class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);

    this.state = {
      snackbar: null,
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

  render(): JSX.Element {
    const { scheme, vkAPI, center, zoom, updateMap } = this.props;
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
        />
        <FixedLayout filled vertical="bottom">
          <Div>TODO: Поиск</Div>
          <Div>TODO: горизонтальный скрол</Div>
        </FixedLayout>
        {snackbar}
      </>
    );
  }
}
