import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonAdd} from '../atoms/ButtonAdd';

const ButtonAddMolecule = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <ButtonAdd title={title} onPress={onPress}></ButtonAdd>
    </View>
  );
};

export {ButtonAddMolecule};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 18,
  },
});
