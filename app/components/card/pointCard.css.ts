import { style } from '@vanilla-extract/css';

export const item = style({
  minWidth: 212,
  height: 299,
  padding: '0 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const full = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
});
