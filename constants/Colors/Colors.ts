const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const gradient = ['#0369A1', '#C026D3'];

export default {
  light: {
    text: '#000',
    background: '#fff',
    textInverted: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    secondaryBackground: '#b07ce8',
    accent: '#7d19ff',
    gradient: gradient
  },
  dark: {
    text: '#fff',
    background: '#000',
    textInverted: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    secondaryBackground: '#115ac7',
    accent: '#7d00fb',
    gradient: gradient
  },
};
