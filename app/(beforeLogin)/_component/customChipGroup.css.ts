import { style } from '@vanilla-extract/css';

export const chipGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  overflow: 'scroll',
  overflowY: 'hidden',
  scrollbarWidth: 'none',
});
