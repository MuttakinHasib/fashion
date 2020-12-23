import React from 'react';
import { TouchableOpacity } from 'react-native';
import SocialLogin from './SocialLogin/SocialLogin';
import { Box, Text } from './Theme';

const Footer = ({ title, action, onPress }) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems='center' justifyContent='center' marginVertical='s'>
        <TouchableOpacity {...{ onPress }}>
          <Box flexDirection='row' justifyContent='center'>
            <Text variant='button' color='white'>
              {title}
            </Text>
            <Text variant='button' color='success' marginLeft='s'>
              {action}
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </>
  );
};

export default Footer;
