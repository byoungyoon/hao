import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  background: vars.color.gray.background,
  height: '100%',
});

export const group = style({
  flexGrow: 1,
  marginTop: 24,
});
