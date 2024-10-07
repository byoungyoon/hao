import { style } from '@vanilla-extract/css';

export const text = style({
  selectors: {
    '&.1': {
      fontFamily: 'medium',
      fontSize: 20,
    },
    '&.2': {
      fontFamily: 'regular',
      fontSize: 16,
    },
    '&.3': {
      fontFamily: 'regular',
      fontSize: 14,
    },
  },
});
