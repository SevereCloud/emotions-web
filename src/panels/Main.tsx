import React from 'react';
import { Div, FixedLayout } from '@vkontakte/vkui';

// interface MainState {}

export interface MainProps {
  // setView: (view: string, name?: string) => void;
  setPanel: (name: string) => void;
  // setPopout: (popout?: React.ReactNode) => void;
  // goBack: () => void;
}

export class Main extends React.Component<MainProps> {
  constructor(props: MainProps) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    return (
      <>
        <Div>Карта</Div>
        <FixedLayout filled vertical="bottom">
          <Div>TODO: Поиск</Div>
          <Div>TODO: горизонтальный скрол</Div>
        </FixedLayout>
      </>
    );
  }
}
