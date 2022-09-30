import React, { useEffect } from 'react';
import {Text, TextInput, View, Button, ScrollView} from 'react-native';
import { usePlayersList } from '../hooks/players-list';
import { usePlayerDelete } from '../hooks/player-delete'

import { PlayerCard } from '../components/molecules/player-card'
 
const Home = () => {
  const {players, getPlayers} = usePlayersList();
  const { deletePlayer } = usePlayerDelete();

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <>
      <View style={{ marginHorizontal: 24}}>
        <Text>Mi Equipo</Text>
        <TextInput 
          placeholder='Buscar por nombre' 
          style={{ 
            marginVertical: 24, 
            borderWidth: 1,
            height: 40,
            borderRadius: 5
            }}
          />
        <ScrollView scrollEnabled>
        <View style={{ alignItems: 'center'}}>
          {players.map(player => (
            <PlayerCard 
              key={player.id}
              player={player}
              deletePlayer={deletePlayer}
            />
          ))}
        </View>
        </ScrollView>
      </View>
      <View style={{ flex: 1, marginHorizontal: 24, justifyContent: 'flex-end'}}>
        <Button title='Agregar' color='#616A6B' />
      </View>
    </>
  );
};
export {Home};
