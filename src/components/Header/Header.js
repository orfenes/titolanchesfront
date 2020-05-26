import React, { useContext } from 'react';
import styled from 'styled-components';
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

  const renderName = () => {
    if(sessionStore.auth) {
      return 'TitoLanches';
    }

    return 'Login';
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
      <Box mx='auto' />
    </HeaderStyle>
  );
};

export { Header };
export default Header;
