import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

const Input: React.FC<TextInputProps> = (props) => {
  return (
    <TextInput
      placeholderTextColor="#808e9b"
      selectionColor="#575fcf"
      style={styles.inputBox}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  inputBox: {
    width: '80%',
    margin: 15,
    padding: 15,
    fontSize: 16,
    borderColor: '#808e9b',
    borderBottomWidth: 1,
  },
});

export default Input;
