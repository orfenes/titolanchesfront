import React from 'react';
import { Button } from 'rebass';
import MaskedInput from 'react-text-mask'
import {
  Input,
  Label,
  FormStyle,
} from '../../style';


const FormClient = (props) => {
  const {
    infoLabel,
  } = props;
  const {
    values,
    handleChange,
    handleBlur,
    isSubmitting,
  } = infoLabel;

  const mask = (userInput) => {
    const numbers = userInput.match(/\d/g);
    const hasThreeNumber = (numbers && numbers.length > 2);
    const hasNumberNine = (hasThreeNumber && numbers[2] === "9");

    if (hasNumberNine) {
      return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
      return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
  }

  return(
    <FormStyle>
      <div className="wrapper">
        <div className="wrapper-input">
          <Label htmlFor="nome">Nome</Label>
          <Input
            id="name"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Digite o nome"
            value={values.name}
          />
        </div>
        <div className="wrapper-input">
          <Label htmlFor="address">Endereço</Label>
          <Input
            id="address"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Digite o endereço"
            value={values.address}
          />
        </div>
        <div className="wrapper-input">
          <Label htmlFor="number">Numero</Label>
          <Input
            id="number"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Digite o numero"
            value={values.number}
          />
        </div>
        <div className="wrapper-input">
          <Label htmlFor="neighborhood">Bairro</Label>
          <Input
            id="neighborhood"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Digite do bairro"
            value={values.neighborhood}
          />
        </div>
        <div className="wrapper-input">
          <Label htmlFor="telephone">Telefone</Label>
          <MaskedInput
            mask={mask(values.telephone)}
            className="form-control"
            placeholder="Digite o numero de telefone"
            guide={false}
            id="telephone"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.telephone}
          />
        </div>
        <div className="wrapper-button">
          <Button
            className="bt"
            type="button"
            onClick={() => {
              console.log('cancelando')
            }}
          >
            Cancelar
          </Button>

          <Button
            className="bt"
            type="submit"
          >
            {isSubmitting && 'Enviando...'}
            {!isSubmitting && 'Salvar'}
          </Button>
        </div>
      </div>
    </FormStyle>
  );
}

export { FormClient };
export default FormClient;
