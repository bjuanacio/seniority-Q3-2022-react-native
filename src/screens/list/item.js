import React from 'react';
import {ImageBackground} from 'react-native';
import {CustomIcon} from '../../components/molecules/icon';
import customStyles, {
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
} from './index.styles';

const Item = ({player}) => {
  const renderImage = () => {
    if (player.image) {
      return (
        <ImageBackground
          style={customStyles.image}
          imageStyle={{borderRadius: 10}}
          source={{uri: player.image}}>
          <PlayerNameContainer>
            <PlayerName>
              {player.firstName} {player.lastName}
            </PlayerName>
          </PlayerNameContainer>
        </ImageBackground>
      );
    }
    return (
      <>
        <EmptyImage>Imagen no encontrada</EmptyImage>
        <PlayerNameContainer>
          <PlayerName>
            {player.firstName} {player.lastName}
          </PlayerName>
        </PlayerNameContainer>
      </>
    );
  };

  const renderDetailsRow = () => {
    return (
      <DetailsRow>
        {renderDetail('Ataque', player.attack)}
        {renderDetail('Defensa', player.defense)}
        {renderDetail('Skills', player.skills)}
      </DetailsRow>
    );
  };

  const renderDetail = (title, value) => {
    return (
      <DetailContainer>
        <TitleDetail>{title}</TitleDetail>
        <ValueDetail>{value}</ValueDetail>
      </DetailContainer>
    );
  };

  const renderButtonsRow = () => {
    return (
      <ButtonsContainer>
        {renderButton(require('../../assets/edit-icon.png'), 'flex-end')}
        {renderButton(require('../../assets/delete-icon.png'), 'flex-start')}
      </ButtonsContainer>
    );
  };

  const renderButton = (source, alignItems) => {
    return (
      <IconContainer alignItems={alignItems}>
        <CustomIcon
          onPress={() => console.log('siii')}
          disabled={false}
          height={40}
          width={40}
          source={source}
        />
      </IconContainer>
    );
  };

  return (
    <PlayerContainer>
      {renderImage()}
      {renderDetailsRow()}
      {renderButtonsRow()}
    </PlayerContainer>
  );
};

export {Item};
