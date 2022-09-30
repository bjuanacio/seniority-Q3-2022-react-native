import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../helpers/constants';

export default StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

const PlayerContainer = styled.View`
  background-color: ${COLORS.grayDark};
  margin-bottom: 12px;
  border-radius: 10;
`;

const PlayerName = styled.Text`
  color: ${COLORS.white};
  text-align: center;
`;

const EmptyImage = styled.Text`
  color: ${COLORS.white};
  width: 100%;
  height: 200px;
`;

export {PlayerContainer, PlayerName, EmptyImage};
