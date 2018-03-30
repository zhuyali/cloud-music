import React from 'react';

import './IconOptionBar.css';

class IconOptionBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='iconoptionbar-wrapper'>
        {
          this.props.list.map((item, index) => {
            return (
              <div className={`iconoptionbar-item iconoptionbar-item-${this.props.cols}`}>
                <img className='iconoptionbar-item-icon' src={item.icon} />
                <label className='iconoptionbar-item-label'>{item.text}</label>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default IconOptionBar;