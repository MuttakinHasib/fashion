import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RoundedIconButton from './Button/RoundedIconButton';
import { Box, Text } from './Theme';

const Header = ({ left, title, right, dark }) => {
  const insets = useSafeAreaInsets();
  const color = dark ? 'white' : 'secondary';
  const backgroundColor = dark ? 'secondary' : 'lightGrey';
  return (
    <Box
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
      paddingHorizontal='m'
      style={{ marginTop: insets.top }}
    >
      <RoundedIconButton
        size={28}
        name={left.icon}
        color='white'
        backgroundColor='secondary'
        onPress={left.onPress}
      />
      <Text variant='header' color='white'>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        size={28}
        name={right.icon}
        color='white'
        backgroundColor='secondary'
        onPress={right.onPress}
      />
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};
export default Header;
