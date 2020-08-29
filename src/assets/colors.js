import colorTheme from './themes';

const colors = {
  primary: colorTheme.c1,
  secondary: colorTheme.c2,
  third: colorTheme.c3,
  fourth: colorTheme.c4,
  fifth: colorTheme.c5,
  black: colorTheme.light ? '#000000' : '#FFFFFF',
  white: colorTheme.light ? '#FFFFFF' : '#000000',
  grey: '#8A8A8F',
  lightGrey: colorTheme.light ? '#D8D8D8' : '#555555',
  hyperlink: '#0198E1',
  statusbar: colorTheme.light,
  errorRed: '#FF0D10',
  red: '#FF9494',
  dark: !colorTheme.light,
  backgroundColor: '#f1f1f1',
};

export default colors;
