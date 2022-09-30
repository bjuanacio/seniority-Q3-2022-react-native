import React, { useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native';
import Picker from '@ouroboros/react-native-picker';
import { useNavigation } from '@react-navigation/native';
import { BodyText } from '../../components/atoms';
import { Button, CustomSlider, Input } from '../../components/molecules';
import { commonStyle } from '../../styles/common';
import { string } from './team_player.string';
import { styles } from './team_player.styles'
import { globalString } from '../global.strings';
import { savePlayer } from '../../api/team.api';
import { Player } from '../../models/player.model';
import { CustomInput } from './custom-input/custom-input';

export const TeamPlayer = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [image, setImage] = useState('')
    const [position, setPosition] = useState('')
    const [attack, setAttack] = useState(0)
    const [defense, setDefense] = useState(0)
    const [skills, setSkills] = useState(0)

    const onSave = async () => {
        try {
            const player: Player = {
                attack,
                defense,
                firstName: name,
                image,
                lastName,
                skills
            };
            const response = await savePlayer(player)
            navigation.goBack();
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <KeyboardAvoidingView>
            <SafeAreaView
                style={[
                    commonStyle.mainMarginHorizontal,
                    commonStyle.containerScreens,
                ]}
            >
                <ScrollView style={styles.scrollContainer}>
                    <CustomInput name={globalString.name} value={name} setValue={setName} />
                    <CustomInput name={globalString.lastName} value={lastName} setValue={setLastName} />
                    <CustomInput name={globalString.image} value={image} setValue={setImage} />
                    <View>
                        <BodyText style={styles.bodyText}>
                            {globalString.position}
                        </BodyText>
                        <Picker
                            onChanged={setPosition}
                            options={string.positions}
                            style={{ borderWidth: 1, borderColor: '#a7a7a7', borderRadius: 5, marginBottom: 5, padding: 5 }}
                            value={position}
                        />
                    </View>
                    <CustomSlider name={globalString.attack} value={attack} setValue={setAttack} />
                    <CustomSlider name={globalString.defense} value={defense} setValue={setDefense} />
                    <CustomSlider name={globalString.skills} value={skills} setValue={setSkills} />
                </ScrollView>
                <View style={commonStyle.buttonContainerScreen}>
                    <Button onPress={onSave}>
                        {string.save}
                    </Button>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}
