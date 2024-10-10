import { style } from '@vanilla-extract/css';

export const type = {
  '1': style({
    fontWeight: 500,
    fontSize: 20,
    fontFamily: 'medium',

    '@media': {
      'screen and (max-width: 375px)': {
        fontSize: 19,
      },
      'screen and (max-width: 320px)': {
        fontSize: 18,
      },
    },
  }),
  '2': style({
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'bold',

    '@media': {
      'screen and (max-width: 375px)': {
        fontSize: 19,
      },
      'screen and (max-width: 320px)': {
        fontSize: 18,
      },
    },
  }),
  '3': style({
    fontWeight: 500,
    fontSize: 18,
    fontFamily: 'medium',

    '@media': {
      'screen and (max-width: 375px)': {
        fontSize: 17,
      },
      'screen and (max-width: 320px)': {
        fontSize: 16,
      },
    },
  }),
  '4': style({
    fontWeight: 600,
    fontSize: 18,
    fontFamily: 'semiBold',

    '@media': {
      'screen and (max-width: 375px)': {
        fontSize: 17,
      },
      'screen and (max-width: 320px)': {
        fontSize: 16,
      },
    },
  }),
  '5': style({
    fontWeight: 400,
    fontSize: 16,
    fontFamily: 'regular',

    '@media': {
      'screen and (max-width: 375px)': {
        fontSize: 15,
      },
      'screen and (max-width: 320px)': {
        fontSize: 14,
      },
    },
  }),
  '6': style({
    fontWeight: 400,
    fontSize: 14,
    fontFamily: 'regular',

    '@media': {
      'screen and (max-width: 375px)': {
        fontSize: 13,
      },
      'screen and (max-width: 320px)': {
        fontSize: 12,
      },
    },
  }),
  '7': style({
    fontWeight: 400,
    fontSize: 12,
    fontFamily: 'regular',

    '@media': {
      'screen and (max-width: 375px)': {
        fontSize: 11,
      },
      'screen and (max-width: 320px)': {
        fontSize: 10,
      },
    },
  }),
};
