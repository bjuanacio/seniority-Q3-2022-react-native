import styled from 'styled-components/native';
import {COLORS} from '../../helpers/constants';

const Title = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: ${COLORS.black};
  text-align: center;
  margin-bottom: 12px;
`;
const InputContainer = styled.View`
  margin-bottom: 12px;
`;

export {Title, InputContainer};
