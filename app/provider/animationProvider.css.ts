import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const container = style({
  top: 44,
  left: 0,
  right: 0,
  bottom: 0,
  position: 'fixed',
  zIndex: 3,
  overflow: 'scroll',
  background: vars.color.gray.white,
  maxWidth: 425,
  margin: '0 auto',
  scrollbarWidth: 'none',
});
