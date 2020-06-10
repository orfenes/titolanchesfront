import styled from 'styled-components';

const FlexDiv = styled.div`
  display: ${props => props.display || 'flex'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  flex-wrap: ${props => props.FlexWrap || 'wrap'};
  width: ${props => props.width || '100%'};
  min-height: ${props => props.minHeight || '100vh'};
  padding-top: ${props => props.paddingTop || 0};
  padding-bottom: ${props => props.paddingBottom || 0};
  flex-direction: ${props => props.direction || 'initial'};
  margin-bottom: ${props => props.marginBottom || 0};
`;

export { FlexDiv };
