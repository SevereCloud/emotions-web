import React from 'react';
import {
  View,
  Panel,
  Group,
  PanelHeader,
  Button,
  Spinner,
  PanelHeaderBack,
  Div,
} from '@vkontakte/vkui';

import { Theme, themeName } from '../types';
import type { Wall } from '../api';
import Post from '../components/Post/Post';

// interface NewsfeedState {}

export interface NewsfeedProps {
  setPanel: (panel: string) => void;
  theme: Theme;
  walls: Wall[];
}

export class Newsfeed extends React.Component<NewsfeedProps> {
  constructor(props: NewsfeedProps) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    const { setPanel, walls, theme } = this.props;
    // const {  } = this.state;
    return (
      <>
        <PanelHeader
          separator={false}
          left={<PanelHeaderBack onClick={() => setPanel('map')} />}
        >
          {theme ? themeName[theme] : 'Новости'}
        </PanelHeader>
        <div
          style={{
            backgroundColor: 'var(--background_page)',
            paddingTop: 1,
            paddingBottom: 1,
          }}
        >
          {walls.map((wall, key) => (
            <Post
              key={key}
              date="час назад"
              likes={65}
              comments={65}
              reposts={4}
              views="7,2К"
              wall={wall}
            />
          ))}
          {walls.length === 0 && (
            <Div>
              <Spinner
                size="large"
                style={{ marginTop: 20 }}
              />
            </Div>
          )}
        </div>
      </>
    );
  }
}
