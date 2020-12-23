import React from 'react';
import { StyleSheet, TextInput as RNInput } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { Box, useTheme } from '../Theme';
import RoundedIcon from '../RoundedIcon';

const TextInput = ({ icon, error, touched, ...props }) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.m * 2;

  const reColor = !touched ? 'text' : error ? 'danger' : 'success';
  const color = theme.colors[reColor];

  return (
    <Box
      flexDirection='row'
      alignItems='center'
      height={50}
      padding='s'
      borderRadius='s'
      borderColor={reColor}
      borderWidth={StyleSheet.hairlineWidth}
    >
      <Box margin='s'>
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <RNInput
          autoCapitalize='none'
          underlineColorAndroid='transparent'
          placeholderTextColor={color}
          {...props}
        />
      </Box>
      {touched && (
        <RoundedIcon
          name={!error ? 'check' : 'x'}
          size={SIZE}
          color='white'
          backgroundColor={!error ? 'primary' : 'danger'}
        />
      )}
    </Box>
  );
};

export default TextInput;
