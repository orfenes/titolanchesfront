import request from './request';

const host = () => {
  return process.env.REACT_APP_API_HOST;
};
const apiRoute = 'oapi';
const path = `${host()}/${apiRoute}`;

export const login = params => (
  request('POST', `${path}/login`, params)
);


