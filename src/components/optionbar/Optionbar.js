import React from 'react';
import { Link } from 'react-keeper';

import renderObj from '../../common/const';

import './Optionbar.css';
import playingImg from '../../../static/images/fm.png';
import recommendImg from '../../../static/images/calendar.png';
import musiclistImg from '../../../static/images/recommend.png';
import rankImg from '../../../static/images/rank.png';

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
      }]
    }
  }

  render() {
    return (
      <div className='optionbar-wrapper'>
        {
          this.state.optionItems.map((optionItem, index) => {
            return (
              <div className='optionbar-item'>
                <Link to={optionItem.path}>
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