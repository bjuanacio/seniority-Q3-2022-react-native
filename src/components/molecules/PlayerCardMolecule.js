import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardImage} from '../atoms/CardImage';
import {TextCardTitle} from '../atoms/TextCardTitle';
import {TextCardNumber} from '../atoms/TextCardNumber';
import {IconImage} from '../atoms/IconImage';

const PlayerCardMolecule = ({
  attackValue,
  defenseValue,
  skillsValue,
  imagePlayer,
}) => {
  return (
    <View style={styles.container}>
      <CardImage imagePlayer={imagePlayer} />
      <View style={styles.cardTitle}>
        <TextCardTitle>Ataque</TextCardTitle>
        <TextCardTitle>Defensa</TextCardTitle>
        <TextCardTitle>Skills</TextCardTitle>
      </View>
      <View style={styles.cardNumber}>
        <TextCardNumber>{attackValue}</TextCardNumber>
        <TextCardNumber>{defenseValue}</TextCardNumber>
        <TextCardNumber>{skillsValue}</TextCardNumber>
      </View>
      <View style={styles.cardEditors}>
        <IconImage />
        <IconImage />
      </View>
    </View>
  );
};

export {PlayerCardMolecule};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 18,
  },
  cardTitle: {
    backgroundColor: 'dimgray',
    width: '77%',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cardNumber: {
    backgroundColor: 'dimgray',
    width: '77%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cardEditors: {
    backgroundColor: 'dimgray',
    paddingTop: 5,
    width: '77%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingBottom: 20,
  },
});
