import React, { useRef } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { divide, multiply } from 'react-native-reanimated';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import Dot from '../../../Components/Dot/Dot';
import { makeStyles, useTheme } from '../../../Components/Theme';

import Slide, { SLIDE_HEIGHT } from './Slide';
import SubSlide from './SubSlide';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: '#BFEAF5',
  },
  {
    title: 'Playfull',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Haiting the clothes in your wardrobe? Explore hundreds of outfit ideas.',
    color: '#BEECC4',
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discovery the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
  },
];
const Onboarding = ({ navigation }) => {
  const styles = useStyles();
  const scroll = useRef(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title }, i) => (
            <Slide key={i} right={!!(i % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, i) => (
              <Dot key={i} currentIndex={divide(x, width)} {...{ i }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, i) => {
              const last = i === slides.length - 1;
              return (
                <SubSlide
                  key={i}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      scroll.current
                        ?.getNode()
                        ?.scrollTo({ x: width * (i + 1), animated: true });
                    }
                  }}
                  {...{ subtitle, description, last }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: theme.borderRadii.xl,
  },
}));
