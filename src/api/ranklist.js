import axios from 'axios';

import { server } from '../common/config';

// 获取排行榜
export function getOfficiaRankList(idx, limit) {
  return axios.get(`${server}/top/list?idx=${idx}&limit=${limit}`);
}