import React, { Component } from 'react';
import {
  Form,
 } from '../../components'

class FormRegister extends Component {
  render() {
    return (
      <div className="wrapper-register">
        <h4>Cadastrar cliente</h4>
        <Form />
      </div>
    );
  }
}

export default FormRegister;
