import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './Onboarding/Onboarding';
import Welcome from './Welcome/Welcome';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import PasswordChanged from './PasswordChanged';

const AuthenticationStack = createStackNavigator();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode='none'>
      <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
      <AuthenticationStack.Screen name='Welcome' component={Welcome} />
      <AuthenticationStack.Screen name='Login' component={Login} />
      <AuthenticationStack.Screen name='Signup' component={Signup} />
      <AuthenticationStack.Screen
        name='ForgotPassword'
        component={ForgotPassword}
      />
      <AuthenticationStack.Screen
        name='PasswordChanged'
        component={PasswordChanged}
      />
    </AuthenticationStack.Navigator>
  );
};
