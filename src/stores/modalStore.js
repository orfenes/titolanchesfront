import { observable, action, decorate } from 'mobx';

class ModalStore {
  constructor() {
    this.modalError = false;
    this.modalSuccess = false;
    this.modalSync = false;
    this.modalSuccessEdit = false;
    this.title = '';
    this.description = '';
    this.modalCallback = () => {};
  }

  reset() {
    this.title = '';
    this.description = '';
  }

  setTitle(title) {
    this.title = title;
  }

  setDescription(desc) {
    this.description = desc;
  }

  toogleModalSucess(value) {
    this.modalSuccess = value;
  }

  clearModalCallBack() {
    this.modalCallback = () => {};
  }

  setModalCallback(callback) {
    this.modalCallback = callback;
  }

  execModalCallBack() {
    this.modalCallback();
  }
}

decorate(ModalStore, {
  title: observable,
  description: observable,
  modalSuccess: observable,
  modalError: observable,
  modalSync: observable,
  modalSuccessEdit: observable,
  toggleModal: action,
  setTitle: action,
  setDescription: action,
  modalCallback: observable,
  setModalCallback: action,
  execModalCallBack: action,
  clearModalCallBack: action,
});

export const ModalSchema = {
  title: true,
  description: true,
};

export default ModalStore;
