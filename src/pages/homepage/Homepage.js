import React from 'react';
import { Route } from 'react-keeper';

import Menu from '../../components/menu/Menu';
import Station from '../station/Station';
import FindMusic from '../findmusic/FindMusic';
import Searchbar from '../../components/searchbar/Searchbar';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Searchbar left='music' right='station' isSearch='true' />
        <Menu />
        <Route index miss path='/findMusic' component={FindMusic} />
        <Route path='/station' component={Station} />
      </div>
    );
  }
}

export default Homepage;