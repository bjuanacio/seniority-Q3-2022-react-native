import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const ButtonAdd = ({title, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export {ButtonAdd};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 15,
    backgroundColor: 'dimgray',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
