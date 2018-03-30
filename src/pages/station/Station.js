import React from 'react';

import Slider from '../../components/slider/Slider';
import Titlelink from '../../components/titlelink/Titlelink';
import Musiclist from '../../components/musiclist/Musiclist';
import Stationlist from '../../components/stationlist/Stationlist';
import IconOptionBar from '../../components/iconoptionbar/iconoptionbar';

class Station extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderList: [
        'http://ozt4jt8av.bkt.clouddn.com/4fd.png',
        'http://ozt4jt8av.bkt.clouddn.com/8ds.png'
      ],
      iconOptions: [{
        icon: '../../../static/images/classify.png',
        text: '电台分类'
      }, {
        icon: '../../../static/images/list.png',
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
      recommendList: [{
        img: 'http://p1.music.126.net/2nPPbvXNVwUyM4n1Atiwgw==/109951163191963379.jpg',
        desc: '港片金曲｜相逢一场情"忆"满满演唱会'
      }, {
        img: 'http://p1.music.126.net/RChgxmQWXis1EC9-zBu1yw==/109951163201230274.jpg',
        desc: '無前奏说唱丨吃颗蜜糖 再饮烈酒'
      }, {
        img: 'http://p1.music.126.net/npjVzLVW9E0fex6HZbv1iw==/109951163198861683.jpg',
        desc: '黄舒骏推荐华语流行音乐30年必听歌曲'
      }, {
        img: 'http://p1.music.126.net/bSaWp18GCj1ay2fwA62TDg==/109951163189386204.jpg',
        desc: '清晨，愿与品茗粥尚温'
      }, {
        img: 'http://p1.music.126.net/eRel6Kk0JM08rDRXqnX6yw==/109951162972312772.jpg',
        desc: '『动漫原声』春日物语'
      }, {
        img: 'http://p1.music.126.net/KsGj-uPLvKQL0KTaQi0xkQ==/18678503535409218.jpg',
        desc: 'ʚ韩语ɞ砂糖质感温软女声'
      }],
      exclusiveList: [{
        img: 'http://p1.music.126.net/BMPo0UyZCWi3O_rp3f9CRA==/109951163199126055.jpg?param=565y247',
        desc: '小李子经典混剪，多少人曾爱慕你年轻时的容颜'
      }, {
        img: 'http://p1.music.126.net/eD1ifZMc2lalg9hCbEs1lA==/109951163179337806.jpg?param=565y247',
        desc: '唯美原创《淡无烟》，愿月照河山，醒时无波澜'
      }]
    }
  }

  render() {
    return (
      <div className='home-subpage page'>
        <Slider imgs={this.state.sliderList}></Slider>
        <IconOptionBar cols='2' list={this.state.iconOptions}></IconOptionBar>
        <Titlelink title='付费精品'></Titlelink>
        <Stationlist list={this.state.stationList}></Stationlist>
        <Titlelink title='电台个性推荐'></Titlelink>
        <Musiclist cols='3' list={this.state.recommendList}></Musiclist>
      </div>
    );
  }
}

export default Station;