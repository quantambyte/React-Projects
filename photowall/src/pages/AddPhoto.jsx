import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddPhoto = (props) => {
  // state
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (link && description) {
      const post = {
        id: Number(new Date()),
        description: description,
        imageLink: link,
      };

      props.startAddingPost(post);
      props.history.push('/');
    }
  };

  return (
    <>
      <h1>Add New Photo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Link/URL'
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          type='text'
          placeholder='Description'
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />
        <button disabled={!link || !description}>
          Add Photo
        </button>

        <Link to='/'>Back to Home</Link>
      </form>
    </>
  );
};

export default AddPhoto;
