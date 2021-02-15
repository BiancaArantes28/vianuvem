import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import store from './store';
import ChartContainer from './features/chart/ChartContainer';
import Header from './common/header/Header';
import HomeContainer from './features/home/HomeContainer';
import ProductFormContainer from './features/form/ProductFormContainer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/home" component={HomeContainer} />
              <Route path="/product-form" component={ProductFormContainer} />
              <Route path="/chart" component={ChartContainer} />
              <Redirect to="/home" />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
