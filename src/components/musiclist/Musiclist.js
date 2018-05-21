import React from 'react';
import LazyLoad from 'react-lazyload';

import './Musiclist.css';

class Musiclist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='musiclist-wrapper clearfix'>
        {
          this.props.list && this.props.list.map(item => {
            return (
              <div className={`musiclist-item musiclist-item-${this.props.cols}`}>
                <LazyLoad once height={113} placeholder={<img className='musiclist-item-banner' src={require('../../../static/images/default.png')} />}>
                  <img className='musiclist-item-banner' src={item.picUrl} />
                </LazyLoad>
                {
                  this.props.hasOther ? 
                    <div className="musiclist-item-label">
                      <div className="musiclist-item-name overflow">{item.name}</div>
                      <div className="musiclist-item-other overflow">
                        {item.song.artists && item.song.artists.map((artist, index) => {
                          return <span>{index === 0 ? '' : '/'}{artist.name}</span>
                        })}
                      </div>
                    </div>: 
                    <div className='musiclist-item-label'>{item.name}</div>
                }
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Musiclist;