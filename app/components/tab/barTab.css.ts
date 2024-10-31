import { style } from '@vanilla-extract/css';

export const itemGroup = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  placeItems: 'center',
  height: 60,
});
