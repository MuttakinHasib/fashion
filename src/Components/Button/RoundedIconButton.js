import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RoundedIcon from '../RoundedIcon';

const RoundedIconButton = ({ onPress, ...props }) => {
  return (
    <TouchableOpacity {...{ onPress }}>
      <RoundedIcon {...props} />
    </TouchableOpacity>
  );
};

export default RoundedIconButton;
