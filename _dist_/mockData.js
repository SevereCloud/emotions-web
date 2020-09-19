const geo = {
  type: '',
  coordinates: '1.1 2.3',
  place: {
    created: 0,
    id: 0,
    is_deleted: false,
    latitude: 30.3,
    longitude: 31.4,
    title: '',
    total_checkins: 0,
    updated: 0,
    country: '',
    city: ''
  }
};
const autumn = [{
  id: 1,
  date: 1,
  owner_id: 1,
  from_id: 1,
  post_type: '',
  text: 'Бонжур',
  attachments: [],
  comments: {
    count: 121
  },
  likes: {
    count: 455
  },
  reposts: {
    count: 293,
    wall_count: 123,
    mail_count: 11
  },
  views: {
    count: 12332
  },
  is_favorite: false,
  geo
}, {
  id: -1,
  date: 1,
  owner_id: 1,
  from_id: 1,
  post_type: '',
  text: 'Бонжур тужур',
  attachments: [],
  comments: {
    count: 121
  },
  likes: {
    count: 455
  },
  reposts: {
    count: 293,
    wall_count: 123,
    mail_count: 11
  },
  views: {
    count: 12332
  },
  is_favorite: false,
  geo
}];
export const mockThemeWallsVoid = {
  fall: [],
  work: [],
  quarantine: [],
  film: [],
  art: [],
  game: [],
  comedy: [],
  photo: []
};
export const mockThemeWalls = {
  fall: [...autumn, ...autumn],
  work: [...autumn, ...autumn],
  quarantine: [...autumn, ...autumn],
  film: [...autumn, ...autumn],
  art: [...autumn, ...autumn],
  game: [...autumn, ...autumn],
  comedy: [...autumn, ...autumn],
  photo: [...autumn, ...autumn]
};
export default {
  themeWallsVoid: mockThemeWallsVoid,
  themeWalls: mockThemeWalls
};