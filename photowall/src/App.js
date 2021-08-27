import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// pages
import Home from './pages/Home';
import AddPhoto from './pages/AddPhoto';
import SinglePost from './pages/SinglePost';

const App = (props) => {
  // db request
  useEffect(() => {
    props.startLoadingPost();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          path='/'
          exact
          component={() => <Home {...props} />}
        />
        <Route
          path='/addPost'
          component={({ history }) => (
            <AddPhoto onHistory={history} {...props} />
          )}
          exact
        />

        <Route
          path='/single-post/:id'
          exact
          component={(params) => (
            <SinglePost {...props} {...params} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
