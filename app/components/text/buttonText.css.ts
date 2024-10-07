import { style } from '@vanilla-extract/css';

export const text = style({
  selectors: {
    '&.type1': {
      fontFamily: 'medium',
      fontWeight: 500,
      fontSize: 20,
    },
    '&.type2': {
      fontFamily: 'regular',
      fontWeight: 400,
      fontSize: 16,
    },
    '&.type3': {
      fontFamily: 'regular',
      fontWeight: 400,
      fontSize: 14,
    },
  },
});
