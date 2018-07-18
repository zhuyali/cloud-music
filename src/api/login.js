import axios from 'axios';

import { server } from '../common/config';

export function login(phone, password) {
  return axios.get(`${server}/login/cellphone?phone=${phone}&password=${password}`);
}