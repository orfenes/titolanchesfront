import React, { Component } from 'react';
import { Formik } from 'formik';
import {
  FormClient,
  ShowErros,
 } from '../../components'
 import {
  FormRegisterStyle,
 } from '../../style';
 import Context from '../../stores/context';

class FormRegister extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.postRegisterClient = this.postRegisterClient.bind(this);
    this.redirectPage = this.redirectPage.bind(this);
  }

  redirectPage() {
    const {
      history,
    } = this.props;

   history.push("/");
  }

  postRegisterClient(values) {
    const {
      clientStore,
      appStore,
      modalStore,
    } = this.context;

    const data = {
      name: values.name,
      address: values.address,
      number: values.number,
      neighborhood: values.neighborhood,
      complement: values.complement,
      telephone:  values.telephone.replace(/\D/gim, ''),
    };

    appStore.toggleloading(true);

    clientStore.doRequestRegisterClient(data)
      .then(() => {
        appStore.toggleloading(false);
        modalStore.title = "Cadastro realizado com sucesso";
        modalStore.clearModalCallBack();
        modalStore.toogleModalSucess(true);
        modalStore.setModalCallback(this.redirectPage);
      }).catch((err) => {
        modalStore.title = "Ocorreu um erro no cadastro do cliente";
        modalStore.clearModalCallBack();
        modalStore.toogleModalSucess(true);
        appStore.toggleloading(false);
      });
  }

  validateTelephone(number) {
    if(number) {
      const telephone = number.replace(/\D/gim, '');
      const numbers = telephone.toString();
      const hasThreeNumber = (numbers && numbers.length > 2);

      if(hasThreeNumber && numbers[2] === "9") {
        return telephone && (telephone.length < 11);
      }

      return telephone && (telephone.length < 10);
    }

    return false;
  }

  showErros(values) {
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
    } else if(this.validateTelephone(values.telephone)) {
      errors.telephone = 'Telefone invalido';
    };

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
