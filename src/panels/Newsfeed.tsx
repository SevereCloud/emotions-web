import React from 'react';
import {
  View,
  Panel,
  PanelHeader,
  Button,
  PanelHeaderBack,
} from '@vkontakte/vkui';
import Post from '../components/Post/Post';
import CardDivider from '../components/CardDivider/CardDivider';

// interface NewsfeedState {}

export interface NewsfeedProps {
  goBack: () => void;
}

export class Newsfeed extends React.Component<NewsfeedProps> {
  constructor(props: NewsfeedProps) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    const { goBack } = this.props;
    // const {  } = this.state;
    return (
      <>
        <PanelHeader
          separator={false}
          left={<PanelHeaderBack onClick={() => goBack()} />}
        >
          Новости
        </PanelHeader>
        <Post
          author={{ id: 100, name: 'ВКонтакте', photo_100: '' }}
          date="час назад"
          likes={65}
          comments={65}
          reposts={4}
          views="7,2К"
          style={{ marginTop: -100 }}
        >
          <div
            style={{
              height: 80,
              width: '100%',
              backgroundColor: 'var(--placeholder_icon_background)',
            }}
          />
        </Post>
        <CardDivider />
        <CardDivider />
        <Post
          author={{ id: 100, name: 'ВКонтакте', photo_100: '' }}
          date="час назад"
          likes={65}
          comments={65}
          reposts={4}
          views="7,2К"
        >
          <div
            style={{
              height: 500,
              width: '100%',
              backgroundColor: 'var(--placeholder_icon_background)',
            }}
          />
        </Post>
      </>
    );
  }
}
