import React from 'react';
import { Link } from 'react-keeper';

import './Titlelink.css';

class Titlelink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.path ?
        <Link className='title-link' to={this.props.path}>
          <label>{this.props.title}</label>
          <img className='icon-to-right' src={require('../../../static/images/right.png')} />
        </Link> :
        <label className='title-link'>{this.props.title}</label>
    );
  }
}

export default Titlelink;