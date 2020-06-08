import React, { Component } from 'react';
// import { Button, Text } from 'rebass';
import Context from '../../stores/context';
import {
  Input,
  Label,
} from '../../style';


class Form extends Component {
  static contextType = Context;

  render() {
    return(
      <form>
        <Label>Nome</Label>
        <Input />

      </form>
    )
  }

}

export { Form };
export default Form;
