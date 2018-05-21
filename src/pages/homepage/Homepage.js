import React from 'react';
import { Route } from 'react-keeper';
import { Control } from 'react-keeper';

import Station from '../station/Station';
import renderObj from '../../common/const';
import Menu from '../../components/menu/Menu';
import FindMusic from '../findmusic/FindMusic';
import Searchbar from '../../components/searchbar/Searchbar';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classNames: renderObj.home ? '' : 'fade-page',
      isFirstRender: renderObj.home
    }
  }

  componentDidMount() {
    if (this.state.isFirstRender) {
      renderObj.home = false;
    } else {
      setTimeout(() => {
        this.setState({
          classNames: 'fade-in'
        })
      }, 0);
    }
  }

  render() {
    return (
      <div className={`page ${this.state.classNames}`}>
        <Searchbar left='music' right='station' isSearch='true' />
        <Menu />
        <Route cache index miss path='/findMusic' component={FindMusic} />
        <Route cache path='/station' component={Station} />
      </div>
    );
  }
}

export default Homepage;