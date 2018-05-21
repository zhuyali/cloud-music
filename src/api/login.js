import axios from 'axios';

export function login(phone, password) {
  return axios.get(`http://localhost:3000/login/cellphone?phone=${phone}&password=${password}`);
}