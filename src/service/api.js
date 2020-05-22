import request from './request';

const host = 'http://localhost:3000';
const apiRoute = '/api';
const path = `${host}/${apiRoute}`;

export const login = params => (
  request('POST', `${path}/login`, params)
);


