import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const group = style({
  padding: '16px 20px',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
  gap: 8,
  background: vars.color.gray.white,
});

export const textarea = style({
  outline: 'none',
  border: 'none',
  width: '100%',
  fontSize: 14,
  fontFamily: 'regular',
  fontWeight: 400,
  background: vars.color.gray.background,
  borderRadius: 8,
  resize: 'none',
  padding: '10px 16px',
  color: vars.color.gray['400'],

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
  padding: '6px 15px !important',
});

globalStyle(`${button} h4`, {
  fontSize: 18,
});

export const plusImage = style({
  '@media': {
    'screen and (max-width: 320px)': {
      display: 'none',
    },
  },
});

export const layer = style({
  padding: '16px 24px 0 24px',
});

export const imageLayer = style({
  width: 81,
  height: 75,
  position: 'relative',
});

export const image = style({
  borderRadius: 12,
});

export const file = style({
  display: 'none',
});

export const remove = style({
  position: 'absolute',
  top: -7,
  right: -7,
  cursor: 'pointer',
});
