import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './common/header/Header';
import HomeContainer from './features/HomeContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/home" component={HomeContainer} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
