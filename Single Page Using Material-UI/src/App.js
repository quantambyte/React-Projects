import './App.css';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';


import GridLayout from './GridLayout';
import Footer      from './Footer';
import NavigationBar from './NavigationBar.js';


function App() {
  return (
    
    <div className = 'App'>

      <CssBaseline  />
      <NavigationBar />


      {/* creating a container and putting our main content in it in form of GridLayout */}
      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>

      <Footer />
    </div>

  );
}

export default App;
