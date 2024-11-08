import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const container = style({
  maxWidth: 425,
  width: '100%',
  maxHeight: '100svh',
  height: '100svh',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  background: vars.color.gray.white,
  overflow: 'scroll',
  overflowX: 'hidden',
  scrollbarWidth: 'none',
});

export const header = style({
  height: 44,
  alignSelf: 'start',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 5,
});

export const progressLayer = style({
  marginTop: 16,
  display: 'flex',
  justifyContent: 'center',
});

export const bodyLayer = style({
  marginTop: 64,
});
