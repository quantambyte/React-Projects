import React, { useState } from 'react';

const Comments = ({ addComment, comments, id }) => {
  // state
  const [text, setText] = useState('');

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(text, id);
    setText('');
  };

  return (
    <div className='comment'>
      <form
        className='comment-form'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='comment'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit' disabled={!text}>
          Submit
        </button>
      </form>

      {comments.map((comment, index) => {
        return <p key={index}>{comment}</p>;
      })}
    </div>
  );
};

export default Comments;
