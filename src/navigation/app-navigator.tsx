import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { TeamRoster, TeamPlayer } from '../screens';
import { ROUTE } from './app-navigator.constant';

export const AppNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
            },
            cardStyle: {
                backgroundColor: 'white',
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        >
            <Stack.Screen component={TeamRoster} name={ROUTE.ROSTER} />
            <Stack.Screen component={TeamPlayer} name={ROUTE.PLAYER} />
        </Stack.Navigator>
    )
};
