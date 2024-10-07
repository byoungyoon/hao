import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const topLayer = style({
  background: vars.color.orange['50'],
  height: 489,

  position: 'relative',
});

export const image = style({
  width: '100%',
  position: 'absolute',
  bottom: 0,
  right: 0,
  cursor: 'pointer',
});
