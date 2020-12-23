import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from './Theme';

const Link = ({ label, onPress, ...props }) => {
  return (
    <TouchableOpacity {...{ onPress }}>
      <Text {...props}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Link;
