import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { makeStyles, Text, useTheme } from '../Theme';

const Button = ({ label, variant, children, onPress }) => {
  const theme = useTheme();
  const styles = useStyles();
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'transparent'
      ? 'transparent'
      : theme.colors.grey;
  const color =
    variant === 'primary' ? theme.colors.white : theme.colors.secondary;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text variant='button' style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

export default Button;

const useStyles = makeStyles(theme => ({
  container: {
    borderRadius: theme.borderRadii.l,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
