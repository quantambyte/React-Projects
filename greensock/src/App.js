import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';

import Circles from './components/Circles';

const App = () => {
  // ref
  let appContainer = useRef(null);

  useEffect(() => {
    TweenMax.to(appContainer, 0, {
      css: { visibility: 'visible' },
    });
  }, []);

  return (
    <div
      className='app'
      ref={(el) => (appContainer = el)}
    >
      <Circles />
    </div>
  );
};

export default App;
