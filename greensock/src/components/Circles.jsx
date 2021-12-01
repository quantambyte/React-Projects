import React, {
  useRef,
  useState,
  useEffect,
} from 'react';

import { TweenMax, Power3 } from 'gsap';

// css
import './Circles.css';

const Circles = () => {
  // ref
  let circle = useRef(null);
  let redCircle = useRef(null);
  let blueCircle = useRef(null);

  const [state, setState] = useState(false);

  useEffect(() => {
    TweenMax.staggerFrom(
      [circle, redCircle, blueCircle],
      1,
      { opacity: 0, x: 40, ease: Power3.easeInOut },
      0.2
    );
  }, []);

  const handleExpand = () => {
    TweenMax.to(redCircle, 1, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setState(true);
  };

  const handleShrink = () => {
    TweenMax.to(redCircle, 1, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setState(false);
  };

  return (
    <div className='circles-container'>
      <div
        className='circle'
        ref={(element) => (circle = element)}
        onClick={state ? handleShrink : handleExpand}
      ></div>
      <div
        className='circle red'
        ref={(element) => (redCircle = element)}
        onClick={state ? handleShrink : handleExpand}
      ></div>
      <div
        className='circle blue'
        ref={(element) => (blueCircle = element)}
        onClick={state ? handleShrink : handleExpand}
      ></div>
    </div>
  );
};

export default Circles;
