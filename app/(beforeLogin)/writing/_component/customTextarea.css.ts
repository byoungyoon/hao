import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const textareaLayer = style({
  minHeight: 209,
  margin: '12px 0 16px 0',
  padding: '16px 24px',
  background: vars.color.gray.background,
  borderRadius: 8,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  alignItems: 'end',
});

export const textarea = style({
  outline: 'none',
  border: 'none',
  resize: 'none',
  color: vars.color.gray['400'],
  fontFamily: 'medium',
  fontSize: 18,
  width: '100%',
  flexGrow: 1,
  background: 'inherit',

  '::placeholder': {
    color: vars.color.gray['200'],
    fontFamily: 'medium',
    fontSize: 18,
  },

  '@media': {
    'screen and (max-width: 375px)': {
      '::placeholder': {
        fontSize: 16,
      },
    },
    'screen and (max-width: 320px)': {
      '::placeholder': {
        fontSize: 14,
      },
    },
  },
});

export const counting = style({
  color: vars.color.gray['400'],
});
