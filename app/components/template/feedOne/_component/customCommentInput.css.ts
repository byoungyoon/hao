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
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: vars.color.gray.background,
  borderRadius: 8,
  gap: 8,
  overflow: 'hidden',
  padding: '8px 8px 8px 16px',
});

export const textarea = style({
  outline: 'none',
  border: 'none',
  width: '100%',
  fontSize: 14,
  fontFamily: 'regular',
  fontWeight: 400,
  background: 'inherit',
  resize: 'none',
  height: '100%',

  '::placeholder': {
    color: vars.color.gray['200'],
    fontSize: 14,
    fontFamily: 'regular',
    fontWeight: 400,
  },
});

export const button = style({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const plusImage = style({
  '@media': {
    'screen and (max-width: 320px)': {
      display: 'none',
    },
  },
});
