import React, { useRef } from 'react';
import useStore from '../state-management/store';

const AddPerson = () => {
  const inputRef = useRef();
  const addPerson = useStore(
    (state) => state.addPerson
  );

  const handleClick = () => {
    addPerson(inputRef.current.value);
    inputRef.current.value = '';
  };
  return (
    <>
      <input type='text' ref={inputRef} />
      <button onClick={handleClick}>Add Person</button>
    </>
  );
};

export default AddPerson;
