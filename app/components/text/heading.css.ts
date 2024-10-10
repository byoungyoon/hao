import { style } from '@vanilla-extract/css';

export const heading = style({
  fontFamily: 'semiBold',
  fontWeight: 600,
});

export const type = {
  '1': style({
    fontSize: 32,

    '@media': {
      'screen and (max-width: 375px)': {
        fontSize: 30,
      },
      'screen and (max-width: 320px)': {
        fontSize: 28,
      },
    },
  }),
  '2': style({
    fontSize: 24,

    '@media': {
      'screen and (max-width: 375px)': {
        fontSize: 22,
      },
      'screen and (max-width: 320px)': {
        fontSize: 20,
      },
    },
  }),
};
