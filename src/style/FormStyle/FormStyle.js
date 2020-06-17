import styled from 'styled-components';

const FormStyle = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;

  .wrapper-input {
    width: 100%;
    margin-bottom: 15px;
  }

  .wrapper-button {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .form-control {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: block;
    width: 100%;
    padding: 8px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: inherit;
    line-height: inherit;
    border: 1px solid;
    border-radius: 4px;
    color: inherit;
    background-color: transparent;
  }

  .bt {
    width: 100%;
    margin: 0px 3px;
  }
`;

export default FormStyle;
export { FormStyle };
