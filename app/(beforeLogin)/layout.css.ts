import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const container = style({
  maxWidth: 425,
  width: '100%',
  maxHeight: '100vh',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  background: vars.color.gray.white,
});

export const body = style({
  flexGrow: 1,
});

export const footer = style({
  position: 'sticky',
  boxShadow: vars.shadow.top,
  height: 60,
});
