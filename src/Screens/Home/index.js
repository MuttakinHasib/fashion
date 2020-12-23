import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OutfitIdeas from './OutfitIdeas';

const HomeDrawer = createDrawerNavigator();

export const HomeNavigator = () => {
  return (
    <HomeDrawer.Navigator>
      <HomeDrawer.Screen name='OutfitIdeas' component={OutfitIdeas} />
    </HomeDrawer.Navigator>
  );
};
