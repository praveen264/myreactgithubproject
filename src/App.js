import React from 'react';

import './App.css';
import Menu from './menu';
import About from './about';
import Contact from './contact';
import Home from './home';
import './home.css';
import {HashRouter,Route,Switch } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
    <div> 
      <Menu></Menu>
      <Switch>
      <Route path="/about"  component={About}></Route>
      <Route path="" exact component={Home}></Route>
     
      <Route path="/contact" exact component={Contact}></Route>
      </Switch>
      <footer>
        <p>Copywright by Mphase</p>
      </footer>
    </div>
    </HashRouter>
  );
}


export default App;
