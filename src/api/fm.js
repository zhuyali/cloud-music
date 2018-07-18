import axios from 'axios';

import { server } from '../common/config';

// 获取私人 FM
export function getPersonalFM() {
  return axios.get(`${server}/personal_fm`);
}