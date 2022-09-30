import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextTitle} from '../atoms/TextTitle';

const TextTitleMolecule = ({title}) => {
  return (
    <View style={styles.container}>
      <TextTitle>{title}</TextTitle>
    </View>
  );
};

export {TextTitleMolecule};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 18,
  },
});
