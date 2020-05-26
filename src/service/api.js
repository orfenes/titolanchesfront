import request from './request';

const host = 'http://localhost:3003';
const apiRoute = 'oapi';
const path = `${host}/${apiRoute}`;

export const login = params => (
  request('POST', `${path}/login`, params)
);


