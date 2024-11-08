import { style } from '@vanilla-extract/css';

export const body = style({
  position: 'relative',
  zIndex: 1,
});

export const treeLayer = style({
  position: 'absolute',
  inset: 0,
  overflow: 'hidden',
  zIndex: -1,
});
