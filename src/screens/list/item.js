import React from 'react';
import {Image} from 'react-native';
import customStyles, {
  PlayerContainer,
  PlayerName,
  EmptyImage,
} from './index.styles';

const Item = ({player}) => {
  const renderImage = () => {
    if (player.image) {
      return <Image style={customStyles.image} source={{uri: player.image}} />;
    }
    return <EmptyImage>Imagen no encontrada</EmptyImage>;
  };

  return (
    <PlayerContainer>
      {renderImage()}
      <PlayerName>
        {player.firstName} {player.lastName}
      </PlayerName>
    </PlayerContainer>
  );
};

export {Item};
