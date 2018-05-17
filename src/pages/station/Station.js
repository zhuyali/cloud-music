import React from 'react';

import Slider from '../../components/slider/Slider';
import Titlelink from '../../components/titlelink/Titlelink';
import Musiclist from '../../components/musiclist/Musiclist';
import Stationlist from '../../components/stationlist/Stationlist';
import IconOptionBar from '../../components/iconoptionbar/IconOptionBar';

import classifyImg from '../../../static/images/classify.png';
import listImg from '../../../static/images/list.png';

import { find } from '../../api';

class Station extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderList: [],
      iconOptions: [{
        icon: classifyImg,
        text: '电台分类'
      }, {
        icon: listImg,
        text: '电台排行'
      }],
      stationList: [{
        img: 'http://p1.music.126.net/rTA4ypAhZBHn2Qgg7pWDRg==/109951163209827221.jpg?param=140y140',
        title: '听歌学英文',
        content: '朱亚文为你读诗',
        intro: 'Decode - 主讲老师：韩亮Jeff',
        price: 99,
        svipPrice: 79
      }, {
        img: 'http://p1.music.126.net/98Ah-ZMuLwOIc6qGO4xigg==/109951163212854294.jpg?param=140y140',
        title: '中国文化大师课',
        content: '白茫茫大地真干净',
        intro: '什物|孔子小时候玩什么？（完结）',
        price: 99,
        svipPrice: 79
      }, {
        img: 'http://p1.music.126.net/VkdDauEUYhsJA92nWhZPqA==/18791753232404715.jpg?param=200y200',
        title: '恋爱成长电台',
        content: '用平凡的故事温暖特别的你',
        intro: '颠覆你对中华文化的认知',
        price: 199
      }],
      catelist: [],
      recommendList: []
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

  getCatelist() {
    find.getCatelist()
      .then(res => {
        if (res.status == 200) {
          if (res.data && res.data.categories && res.data.categories.length) {
            res.data.categories.forEach(category => {
              this.getStationByType(category.id);
            });
            this.setState({
              catelist: res.data.categories
            });
          }
        }
      });
  }

  getStationByType(id) {
    find.getStationByType(id)
      .then(res => {
        if (res.status == 200) {
          if (res.data && res.data.djRadios && res.data.djRadios.length) {
            this.setState({
              [id]: res.data.djRadios
            });
          }
        }
      });
  }

  getRecommendList() {
    find.getRecommendStationList()
      .then(res => {
        if (res.status == 200) {
          if (res.data && res.data.djRadios && res.data.djRadios.length) {
            this.setState({
              recommendList: res.data.djRadios
            });
          }
        }
      });
  }

  componentWillMount() {
    this.getBanner();
    this.getCatelist();
    this.getRecommendList();
  }

  render() {
    return (
      <div className='home-subpage page'>
        <Slider banners={this.state.sliderList}></Slider>
        <IconOptionBar cols='2' list={this.state.iconOptions}></IconOptionBar>
        <Titlelink title='付费精品'></Titlelink>
        <Stationlist list={this.state.stationList}></Stationlist>
        <Titlelink title='电台个性推荐'></Titlelink>
        <Musiclist cols='3' list={this.state.recommendList}></Musiclist>
        {
          this.state.catelist.map(category => {
            return (
              <div>
                <Titlelink title={category.name}></Titlelink>
                <Musiclist cols='3' list={this.state[category.id]}></Musiclist>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Station;