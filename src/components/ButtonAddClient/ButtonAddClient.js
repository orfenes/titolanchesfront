import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
} from 'rebass';

const ButtonAddClient = () => {
  const [redirect, setRedirect] = useState(false);

  const redirectToRegister = () => {
    setRedirect(true);
  };

  if(redirect) {
    return <Redirect to="/client-register" />;
  }

  return(
    <Button className="addClient" onClick={() => {redirectToRegister()}}>
      <span>Novo Cliente</span>
    </Button>
  );
};

export { ButtonAddClient };
export default ButtonAddClient;
