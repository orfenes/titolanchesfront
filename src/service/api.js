import request from './request';

const host = () => {
  return process.env.REACT_APP_API_HOST;
};
const authToken = token => (
  { Authorization: `${token}` }
);

const apiRoutePublic = 'oapi';
const apiPrivate = 'api/clients';
const pathLogin = `${host()}/${apiRoutePublic}`;
const pathPrivate = `${host()}/${apiPrivate}`;

export const login = params => (
  request('POST', `${pathLogin}/login`, params)
);

export const getListClient = (params, token) => (
  request(
    'GET',
    `${pathPrivate}`,
    {},
    authToken(token),
  )
);

