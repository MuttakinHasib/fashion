import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Container from '../../Components/Container';
import TextInput from '../../Components/Form/TextInput';
import { Box, Text } from '../../Components/Theme';
import Footer from '../../Components/Footer';
import Button from '../../Components/Button/Button';

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Signup = ({ navigation }) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: { name: '', email: '', password: '' },
      validationSchema: LoginSchema,
      onSubmit: e => console.log(e),
    }
  );

  const footer = (
    <Footer
      title='Already have an account?'
      action='Login here'
      onPress={() => navigation.navigate('Login')}
    />
  );
  return (
    <Container pattern={1} {...{ footer }}>
      <Box padding='xl'>
        <Text variant='title1' textAlign='center' marginBottom='l'>
          Create an account
        </Text>
        <Text variant='body' textAlign='center' marginBottom='l'>
          Let's us know what your name, email and your password
        </Text>
        <Box>
          <Box marginBottom='m'>
            <TextInput
              icon='user'
              placeholder='Enter your Name'
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
              error={errors?.name}
              touched={touched?.name}
            />
          </Box>
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
          <Box marginBottom='m'>
            <TextInput
              icon='lock'
              placeholder='Enter your Password'
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              error={errors?.password}
              touched={touched?.password}
              secureTextEntry
            />
          </Box>
          <Box marginTop='m' alignItems='center'>
            <Button
              variant='primary'
              label='Create your account'
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
