import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// redux exports
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Mapping from './components/Mapping';
// reducer
import rootReducer from './redux/reducer/root_reducer';
import { BrowserRouter } from 'react-router-dom';

// redux dev tools
const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;

// creating store
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <Mapping />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
