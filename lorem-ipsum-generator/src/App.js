import React, { useState } from 'react';
import data from './data';

const App = () => {
  // state
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);

    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 1;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>Random Text Generator</h3>

      <form
        onSubmit={handleSubmit}
        className='lorem-form'
      >
        <label htmlFor='number'>paragraphs:</label>
        <input
          type='number'
          name='number'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />

        <button type='submit' className='btn'>
          generate
        </button>
      </form>

      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
};

export default App;
