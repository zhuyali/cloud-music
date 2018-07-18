
import axios from 'axios';

import { server } from '../common/config';

// 获取精选歌单
export function getSongSheet() {
  return axios.get(`${server}/top/playlist`);
}