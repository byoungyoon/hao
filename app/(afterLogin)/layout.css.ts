import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxHeight: '100vh',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
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
