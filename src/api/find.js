import axios from 'axios';

export function getBanner() {
  return axios.get('http://localhost:3000/banner');
}

export function getRecommendMusicList(limit = 6) {
  return axios.get(`http://localhost:3000/personalized?limit=${limit}`);
}

export function getRecommendNewMusic(limit = 6) {
  return axios.get(`http://localhost:3000/personalized/newsong?limit=${limit}`)
}

export function getRecommendStation() {
  return axios.get('http://localhost:3000/personalized/djprogram');
}

export function getCatelist() {
  return axios.get('http://localhost:3000/dj/catelist');
}

export function getStationByType(id, limit = 3) {
  return axios.get(`http://localhost:3000/dj/recommend/type?type=${id}&limit=${limit}`)
}

export function getRecommendStationList(limit = 6) {
  return axios.get(`http://localhost:3000/dj/recommend?limit=${limit}`)
}