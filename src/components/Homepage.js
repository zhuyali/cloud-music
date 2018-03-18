import React from 'react';

import Slider from './slider/Slider';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='homepage'>
        <Slider></Slider>
      </div>
    );
  }
}

export default Homepage;