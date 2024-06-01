import './style.css';
import { useState } from 'react';
import thumbUp from './like-up.png';
import thumbDown from './like-down.png';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likesUp, setLikesUp] = useState(likes);
  const [likesDown, setLikesDown] = useState(dislikes);

  const addLikesUp = () => {
    setLikesUp(likesUp + 1);
  };

  const addLikesDown = () => {
    setLikesDown(likesDown + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          onClick={addLikesUp}
          id="btn-up"
          className="btn-like btn-like--up"
        >
          <img className="thumb" src={thumbUp} />
        </button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likesUp}
        </span>
        <button
          onClick={addLikesDown}
          id="btn-down"
          className="btn-like btn-like--down"
        >
          <img className="thumb" src={thumbDown} />
        </button>
        <span id="likes-down" className="likes-count likes-count--down">
          {likesDown}
        </span>
      </div>
    </div>
  );
};
