import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import News from "./components/News";
import Schedule from "./components/Schedule";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup"

function Routing() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={News} />
      <Route path="/News" component={News} />
      <Route path="/Schedule" component={Schedule} />
      <Route path="/About" component={About} />
      <Route path="/Login" component={Login} />
      <Route path="/Signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default Routing;