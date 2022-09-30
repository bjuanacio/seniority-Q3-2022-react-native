import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Home} from './src/screens/home';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Detail} from './src/screens/detail';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{title: ''}} />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{title: ''}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
