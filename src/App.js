import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
import HomePage from './components/HomePage/HomePage';
import PlantDetails from "./components/PlantDetails/PlantDetails";

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Welcome to your garden!</h1>
    </header>
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/plant/:id" component={PlantDetails} />
    </Router >
  </div>
);

export default App;
