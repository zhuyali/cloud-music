import React from 'react';

import './Searchbar.css';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='searchbar-container'>
        <img className='searchbar-music' src='../../../static/images/music.png'/>
        <input className='searchbar-input' type='text' placeholder='搜索音乐、歌曲、电台' />
        <img className='searchbar-station' src='../../../static/images/ph.png'/>
      </div>
    );
  }
}

export default Searchbar;