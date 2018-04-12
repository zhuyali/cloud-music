import $ from 'jquery';
import React from 'react';
import { Control } from 'react-keeper';

import Searchbar from '../../components/searchbar/Searchbar';
import MusicWrapper from '../../components/musicwrapper/Musicwrapper';

import './Playing.css';
import songplaceholderImg from '../../../static/images/songplaceholder.png';

class Playing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classNames: '',
      src: Control.state ? Control.state.src : '',
      title: Control.state ? Control.state.title : '暂无歌曲',
      singer: Control.state ? Control.state.singer : '',
      banner: Control.state ? Control.state.banner : songplaceholderImg,
      bannerUrl: Control.state ? Control.state.banner : '../../../static/images/songplaceholder.png'
    };
  }

  componentWillMount() {
    $('.footerbar-container').css('display', 'none');
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        classNames: 'fade-in'
      })
    }, 0);
  }

  componentWillUnmount() {
    $('.footerbar-container').css('display', 'flex');
  }

  render() {
    return (
      <div className={`playing-page fade-page ${this.state.classNames}`}>
        <Searchbar left='back' right='share' title={this.state.title} subTitle={this.state.singer} />
        <div className='other-subpage'>
          <MusicWrapper banner={this.state.banner} src={this.state.src} bannerUrl={this.state.bannerUrl}/>
        </div>
      </div>
    );
  }
}

export default Playing;