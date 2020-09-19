import type { Wall, Profile, Group } from './api';

export interface Author {
  id: number;
  name: string;
  photo_100: string;
}

export type Theme =
  | 'fall'
  | 'film'
  | 'work'
  | 'quarantine'
  | 'game'
  | 'art'
  | 'comedy'
  | 'photo';

export const themeSearch: { [key in Theme]: string } = {
  fall: 'осень',
  film: 'фильм',
  work: 'работа',
  quarantine: 'коронавирус',
  game: 'игра',
  art: 'картина',
  comedy: 'юмор',
  photo: 'фотографии',
};

export const themeImage: { [key in Theme]: string } = {
  fall: 'image-fall',
  film: 'image-film',
  work: 'image-work',
  quarantine: 'image-quarantine',
  game: 'image-game',
  art: 'image-art',
  comedy: 'image-comedy',
  photo: 'image-photo',
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
