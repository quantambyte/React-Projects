import React from 'react';

// components
import Title from '../components/Title';
import PhotosList from '../components/PhotosList';

const Home = (props) => {
  return (
    <>
      <Title title='Photo Gallery' />
      <PhotosList {...props} />
      {props.posts.length === 0 ? (
        <h2>Such Empty! Add Some Photos</h2>
      ) : (
        ''
      )}
    </>
  );
};

export default Home;
