import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// context
import { ResultContextProvider } from './context/ResultContext'

// browser router
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.getElementById('root')
);

