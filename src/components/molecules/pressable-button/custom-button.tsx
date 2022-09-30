import React from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import { customButtonStyles } from './custom-button.styles';

interface ButtonType {
    handleClick(event: GestureResponderEvent): void;
    text: string;
}

export const CustomButton = ({ handleClick, text }: ButtonType) => {
    return (
        <Pressable
            style={customButtonStyles.button}
            onPress={handleClick}>
            <Text>{text}</Text>
        </Pressable>)
}
