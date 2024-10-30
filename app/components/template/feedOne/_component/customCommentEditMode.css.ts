import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const commentText = style({
  color: vars.color.gray['400'],
  wordBreak: 'break-all',
  whiteSpace: 'normal',
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

export const inputGroup = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'end',
  gap: 8,
});

export const counting = style({
  color: vars.color.gray['400'],
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
