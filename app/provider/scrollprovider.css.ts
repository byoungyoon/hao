import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const mainWrapper = style({
  flexGrow: 1,
  position: 'relative',
  overflow: 'scroll',
  overflowX: 'hidden',
  scrollbarWidth: 'none',
});

export const mainWrapperOverflow = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

export const topButton = style({
  position: 'fixed',
  bottom: 80,
  right: 20,
  width: 53,
  height: 53,
  borderRadius: '50%',
  background: vars.color.orange['300'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
});
