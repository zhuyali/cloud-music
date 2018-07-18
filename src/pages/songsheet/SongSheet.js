import React from 'react';

import Musiclist from '../../components/musiclist/Musiclist';
import Searchbar from '../../components/searchbar/Searchbar';

import './SongSheet.css';
import { songsheet } from '../../api';

class SongSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songsheetList: [],
      type: '0',
      classNames: ''
    }
  }

  getSongSheet() {
    songsheet.getSongSheet()
      .then(res => {
        if (res.status == 200) {
          if (res.data && res.data.playlists && res.data.playlists.length) {
            let songsheetList = [];
            res.data.playlists.forEach(item => {
              songsheetList.push({
                id: item.id,
                picUrl: item.coverImgUrl,
                name: item.name
              });
            });
            this.setState({
              songsheetList: songsheetList
            });
          }
        }
      });
  }

  componentWillMount() {
    this.getSongSheet();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        classNames: 'fade-in'
      })
    }, 0);
  }

  render() {
    return (
      <div className={`page fade-page ${this.state.classNames}`}>
        <Searchbar left='back' right='station' title='歌单' />
        <div className='other-subpage'>
          <img className='banner songsheet-banner' src='http://p1.music.126.net/2d_gTxI1zsWa0wmNz3DSNw==/109951163213468979.jpg' />
          <div className='songsheet-nav'>
            <div className='songsheet-nav-btn'>
              <label>全部歌单
                <img className='inline-btn' src={require('../../../static/images/right.png')} />
              </label>
            </div>
            <ul className='songsheet-nav-type'>
              <li>欧美</li>
              <li>民谣</li>
              <li>摇滚</li>
            </ul>
          </div>
          <Musiclist cols='2' list={this.state.songsheetList}></Musiclist>
        </div>
      </div>
    );
  }
}

export default SongSheet;