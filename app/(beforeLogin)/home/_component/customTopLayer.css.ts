import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const topLayer = style({
  background: vars.color.orange['50'],
  height: 430,

  position: 'relative',
  zIndex: 1,
});

export const image = style({
  width: '92%',
  position: 'absolute',
  bottom: 0,
  right: 0,
  cursor: 'pointer',

  '@media': {
    'screen and (max-width: 375px)': {
      height: 160,
    },
    'screen and (max-width: 320px)': {
      height: 160,
    },
  },
});
