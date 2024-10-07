import { style } from '@vanilla-extract/css';

export const heading = style({
  fontFamily: 'semiBold',
  fontWeight: 600,

  selectors: {
    '&.type1': {
      fontSize: 32,
    },
    '&.type2': {
      fontSize: 24,
    },
  },
});
