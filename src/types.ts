import art from './markers/art.png';
import auto from './markers/auto.png';
import fall from './markers/fall.png';
import film from './markers/film.png';
import game from './markers/game.png';
import it from './markers/it.png';
import music from './markers/music.png';
import photo from './markers/photo.png';
import quarantine from './markers/quarantine.png';
import work from './markers/work.png';
import comedy from './markers/comedy.png';

import high from './markers/mood/high.png';
import low from './markers/mood/low.png';
import negative from './markers/mood/negative.png';
import positive from './markers/mood/positive.png';

import type { Wall, Profile, Group } from './api';

export interface Author {
  id: number;
  name: string;
  photo_100: string;
}

const ALL_THEMES = [
  'fall',
  'film',
  'work',
  'quarantine',
  'game',
  'art',
  'comedy',
  'photo',
];

export type Theme = typeof ALL_THEMES[number];

export const themesList: Theme[] = ALL_THEMES;

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

export const themeEmoji: { [key in Theme]: string } = {
  fall: low,
  film: positive,
  work: high,
  quarantine: negative,
  game: positive,
  art: high,
  comedy: positive,
  photo: high,
};

export const themeName: { [key in Theme]: string } = {
  fall: 'Осень',
  film: 'Фильмы',
  work: 'Работа',
  quarantine: 'Карантин',
  game: 'Игры',
  art: 'Картины',
  comedy: 'Юмор',
  photo: 'Фотографии',
};

export const themeImage: { [key: string]: string } = {
  fall: 'image-fall',
  film: 'image-film',
  work: 'image-work',
  quarantine: 'image-quarantine',
  game: 'image-game',
  art: 'image-art',
  comedy: 'image-comedy',
  photo: 'image-photo',
};

export const themeImageSrc: { [key in Theme]: string } = {
  fall: fall,
  film: film,
  work: work,
  quarantine: quarantine,
  game: game,
  art: art,
  comedy: comedy,
  photo: photo,
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

export type Panel = 'map' | 'newsfeed';

export type ctxValue = {
  setPanel: (panel: Panel) => void;
  getUser: (userId: number) => Profile;
  getGroup: (groupId: number) => Group;
};

// TODO: грузим все нужные новости
// TODO: от центра ставим 5 точек (в центре и по углам)
// TODO: считаем кол-во новостей по точкам
// TODO: на месте точек рисуем три самых крупных темы
