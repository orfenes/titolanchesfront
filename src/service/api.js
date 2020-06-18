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

export const postRegisterCliente = (params, token) => {
  return request(
    'POST',
    `${pathPrivate}`,
    params.body,
    authToken(token),
  );
};

export const postUpddateRegisterCliente = (params, token) => {
  return request(
    'PUT',
    `${pathPrivate}/${params.id}`,
    params.body,
    authToken(token),
  );
};

export const deleteRegisterCliente = (params, token) => {
  return request(
    'DELETE',
    `${pathPrivate}/${params.id}`,
    {},
    authToken(token),
  );
};

export const getClient = (params, token) => {
  return request(
    'GET',
    `${pathPrivate}/${params.id}`,
    {},
    authToken(token),
  );
};


