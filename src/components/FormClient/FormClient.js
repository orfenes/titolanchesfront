import React from 'react';
import { Button } from 'rebass';
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
          <Input
            id="telephone"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Digite o numero de telefone"
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
