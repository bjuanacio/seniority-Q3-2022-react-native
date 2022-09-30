import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TextTitle = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

export {TextTitle};

const styles = StyleSheet.create({
  text: {
    height: 50,
    fontSize: 30,
    color: 'dimgray',
    fontWeight: 'bold',
  },
});
