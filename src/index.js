import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './components/menu/Menu';
import Station from './components/Station';
import Homepage from './components/Homepage';
import Searchbar from './components/searchbar/Searchbar';

import './index.css';

const PersonalFM = () => (
  <div>
    <h3>私人FM</h3>
  </div>
)

const Recommend = () => (
  <div>
    <h3>每日推荐</h3>
  </div>
)

ReactDOM.render(
  <Router>
    <div>
      <Searchbar></Searchbar>
      <Menu></Menu>
      <Route exact path='/' component={Homepage} />
      <Route path='/station' component={Station} />
      <Route path='/personalFM' component={PersonalFM} />
      <Route path='/recommend' component={Recommend} />
    </div>
  </Router>,
  document.getElementById('app')
);