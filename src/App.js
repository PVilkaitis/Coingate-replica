import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home.js";
import Header from "./components/Header.js";
import StartNowPage from "./components/StartNowPage.js";
import BuyPage from "./components/BuyPage.js";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/start">
            <StartNowPage />
          </Route>

          <Route path="/buy">
            <BuyPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
