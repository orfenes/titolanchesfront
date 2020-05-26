import { action, decorate, observable } from 'mobx';
import { login as loginApi } from '../service/api';

class SessionStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.token = false;
    this.auth = false;
  }

  doRequestLogin( email, password ) {
    const data = {
      email,
      password,
    };

    const promiseLogin = async (resolve, reject) => {
      try {
        const res = await loginApi(data);
        this.setAllowed(res.data.token);
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    };

    return new Promise((resolve, reject) => promiseLogin(resolve, reject));
  }

  setAllowed(token) {
    this.token = token;
    this.auth = true;
  }
}

decorate(SessionStore, {
  auth: observable,
  setAllowed: action,
  doRequestLogin: action,
});

export const SessionSchema = {
  auth: true,
  token: true,
};

export default SessionStore;
