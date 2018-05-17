import React from 'react';

import Slider from '../../components/slider/Slider';
import Optionbar from '../../components/optionbar/Optionbar';
import Musiclist from '../../components/musiclist/Musiclist';
import Titlelink from '../../components/titlelink/Titlelink';

import { find } from '../../api';

class FindMusic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 6,
      recommendList: [],
      newMusicList: [],
      sliderList: [],
      recommendStation: []
    }
  }

  getBanner() {
    find.getBanner()
      .then(res => {
        if (res.status == 200) {
          if (res.data && res.data.banners && res.data.banners.length) {
            this.setState({
              sliderList: res.data.banners
            });
          }
        }
      });
  }

  getRecommendMusicList() {
    find.getRecommendMusicList(this.state.limit)
      .then(res => {
        if (res.status == 200) {
          if (res.data && res.data.result && res.data.result.length) {
            this.setState({
              recommendList: res.data.result
            });
          }
        }
      });
  }

  getNewMusicList() {
    find.getRecommendNewMusic(this.state.limit)
      .then(res => {
        if (res.status == 200) {
          if (res.data && res.data.result && res.data.result.length) {
            res.data.result.forEach(item => {
              item.picUrl = item.song.album.picUrl;
            });
            this.setState({
              newMusicList: res.data.result
            });
          }
        }
      });
  }

  getRecommendStation() {
    find.getRecommendStation()
      .then(res => {
        if (res.status == 200) {
          if (res.data && res.data.result && res.data.result.length) {
            this.setState({
              recommendStation: res.data.result
            });
          }
        }
      });
  }

  componentWillMount() {
    this.getBanner();
    this.getNewMusicList();
    this.getRecommendMusicList();
    this.getRecommendStation();
  }

  render() {
    return (
      <div className='home-subpage page'>
        <Slider banners={this.state.sliderList}></Slider>
        <Optionbar></Optionbar>
        <Titlelink title='推荐歌单' path='/recommend'></Titlelink>
        <Musiclist cols='3' list={this.state.recommendList}></Musiclist>
        <Titlelink title='最新音乐' path='/newMusic'></Titlelink>
        <Musiclist cols='3' list={this.state.newMusicList}></Musiclist>
        <Titlelink title='主播电台' path='/home/station'></Titlelink>
        <Musiclist cols='3' list={this.state.recommendStation}></Musiclist>
      </div>
    );
  }
}

export default FindMusic;