// from https://github.com/alex3165/react-mapbox-gl/
// MIT License

import React from 'react';
import type { Map } from 'mapbox-gl';

export const MapContext = React.createContext(undefined) as React.Context<
  Map | undefined
>;

// tslint:disable-next-line:no-any
export function withMap(Component: React.ComponentClass<any>) {
  return function MappedComponent<T>(props: T) {
    return (
      <MapContext.Consumer>
        {(map) => <Component map={map} {...props} />}
      </MapContext.Consumer>
    );
  };
}
