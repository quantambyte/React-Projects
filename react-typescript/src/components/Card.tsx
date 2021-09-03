import React from 'react';

// interface
interface CardProps {
  person: {
    name: string;
    age: number;
    url: string;
    note?: string;
  };
}
const Card: React.FC<CardProps> = ({ person }) => {
  return (
    <>
      <li className='List'>
        <div className='List-header'>
          <img
            src={person.url}
            alt={person.name}
            className='List-img'
          />
          <h2>{person.name}</h2>
        </div>

        <p>{person.age} years old</p>
        <p className='List-note'>{person.note}</p>
      </li>
    </>
  );
};

export default Card;
