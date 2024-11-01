import { style } from '@vanilla-extract/css';

export const infoCharacter = style({
  position: 'absolute',
  bottom: -40,
  right: 0,

  '@media': {
    'screen and (max-width: 400px)': {
      height: 130,
    },
    'screen and (max-width: 360px)': {
      width: 140,
      height: 130,
    },
    'screen and (max-width: 340px)': {
      width: 120,
      height: 110,
    },
  },
});
