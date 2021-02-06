import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { Box, Text } from './Theme';

const RoundedIcon = ({ name, size, color, backgroundColor, iconRatio }) => {
  const iconSize = size * iconRatio;
  return (
    <Box
      height={size}
      width={size}
      margin='s'
      justifyContent='center'
      alignItems='center'
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text {...{ color }}>
        <Icon {...{ name }} size={iconSize} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
};
export default RoundedIcon;
