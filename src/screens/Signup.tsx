import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {AuthContext} from '../../App';
import {Button, Input} from '../components';

const Signup: React.FC<{}> = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {logIn} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Input
        onChangeText={(value) => setUsername(value)}
        placeholder="Username"
        value={username}
      />
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
      <Button text="Sign Up" onPress={() => logIn()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    marginTop: 30,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#575fcf',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Signup;
