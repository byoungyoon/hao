import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const group = style({
  padding: '16px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  background: vars.color.gray.white,
});

export const inputLayer = style({
  position: 'relative',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
});

export const input = style({
  background: vars.color.gray.background,
  padding: '18px 16px',
  borderRadius: 8,
  outline: 'none',
  border: 'none',
  width: '100%',
  paddingRight: 100,

  '::placeholder': {
    color: vars.color.gray['200'],
    fontSize: 14,
    fontFamily: 'regular',
    fontWeight: 400,
  },
});

export const button = style({
  position: 'absolute',
  right: 8,
  height: 37,
});
