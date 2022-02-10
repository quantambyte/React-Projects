import { useEffect } from 'react';

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

// css
import './App.css';

// components
import Container from './components/Container';
import Header from './components/Header';

const App = () => {
  // initialization
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-cubic',
      duration: 600,
    });
  }, []);

  return (
    <>
      <Header />
      <Container />
    </>
  );
};

export default App;
