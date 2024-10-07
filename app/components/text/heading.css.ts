import { style } from '@vanilla-extract/css';

export const heading = style({
  fontFamily: 'semiBold',

  selectors: {
    '&.1': {
      fontSize: 32,
    },
    '&.2': {
      fontSize: 24,
    },
  },
});
