import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : 'row')};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  height: ${props => (props.height ? props.height : 0)};
`;
