import $ from 'jquery';
import React from 'react';
import { Control } from 'react-keeper';

import { login } from '../../api';
import renderObj from '../../common/const';

import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  login() {
    let phone = $('.username input').val();
    let password = $('.password input').val();
    login.login(phone, password)
      .then(res => {
        if (res.status == 200) {
          if (res.data && res.data.account) {
            renderObj.uid = res.data.account.id;
            Control.go('/home');
          } else {

          }
        }
      });
  }

  render() {
    return (
      <div className="login-container">
        <div className="input-container">
          <div className="input-text username">
            <span>手机号：</span>
            <input type="text" />
          </div>
          <div className="input-text password">
            <span>密码：</span>
            <input type="password" />
          </div>
          <input className="login-btn" type="button" value="登录" onClick={e => this.login(e)} />
        </div>
      </div>
    );
  }
}

export default Login;