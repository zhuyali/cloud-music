import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [{
        path: '/home',
        name: '发现音乐'
      }, {
        path: '/station',
        name: '主播电台'
      }]
    }
  }

  handleMenuClick(e) {
    let hasClass = $(e.currentTarget).hasClass('menu-item-actived');
    if (!hasClass) {
      $('.menu-item div').toggleClass('menu-item-actived');
    }
    $('.menu-line').css({ 'width': $('.menu-item-actived').width() + 4, 'left': $('.menu-item-actived').offset().left - 2 });
  }

  componentDidMount() {
    $('.menu-line').css({ 'width': $('.menu-item-actived').width() + 4, 'left': $('.menu-item-actived').offset().left - 2 });
  }

  render() {
    return (
      <div className='menu-wrapper'>
        <ul className='menu-container'>
          {
            this.state.menuItems.map((menuItem, index) => {
              return (
                <Link to={menuItem.path} className='menu-item'>
                  <li>
                    <div className={index === 0 ? 'menu-item-actived' : ''} onClick={e => this.handleMenuClick(e)}>
                      {menuItem.name}
                    </div>
                  </li>
                </Link>
              )
            })
          }
        </ul>
        <div className='menu-line'></div>
      </div>
    );
  }
}

export default Menu;