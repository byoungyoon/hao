import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const inputLayer = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const input = style({
  border: 'none',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 219,
  height: 37,
  background: vars.color.gray['100'],
  borderRadius: 8,
  textAlign: 'center',
  paddingRight: 50,
  paddingLeft: 50,
  fontSize: 18,
  fontFamily: 'medium',
  color: vars.color.gray['400'],

  '::placeholder': {
    color: vars.color.gray['200'],
  },
});

export const editIcon = style({
  position: 'absolute',
  right: 24,
});
