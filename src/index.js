import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-keeper'

import Rank from './pages/rank/Rank';
import Login from './pages/login/Login';
import Playing from './pages/playing/Playing';
import Homepage from './pages/homepage/Homepage';
import SongSheet from './pages/songsheet/SongSheet';
import Recommend from './pages/recommend/Recommend';
import Footerbar from './components/footerbar/Footerbar';

import './index.css';

ReactDOM.render(
  <HashRouter>
    <div className='container'>
      <Route index path='/login' component={ Login } />
      <Route cache miss path='/home' component={ Homepage } />
      <Route cache path='/recommend' component={ Recommend } />
      <Route cache path='/musiclist' component={ SongSheet } />
      <Route cache path='/rank' component={ Rank } />
      <Route path='/playing' component={ Playing } />
      <Footerbar></Footerbar>
    </div>
  </HashRouter>,
  document.getElementById('app')
);