import React from 'react';
import {Image, StyleSheet} from 'react-native';

const IconImage = ({uriIcon}) => {
  return (
    <Image
      style={styles.iconImage}
      source={require('../../assets/edit-icon.png')}
    />
  );
};

export {IconImage};

const styles = StyleSheet.create({
  iconImage: {
    backgroundColor: 'black',
    height: 20,
    width: 20,
  },
});
