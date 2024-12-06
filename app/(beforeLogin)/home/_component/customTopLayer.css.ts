import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const topLayer = style({
  background: vars.color.orange['50'],
  height: 430,
  position: 'relative',
});

export const image = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: '12%',
  cursor: 'pointer',
  zIndex: 3,
});

export const snowman1 = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
});

export const background = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
});
