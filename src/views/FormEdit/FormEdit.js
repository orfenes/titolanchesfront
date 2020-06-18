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


class FormEdit extends Component {
  static contextType = Context;
  constructor(props){
    super(props)
    this.getClient = this.getClient.bind(this);
    this.postEditRegisterClient = this.postEditRegisterClient.bind(this);
    this.redirectPage = this.redirectPage.bind(this);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Mostra uma UI alternativa
    this.setState({ hasError: true });
  }

  redirectPage() {
    const {
      history,
    } = this.props;

   history.push("/");
  }

  tratamentTelephone(number) {
    const hasString = !!(number.length);

    if(hasString) {
      return number.replace(/\D/gim, '');
    }

    return number;
  }

  postEditRegisterClient(values) {
    const {
      clientStore,
      appStore,
      modalStore,
    } = this.context;
    const params = {
      id: values.id,
      data: {
        name: values.name,
        address: values.address,
        number: values.number,
        neighborhood: values.neighborhood,
        complement: values.complement,
        telephone:  this.tratamentTelephone(values.telephone),
      }
    };

    clientStore.postUpddateRegisterClienteApi(params)
      .then(() => {
        appStore.toggleloading(false);
        modalStore.title = "Cadastro atualizado com sucesso";
        modalStore.clearModalCallBack();
        modalStore.toogleModalSucess(true);
        modalStore.setModalCallback(this.redirectPage);
      }).catch((err) => {
        modalStore.title = "Ocorreu um erro na atualizacao do cadastro do cliente";
        modalStore.clearModalCallBack();
        modalStore.toogleModalSucess(true);
        appStore.toggleloading(false);
      });

    appStore.toggleloading(true);
  }


  validateTelephone(number) {
    const hasTelephone = number;
    const formatString = !!(number && number.length);

    if(hasTelephone === false) return false;

    // caso seja string
    if(formatString) {
      const telephone = number.replace(/\D/gim, '');
      return telephone && (telephone.length < 9);
    }

    // caso seja numero
    const numberString = number.toString();
    return (numberString.length < 9);
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
          Editando cadastro de cliente
        </legend>

        <ShowErros infoLabel={props} />

        <FormClient
          infoLabel={props}
          setErrors={setErrors}
        />

      </form>
    )
  }

  getClient() {
    const {
      clientStore,
    } = this.context;

    const current = clientStore.client;

    return  {
      id: current._id,
      name: current.name,
      address: current.address,
      number: current.number,
      neighborhood: current.neighborhood,
      complement: current.complement,
      telephone:  current.telephone,
    }
  }

  render() {
    const setInitialValues = this.getClient();

    if (this.state.hasError) {
      return (
        <h1>Algo deu errado.</h1>
      );
    }

    return (
      <FormRegisterStyle>
        <Formik
          initialValues={setInitialValues}
          validate={values => this.showErros(values)}
          onSubmit={(values, { setSubmitting }) => {
            this.postEditRegisterClient(values, setSubmitting);
          }}
        >
          {props => this.structForm(props)}
        </Formik>
      </FormRegisterStyle>
    );
  }
}

export default FormEdit;
