import styled from 'styled-components';
import LoadingSVG from './loading.svg';

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 100%;
  height: 100vh;
  background-color: rgba(30, 30, 30, 0.8);
  background-image: url(${LoadingSVG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200px auto;
  z-index: 99999;
  opacity: ${props => (props.show ? '1' : '0')};
  pointer-events: ${props => (props.show ? 'auto' : 'none')};
  transition: opacity 0.2s ease-out;
`;

export { Loading };
