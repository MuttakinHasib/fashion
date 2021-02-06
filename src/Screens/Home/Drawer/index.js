import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RoundedIconButton from '../../../Components/Button/RoundedIconButton';
import Header from '../../../Components/Header';
import { Box, Text, theme } from '../../../Components/Theme';
import DrawerItem from './DrawerItem';

const { width } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const items = [
  {
    icon: 'zap',
    label: 'Outfit Ideas',
    screen: 'OutfitIdeas',
    color: 'success',
  },
  {
    icon: 'heart',
    label: 'Favorites Outfits',
    screen: 'FavoritesOutfits',
    color: 'danger',
  },
  {
    icon: 'user',
    label: 'Edit Profile',
    screen: 'EditProfile',
    color: 'yellow',
  },
  {
    icon: 'clock',
    label: 'Transaction History',
    screen: 'TransactionHistory',
    color: 'pink',
  },
  {
    icon: 'settings',
    label: 'Notifications Settings',
    screen: 'NotificationsSettings',
    color: 'violet',
  },
  {
    icon: 'log-out',
    label: 'Logout',
    screen: 'Logout',
    color: 'secondary',
  },
];

const Drawer = () => {
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor='white'>
        <Box
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius='xl'
          backgroundColor='secondary'
        >
          <Header
            dark
            title='Menu'
            left={{ icon: 'x', onPress: () => {} }}
            right={{ icon: 'shopping-bag', onPress: () => {} }}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor='secondary' />
        <Image
          source={require('../../../Components/assets/patterns/02.png')}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            width: DRAWER_WIDTH,
            height,
          }}
        />
        <Box
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor='white'
          borderTopLeftRadius='xl'
          borderBottomRightRadius='xl'
          justifyContent='center'
          padding='m'
        >
          <Box
            position='absolute'
            left={DRAWER_WIDTH / 2 - 50}
            top={-55}
            alignSelf='center'
            backgroundColor='primary'
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Box marginVertical='m'>
            <Text variant='title1' textAlign='center'>
              Hasib Molla
            </Text>
            <Text variant='body'>hasibmolla28@gmail.com</Text>
          </Box>
          {items.map(item => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box width={DRAWER_WIDTH} overflow='hidden' height={height * 0.61}>
        <Image
          source={require('../../../Components/assets/patterns/02.png')}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            // top: -height * (1 - 0.61),
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
