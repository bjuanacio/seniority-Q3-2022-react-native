import React from 'react';
import {Image, StyleSheet} from 'react-native';

const CardImage = ({imagePlayer}) => {
  return (
    <Image
      style={styles.playerImage}
      source={{
        uri: imagePlayer,
      }}
    />
  );
};

export {CardImage};

const styles = StyleSheet.create({
  playerImage: {
    height: 300,
    width: 300,
    borderRadius: 5,
  },
});
