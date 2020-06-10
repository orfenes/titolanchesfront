import React, { Component } from 'react';
import { Formik } from 'formik';
import {
  FormClient,
  ShowErros,
 } from '../../components'
 import {
  FormRegisterStyle,
 } from '../../style';

class FormRegister extends Component {

  postRegisterClient(values) {
    console.log('Registrando o cliente')
  }

  showErros(values, i18n) {
    const errors = {};

    if (!values.name) {
      errors.name= 'Campo nome é obrigatorio'
    }
    if (!values.address) {
      errors.address = 'Campo endereço e obrigatorio';
    }
    if (!values.number) {
      errors.number = 'Campo numero é obrigatorio';
    }

    if (!values.telephone) {
      errors.telephone = 'Campo de telefone é obrigatorio';
    }

    return errors;
  }

  structForm(props) {
    const {
      handleSubmit,
      setErrors,
    } = props;

    return(
      <form onSubmit={handleSubmit}>
        <legend>
          Cadastro de cliente
        </legend>

        <ShowErros infoLabel={props} />

        <FormClient
          infoLabel={props}
          setErrors={setErrors}
        />

      </form>
    )

  }

  render() {
    const setInitialValues = {
      name: '',
      address: '',
      neighborhood: '',
      number: '',
      telephone: '',
    };

    return (
      <FormRegisterStyle>
        <Formik
          initialValues={setInitialValues}
          validate={values => this.showErros(values)}
          onSubmit={(values, { setSubmitting }) => {
            this.postRegisterClient(values, setSubmitting);
          }}
        >
          {props => this.structForm(props)}
        </Formik>
      </FormRegisterStyle>
    );
  }
}

export default FormRegister;
