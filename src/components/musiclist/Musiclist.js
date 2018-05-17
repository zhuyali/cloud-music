import React from 'react';

import './Musiclist.css';

class Musiclist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='musiclist-wrapper clearfix'>
        {
          this.props.list && this.props.list.map((item, index) => {
            return (
              <div className={`musiclist-item musiclist-item-${this.props.cols}`}>
                <img className='musiclist-item-banner' src={item.picUrl} />
                <div className='musiclist-item-label'>{item.name}</div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Musiclist;