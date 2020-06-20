import React, { useContext } from 'react';
import styled from 'styled-components';
import localforage from 'localforage';
import Context from '../../stores/context';
import {
  Flex,
  Text,
  Box,
} from 'rebass';

const HeaderStyle = styled(Flex)`
  color: #000;
  margin-bottom: 10px;

  .text-login {
    width: 100%;
    text-align: center;
  }
`;

const Header = () => {
  const context = useContext(Context);
  const {
    sessionStore
  } = context;

  const removeCache = () => {
    localforage.clear();
    window.location.href = "/";
  }

  const renderName = () => {
    if(sessionStore.auth) {
      return 'TitoLanches';
    }

    return 'Login';
  }

  const renderLogout = () => {
    if(sessionStore.auth) {
      return (
        <Box mx='auto'ontWeight='bold' onClick={removeCache}>SAIR</Box>
      );
    }

    return false;
  }

  return(
    <HeaderStyle
      px={2}
      color='white'
      bg='#07c'
      alignItems='center'>
      <Text p={2} fontWeight='bold' className="text-login">
        {renderName()}
      </Text>
      {renderLogout()}
    </HeaderStyle>
  );
};

export { Header };
export default Header;
