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
RoundedIconButton.defaultProps = {
  iconRatio: 0.7,
};
export default RoundedIconButton;
