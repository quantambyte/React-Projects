import React, { useState } from 'react';

// css
import './Search.css';

const Search = ({ handleSearch }) => {
  // state
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
    setSearch('');
  };

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>
        <img
          style={{
            width: '200px',
            height: '100px',
            justifyContent: 'center',
          }}
          src='https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png'
          alt='youtube logo'
        />
      </h2>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit' onClick={handleSubmit}>
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
