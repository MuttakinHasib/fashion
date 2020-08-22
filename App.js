import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/Authentication/Onboarding/Onboarding';
import LoadAssets from './src/components/LoadAssets';

const fonts = {
  'ssPro-Black': require('./assets/fonts/SourceSansPro-Black.ttf'),
  'ssPro-Light': require('./assets/fonts/SourceSansPro-Light.ttf'),
  'ssPro-Regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
  'ssPro-SemiBold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
  'ssPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
};

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode='none'>
    <AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
  </AuthenticationStack.Navigator>
);

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
