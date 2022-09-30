import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const TextSearchInput = ({placeHolderValue, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeHolderValue}
      onChangeText={onChangeText}
    />
  );
};

export {TextSearchInput};

const styles = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 20,
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 20,
  },
});
