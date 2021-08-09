import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  // state
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(
    new Values('#FF0099').all(2)
  );

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(2);
      setList(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <>
      <section className='container'>
        <h3>50 Shades of Color</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f1f3f8'
            className={`${error ? 'error' : null}`}
          />

          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
