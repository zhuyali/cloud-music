import React from 'react';
import { Control } from 'react-keeper';

import './Searchbar.css';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    switch(e.target.className) {
      case 'searchbar-back':
        Control.go(-1);
    }
  }

  render() {
    return (
      <div class='searchbar-container'>
        {this.props.left.split(' ').map((icon, index) => {
          return <img className={`searchbar-${icon}`} src={require(`../../../static/images/${icon}.png`)} onClick={(e) => this.handleClick(e)}/>;
        })}
        {this.props.isSearch ?
          <input className='searchbar-input searchbar-text' type='text' placeholder='搜索音乐、歌曲、电台' /> :
          this.props.subTitle ? 
          <div className="searchbar-title searchbar-text">
            <div className=' searchbar-title-text overflow'>{this.props.title}</div>
            <div className='searchbar-subtitle-text overflow'>{this.props.subTitle}</div>
          </div> :
          <label className='searchbar-title searchbar-text'>{this.props.title}</label>}
        {this.props.right.split(' ').map((icon, index) => {
          return <img className={`searchbar-${icon}`} src={require(`../../../static/images/${icon}.png`)} />;
        })}
      </div>
    );
  }
}

export default Searchbar;