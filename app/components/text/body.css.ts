import { style } from '@vanilla-extract/css';

export const body = style({
  selectors: {
    '&.type1': {
      fontWeight: 500,
      fontSize: 20,
      fontFamily: 'medium',
    },
    '&.type2': {
      fontWeight: 'bold',
      fontSize: 20,
      fontFamily: 'bold',
    },
    '&.type3': {
      fontWeight: 500,
      fontSize: 18,
      fontFamily: 'medium',
    },
    '&.type4': {
      fontWeight: 600,
      fontSize: 18,
      fontFamily: 'semiBold',
    },
    '&.type5': {
      fontWeight: 400,
      fontSize: 16,
      fontFamily: 'regular',
    },
    '&.type6': {
      fontWeight: 400,
      fontSize: 14,
      fontFamily: 'regular',
    },
    '&.type7': {
      fontWeight: 400,
      fontSize: 12,
      fontFamily: 'regular',
    },
  },
});
