import React, {
  FC,
  HTMLAttributes,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  Div,
  SimpleCell,
  usePlatform,
  getClassName,
  classNames,
  Avatar,
  Tappable,
  Text,
} from '@vkontakte/vkui';
import type { HasRootRef } from '@vkontakte/vkui/dist/types';
import type { Wall, Profile, Group } from '../../api';
import type { Author, ctxValue } from '../../types';
import AppCTX from '../../appContext';
import PostBar from '../PostBar/PostBar';

export interface PostProps
  extends HTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement> {
  date: string;

  likes: number;
  comments: number;
  reposts: number;
  views: string;
  wall: Wall;
}

const Post: FC<PostProps> = ({
  className,
  date,
  likes,
  comments,
  reposts,
  views,
  wall,
  ...restProps
}) => {
  const platform = usePlatform();
  const ctx = useContext(AppCTX) as ctxValue;
  const { getGroup, getUser } = ctx;

  const [author, setAuthor] = useState({
    id: 100,
    name: 'ВКонтакте',
    photo_100: '',
  });

  useEffect(() => {
    if (wall.owner_id >= 0) {
      const profile = getUser(wall.owner_id);
      setAuthor({
        id: wall.owner_id,
        name: `${profile.first_name} ${profile.last_name}`,
        photo_100: profile.photo_100,
      });
    } else {
      const group = getGroup(wall.owner_id);
      setAuthor({
        id: wall.owner_id,
        name: group.name,
        photo_100: group.photo_100,
      });
    }
  });

  return (
    <div
      {...restProps}
      className={classNames(className, getClassName('Post', platform))}
    >
      <div className="Post__header">
        <SimpleCell
          disabled
          description={date}
          before={<Avatar size={48} src={author.photo_100} />}
        >
          {author.name}
        </SimpleCell>
      </div>
      <div className="Post__content">
        {wall.text && (
          <Div>
            <Text weight="regular">{wall.text}</Text>
          </Div>
        )}
        <div
          style={{
            height: 150,
            width: '100%',
            backgroundColor: 'var(--placeholder_icon_background)',
          }}
        />
      </div>
      <PostBar
        likes={wall.likes.count}
        comments={wall.comments.count}
        reposts={wall.reposts.count}
        views={wall.views.count}
      />
    </div>
  );
};

export default Post;
