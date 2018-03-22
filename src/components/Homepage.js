import React from 'react';

import Slider from './slider/Slider';
import Optionbar from './optionbar/Optionbar';
import Musiclist from './musiclist/Musiclist';
import Titlelink from './titlelink/Titlelink';

class Homepage extends React.Component {
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
      }]
    }
  }

  render() {
    return (
      <div className='page homepage'>
        <Slider></Slider>
        <Optionbar></Optionbar>
        <Titlelink title='推荐歌单' path='/recommend'></Titlelink>
        <Musiclist cols='3' list={this.state.recommendList}></Musiclist>
      </div>
    );
  }
}

export default Homepage;