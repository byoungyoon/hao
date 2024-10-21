import { style } from '@vanilla-extract/css';

export const optionLayerGroup = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 8,
});
