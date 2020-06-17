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
    window.sessionStorage.removeItem('localforage/program');
    window.sessionStorage.removeItem('localforage/people');
    window.sessionStorage.removeItem('localforage/training-creation');
    window.sessionStorage.removeItem('localforage/build-training');
    window.sessionStorage.removeItem('localforage/add-exercises');
    window.sessionStorage.removeItem('localforage/teacherTrainingStore');
  }
}

decorate(AppStore, {
  loading: observable,
  toggleloading: action,
  objTemp: observable,
  setObjTemp: observable,
});

export default AppStore;
