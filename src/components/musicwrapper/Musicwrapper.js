import React from 'react';

import { find } from '../../api';

import './Musicwrapper.css';

class Musicwrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '00:00',
      endTime: '00:00',
      hasPlaySong: false,
      isPlaying: true,
      duration: 0,
      trackWidth: 0,
      step: 0,
      lyric: '',
      lyricArray: [],
      timeArray: [],
      isBanner: true,
      currentIndex: 0
    };
  }

  getLyric(musicId) {
    find.getLyric(musicId)
      .then(res => {
        if (res.status == 200) {
          if (res.data && res.data.lrc && res.data.lrc.lyric) {
            const lyric = res.data.lrc.lyric;
            const timeArray = lyric.match(/\[[\d\.:]+\]/g);
            const lyricArray = [];
            const indexArray = [];
            const lastIndexArray = [];
            timeArray.forEach((time, index) => {
              indexArray.push(lyric.indexOf(time));
              lastIndexArray.push(lyric.indexOf(time) + time.length - 1);
              timeArray[index] = time.substring(1, 6);
            });
            lastIndexArray.forEach((lastIndex, i) => {
              let lyricLine = lyric.substring(lastIndex + 1, i < indexArray.length ? indexArray[i + 1] : Infinity);
              lyricArray.push(lyricLine);
            });
            this.setState({
              lyric: lyric,
              timeArray: timeArray,
              lyricArray: lyricArray
            });
          }
        }
      });
  }

  componentWillMount() {
    if (this.props.src) {
      this.setState({
        hasPlaySong: true
      });
      this.getLyric(this.props.musicId);
    }
  }

  playMusic() {
    if (this.state.hasPlaySong) {
      if (this.state.isPlaying) {
        this.refs.audioRef.pause();
        this.refs.playBtn.src = require('../../../static/images/playmusic.png');
        this.refs.stickRef.style.transform = 'rotate(-20deg)';
        this.refs.bannerRef.style['animation-play-state'] = 'paused';
        this.setState({
          isPlaying: false
        });
      } else {
        this.refs.audioRef.play();
        this.refs.playBtn.src = require('../../../static/images/pausemusic.png');
        this.refs.stickRef.style.transform = 'rotate(0deg)';
        this.refs.bannerRef.style['animation-play-state'] = 'running';
        this.setState({
          isPlaying: true
        });
      }
    }
  }

  durationChange() {
    let duration = this.refs.audioRef.duration;
    this.setState({
      duration: duration,
      endTime: this.transformTime(duration),
      step: this.state.trackWidth / duration
    });
  }

  transformTime(duration) {
    let minutes = Math.floor(duration / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = (duration % 60 / 100).toFixed(2).slice(-2);
    return `${minutes}:${seconds}`;
  }

  updateTime() {
    let current = this.transformTime(this.refs.audioRef.currentTime);
    if (current !== this.state.startTime) {
      this.setState({
        startTime: current
      });
      this.refs.thumbRef.style.left = `${parseFloat(getComputedStyle(this.refs.thumbRef, '').getPropertyValue('left')) + this.state.step}px`;
      if (current === this.state.endTime) {
        this.props.next();
      }
    }
    // 如果歌词切换频率很高的话，有些歌词无法高亮
    let index = this.state.timeArray.indexOf(current);
    if (index !== -1) {
      while(!this.state.lyricArray[index]) {
        index++;
      }
      this.setState({
        currentIndex: index
      });
      let offset = document.getElementsByClassName('current')[0].offsetTop;
      document.getElementsByClassName('lyric')[0].scrollTop = offset - 14;
    }
  }

  switchBg() {
    this.setState({
      isBanner: !this.state.isBanner
    });
  }

  componentDidMount() {
    this.setState({
      trackWidth: this.refs.trackRef.offsetWidth
    });
  }

  componentWillReceiveProps(nextProps) {
    // 这里这样才能改，why
    this.getLyric(nextProps.musicId ? nextProps.musicId : this.props.musicId);
    setTimeout(() => {
      this.refs.thumbRef.style.left = '16px';
    }, 100);
    this.refs.playBtn.src = require('../../../static/images/pausemusic.png');
    this.refs.stickRef.style.transform = 'rotate(0deg)';
    this.refs.bannerRef.style['animation-play-state'] = 'running';
    this.setState({
      isPlaying: true
    });
  }

  render() {
    return (
      <div className='musicplay-wrapper'>
        <div className={this.state.isBanner ? "circle-banner fade-in" : "circle-banner fade-out"}>
          <img ref='stickRef' className='musicplay-stick' src={require('../../../static/images/stick.png')} />
          <div className='musicplay-banner' onClick={() => this.switchBg()}>
            <img ref='bannerRef' src={this.props.banner} />
          </div>
        </div>
        <div className={this.state.isBanner ? "lyric fade-out" : "lyric fade-in"} onClick={() => this.switchBg()}>
          {
            this.state.lyricArray.map((line, index) => {
              return <p className={this.state.currentIndex === index ? 'current' : ''}>{line}</p>
            })
          }
        </div>
        <div className='blur-bg-banner' style={typeof this.props.banner === 'string' ? { background: `url(${this.props.banner})` } : {}}></div>
        <div className='musicplay-progress-bar'>
          <span>{this.state.startTime}</span>
          <div className='musicplayer-track-wrapper'>
            <div ref='thumbRef' className='musicplayer-thumb'></div>
            <div ref='trackRef' className='musicplayer-track'></div>
          </div>
          <span>{this.state.endTime}</span>
        </div>
        <div className='musicplay-bar'>
          <div><img className="musicplayer-bar-btn" src={require('../../../static/images/randomplay.png')} /></div>
          <div><img className="musicplayer-bar-btn" src={require('../../../static/images/pre.png')} onClick={() => this.props.pre()} /></div>
          <div>
            <div className='musicplay-btn-wrapper' onClick={() => this.playMusic()}>
              <img ref='playBtn' src={require('../../../static/images/playmusic.png')} />
            </div>
          </div>
          <div><img className="musicplayer-bar-btn" src={require('../../../static/images/next.png')} onClick={() => this.props.next()} /></div>
          <div><img className="musicplayer-bar-btn" src={require('../../../static/images/launch.png')} /></div>
        </div>
        <audio onDurationChange={() => this.durationChange()}
          autoplay="autoplay"
          onTimeUpdate={() => this.updateTime()}
          ref='audioRef'
          src={this.props.src}></audio>
      </div>
    );
  }
}

export default Musicwrapper;