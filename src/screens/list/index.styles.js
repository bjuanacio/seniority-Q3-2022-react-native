import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../helpers/constants';

export default StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
});

const PlayerContainer = styled.View`
  background-color: ${COLORS.grayDark};
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-radius: 10;
`;

const PlayerNameContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const PlayerName = styled.Text`
  color: ${COLORS.black};
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;

const EmptyImage = styled.Text`
  color: ${COLORS.white};
  width: 100%;
  height: 300px;
  text-align: center;
  font-size: 24px;
`;

const DetailsRow = styled.View`
  flex-direction: row;
`;

const DetailContainer = styled.View`
  flex: 1;
`;
const TitleDetail = styled.Text`
  color: ${COLORS.white};
  text-align: center;
  font-size: 24px;
`;

const ValueDetail = styled.Text`
  color: ${COLORS.white};
  text-align: center;
  font-size: 36px;
  font-weight: bold;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
`;

const IconContainer = styled.View`
  flex: 1;
  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
`;

export {
  PlayerContainer,
  PlayerNameContainer,
  PlayerName,
  EmptyImage,
  DetailsRow,
  DetailContainer,
  TitleDetail,
  ValueDetail,
  ButtonsContainer,
  IconContainer,
};
