import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const container = style({
  width: '100%',
  maxHeight: '100vh',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

export const body = style({
  flexGrow: 1,
  position: 'relative',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: 'hidden',
});

export const footer = style({
  position: 'sticky',
  boxShadow: vars.shadow.top,
  height: 60,
});
