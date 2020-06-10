import React from 'react';
import {
  Text,
  FlexDiv,
} from '../../style';

const ShowErros = (props) => {
  const {
    infoLabel,
  } = props;
  const {
    errors,
    touched,
  } = infoLabel;

  return (
    <FlexDiv minHeight="0" direction="column" marginBottom="32px">
      <Text color="red">
        {errors.name && touched.name && errors.name}
      </Text>
      <Text color="red">
        {errors.address && touched.address && errors.address}
      </Text>
      <Text color="red">
        {errors.number && touched.number && errors.number}
      </Text>
      <Text color="red">
        {errors.neighborhood && touched.neighborhood && errors.neighborhood}
      </Text>
      <Text color="red">
        {errors.telephone && touched.telephone && errors.telephone}
      </Text>
    </FlexDiv>
  );
};

export { ShowErros }
export default ShowErros;
