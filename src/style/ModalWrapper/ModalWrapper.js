import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 100%;
  height: 100vh;
  background-color: rgba(30, 30, 30, 0.8);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200px auto;
  z-index: 99999;
  opacity: ${props => (props.show ? '1' : '0')};
  pointer-events: ${props => (props.show ? 'auto' : 'none')};
  transition: opacity 0.2s ease-out;


  .wrapper-content {
    margin-top: 150px;
    text-align: center;
    height: 140px;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 230px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px 56px;
  }

  .title {
    color: #07c;
    font-size: 20px;
  }

  .close {
    width: 100px;
    text-align: center;
    margin: 0 auto;
  }

`;

export { ModalWrapper };
