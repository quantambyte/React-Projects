import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// single photo component
import SinglePhoto from './SinglePhoto';

const PhotosList = (props) => {
  return (
    <>
      <Link to='/addPost'>
        <button className='btn-add'></button>
      </Link>
      <div className='photo-grid'>
        {props.posts
          .sort((x, y) => {
            return y.id - x.id;
          })
          .map((post, index) => {
            return (
              <SinglePhoto
                post={post}
                key={post.id}
                {...props}
                index={index}
              />
            );
          })}
      </div>
    </>
  );
};

// prop types
PhotosList.prototype = {
  posts: PropTypes.array.isRequired,
};

export default PhotosList;
