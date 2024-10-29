import { style } from '@vanilla-extract/css';

export const arrowRight = style({
  position: 'absolute',
  top: '50%',
  left: 0,
  cursor: 'pointer',
  transform: 'translateY(-50%)',
  zIndex: 20,
});

export const arrowLeft = style({
  position: 'absolute',
  top: '50%',
  right: 0,
  cursor: 'pointer',
  transform: 'translateY(-50%)',
  zIndex: 20,
});
