import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <img
        src='https://pngimg.com/uploads/trollface/trollface_PNG38.png'
        alt='troll-face'
        className='header--image'
      />
      <h2 className='header--title'>Meme Generator</h2>
      <h4 className='header--project'>
        React Project
      </h4>
    </header>
  );
};

export default Header;
