import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Rank from './components/Rank';
import Menu from './components/menu/Menu';
import Station from './components/Station';
import Homepage from './components/Homepage';
import SongSheet from './components/SongSheet';
import Recommend from './components/Recommend';
import PersonalFM from './components/PersonalFM';
import Searchbar from './components/searchbar/Searchbar';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Searchbar></Searchbar>
      <Menu></Menu>
      <Route exact path='/' component={Homepage} />
      <Route path='/station' component={Station} />
      <Route path='/personalFM' component={PersonalFM} />
      <Route path='/recommend' component={Recommend} />
      <Route path='/musiclist' component={SongSheet} />
      <Route path='/rank' component={Rank} />
    </div>
  </Router>,
  document.getElementById('app')
);