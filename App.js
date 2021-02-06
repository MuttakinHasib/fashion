import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import LoadAssets from './src/Components/LoadAssets';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { assets } from './src/Components/Container';
import { theme } from './src/Components/Theme';
import { AuthenticationNavigator } from './src/Screens/Authentication';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigator } from './src/Screens/Home';

const fonts = {
  'SFP-Black': require('./assets/fonts/SourceSansPro-Black.ttf'),
  'SFP-Light': require('./assets/fonts/SourceSansPro-Light.ttf'),
  'SFP-Regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
  'SFP-SemiBold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
  'SFP-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
};

const AppStack = createStackNavigator();

export default App = () => (
  <ThemeProvider {...{ theme }}>
    <LoadAssets {...{ fonts, assets }}>
      <SafeAreaProvider>
        <AppStack.Navigator headerMode='none'>
          <AppStack.Screen
            name='Authentication'
            component={AuthenticationNavigator}
          />
          <AppStack.Screen name='Home' component={HomeNavigator} />
        </AppStack.Navigator>
      </SafeAreaProvider>
    </LoadAssets>
  </ThemeProvider>
);
