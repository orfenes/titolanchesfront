import React, { Component } from 'react';
import { Box, Button } from 'rebass';
import { Redirect } from 'react-router-dom';
import Context from '../../stores/context';
import { Input, Label } from '../../components';

class Login extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      login: false,
    }

    this.login = this.login.bind(this);
  }

  login() {
    const {
      sessionStore,
    } = this.context;

    sessionStore.teste();
    // this.setState({login: true});
  }

  render() {
    if(this.state.login) {
      return <Redirect to="/list-client" />;
    }

    return (
      <Box width={256}>
        <Label>Email</Label>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='jane@example.com'
        />

        <Input
          id='password'
          name='password'
          type='password'
          placeholder='senha'
        />
        <Button onClick={this.login}>Login</Button>
      </Box>
    );
  }
}

export default Login;
