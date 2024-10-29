import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const topLayer = style({
  background: vars.color.orange['50'],
  height: 489,

  position: 'relative',
  zIndex: 999,

  '@media': {
    'screen and (max-width: 375px)': {
      height: 476,
    },
    'screen and (max-width: 320px)': {
      height: 463,
    },
  },
});

export const image = style({
  width: '100%',
  position: 'absolute',
  bottom: 0,
  right: 0,
  cursor: 'pointer',
  maxWidth: 425,

  '@media': {
    'screen and (max-width: 375px)': {
      height: 160,
    },
    'screen and (max-width: 320px)': {
      height: 160,
    },
  },
});
