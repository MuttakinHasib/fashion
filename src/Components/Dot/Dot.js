import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

const Dot = ({ currentIndex, i, x }) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [i - 1, i, i + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [i - 1, i, i + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={[styles.dot, { opacity, transform: [{ scale }] }]}
    ></Animated.View>
  );
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#f36',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
  },
});
