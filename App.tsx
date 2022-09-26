import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './src/screens';

const isDarkMode = useColorScheme() === 'light';

const backgroundStyle = {
  backgroundColor: isDarkMode ? 'red' : 'blue',
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>

  );
};

export default App;
