import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  display: 'inline-block',
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  alignSelf: 'start',
  fontFamily: 'medium',
  fontSize: 18,
  color: vars.color.gray['400'],
});

export const white = style({
  position: 'fixed',
  inset: 0,
  zIndex: 999,
  background: vars.color.gray.white,
});
