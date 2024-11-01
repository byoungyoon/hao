import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const inputLayer = style({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
  background: vars.color.gray.white,
  borderRadius: 8,
  padding: '8px 12px',
  gap: 8,
  maxHeight: 45,
});

export const input = style({
  width: '100%',
  border: 'none',
  outline: 'none',
  fontFamily: 'medium',
  fontSize: 18,
  color: vars.color.gray['400'],

  '::placeholder': {
    color: vars.color.gray['200'],
    fontFamily: 'medium',
    fontSize: 18,
  },
});

export const resetButton = style({
  display: 'flex',
  alignItems: 'center',
});
