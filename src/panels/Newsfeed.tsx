import React from 'react';
import {
  View,
  Panel,
  Group,
  PanelHeader,
  Button,
  PanelHeaderBack,
} from '@vkontakte/vkui';

import type { Theme } from '../types';
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
    const { setPanel, walls } = this.props;
    console.log('walls', walls);
    // const {  } = this.state;
    return (
      <>
        <PanelHeader
          separator={false}
          left={<PanelHeaderBack onClick={() => setPanel('map')} />}
        >
          Новости
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
        </div>
      </>
    );
  }
}
