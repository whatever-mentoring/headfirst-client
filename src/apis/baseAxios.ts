import axios from 'axios';

export const baseAxios = axios.create({
  baseURL: 'http://api.headfirst.p-e.kr',
});
