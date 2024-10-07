import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const mainWrapper = style({
  flexGrow: 1,
  position: 'relative',
});

export const mainWrapperOverflow = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'scroll',
  overflowX: 'hidden',
  scrollbarWidth: 'none',
});
