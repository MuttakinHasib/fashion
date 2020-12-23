import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../../Components/Button/Button';
import Container from '../../Components/Container';
import TextInput from '../../Components/Form/TextInput';
import { Box, Text } from '../../Components/Theme';
import CheckBox from '../../Components/Form/CheckBox';
import Link from '../../Components/Link';
import Footer from '../../Components/Footer';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Login = ({ navigation }) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: { email: '', password: '', rememberMe: true },
    validationSchema: LoginSchema,
    onSubmit: e => console.log(e),
  });

  const footer = (
    <Footer
      title="Don't have an account?"
      action='Signup here'
      onPress={() => navigation.navigate('Signup')}
    />
  );
  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding='xl'>
        <Text variant='title1' textAlign='center' marginBottom='l'>
          Welcome Back
        </Text>
        <Text variant='body' textAlign='center' marginBottom='l'>
          Use your credentials below and login to your account
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
          <Box
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
            marginBottom='m'
          >
            <CheckBox
              label='Remember me'
              checked={values.rememberMe}
              onChange={() => setFieldValue('rememberMe', !values.rememberMe)}
            />
            <Link
              label='Forget password?'
              variant='button'
              color='success'
              onPress={() => navigation.navigate('ForgotPassword')}
            />
          </Box>
          <Box marginTop='m' alignItems='center'>
            <Button
              variant='primary'
              label='Log into your account'
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
