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

export const wrapper = style({
  position: 'absolute',
  overflow: 'auto',
  inset: 'initial',
  border: 'none',
  background: 'none',
  padding: 0,
  width: '100%',
  height: '60vh',
});

export const content = style({
  height: '100%',
});

export const layer = style({
  width: '100%',
  height: '100%',
  background: vars.color.gray.white,
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  display: 'flex',
  flexDirection: 'column',
});

export const title = style({
  paddingTop: 34,
  paddingBottom: 26,
  textAlign: 'center',
});

export const categoryGroup = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  flexGrow: 1,
  overflow: 'scroll',
  overflowX: 'hidden',
});

export const categoryGroupOverflow = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

export const item = style({
  height: 66,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '1em',

  ':active': {
    background: vars.color.gray.background,
  },
});
