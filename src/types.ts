import type { Wall } from './api';

export interface Author {
  id: number;
  name: string;
  photo_100: string;
}

export type Theme =
  | 'Осень'
  | 'Фильмы'
  | 'Работа'
  | 'Карантин'
  | 'Игры'
  | 'Искусство'
  | 'Юмор'
  | 'Фотографии';

export const themeSearch: { [key in Theme]: string } = {
  Осень: 'осень',
  Фильмы: 'фильм',
  Работа: 'Работа',
  Карантин: 'карантин',
  Игры: 'игры',
  Искусство: 'искусство',
  Юмор: 'юмор',
  Фотографии: 'фотографии',
};

export type ThemeWalls = { [key in Theme]: Wall[] };

export type Score = { [key in Theme]: number };

export interface ThemePoint {
  center: [number, number];
  score: Score;
}

// TODO: грузим все нужные новости
// TODO: от центра ставим 5 точек (в центре и по углам)
// TODO: считаем кол-во новостей по точкам
// TODO: на месте точек рисуем три самых крупных темы
