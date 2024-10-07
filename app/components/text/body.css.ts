import { style } from '@vanilla-extract/css';

export const body = style({
  selectors: {
    '&.1': {
      fontSize: 20,
      fontFamily: 'medium',
    },
    '&.2': {
      fontSize: 20,
      fontFamily: 'bold',
    },
    '&.3': {
      fontSize: 18,
      fontFamily: 'medium',
    },
    '&.4': {
      fontSize: 18,
      fontFamily: 'semiBold',
    },
    '&.5': {
      fontSize: 16,
      fontFamily: 'regular',
    },
    '&.6': {
      fontSize: 14,
      fontFamily: 'regular',
    },
    '&.7': {
      fontSize: 12,
      fontFamily: 'regular',
    },
  },
});
