import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';

const Dot = ({ i, currentIndex }) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [i - 1, i, i + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(currentIndex, {
    inputRange: [i - 1, i, i + 1],
    outputRange: [1, 1.5, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={{
        opacity,
        transform: [{ scale }],
        backgroundColor: '#2cb9b0',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
      }}
    />
  );
};

export default Dot;

const styles = StyleSheet.create({});
