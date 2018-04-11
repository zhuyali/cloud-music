import React from 'react';

import './Musicwrapper.css';

class Musicwrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '00:00',
      endTime: '00:00',
      hasPlaySong: false,
      isPlaying: false,
      duration: 0,
      trackWidth: 0,
      step: 0
    };
  }

  componentWillMount() {
    if (this.props.src) {
      this.setState({
        hasPlaySong: true
      });
    }
  }

  playMusic() {
    if (this.state.hasPlaySong) {
      if (this.state.isPlaying) {
        this.refs.audioRef.pause();
        this.refs.playBtn.src = '../../../static/images/playmusic.png';
        this.refs.stickRef.style.transform = 'rotate(-20deg)';
        this.refs.bannerRef.style['animation-play-state'] = 'paused';
        this.setState({
          isPlaying: false
        });
      } else {
        this.refs.audioRef.play();
        this.refs.playBtn.src = '../../../static/images/pausemusic.png';
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
    if (this.transformTime(this.refs.audioRef.currentTime) !== this.state.startTime) {
      this.setState({
        startTime: this.transformTime(this.refs.audioRef.currentTime)
      });
      this.refs.thumbRef.style.left = `${parseFloat(getComputedStyle(this.refs.thumbRef, '').getPropertyValue('left')) + this.state.step}px`;
    }
  }

  componentDidMount() {
    this.setState({
      trackWidth: this.refs.trackRef.offsetWidth
    })
  }

  render() {
    return (
      <div className='musicplay-wrapper'>
        <img ref='stickRef' className='musicplay-stick' src='../../../static/images/stick.png' />
        <div className='blur-bg-banner'  style={{background: `url(${this.props.banner})`}}></div>
        <div className='musicplay-banner'>
          <img ref='bannerRef' src={this.props.banner} />
        </div>
        <div className='musicplay-progress-bar'>
          <span>{this.state.startTime}</span>
          <div className='musicplayer-track-wrapper'>
            <div ref='thumbRef' className='musicplayer-thumb'></div>
            <div ref='trackRef' className='musicplayer-track'></div>
          </div>
          <span>{this.state.endTime}</span>
        </div>
        <div className='musicplay-bar'>
          <div><img src='../../../static/images/randomplay.png'/></div>
          <div><img src='../../../static/images/pre.png'/></div>
          <div>
            <div className='musicplay-btn-wrapper' onClick={() => this.playMusic()}>
              <img ref='playBtn' src='../../../static/images/playmusic.png'/>
            </div>
          </div>
          <div><img src='../../../static/images/next.png'/></div>
          <div><img src='../../../static/images/launch.png'/></div>
        </div>
        <audio onDurationChange={() => this.durationChange()} onTimeUpdate={() => this.updateTime()} ref='audioRef' loop src={this.props.src}></audio>
      </div>
    );
  }
}

export default Musicwrapper;