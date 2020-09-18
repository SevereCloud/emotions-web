import React, { FC, HTMLAttributes } from 'react';
import {
  SimpleCell,
  usePlatform,
  getClassName,
  classNames,
  Avatar,
  Tappable,
} from '@vkontakte/vkui';
import type { HasRootRef } from '@vkontakte/vkui/dist/types';
import type { Author } from '../../types';
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
}

const Post: FC<PostProps> = ({
  className,
  author,
  date,
  likes,
  comments,
  reposts,
  views,
  children,
  ...restProps
}) => {
  const platform = usePlatform();

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
      <div className="Post__content">{children}</div>
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
