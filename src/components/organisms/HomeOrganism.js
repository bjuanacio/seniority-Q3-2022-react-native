import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {TextTitleMolecule} from '../molecules/TextTitleMolecule';
import {TextSearchInputMolecule} from '../molecules/TextSearchInputMolecule';
import {PlayerCardMolecule} from '../molecules/PlayerCardMolecule';
import {ButtonAddMolecule} from '../molecules/ButtonAddMolecule';

const HomeOrganism = ({
  titleHeader,
  placeHolderValue,
  titleButton,
  data,
  status,
  onPress,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <TextTitleMolecule title={titleHeader} />
      <TextSearchInputMolecule
        placeHolderValue={placeHolderValue}
        onChangeText={onChangeText}
      />
      <ScrollView>
        {status === 'success'
          ? data.map(item => (
              <PlayerCardMolecule
                key={item.id}
                imagePlayer={item.image}
                attackValue={item.attack}
                defenseValue={item.defense}
                skillsValue={item.skills}
              />
            ))
          : null}
      </ScrollView>
      <ButtonAddMolecule title={titleButton} onPress={onPress} />
    </View>
  );
};

export {HomeOrganism};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
