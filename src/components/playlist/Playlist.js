import React from 'react';
import { Link } from 'react-keeper';

import './Playlist.css';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='playlist-wrapper'>
        {
          this.props.list.map((item, index) => {
            return (
              <Link to={`/playing`} state={{ index: index, id: item.musicId, banner: item.img, singer: item.singer, title: item.title }}>
                <div className='playlist-item'>
                  <img className='playlist-item-thumbnail' src={item.img} />
                  <div className='playlist-item-content'>
                    <div className='playlist-item-title overflow'>{item.title}</div>
                    <div className='playlist-item-detail overflow'>{item.singer} - {item.album}</div>
                  </div>
                  <img src={require('../../../static/images/more.png')} className='playlist-item-more' />
                </div>
              </Link>
            );
          })
        }
      </div>
    );
  }
}

export default Playlist;