import { style } from '@vanilla-extract/css';

export const type = {
  '1': style({
    fontFamily: 'medium',
    fontWeight: 500,
    fontSize: 20,

    '@media': {
      'screen and (max-width: 375px)': {
        fontSize: 18,
      },
      'screen and (max-width: 320px)': {
        fontSize: 17,
      },
    },
  }),
  '2': style({
    fontFamily: 'regular',
    fontWeight: 400,
    fontSize: 16,

    '@media': {
      'screen and (max-width: 375px)': {
        fontSize: 15,
      },
      'screen and (max-width: 320px)': {
        fontSize: 14,
      },
    },
  }),
  '3': style({
    fontFamily: 'regular',
    fontWeight: 400,
    fontSize: 14,

    '@media': {
      'screen and (max-width: 375px)': {
        fontSize: 13,
      },
      'screen and (max-width: 320px)': {
        fontSize: 12,
      },
    },
  }),
};
