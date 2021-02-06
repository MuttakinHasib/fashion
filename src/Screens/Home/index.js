import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OutfitIdeas from './OutfitIdeas';
import Drawer, { DRAWER_WIDTH } from './Drawer';

const HomeDrawer = createDrawerNavigator();

export const HomeNavigator = () => {
  return (
    <HomeDrawer.Navigator
      drawerContent={Drawer}
      drawerStyle={{ width: DRAWER_WIDTH }}
    >
      <HomeDrawer.Screen name='OutfitIdeas' component={OutfitIdeas} />
    </HomeDrawer.Navigator>
  );
};
