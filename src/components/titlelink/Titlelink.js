import React from 'react';
import { Link } from 'react-router-dom';

import './Titlelink.css';

class Titlelink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link className='title-link' to={this.props.path}>
        <label>{this.props.title}</label>
        <img className='icon-to-right' src='../../../static/images/right.png' />
      </Link>
    );
  }
}

export default Titlelink;