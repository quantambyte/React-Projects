import React, { useState } from 'react';

// interface
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<
    React.SetStateAction<Props['people']>
  >;
}

const Form: React.FC<IProps> = ({
  people,
  setPeople,
}) => {
  // state
  const [input, setInput] = useState({
    name: '',
    age: '',
    url: '',
    note: '',
  });

  //   handle change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //   handle submit
  const handleSubmit = (): void => {
    // if anything missing
    if (
      !input.name ||
      !input.age ||
      !input.url ||
      !input.note
    ) {
      return;
    }

    // if everything present
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);

    setInput({
      name: '',
      age: '',
      url: '',
      note: '',
    });
  };

  return (
    <div className='AddToList'>
      <input
        type='text'
        placeholder='name'
        className='AddToList-input'
        value={input.name}
        name='name'
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='age'
        className='AddToList-input'
        value={input.age}
        name='age'
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='image url'
        className='AddToList-input'
        value={input.url}
        name='url'
        onChange={handleChange}
      />
      <textarea
        placeholder='note'
        className='AddToList-input'
        value={input.note}
        name='note'
        onChange={handleChange}
      />

      <button
        className='AddToList-btn'
        onClick={handleSubmit}
      >
        Add to List
      </button>
    </div>
  );
};

export default Form;
