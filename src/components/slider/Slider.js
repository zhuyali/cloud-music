import React from 'react';
import Swiper from 'react-id-swiper';

import './Slider.css';
import '../../../node_modules/react-id-swiper/src/styles/css/swiper.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
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
      <Swiper shouldSwiperUpdate="true" {...params}>
        {this.props.banners.map((banner, index) => {
          return <div key={index}><img className src={banner.picUrl} /></div>
        })}
      </Swiper>
    );
  }
}

export default Slider;