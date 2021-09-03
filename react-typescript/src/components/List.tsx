import React from 'react';

// component
import Card from './Card';

// interface
import { IState as IProps } from '../App';

const List: React.FC<IProps> = ({ people }) => {
  // render list
  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return <Card person={person} key={index} />;
    });
  };

  return <>{renderList()}</>;
};

export default List;
