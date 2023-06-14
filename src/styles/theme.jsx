export const theme = Object.freeze({
  colors: {
    accent: '#2196F3',
    white: '#fff',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#222222',
    black: '#000000',
    primary: '#49a09d',
    color1_main: '#00f59a',
    color2: '#02f59b',
    color3: '#00fabd',
    color4: '#04e9d2',
    color5: '#05bae7',
    color6: '#0265f7',
    color6_main: '#005bfa',
    color7: '#02dede',
    color8: '#0088fa',

    mainBackground: ['linear-gradient(to top, #00fabd, #00f09d)'],
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
