export interface ApiNewsfeedSearchResponse {
  items: Wall[];
  next_from: string;
  count: number;
  total_count: number;
  profiles: Profile[];
  groups: Group[];
}

export interface Wall {
  id: number;
  date: number;
  owner_id: number;
  from_id: number;
  post_type: string;
  text: string;
  marked_as_ads?: number;
  attachments: WallAttachment[];
  geo: WallGeo;
  comments: WallComments;
  likes: WallLikes;
  reposts: WallReposts;
  views: WallViews;
  is_favorite: boolean;
}

export interface WallAttachment {
  type: string;
  photo?: Photo;
  audio?: Audio;
  link?: Link;
  video?: Video;
}

export interface Photo {
  album_id: number;
  date: number;
  id: number;
  owner_id: number;
  has_tags: boolean;
  access_key: string;
  sizes: Size[];
  text: string;
  user_id?: number;
  post_id?: number;
  lat?: number;
  long?: number;
}

export interface Size {
  height: number;
  url: string;
  type: string;
  width: number;
}

export interface Audio {
  artist: string;
  id: number;
  owner_id: number;
  title: string;
  duration: number;
  is_explicit: boolean;
  is_focus_track: boolean;
  track_code: string;
  url: string;
  date: number;
  main_artists?: MainArtist[];
  short_videos_allowed: boolean;
  stories_allowed: boolean;
  stories_cover_allowed: boolean;
  album_id?: number;
  genre_id?: number;
}

export interface MainArtist {
  name: string;
  domain: string;
  id: string;
}

export interface Link {
  url: string;
  title: string;
  description: string;
  target: string;
  photo: Photo2;
  is_favorite: boolean;
}

export interface Photo2 {
  album_id: number;
  date: number;
  id: number;
  owner_id: number;
  has_tags: boolean;
  sizes: Size2[];
  text: string;
}

export interface Size2 {
  height: number;
  url: string;
  type: string;
  width: number;
}

export interface Video {
  access_key: string;
  can_comment: number;
  can_like: number;
  can_repost: number;
  can_subscribe: number;
  can_add_to_faves: number;
  can_add: number;
  comments: number;
  date: number;
  description: string;
  duration: number;
  image: Image[];
  first_frame: FirstFrame[];
  width: number;
  height: number;
  id: number;
  owner_id: number;
  title: string;
  is_favorite: boolean;
  track_code: string;
  type: string;
  views: number;
}

export interface Image {
  height: number;
  url: string;
  width: number;
  with_padding?: number;
}

export interface FirstFrame {
  height: number;
  url: string;
  width: number;
}

export interface WallGeo {
  type: string;
  coordinates: string;
  place: Place;
}

export interface Place {
  created: number;
  id: number;
  is_deleted: boolean;
  latitude: number;
  longitude: number;
  title: string;
  total_checkins: number;
  updated: number;
  country: any;
  city: any;
  address?: string;
  category?: number;
  category_object?: CategoryObject;
}

export interface CategoryObject {
  id: number;
  title: string;
  icons: Icon[];
}

export interface Icon {
  height: number;
  url: string;
  width: number;
}

export interface WallComments {
  count: number;
}

export interface WallLikes {
  count: number;
}

export interface WallReposts {
  count: number;
  wall_count: number;
  mail_count: number;
}

export interface WallViews {
  count: number;
}

export interface Profile {
  id: number;
  first_name: string;
  last_name: string;
  is_closed: boolean;
  can_access_closed: boolean;
  sex: number;
  screen_name: string;
  photo_50: string;
  photo_100: string;
  online: number;
  online_info: OnlineInfo;
  online_app?: number;
  online_mobile?: number;
}

export interface OnlineInfo {
  visible: boolean;
  last_seen?: number;
  is_online: boolean;
  app_id?: number;
  is_mobile: boolean;
}

export interface Group {
  id: number;
  name: string;
  screen_name: string;
  is_closed: number;
  type: string;
  photo_50: string;
  photo_100: string;
  photo_200: string;
}
