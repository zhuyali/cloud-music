import $ from 'jquery';
import React from 'react';
import Swiper from 'react-id-swiper';

import './Slider.css';
import '../../../node_modules/react-id-swiper/src/styles/css/swiper.css'

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [
        'http://ozt4jt8av.bkt.clouddn.com/1df.png',
        'http://ozt4jt8av.bkt.clouddn.com/2ds.png',
        'http://ozt4jt8av.bkt.clouddn.com/5ds.png'
      ]
    };
  }

  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true,
      autoplay: true
    };
    return (
      <Swiper {...params}>
        {this.state.imgs.map((img, index) => {
          return <div key={index}><img className src={img} /></div>
        })}
      </Swiper>
    );
  }
}

export default Slider;