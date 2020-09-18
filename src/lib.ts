import { number } from 'prop-types';
import type { AnyShapeCoordinates } from './components/Map/util/types';

export const isLaunchFromVK = () => {
  const url = new URL(window.location.href);
  const vkPlatform = url.searchParams.get('vk_platform');
  return !!vkPlatform;
};

export const getAppID = (): number => {
  const url = new URL(window.location.href);
  const vkAppID = url.searchParams.get('vk_app_id');
  return vkAppID ? parseInt(vkAppID) : 0;
};

export const getCord = (coordinates: string): [number, number] => {
  const arr = coordinates.split(' ');

  return [parseFloat(arr[1]), parseFloat(arr[0])];
};

export const distance = (
  p1: [number, number],
  p2: [number, number],
): number => {
  return Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
};
