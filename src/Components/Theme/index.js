import {
  createBox,
  createText,
  createTheme,
  useTheme as useReTheme,
} from '@shopify/restyle';

// const palette = {
//   purpleLight: '#8C6FF7',
//   purplePrimary: '#5A31F4',
//   purpleDark: '#3F22AB',

//   greenLight: '#56DCBA',
//   greenDark: '#0A906E',

//   black: '#0B0B0B',
//   white: '#F0F2F3',
// };

export const theme = createTheme({
  colors: {
    primary: '#6155a6',
    danger: '#f36',
    secondary: '#0c0d34',
    success: '#0ECD9D',
    yellow: '#fdcb6e',
    pink: '#fd79a8',
    violet: '#5352ed',
    successLight: '#e7f9f7',
    text: 'rgba(12,13,52,0.7)',
    white: '#fff',
    grey: 'rgba(12,13,52,0.05)',
    lightGrey: '#eee',
    'slide.grey': '#f4fbef',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: 'SFP-Bold',
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFP-SemiBold',
      color: 'secondary',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFP-SemiBold',
      color: 'secondary',
      opacity: 0.7,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFP-Regular',
      color: 'text',
      textAlign: 'center',
    },
    button: {
      fontSize: 15,
      fontFamily: 'SFP-Regular',
      color: 'text',
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: 'SFP-SemiBold',
      color: 'secondary',
    },
  },
});

// export type Theme = typeof theme;
export const Text = createText();
export const Box = createBox();
export const useTheme = () => useReTheme();
export const makeStyles = styles => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
