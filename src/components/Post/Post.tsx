import React, { FC, HTMLAttributes, useContext } from 'react';
import {
  SimpleCell,
  usePlatform,
  getClassName,
  classNames,
  Avatar,
  Tappable,
} from '@vkontakte/vkui';
import type { HasRootRef } from '@vkontakte/vkui/dist/types';
import type { Wall } from '../../api';
import type { Author, ctxValue } from '../../types';
import AppCTX from '../../appContext';
import PostBar from '../PostBar/PostBar';

export interface PostProps
  extends HTMLAttributes<HTMLElement>,
  HasRootRef<HTMLElement> {
  author: Author;
  date: string;

  likes: number;
  comments: number;
  reposts: number;
  views: string;
  wall: Wall;
}

const Post: FC<PostProps> = ({
  className,
  author,
  date,
  likes,
  comments,
  reposts,
  views,
  ...restProps
}) => {
  const platform = usePlatform();
  const ctx = useContext(AppCTX) as ctxValue;
  const { getGroup, getUser } = ctx;

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
        <div
          style={{
            height: 150,
            width: '100%',
            backgroundColor: 'var(--placeholder_icon_background)',
          }}
        />
      </div>
      <PostBar
        likes={likes}
        comments={comments}
        reposts={reposts}
        views={views}
      />
    </div>
  );
};

export default Post;
