import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const commentText = style({
  color: vars.color.gray['400'],
});

export const input = style({
  outline: 'none',
  border: 'none',
  background: vars.color.gray.background,
  height: 37,
  borderRadius: 8,
  fontSize: 15,
  fontFamily: 'medium',
  color: vars.color.gray['400'],
  padding: '0 10px',
  width: '100%',

  '::placeholder': {
    color: vars.color.gray['200'],
  },
});

export const inputLayer = style({
  display: 'flex',
  gap: 5,
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const button = style({
  height: 37,
  background: vars.color.orange['300'],
  color: vars.color.gray.white,
  border: 'none',
  outline: 'none',
  borderRadius: 8,
  padding: '0 5px',
  whiteSpace: 'nowrap',
});
