import React, { Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/utils/Navbar";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Doctors from "./components/Doctors";
import Lawyers from "./components/Lawyers";
import Contact from "./components/Contact";

function App(props) {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lawyers" component={Lawyers} />
          <Route exact path="/doctors" component={Doctors} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
