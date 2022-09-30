import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { GestureResponderEvent } from 'react-native';

export interface BodyTextProps {
    onPress?: (e: GestureResponderEvent) => void;
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
}

export const BodyText: React.FC<BodyTextProps> = (props) => {
    const { children, style, onPress } = props;
    const textStyles = StyleSheet.create<{ bodyText: TextStyle }>({
        bodyText: {
            fontSize: 16,
            color: '#2C2C30',
            lineHeight: 24,
        },
    });
    return (
        <Text style={[textStyles.bodyText, style]} onPress={onPress}>
            {children}
        </Text>
    );
};
