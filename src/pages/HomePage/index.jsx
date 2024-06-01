import './style.css';
import { useState } from 'react';
import thumbDown from '../HomePage/img/like-down.png';
import thumbUp from '../HomePage/img/like-up.png';

export const HomePage = () => {
  const [likesUp, setLikesUp] = useState(0);
  const [likesDown, setLikesDown] = useState(0);

  const addLikesUp = () => {
    setLikesUp(likesUp + 1);
  };

  const addLikesDown = () => {
    setLikesDown(likesDown + 1);
  };

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
            />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
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
    </div>
  );
};
