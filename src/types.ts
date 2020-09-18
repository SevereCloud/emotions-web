import type { Wall, Profile, Group } from './api';

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
  Работа: 'работа',
  Карантин: 'коронавирус',
  Игры: 'игра',
  Искусство: 'картина',
  Юмор: 'юмор',
  Фотографии: 'фотографии',
};

export const themeImage: { [key in Theme]: string } = {
  Осень: 'image-fall',
  Фильмы: 'image-film',
  Работа: 'image-work',
  Карантин: 'image-quarantine',
  Игры: 'image-game',
  Искусство: 'image-art',
  Юмор: 'image-comedy',
  Фотографии: 'image-photo',
};

// image-auto
// image-it
// image-music

export type ThemeWalls = { [key in Theme]: Wall[] };

export type Score = { [key in Theme]: number };

export interface ThemePoint {
  center: [number, number];
  score: Score;
}

export type ctxValue = {
  getUser: (userId: number) => Profile;
  getGroup: (groupId: number) => Group;
};

// TODO: грузим все нужные новости
// TODO: от центра ставим 5 точек (в центре и по углам)
// TODO: считаем кол-во новостей по точкам
// TODO: на месте точек рисуем три самых крупных темы
