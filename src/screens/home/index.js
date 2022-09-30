import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {List} from '../list';
import {COLORS} from '../../helpers/constants';
import {Input} from '../../components/atoms/input';
import {Title, InputContainer} from './index.styles';

const Home = () => {
  const [nameToSearch, setNameToSearch] = useState('');

  return (
    <View style={{}}>
      <ScrollView>
        <Title>Mi Equipo</Title>
        <InputContainer>
          <Input
            testID="searchId"
            value={nameToSearch}
            placeholder="Buscar por nombre"
            onChangeText={value => setNameToSearch(value)}
            borderColor={COLORS.grayLight}
            borderWidth={1}
            borderRadius={5}
            height={40}
            width={'100%'}
          />
        </InputContainer>
        <List nameToSearch={nameToSearch} />
      </ScrollView>
    </View>
  );
};

export {Home};
