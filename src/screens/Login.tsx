import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login: React.FC<{}> = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
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
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigate('Profile')}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigate('Signup')}>
        <Text style={styles.signupText}>Sign Up</Text>
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
  loginButton: {
    width: '80%',
    marginTop: 30,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#575fcf',
    borderRadius: 5,
  },
  signupButton: {
    width: '80%',
    marginTop: 30,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  signupText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#575fcf',
  },
});

export default Login;
