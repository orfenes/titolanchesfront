import { observable, action, decorate } from 'mobx';

class AppStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.loading = false;
    this.reload = false;
  }

  toggleloading(value) {
    this.loading = value;
  }

  clearALlCache() {
    window.sessionStorage.removeItem('localforage/client');
  }
}

decorate(AppStore, {
  loading: observable,
  toggleloading: action,
  objTemp: observable,
  setObjTemp: observable,
});

export default AppStore;
