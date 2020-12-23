import React from 'react';
import { Linking } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '../../Components/Button/Button';
import Container from '../../Components/Container';
import TextInput from '../../Components/Form/TextInput';
import { Box, Text } from '../../Components/Theme';
import Footer from '../../Components/Footer';

const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPassword = ({ navigation }) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: { email: '' },
      validationSchema: ForgetPasswordSchema,
      onSubmit: () => navigation.navigate('PasswordChanged'),
    }
  );

  const footer = (
    <Footer
      title="Don't work?"
      action='Try another way'
      onPress={() => Linking.openURL('mailto:hasibmolla28@gmail.com')}
    />
  );
  return (
    <Container pattern={2} {...{ footer }}>
      <Box padding='xl'>
        <Text variant='title1' textAlign='center' marginBottom='l'>
          Forgot Password ?
        </Text>
        <Text variant='body' textAlign='center' marginBottom='l'>
          Enter your email address associated with your account
        </Text>
        <Box>
          <Box marginBottom='m'>
            <TextInput
              icon='mail'
              placeholder='Enter your Email'
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
              error={errors?.email}
              touched={touched?.email}
            />
          </Box>
          <Box alignItems='center'>
            <Button
              variant='primary'
              label='Reset password'
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
