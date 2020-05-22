import { action, decorate } from 'mobx';
// import { login } from '../services/api';

class SessionStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.session = {};
  }

  teste() {
    console.log('cheguei ate aqui');
    this.auth = true;
  }
}

decorate(SessionStore, {
  teste: action,
});

export const SessionSchema = {
  auth: true,
  token: true,
  session: {
    type: 'object',
    schema: {
      name: true,
      location: {
        type: 'object',
        schema: {
          name: true,
        },
      },
    },
  },
  tabSelected: true,
};

export default SessionStore;
