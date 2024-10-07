import { style } from '@vanilla-extract/css';

export const navigation = style({
  height: 44,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

export const left = style({
  position: 'absolute',
  left: 20,
});

export const right = style({
  position: 'absolute',
  right: 10,
});
