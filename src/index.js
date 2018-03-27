import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-keeper'

import Rank from './pages/rank/Rank';
import Homepage from './pages/homepage/Homepage';
import SongSheet from './pages/songsheet/SongSheet';
import Recommend from './pages/recommend/Recommend';
import PersonalFM from './pages/personalfm/PersonalFM';

import './index.css';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route path='/home' component={Homepage} />
      <Route path='/personalFM' component={PersonalFM} />
      <Route path='/recommend' component={Recommend} />
      <Route path='/musiclist' component={SongSheet} />
      <Route path='/rank' component={Rank} />
    </div>
  </HashRouter>,
  document.getElementById('app')
);