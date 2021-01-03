import React from 'react';
import {StyleSheet, View} from 'react-native';

import {AuthContext} from '../../App';
import {Button} from '../components';

const Profile: React.FC<{}> = () => {
  const {logOut} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
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
});

export default Profile;
