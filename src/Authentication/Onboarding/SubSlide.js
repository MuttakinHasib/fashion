import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button/Button';

const SubSlide = ({ subtitle, description, last, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? `Let's get started` : 'Next'}
        variant={last ? 'primary' : 'default'}
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
    fontFamily: 'ssPro-SemiBold',
    fontSize: 24,
    color: '#0c0d34',
    lineHeight: 30,
    marginBottom: 12,
  },
  description: {
    fontFamily: 'ssPro-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#0c0d34',
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 30,
  },
});
