import React from 'react';
import { Link } from 'react-keeper';

import './Optionbar.css';

class Optionbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionItems: [{
        path: '/playing',
        name: '私人FM',
        icon: '../../../static/images/fm.png'
      }, {
        path: '/recommend',
        name: '每日推荐',
        icon: '../../../static/images/calendar.png'
      }, {
        path: '/musiclist',
        name: '歌单',
        icon: '../../../static/images/recommend.png'
      }, {
        path: '/rank',
        name: '排行榜',
        icon: '../../../static/images/rank.png'
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
                  </div>
                  <div className='optionbar-item-label'>{optionItem.name}</div>
                  {optionItem.name === '每日推荐' ? <label className='optionbar-item-date'>{new Date().getDate()}</label> : ''}
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