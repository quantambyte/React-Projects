import React, { useState, useEffect } from 'react';
import {
  ImQuotesLeft,
  ImQuotesRight,
} from 'react-icons/im';

import './Landing.css';

const Landing = () => {
  // state
  const [quote, setQuote] = useState('');
  const [anime, setAnime] = useState('');
  const [character, setCharacter] = useState('');

  //   api request
  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch('https://animechan.vercel.app/api/random')
      .then(async (response) => {
        let { anime, quote, character } =
          await response.json();

        setAnime(anime);
        setQuote(quote);
        setCharacter(character);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='landing'>
      <h1>Random Quote of the Day</h1>
      <h2 className='icon left'>{<ImQuotesLeft />}</h2>
      <p>{quote}</p>
      <h2 className='icon right'>
        {<ImQuotesRight />}
      </h2>

      <div className='aac-container'>
        <h3>
          Anime: <span className='aac'>{anime}</span>
        </h3>
        <h3>
          Character:
          <span className='aac'>{character}</span>
        </h3>
      </div>

      <button onClick={fetchQuote}>New Quote "</button>
    </div>
  );
};

export default Landing;
