import { createTheme, globalFontFace } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    orange: {
      300: '#ff8f39',
      200: '#ffb74d',
      100: '#ffd298',
      50: '#fff3e5',
    },
    red: {
      200: '#ff5353',
      100: '#ffdddd',
    },
    purple: {
      200: '#8c40ff',
      100: '#e8d9ff',
    },
    blue: {
      200: '#007aff',
      100: '#b2d7ff',
    },
    gray: {
      white: '#fff',
      background: '#f6f6f6',
      100: '#f1f1f1',
      200: '#a7a7a7',
      300: '#7a7a7a',
      400: '#4e4e4e',
      black: '#222',
    },
  },
  spacing: {
    s1: '4px',
    s2: '8px',
    s3: '16px',
    s4: '24px',
    s5: '32px',
    s6: '40px',
    s7: '48px',
    s8: '56px',
    s9: '64px',
    s10: '72px',
  },
  shadow: {
    default: 'box-shadow: 0 0 8px rgba(0, 0, 0, .04)',
    top: 'box-shadow: 0 4px 8px rgba(0, 0, 0, .04)',
  },
});
