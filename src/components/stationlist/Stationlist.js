import React from 'react';

import './Stationlist.css';

class Stationlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='stationlist-wrapper'>
        {
          this.props.list.map((item, index) => {
            return (
              <div className='stationlist-item'>
                <img className='stationlist-item-banner' src={item.img} />
                <div className='stationlist-item-content'>
                  <div className='stationlist-item-title'>{item.title}</div>
                  <div className='stationlist-item-detail'>{item.content}</div>
                  <div className='stationlist-item-intro'>
                    <svg viewBox="0 0 1024 1024" width="11" height="11"><path d="M803.84 492.032 213.056 135.04C195.392 124.288 174.208 124.288 156.352 134.976 138.624 145.728 128 164.928 128 186.368l0 714.176c0 21.44 10.624 40.704 28.352 51.392C165.248 957.312 174.976 960 184.704 960c9.728 0 19.52-2.688 28.352-8.064l590.72-356.992c17.728-10.752 28.288-30.016 28.288-51.456C832.128 521.984 821.568 502.72 803.84 492.032zM189.568 891.712 187.136 193.792l578.624 349.696L189.568 891.712z" fill="#918d8d"></path></svg>
                    {item.intro}
                  </div>
                  <div className='stationlist-item-price'>
                    ￥{item.price}
                    {item.svipPrice ? <label className='stationlist-item-svip'> /SVIP:￥{item.svipPrice}</label> : ''}
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Stationlist;