import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  primary?: boolean;
  text: string;
}

const Button: React.FC<ButtonProps> = ({primary = true, text, ...props}) => {
  return (
    <TouchableOpacity
      style={primary ? styles.primaryButton : styles.secondaryButton}
      {...props}>
      <Text style={primary ? styles.primaryText : styles.secondaryText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    width: '80%',
    marginTop: 30,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#575fcf',
    borderRadius: 5,
  },
  secondaryButton: {
    width: '80%',
    marginTop: 30,
    alignItems: 'center',
  },
  primaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#575fcf',
  },
});

export default Button;
