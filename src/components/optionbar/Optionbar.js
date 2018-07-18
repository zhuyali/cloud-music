import React from 'react';
import { Link } from 'react-keeper';

import './Optionbar.css';
import { fm } from '../../api';
import renderObj from '../../common/const';
import rankImg from '../../../static/images/rank.png';
import playingImg from '../../../static/images/fm.png';
import recommendImg from '../../../static/images/calendar.png';
import musiclistImg from '../../../static/images/recommend.png';

class Optionbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionItems: [{
        path: '/playing',
        name: '私人FM',
        icon: playingImg
      }, {
        path: '/recommend',
        name: '每日推荐',
        icon: recommendImg
      }, {
        path: '/musiclist',
        name: '歌单',
        icon: musiclistImg
      }, {
        path: '/rank',
        name: '排行榜',
        icon: rankImg
      }],
      firstFM: {}
    }
  }

  getPersonalFM() {
    fm.getPersonalFM()
      .then(res => {
        if (res.status == 200) {
          if (res.data && res.data.data && res.data.data.length) {
            let fm = [];
            res.data.data.forEach(item => {
              let artists = [];
              item.artists.forEach(artist => {
                if (artist.name) {
                  artists.push(artist.name);
                }
              });
              fm.push({
                img: item.album.picUrl,
                title: item.name,
                singer: artists.join('/'),
                album: item.album.name,
                musicId: item.id
              });
            });
            this.setState({
              firstFM: fm[0]
            })
            renderObj.playlist = fm;
          }
        }
      });
  }

  componentWillMount() {
    this.getPersonalFM();
  }

  render() {
    return (
      <div className='optionbar-wrapper'>
        {
          this.state.optionItems.map((optionItem, index) => {
            return (
              <div className='optionbar-item'>
                <Link to={optionItem.path}
                  state={optionItem.path === '/playing' ? 
                  { index: 0, 
                    id: this.state.firstFM.musicId, 
                    banner: this.state.firstFM.img, 
                    singer: this.state.firstFM.singer, 
                    title: this.state.firstFM.title } : 
                  {}}>
                  <div className='optionbar-icon-wrapper'>
                    <img className='optionbar-item-icon' src={optionItem.icon} />
                    {optionItem.name === '每日推荐' ? <label className='optionbar-item-date'>{new Date().getDate()}</label> : ''}
                  </div>
                  <div className='optionbar-item-label'>{optionItem.name}</div>
                </Link>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Optionbar;