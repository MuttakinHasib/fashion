import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Box, Text } from '../Theme';

const CheckBox = ({ label, checked, onChange }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(checked)}>
      <Box flexDirection='row' alignItems='center'>
        <Box
          height={20}
          width={20}
          borderRadius='s'
          borderColor='primary'
          borderWidth={1}
          justifyContent='center'
          alignItems='center'
          backgroundColor={checked ? 'primary' : 'white'}
        >
          <Icon name='check' color='white' />
        </Box>
        <Text marginLeft='m' variant='button'>
          {label}
        </Text>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default CheckBox;
