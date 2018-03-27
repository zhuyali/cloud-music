import React from 'react';

import Slider from '../../components/slider/Slider';
import Optionbar from '../../components/optionbar/Optionbar';
import Musiclist from '../../components/musiclist/Musiclist';
import Titlelink from '../../components/titlelink/Titlelink';

class FindMusic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <Slider></Slider>
        <Optionbar></Optionbar>
        <Titlelink title='推荐歌单' path='/recommend'></Titlelink>
        <Musiclist cols='3' list={this.state.recommendList}></Musiclist>
        <Titlelink title='独家放送'></Titlelink>
        <Musiclist cols='2' list={this.state.exclusiveList}></Musiclist>
      </div>
    );
  }
}

export default FindMusic;