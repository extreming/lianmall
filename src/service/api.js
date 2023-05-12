import http from '../utils/request';

export const getHomeData = params => http.post('/home', params);

export const getCategoryData = params => http.post('/category', params);

export const getHotData = params => http.get('/hotData', { params });


