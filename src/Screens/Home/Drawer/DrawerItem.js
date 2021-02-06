import React from 'react';

import { RectButton } from 'react-native-gesture-handler';
import RoundedIcon from '../../../Components/RoundedIcon';
import { Box, Text, useTheme } from '../../../Components/Theme';

const DrawerItem = ({ icon, color, screen, label }) => {
  // const theme = useTheme();
  return (
    <RectButton>
      <Box
        flexDirection='row'
        alignItems='center'
        paddingVertical='s'
        paddingHorizontal='m'
      >
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          size={36}
          backgroundColor={color}
          color='white'
        />
        <Text variant='button' color='secondary' marginLeft='s'>
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
