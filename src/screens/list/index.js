import React, {useEffect} from 'react';
import {View} from 'react-native';
import {usePlayersList} from '../../hooks/usePlayersList';
import {Item} from './item';

const List = () => {
  const {players, getPlayers} = usePlayersList();

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <View>
      {players.map(player => (
        <Item key={player.id} player={player} />
      ))}
    </View>
  );
};

export {List};
