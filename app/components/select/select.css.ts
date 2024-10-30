import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const group = style({
  position: 'relative',
});

export const select = style({
  display: 'flex',
  alignItems: 'center',
  gap: 5,
});

export const text = style({
  color: vars.color.gray['400'],
  whiteSpace: 'nowrap',
});

export const itemGroup = style({
  position: 'absolute',
  top: 23,
  right: 0,
  left: 0,
  background: vars.color.gray.white,
  borderRadius: 8,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  border: `1px solid ${vars.color.gray['100']}`,
  zIndex: 99,
});

export const item = style({
  color: vars.color.gray['400'],
  whiteSpace: 'nowrap',
});

export const animationItem = style({
  position: 'absolute',
  top: 15,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 10,
  height: 10,
});
