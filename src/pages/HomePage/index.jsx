import { useEffect, useState } from 'react';
import { Joke } from '../../components/Joke';
import './style.css';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const result = await fetch('http://localhost:4000/api/jokes');
      const data = await result.json();
      setJokes(data.data);
    };
    fetchJokes();
  }, []);

  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
