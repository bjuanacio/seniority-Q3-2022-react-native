import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextCardNumber = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

export {TextCardNumber};

const styles = StyleSheet.create({
  text: {
    height: 30,
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
  },
});
