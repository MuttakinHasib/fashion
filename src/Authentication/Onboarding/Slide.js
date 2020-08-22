import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.68 * height;

const Slide = ({ title, right }) => {
  const transform = [
    {
      translateY: (SLIDE_HEIGHT - 100) / 2,
    },
    { translateX: right ? width / 2 - 65 : -width / 2 + 65 },
    { rotate: right ? '-90deg' : '90deg' },
  ];

  return (
    <View style={{ width }}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontFamily: 'ssPro-Bold',
    color: '#fff',
    textAlign: 'center',
  },
});
