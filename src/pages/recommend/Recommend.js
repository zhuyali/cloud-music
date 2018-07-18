import React from 'react';

import renderObj from '../../common/const';
import Playlist from '../../components/playlist/Playlist';
import Searchbar from '../../components/searchbar/Searchbar';

import './Recommend.css';
import { recommend } from '../../api';

class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      classNames: '',
      isTop: false
    }
  }

  getRecommendSongs() {
    recommend.getRecommendSongs()
      .then(res => {
        if (res.status == 200) {
          if (res.data && res.data.recommend && res.data.recommend.length) {
            let recommend = [];
            res.data.recommend.forEach(item => {
              let artists = [];
              item.artists.forEach(artist => {
                if (artist.name) {
                  artists.push(artist.name);
                }
              });
              recommend.push({
                img: item.album.picUrl,
                title: item.name,
                singer: artists.join('/'),
                album: item.album.name,
                musicId: item.id
              });
            });
            this.setState({
              playlist: recommend
            });
            renderObj.playlist = recommend;
          }
        }
      });
  }

  componentWillMount() {
    this.getRecommendSongs();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        classNames: 'fade-in'
      })
    }, 0);
    window.addEventListener('scroll', () => {this.handleScroll.call(this)});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {this.handleScroll.call(this)});
  }

  handleScroll(e) {
    let topScroll = window.scrollY;
    if (topScroll >= 172.59) {
      this.setState({
        isTop: true
      });
    } else {
      this.setState({
        isTop: false
      });
    }
  }

  render() {
    return (
      <div className={`page fade-page ${this.state.classNames}`}>
        <Searchbar left='back' right='station' title='每日推荐' />
        <div className='other-subpage'>
          <img className='banner songsheet-banner' src='http://p1.music.126.net/b_wbBiONd84N-SwqkVjH3w==/109951163213081224.jpg' />
          <div className={`play-all ${this.state.isTop ? 'top-fixed' : ''}`}>
            <img src={require('../../../static/images/play.png')} className='play-all-icon' />
            播放全部
          </div>
          <Playlist list={this.state.playlist}></Playlist>
        </div>
      </div>
    );
  }
}

export default Recommend;
