import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Profile, Signup} from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: '#575fcf',
          },
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerLeft: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
