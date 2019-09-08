import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import ProductPage from './ProductPage';
import NavBar from './NavBar';

const Main = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={ProductPage} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
};

export default Main;
