import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../../Components/Button/Button';
import { Text } from '../../../Components/Theme';

const SubSlide = ({ subtitle, description, last, onPress }) => {
  return (
    <View style={styles.container}>
      <Text variant='title2' style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant='body' style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last && 'primary'}
        {...{ onPress }}
      />
    </View>
  );
};

export default SubSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subtitle: {
    marginBottom: 12,
  },
  description: {
    marginBottom: 40,
  },
});
