import art from './markers/art.png.proxy.js';
import fall from './markers/fall.png.proxy.js';
import film from './markers/film.png.proxy.js';
import game from './markers/game.png.proxy.js';
import photo from './markers/photo.png.proxy.js';
import quarantine from './markers/quarantine.png.proxy.js';
import work from './markers/work.png.proxy.js';
import comedy from './markers/comedy.png.proxy.js';
import high from './markers/mood/high.png.proxy.js';
import low from './markers/mood/low.png.proxy.js';
import negative from './markers/mood/negative.png.proxy.js';
import positive from './markers/mood/positive.png.proxy.js';
const ALL_THEMES = ['fall', 'film', 'work', 'quarantine', 'game', 'art', 'comedy', 'photo'];
export const themesList = ALL_THEMES;
export const themeSearch = {
  fall: 'осень',
  film: 'фильм',
  work: 'работа',
  quarantine: 'коронавирус',
  game: 'игра',
  art: 'картина',
  comedy: 'юмор',
  photo: 'фотографии'
};
export const themeEmoji = {
  fall: low,
  film: positive,
  work: high,
  quarantine: negative,
  game: positive,
  art: high,
  comedy: positive,
  photo: high
};
export const themeName = {
  fall: 'Осень',
  film: 'Фильмы',
  work: 'Работа',
  quarantine: 'Карантин',
  game: 'Игры',
  art: 'Картины',
  comedy: 'Юмор',
  photo: 'Фотографии'
};
export const themeImage = {
  fall: 'image-fall',
  film: 'image-film',
  work: 'image-work',
  quarantine: 'image-quarantine',
  game: 'image-game',
  art: 'image-art',
  comedy: 'image-comedy',
  photo: 'image-photo'
};
export const themeImageSrc = {
  fall: fall,
  film: film,
  work: work,
  quarantine: quarantine,
  game: game,
  art: art,
  comedy: comedy,
  photo: photo
}; // image-auto
// image-it
// image-music
// TODO: грузим все нужные новости
// TODO: от центра ставим 5 точек (в центре и по углам)
// TODO: считаем кол-во новостей по точкам
// TODO: на месте точек рисуем три самых крупных темы