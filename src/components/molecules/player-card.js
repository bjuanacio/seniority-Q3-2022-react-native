import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'

const deleteIcon = require('../../assets/delete-icon.png');
const editIcon = require('../../assets/edit-icon.png');

const PlayerCard = ({ player, deletePlayer }) => {
  console.log(player)
  return (
    <View 
      style={{
        backgroundColor: '#616A6B',
        borderRadius: 10, 
        width: 200, 
        height: 380, 
        marginBottom: 10
      }}
    >
      <Image 
        style={{width: 200, height: 300, borderRadius: 10 }}
        source={{uri: player.image}}
      />
      <Text style={{color: '#FFFFFF'}}>{player.firstName} {player.lastName}</Text>
      <View 
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          justifyContent: 'space-between'
        }}
      >
        <View style={{ flexDirection: 'column', alignItems: 'center'}}>
          <Text style={{ color:'white'}}>Ataque</Text>
          <Text style={{ color:'white'}}>{player?.attack}</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center'}}>
          <Text style={{ color:'white'}}>Defensa</Text>
          <Text style={{ color:'white'}}>{player?.defense}</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center'}}>
          <Text style={{ color:'white'}}>Skills</Text>
          <Text style={{ color:'white'}}>{player?.skills}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity>
         <Image source={editIcon} style={{width: 20, height: 30, marginRight: 24 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deletePlayer(player.id)}>
          <Image source={deleteIcon} style={{width: 20, height: 30 }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { PlayerCard }