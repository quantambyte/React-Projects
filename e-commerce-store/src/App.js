import "./App.css";

import { Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route to="/" component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
