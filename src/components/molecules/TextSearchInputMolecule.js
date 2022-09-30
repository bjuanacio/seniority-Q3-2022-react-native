import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextSearchInput} from '../atoms/TextSearchInput';

const TextSearchInputMolecule = ({placeHolderValue, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextSearchInput
        placeHolderValue={placeHolderValue}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export {TextSearchInputMolecule};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingBottom: 19,
  },
});
