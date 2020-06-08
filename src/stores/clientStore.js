import { action, decorate, observable } from 'mobx';
import { getListClient as getListClientApi } from '../service/api';

class ClientStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.listClient = [];
  }

  setListClient(listClient) {
    this.listClient = listClient;
  }

  doRequestListClient(params) {
    const promiseLogin = async (resolve, reject) => {
      try {
        const res = await getListClientApi(params, this.rootStore.sessionStore.token);
        this.setListClient(res.data);
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    };

    return new Promise((resolve, reject) => promiseLogin(resolve, reject));
  }
}

decorate(ClientStore, {
  listClient: observable,
  setListClient: action,
  doRequestListClient: action,
});

export default ClientStore;
