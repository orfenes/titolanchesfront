import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Context from '../../stores/context';
import {
  ModalWrapper,
} from '../../style'
import {
  Button,
} from 'rebass';

class ModalSuccess extends Component {
  static contextType = Context;
  render() {
    const {
      modalStore,
    } = this.context;

    const exeCallBack = () => {
      modalStore.toogleModalSucess(false);
      modalStore.execModalCallBack();
    };

    return (
      <ModalWrapper show={!!modalStore.modalSuccess}>
        <div className="wrapper-content">
          <div className="content">
            <h3 className="title">{modalStore.title}</h3>
            <Button
              className="close"
              onClick={exeCallBack}>
                Fechar
              </Button>
          </div>
        </div>
      </ModalWrapper>
    );
  }
}

export { ModalSuccess };
export default observer(ModalSuccess);
