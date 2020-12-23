import React from 'react';
import { Dimensions } from 'react-native';
import Button from '../../../Components/Button/Button';
import { Box, Text, useTheme } from '../../../Components/Theme';

const { width } = Dimensions.get('window');
const picture = {
  // src:require('../../assets/')÷
};

const Welcome = ({ navigation }) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor='white'>
      <Box
        flex={1}
        borderBottomRightRadius='xl'
        backgroundColor='grey'
        alignItems='center'
        justifyContent='center'
        style={{ width, height: width + theme.borderRadii.xl }}
      >
        <Text variant='title1'>Welcome there!</Text>
      </Box>
      <Box flex={1} borderTopLeftRadius='xl'>
        <Box
          backgroundColor='grey'
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor='white'
          flex={1}
          borderTopLeftRadius='xl'
          justifyContent='space-evenly'
          alignItems='center'
          padding='xl'
        >
          <Text variant='title2'>Let's get started</Text>
          <Text variant='body'>
            Login to your account bellow or signup for amazing{' '}
          </Text>
          <Button
            variant='primary'
            label='Have an account? Login'
            onPress={() => navigation.navigate('Login')}
          />
          <Button label="Join with us. It's free" />
          <Button variant='transparent' label='Forget password?' />
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Welcome;
