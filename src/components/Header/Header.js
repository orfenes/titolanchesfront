import React from 'react';
import styled from 'styled-components';
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
  return(
    <HeaderStyle
      px={2}
      color='white'
      bg='#07c'
      alignItems='center'>
      <Text p={2} fontWeight='bold' className="text-login">
        Login
      </Text>
      <Box mx='auto' />
    </HeaderStyle>
  );
};

export { Header };
export default Header;
