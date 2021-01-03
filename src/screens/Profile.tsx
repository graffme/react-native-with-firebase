import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {AuthContext} from '../../App';
import {Button} from '../components';

const Profile: React.FC<{}> = () => {
  const {logOut} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Username</Text>
      <Text style={styles.text}>Email</Text>
      <Button text="Log Out" onPress={() => logOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    borderColor: '#808e9b',
    fontSize: 16,
    paddingVertical: 5,
  },
});

export default Profile;
