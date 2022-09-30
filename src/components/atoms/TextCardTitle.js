import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TextCardTitle = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

export {TextCardTitle};

const styles = StyleSheet.create({
  text: {
    height: 20,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
