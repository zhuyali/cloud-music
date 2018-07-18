import $ from 'jquery';
import React from 'react';
import { Control } from 'react-keeper';

import renderObj from '../../common/const';
import Searchbar from '../../components/searchbar/Searchbar';
import MusicWrapper from '../../components/musicwrapper/Musicwrapper';

import './Playing.css';
import songplaceholderImg from '../../../static/images/songplaceholder.png';

class Playing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classNames: '',
      index: Control.state && Control.state.index ? Control.state.index : 0,
      id: Control.state && Control.state.id ? Control.state.id : '',
      title: Control.state && Control.state.title ? Control.state.title : '暂无歌曲',
      singer: Control.state && Control.state.singer ? Control.state.singer : '',
      banner: Control.state && Control.state.banner ? Control.state.banner : songplaceholderImg
    };
  }

  pre() {
    let preIndex = this.state.index <= 0 ? renderObj.playlist.length - 1 : this.state.index - 1;
    const pre = renderObj.playlist[preIndex];
    if (pre) {
      this.setState({
        index: preIndex,
        id: pre.musicId,
        banner: pre.img,
        singer: pre.singer,
        title: pre.title
      });
    }
  }

  next() {
    const nextIndex = this.state.index >= renderObj.playlist.length - 1 ? 0 : this.state.index + 1;
    const next = renderObj.playlist[nextIndex];
    if (next) {
      this.setState({
        index: nextIndex,
        id: next.musicId,
        banner: next.img,
        singer: next.singer,
        title: next.title
      });
    }
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
          <MusicWrapper banner={this.state.banner} musicId={this.state.id}
            src={`http://music.163.com/song/media/outer/url?id=${this.state.id}.mp3`} 
            pre={() => this.pre()}
            next={() => this.next()}/>
        </div>
      </div>
    );
  }
}

export default Playing;