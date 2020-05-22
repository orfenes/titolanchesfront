import axios from 'axios';
import localforage from 'localforage';
import removeCache from './remove-cache';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const Request = (method = '', url = '', body = {}, headers = {}) => {
  let axiosRequest;
  axios.defaults.headers.common.Authorization = headers.Authorization;

  if (method.toLowerCase() === 'delete') {
    axiosRequest = axios.delete(url, {
      params: body,
    });
  } else {
    axiosRequest = axios[method.toLowerCase()](url, body, {
      headers,
    });
  }

  return new Promise((resolve, reject) => {
    if (method === '') {
      reject();
      return false;
    }

    if (url === '') {
      reject();
      return false;
    }

    return axiosRequest
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        if (error.response === undefined && error.message === 'Network Error') {
          return reject(new Error('networkoffline'));
        }

        if (error.response.status === 401) {
          localforage.clear();
          removeCache();
          return reject(error);
        }

        if (error.response.data && error.response.data.message) {
          return reject(error.response.data.message);
        }

        return reject(error.response);
      });
  });
};

export default Request;
