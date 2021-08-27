import React from 'react';
import { Link } from 'react-router-dom';

// component
import Title from '../components/Title';
import SinglePhoto from '../components/SinglePhoto';
import Comments from '../components/Comments';

const SinglePost = (props) => {
  // destructuring
  const { match, posts, addComment, comments } = props;

  const id = Number(match.params.id);

  const index = posts.findIndex(
    (post) => post.id === id
  );

  //   finding post
  const post = posts.find((post) => post.id === id);

  const totalComments =
    comments[match.params.id] || [];

  return (
    <>
      <Title title='Photo Gallery' />
      <div className='single-photo'>
        <SinglePhoto
          {...props}
          post={post}
          index={index}
        />
        <Comments
          addComment={addComment}
          comments={totalComments}
          id={id}
        />
      </div>

      <Link to='/'>Back to Home</Link>
    </>
  );
};

export default SinglePost;
