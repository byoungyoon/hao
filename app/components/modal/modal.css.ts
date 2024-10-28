import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999,
});

export const box = style({
  background: vars.color.gray.white,
  borderRadius: 8,
  boxShadow: vars.shadow.default,
  maxWidth: 385,
  width: 'calc(100% - 40px)',
});
