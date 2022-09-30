import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeOrganism} from '../components/organisms/HomeOrganism';
import useFetch from '../utils/useFetch';

const Home = ({navigation}) => {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState([]);

  const {data, status, error} = useFetch(
    'https://api-exercise-q3.herokuapp.com/player',
  );

  useEffect(() => {
    setPlayers(data);
  }, [data]);

  const handleChangeText = value => {
    const searchPlayer = players.filter(
      x => x.firstName === value.toLowerCase(),
    );
    setPlayer(searchPlayer[0]);
  };
  return (
    <View style={styles.container}>
      <HomeOrganism
        onChangeText={value => handleChangeText(value)}
        titleHeader="Mi Equipo"
        placeHolderValue="Buscar por nombre"
        titleButton="Agregar"
        data={players}
        status={status}
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});
