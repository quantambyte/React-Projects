import React from 'react';

import useStore from '../state-management/store';

const People = () => {
  const people = useStore((state) => state.people);

  return (
    <>
      <h1>
        There are Currently {people.length} People in
        State
      </h1>

      <ul>
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </>
  );
};

export default People;
