import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  // const [username, setUsername] = useState("");
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            component={LandingPage}
          />
          <Route
            path="/home"
            exact
            component={Home}
          />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
