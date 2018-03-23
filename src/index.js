import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Rank from './components/Rank';
import Menu from './components/menu/Menu';
import Station from './components/Station';
import Homepage from './components/Homepage';
import SongSheet from './components/SongSheet';
import Recommend from './components/Recommend';
import PersonalFM from './components/PersonalFM';
import Searchbar from './components/searchbar/Searchbar';

import history from './history';

import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Searchbar left='music' right='station' isSearch='true' />
        <Menu />
        <Redirect to='/home'></Redirect>
        <Route path="/home" component={Homepage} />
        <Route path="/station" component={Station} />
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path='/personalFM' component={PersonalFM} />
      <Route path='/recommend' component={Recommend} />
      <Route path='/musiclist' component={SongSheet} />
      <Route path='/rank' component={Rank} />
      <Route path='/' component={App} />
    </Switch>
  </Router>,
  document.getElementById('app')
);