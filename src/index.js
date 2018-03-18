import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './components/menu/Menu';
import Station from './components/Station';
import Homepage from './components/Homepage';
import Searchbar from './components/searchbar/Searchbar';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Searchbar></Searchbar>
      <Menu></Menu>
      <Route exact path='/' component={Homepage} />
      <Route path='/station' component={Station} />
    </div>
  </Router>,
  document.getElementById('app')
);