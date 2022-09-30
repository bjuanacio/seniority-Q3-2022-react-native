import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { Button, CustomButton, List } from '../../components/molecules';
import { commonStyle } from '../../styles/common';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../../navigation'
import { teamRosterStyles } from './team-roster.styles';
import { globalString } from '../global.strings';
import { string } from './team-roster.string';
import { getPlayers, removePlayer } from '../../api/team.api';
import { BodyText } from '../../components/atoms';
import { Player } from '../../models/player.model';

export const TeamRoster = () => {
    const navigation = useNavigation();
    const [roster, setRoster] = useState<any[]>([])

    useEffect(() => {
        requestRoster();
    }, [])

    const requestRoster = async () => {
        try {
            const players = await getPlayers()
            setRoster(players)
        } catch (err) {

        }
    }

    const handleEdit = (item) => {
        console.log('handle click !! ', item);
    }

    const onRemove = (player: Player) => {
        Alert.alert(
            string.remove.title,
            `${string.remove.body} ${player.firstName} ${player.lastName}`,
            [
                {
                    text: string.remove.cancel,
                },
                { text: string.remove.ok, onPress: () => handleRemove(player) }
            ]
        );
    }

    const handleRemove = async (player: Player) => {
        try {
            await removePlayer(player.id);
            await requestRoster()
        } catch (err) {
            console.error('error => ', err)
        }
    }

    const onAdd = () => {
        navigation.navigate(ROUTE.PLAYER);
    }

    const renderItem = (row: any) => {
        return (
            <View style={[teamRosterStyles.rowContainer]}>
                <View style={teamRosterStyles.item1}>
                    <BodyText>{`${globalString.name}: ${row.item.firstName}`}</BodyText>
                    <BodyText>{`${globalString.lastName}: ${row.item.lastName}`}</BodyText>
                    <BodyText>{globalString.attack}: {row.item.attack}</BodyText>
                    <BodyText>{globalString.defense}: {row.item.defense}</BodyText>
                    <BodyText>{globalString.skills}: {row.item.skills}</BodyText>
                </View>
                <View style={teamRosterStyles.buttonContainer}>
                    <CustomButton handleClick={() => handleEdit(row.item)} text="Editar" />
                    <CustomButton handleClick={() => onRemove(row.item)} text="Eliminar" />
                </View>
            </View>
        )
    }

    const renderAddButton = () => {
        return (
            <View style={commonStyle.buttonContainerScreen}>
                <Button onPress={onAdd}>
                    {string.add}
                </Button>
            </View>
        )
    }

    return (
        <View style={[
            commonStyle.mainMarginHorizontal,
            commonStyle.containerScreens,
        ]}>
            {roster.length > 0 ? (
                <SafeAreaView style={[
                    commonStyle.containerScreens,
                ]}>
                    <List items={roster} renderItem={renderItem} />
                </SafeAreaView>

            ) : <Text>No hay jugadores agregados ...</Text>}
            {renderAddButton()}
        </View>
    );
};
