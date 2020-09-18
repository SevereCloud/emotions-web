import React from 'react';
import { Panel, Root, View } from '@vkontakte/vkui';
import type {
  AppearanceSchemeType,
  UpdateConfigData,
} from '@vkontakte/vk-bridge';
import type { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';
import { Main } from './panels/Main';

interface AppState {
  scheme: AppearanceSchemeType;
  activeView: string;
  activePanel: { [id: string]: string };
  popout?: React.ReactNode;
  history: Array<{ view: string; panel: string }>;

  center: [number, number];
  zoom: number;
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
      activePanel: { main: 'main' },
      popout: null,
      history: [{ view: 'main', panel: 'main' }],

      center: [45, 60],
      zoom: 4,
    };

    this.setView = this.setView.bind(this);
    this.setPanel = this.setPanel.bind(this);
    this.setPopout = this.setPopout.bind(this);
    this.goBack = this.goBack.bind(this);
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
  }

  setView(view: string, name = 'main'): void {
    const panel = { ...this.state.activePanel };
    panel[view] = name;

    const newHistory = [...this.state.history, { view: view, panel: name }];

    this.setState({
      activeView: view,
      activePanel: panel,
      history: newHistory,
    });
  }

  setPanel(name: string): void {
    const panel = { ...this.state.activePanel };
    panel[this.state.activeView] = name;

    const newHistory = [
      ...this.state.history,
      { view: this.state.activeView, panel: name },
    ];

    this.setState({ activePanel: panel, history: newHistory });
  }

  setPopout(popout: React.ReactNode): void {
    this.setState({ popout: popout });
  }

  goBack(): void {
    const newHistory = [...this.state.history];
    newHistory.pop();
    const { view, panel } = newHistory[newHistory.length - 1];

    const p = { ...this.state.activePanel };
    p[view] = panel;

    this.setState({
      activeView: view,
      activePanel: p,
      history: newHistory,
    });
  }

  render(): JSX.Element {
    const { vkAPI } = this.props;
    const { activeView, activePanel, scheme, center, zoom } = this.state;

    return (
      <Root activeView={activeView}>
        <View id="main" activePanel={activePanel['main']}>
          <Panel id="main">
            <Main
              setPanel={this.setPanel}
              scheme={scheme}
              vkAPI={vkAPI}
              center={center}
              zoom={zoom}
              updateMap={(center,zoom) => {this.setState({zoom,center})}}
            />
          </Panel>
          <Panel id="newsfeed"></Panel>
        </View>
      </Root>
    );
  }
}
