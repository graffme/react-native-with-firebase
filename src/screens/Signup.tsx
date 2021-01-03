import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthContext} from '../../App';

const Signup: React.FC<{}> = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {logIn} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(value) => setUsername(value)}
        placeholder="Username"
        placeholderTextColor="#808e9b"
        selectionColor="#575fcf"
        style={styles.inputBox}
        value={username}
      />
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
        placeholder="Email"
        placeholderTextColor="#808e9b"
        selectionColor="#575fcf"
        style={styles.inputBox}
        value={email}
      />
      <TextInput
        onChangeText={(value) => setPassword(value)}
        placeholder="Password"
        placeholderTextColor="#808e9b"
        selectionColor="#575fcf"
        secureTextEntry
        style={styles.inputBox}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={() => logIn()}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: '80%',
    margin: 15,
    padding: 15,
    fontSize: 16,
    borderColor: '#808e9b',
    borderBottomWidth: 1,
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
