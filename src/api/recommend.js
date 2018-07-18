import axios from 'axios';

import { server } from '../common/config';

// 获取推荐歌单
export function getRecommendSongs() {
  return axios.get(`${server}/recommend/songs`, { withCredentials: true });
}

// 获取歌词
export function getLyric(id) {
  return axios.get(`${server}/lyric?id=${id}`);
}