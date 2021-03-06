import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Profile, Signup} from './src/screens';

type AuthActionTypes = {type: 'LOG_IN'} | {type: 'LOG_OUT'};
interface AuthState {
  isLoggedIn: boolean;
}
interface AuthActions {
  logIn: () => void;
  logOut: () => void;
}

const Stack = createStackNavigator();
//@ts-ignore
export const AuthContext = React.createContext<AuthActions>({});

const App = () => {
  // Simple reducer to switch between Auth and App stacks.
  const [state, dispatch] = React.useReducer(
    (prevState: AuthState, action: AuthActionTypes) => {
      switch (action.type) {
        case 'LOG_IN':
          return {
            ...prevState,
            isLoggedIn: true,
          };
        case 'LOG_OUT':
          return {
            ...prevState,
            isLoggedIn: false,
          };
      }
    },
    {
      isLoggedIn: false,
    },
  );

  // Hydrate context
  const authContext = React.useMemo(
    () => ({
      logIn: () => {
        dispatch({type: 'LOG_IN'});
      },
      logOut: () => dispatch({type: 'LOG_OUT'}),
    }),
    [],
  );

  React.useEffect(() => {
    // Once the Firebase SDK is integrated, check here if user is logged in.
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: '#575fcf',
          }}>
          {state.isLoggedIn ? (
            <Stack.Screen name="Profile" component={Profile} />
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{
                  headerBackTitleVisible: false,
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
