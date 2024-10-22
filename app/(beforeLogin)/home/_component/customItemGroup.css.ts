import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const itemGroup = style({
  display: 'flex',
  gap: 16,
  overflow: 'scroll',
  overflowY: 'hidden',
  padding: '24px 20px',
  flexGrow: 1,
  background: vars.color.gray.background,
  scrollbarWidth: 'none',
  minHeight: 372,

  '@media': {
    'screen and (max-width: 375px)': {
      minHeight: 359,
    },
    'screen and (max-width: 320px)': {
      minHeight: 346,
    },
  },
});

export const pendingLayer = style({
  minWidth: 227,
  height: 324,
  background: vars.color.gray.white,
  borderRadius: 8,

  '@media': {
    'screen and (max-width: 375px)': {
      minWidth: 214,
      height: 311,
    },
    'screen and (max-width: 320px)': {
      minWidth: 214,
      height: 298,
    },
  },
});
