import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const tabLayer = style({
  marginTop: 24,
});

export const chipGroupLayer = style({
  padding: '16px 0',
});

export const article = style({
  flexGrow: 1,
  background: vars.color.gray.background,
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
});

export const feedGroupLayer = style({
  flexGrow: 1,
  position: 'relative',
});
