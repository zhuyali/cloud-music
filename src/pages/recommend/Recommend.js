import React from 'react';

import Playlist from '../../components/playlist/playlist';
import Searchbar from '../../components/searchbar/Searchbar';

import './Recommend.css';

class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [{
        img: 'http://p1.music.126.net/s3L9LA3G6DzQz3DUUaIFhw==/18570751395106588.jpg?param=40y40',
        title: '说散就散',
        singer: 'JC',
        album: '说散就散'
      }, {
        img: 'http://p1.music.126.net/Dw6Ku5I90rs_yCsDAvmv1g==/18777459581329626.jpg?param=40y40',
        title: '追光者',
        singer: '岑宁儿',
        album: '夏至未至 影视原声带'
      }, {
        img: 'http://p1.music.126.net/-JuQOcuDw9hp97aECx8G_w==/6632254138902295.jpg?param=40y40',
        title: 'We Are The World (Demo)',
        singer: 'Michael Jackson',
        album: 'The Ultimate Collection'
      }, {
        img: 'http://p1.music.126.net/lMJBjT2pA6iVr1C-WBHH7A==/8889551510779180.jpg?param=40y40',
        title: 'Let Her Go',
        singer: 'Jasmine Thompson',
        album: 'Bundle of Tantrums'
      }, {
        img: 'http://p1.music.126.net/s3L9LA3G6DzQz3DUUaIFhw==/18570751395106588.jpg?param=40y40',
        title: '说散就散',
        singer: 'JC',
        album: '说散就散'
      }, {
        img: 'http://p1.music.126.net/Dw6Ku5I90rs_yCsDAvmv1g==/18777459581329626.jpg?param=40y40',
        title: '追光者',
        singer: '岑宁儿',
        album: '夏至未至 影视原声带'
      }, {
        img: 'http://p1.music.126.net/-JuQOcuDw9hp97aECx8G_w==/6632254138902295.jpg?param=40y40',
        title: 'We Are The World (Demo)',
        singer: 'Michael Jackson',
        album: 'The Ultimate Collection'
      }, {
        img: 'http://p1.music.126.net/lMJBjT2pA6iVr1C-WBHH7A==/8889551510779180.jpg?param=40y40',
        title: 'Let Her Go',
        singer: 'Jasmine Thompson',
        album: 'Bundle of Tantrums'
      }, {
        img: 'http://p1.music.126.net/s3L9LA3G6DzQz3DUUaIFhw==/18570751395106588.jpg?param=40y40',
        title: '说散就散',
        singer: 'JC',
        album: '说散就散'
      }, {
        img: 'http://p1.music.126.net/Dw6Ku5I90rs_yCsDAvmv1g==/18777459581329626.jpg?param=40y40',
        title: '追光者',
        singer: '岑宁儿',
        album: '夏至未至 影视原声带'
      }, {
        img: 'http://p1.music.126.net/-JuQOcuDw9hp97aECx8G_w==/6632254138902295.jpg?param=40y40',
        title: 'We Are The World (Demo)',
        singer: 'Michael Jackson',
        album: 'The Ultimate Collection'
      }, {
        img: 'http://p1.music.126.net/lMJBjT2pA6iVr1C-WBHH7A==/8889551510779180.jpg?param=40y40',
        title: 'Let Her Go',
        singer: 'Jasmine Thompson',
        album: 'Bundle of Tantrums'
      }],
      classNames: '',
      isTop: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        classNames: 'fade-in'
      })
    }, 0);
    window.addEventListener('scroll', () => {this.handleScroll.call(this)});
  }

  componentWillUnmount() {
    console.log('unmount')
    window.removeEventListener('scroll', () => {this.handleScroll.call(this)});
  }

  handleScroll(e) {
    let topScroll = window.scrollY;
    console.log(this)
    if (topScroll >= 172.59) {
      this.setState({
        isTop: true
      });
    } else {
      this.setState({
        isTop: false
      });
    }
  }

  render() {
    return (
      <div className={`page fade-page ${this.state.classNames}`}>
        <Searchbar left='back' right='station' title='每日推荐' />
        <div className='other-subpage'>
          <img className='banner songsheet-banner' src='http://p1.music.126.net/b_wbBiONd84N-SwqkVjH3w==/109951163213081224.jpg' />
          <div className={`play-all ${this.state.isTop ? 'top-fixed' : ''}`}>
            <img src='../../../static/images/play.png' className='play-all-icon' />
            播放全部
          </div>
          <Playlist list={this.state.playlist}></Playlist>
        </div>
      </div>
    );
  }
}

export default Recommend;