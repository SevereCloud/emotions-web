import type { Wall } from './api';
import type { ThemeWalls } from './types';

const autumn: Wall[] = [
    {
        id: 1,
        date: 1,
        owner_id: 1,
        from_id: 1,
        post_type: '',
        text: 'Бонжур',
        attachments: [],
        comments: {
            count: 121,
        },
        likes: {
            count: 455
        },
        reposts: {
            count: 293,
            wall_count: 123,
            mail_count: 11,
        },
        views: {
            count: 12332
        },
        is_favorite: false,
    },
    {
        id: -1,
        date: 1,
        owner_id: 1,
        from_id: 1,
        post_type: '',
        text: 'Бонжур тужур',
        attachments: [],
        comments: {
            count: 121,
        },
        likes: {
            count: 455
        },
        reposts: {
            count: 293,
            wall_count: 123,
            mail_count: 11,
        },
        views: {
            count: 12332
        },
        is_favorite: false,
    }
];

export const mockThemeWalls: ThemeWalls = {
    Осень: [...autumn, ...autumn],
    Фильмы: [],
    Работа: [],
    Карантин: [],
    Игры: [],
    Искусство: [],
    Юмор: [],
    Фотографии: [],
}

export default {
    themeWalls: mockThemeWalls,
}