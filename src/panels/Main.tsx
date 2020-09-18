import React from 'react';
import { Div, FixedLayout } from '@vkontakte/vkui';
import MapComponent from '../components/Map/Map';
import type { AppearanceSchemeType } from '@vkontakte/vk-bridge';
import type { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';

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

export class Main extends React.Component<MainProps> {
  constructor(props: MainProps) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    const {scheme, vkAPI, center, zoom, updateMap} = this.props
    return (
      <>
        <MapComponent
            vkAPI={vkAPI}
            center={center}
            zoom={zoom}
            scheme={scheme}
            updateMap={updateMap}
          />
        <FixedLayout filled vertical="bottom">
          <Div>TODO: Поиск</Div>
          <Div>TODO: горизонтальный скрол</Div>
        </FixedLayout>
      </>
    );
  }
}
