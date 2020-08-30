import { themeOptions } from './themes';

const colorTheme = themeOptions.theme1;
const colors = {
  primary: colorTheme.c1,
  secondary: colorTheme.c2,
  background: '#ECF0F1',
  white: colorTheme.light ? '#FFFFFF' : '#000000',
  black: colorTheme.light ? '#000000' : '#FFFFFF',
  grey0: '#EAECEE',
  grey1: '#D5D8DC',
  grey2: '#ABB2B9',
  grey3: '#808B96',
  grey4: '#566573',
  grey5: '#2C3E50',
  greyOutline: '#AEB6BF',
  searchBg: '#E5E7E9',
  success: '#2ECC71',
  error: '#FF0D10',
  warning: '#F5B041',
  divider: '#515A5A',
};

export default colors;
