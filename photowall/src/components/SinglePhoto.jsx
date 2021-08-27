import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SinglePhoto = (props) => {
  const { post, removePost, index, comments } = props;
  return (
    <figure className='figure'>
      <Link to={`/single-post/${post.id}`}>
        <img
          src={post.imageLink}
          alt={post.description}
          className='photo'
        />
      </Link>

      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className='btn-container'>
        <Link to='/'>
          <button
            className='button'
            onClick={() => {
              removePost(index);
            }}
          >
            Remove
          </button>
        </Link>
        <Link to={`/single-post/${post.id}`}>
          <div className='button'>
            <div className='comment-count'>
              <div className='speech-bubble' />
              {comments[post.id]
                ? comments[post.id].length
                : 0}
            </div>
          </div>
        </Link>
      </div>
    </figure>
  );
};

SinglePhoto.prototype = {
  post: PropTypes.object.isRequired,
  removePhoto: PropTypes.func.isRequired,
};

export default SinglePhoto;
