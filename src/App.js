import React from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation  } from "react-router-dom";
import HomePage from "./home";
import "./styles.scss";

function App() {
  return (
    <div>
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
