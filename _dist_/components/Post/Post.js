function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, useEffect, useState } from '../../../web_modules/react.js';
import { Div, SimpleCell, usePlatform, getClassName, classNames, Avatar, Text } from '../../../web_modules/@vkontakte/vkui.js';
import AppCTX from '../../appContext.js';
import PostBar from '../PostBar/PostBar.js';

const Post = ({
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
  const ctx = useContext(AppCTX);
  const {
    getGroup,
    getUser
  } = ctx;
  const [author, setAuthor] = useState({
    id: 100,
    name: 'ВКонтакте',
    photo_100: ''
  });
  useEffect(() => {
    if (wall.owner_id >= 0) {
      const profile = getUser(wall.owner_id);
      setAuthor({
        id: wall.owner_id,
        name: `${profile.first_name} ${profile.last_name}`,
        photo_100: profile.photo_100
      });
    } else {
      const group = getGroup(wall.owner_id);
      setAuthor({
        id: wall.owner_id,
        name: group.name,
        photo_100: group.photo_100
      });
    }
  }, [wall.owner_id]);
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    className: classNames(className, getClassName('Post', platform))
  }), /*#__PURE__*/React.createElement("div", {
    className: "Post__header"
  }, /*#__PURE__*/React.createElement(SimpleCell, {
    disabled: true,
    description: date,
    before: /*#__PURE__*/React.createElement(Avatar, {
      size: 48,
      src: author.photo_100
    })
  }, author.name)), /*#__PURE__*/React.createElement("div", {
    className: "Post__content"
  }, wall.text && /*#__PURE__*/React.createElement(Div, null, /*#__PURE__*/React.createElement(Text, {
    weight: "regular"
  }, wall.text)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      width: '100%',
      backgroundColor: 'var(--placeholder_icon_background)'
    }
  })), /*#__PURE__*/React.createElement(PostBar, {
    likes: wall.likes.count,
    comments: wall.comments.count,
    reposts: wall.reposts.count,
    views: wall.views.count
  }));
};

export default Post;