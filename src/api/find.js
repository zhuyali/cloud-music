import axios from 'axios';

import { server } from '../common/config';

// 获取轮播图
export function getBanner() {
  return axios.get(`${server}/banner`);
}

// 获取推荐歌单
export function getRecommendMusicList(limit = 6) {
  return axios.get(`${server}/personalized?limit=${limit}`);
}

// 获取推荐新音乐
export function getRecommendNewMusic(limit = 6) {
  return axios.get(`${server}/personalized/newsong?limit=${limit}`)
}

// 获取推荐电台
export function getRecommendStation() {
  return axios.get(`${server}/personalized/djprogram`);
}

// 获取电台类型
export function getCatelist() {
  return axios.get(`${server}/dj/catelist`);
}

// 获取电台分类推荐
export function getStationByType(id, limit = 3) {
  return axios.get(`${server}/dj/recommend/type?type=${id}&limit=${limit}`)
}

// 获得推荐电台
export function getRecommendStationList(limit = 6) {
  return axios.get(`${server}/dj/recommend?limit=${limit}`)
}
