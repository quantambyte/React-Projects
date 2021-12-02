import React, { useEffect } from 'react';
import People from './components/People';
import AddPerson from './components/AddPerson';

import useStore from './state-management/store';

const App = () => {
  const toggleDarkMode = useStore(
    (state) => state.toggleDarkMode
  );
  const dark = useStore((state) => state.dark);

  useEffect(() => {
    dark
      ? document
          .querySelector('body')
          .classList.add('dark')
      : document
          .querySelector('body')
          .classList.remove('dark');
  }, [dark]);

  return (
    <>
      <button onClick={toggleDarkMode}>
        {dark ? 'Light Mode' : 'Dark Mode'}
      </button>
      <br />
      <br />
      <br />
      <br />
      <AddPerson />
      <People />
    </>
  );
};

export default App;
