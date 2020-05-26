import React, { Component } from 'react';
import { Button, Text } from 'rebass';
import { Redirect } from 'react-router-dom';
import Context from '../../stores/context';
import { Input, LoginStyle } from '../../style';


class Login extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      login: false,
      error: false,
      msg: '',
    }

    this.login = this.login.bind(this);
    this.showErros = this.showErros.bind(this);
  }

  login() {
    const {
      sessionStore,
    } = this.context;
    const { email, password } = this.state;

    sessionStore.doRequestLogin(email, password)
      .then(() => {
        this.setState({login: true});
      })
      .catch((error) => {
        this.setState({
          error: true,
          msg: error.data.errors[0],
        });
      });
  }

  showErros() {
    const {error, msg } = this.state
    if(error) {
      return(
        <Text className="erros-login">{msg}</Text>
      );
    }

    return false;
  }

  render() {
    const {
      sessionStore,
    } = this.context;

    if(this.state.login || sessionStore.auth) {
      return <Redirect to="/client" />;
    }

    return (
      <LoginStyle width={256}>
        <Input
          id='email'
          name='email'
          type='email'
          className="input-login"
          placeholder='jane@example.com'
          onChange={(event) => {
            this.setState({ email: event.target.value });
          }}
        />

        <Input
          id='password'
          name='password'
          type='password'
          className="input-login"
          placeholder='senha'
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        />
        <Button onClick={this.login}>Entrar</Button>
        {this.showErros()}
      </LoginStyle>
    );
  }
}

export default Login;
