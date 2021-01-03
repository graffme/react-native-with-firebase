import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../App';
import {Button, Input} from '../components';

const Login: React.FC<{}> = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {navigate} = useNavigation();
  const {logIn} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Input
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
        placeholder="Email"
        value={email}
      />
      <Input
        onChangeText={(value) => setPassword(value)}
        placeholder="Password"
        secureTextEntry
        value={password}
      />
      <Button text="Log In" onPress={() => logIn()} />
      <Button
        text="Sign Up"
        onPress={() => navigate('Signup')}
        primary={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
