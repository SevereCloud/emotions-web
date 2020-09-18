import * as React from 'react';
import ProjectedLayer from './projected-layer';
import type * as GeoJSON from 'geojson';
import type { Point } from 'mapbox-gl';
import type { Anchor } from './util/types';
import { classNames } from '@vkontakte/vkui';

export interface Props {
  coordinates: GeoJSON.Position;
  anchor?: Anchor;
  offset?: number | number[] | Point;
  children?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
  className?: string;
  tabIndex?: number;
}

export const Marker: React.FunctionComponent<Props> = (props) => (
  <ProjectedLayer
    {...{ ...props }}
    type="marker"
    className={classNames('mapboxgl-marker', props.className)}
  />
);

export default Marker;
