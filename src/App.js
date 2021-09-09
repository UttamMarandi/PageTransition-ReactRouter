import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//Pages
import Home from "./pages/home";
import Model from "./pages/model";
//components
import Header from "./components/header";
//Styles
import "./App.scss";

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          // initial flase allows us to have no animation when a page is refreshed or user is coming from external source. Need to come from internal source
          // exitBeforeEnter: If set to true, AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered.
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path="/model/:id"
                render={() => <Model imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
