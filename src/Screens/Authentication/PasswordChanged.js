import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import Container from '../../Components/Container';
import { Box, Text } from '../../Components/Theme';
import Button from '../../Components/Button/Button';
import RoundedIconButton from '../../Components/Button/RoundedIconButton';
import RoundedIcon from '../../Components/RoundedIcon';

const SIZE = 75;
const PasswordChanged = ({ navigation }) => {
  const footer = (
    <Box flexDirection='row' justifyContent='center' alignItems='center'>
      <RoundedIconButton
        name='x'
        size={60}
        color='secondary'
        backgroundColor='white'
        onPress={() => navigation.pop()}
      />
    </Box>
  );
  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding='l' flex={1} justifyContent='center' alignItems='center'>
        <Box marginBottom='xl'>
          <RoundedIcon
            name='check'
            size={SIZE - 5}
            color='success'
            backgroundColor='successLight'
          />
        </Box>
        <Text variant='title1' textAlign='center' marginBottom='l'>
          Your password was successfully changed
        </Text>
        <Text variant='body' textAlign='center'>
          Close this window and login again
        </Text>
        <Box marginTop='m' alignItems='center'>
          <Button
            variant='primary'
            label='Login again'
            onPress={() => navigation.navigate('Login')}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
