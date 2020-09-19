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
  Card,
  CardScroll,
  Text,
} from '@vkontakte/vkui';
import type { HasRootRef } from '@vkontakte/vkui/dist/types';
import type { Wall, Profile, Group, Photo } from '../../api';
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
  }, [wall.owner_id]);

  const photos = (
    wall.attachments
      ? wall.attachments
        .filter(a => (a.type === "photo"))
        .map(a => a.photo)
      : []
  ) as Photo[];


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
        {photos.length === 1 && (
          photos.map(({ sizes }) => {
            const largestPhoto = sizes[sizes.length - 1];
            return (
              <img
                src={largestPhoto.url}
                style={{
                  width: '100%',
                  backgroundColor: 'var(--placeholder_icon_background)',
                }}
              />
            );
          })
        )}
        {photos.length > 1 && (
          <CardScroll style={{ paddingBottom: 20 }}>
            {
              photos.map(({ sizes }) => {
                const largestPhoto = sizes[sizes.length - 1];
                return (
                  <Card
                    mode="outline"
                    size="m"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <img
                      src={largestPhoto.url}
                      style={{
                        maxWidth: window.innerWidth * 0.8,
                        borderRadius: 10,
                        backgroundColor: 'var(--placeholder_icon_background)',
                      }}
                    />
                  </Card>
                )
              })
            }
          </CardScroll>
        )}
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
