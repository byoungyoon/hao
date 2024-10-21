import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const textareaLayer = style({
  position: 'relative',
  height: 209,
  margin: '12px 0 16px 0',

  '@media': {
    'screen and (max-width: 375px)': {
      height: 203,
    },
    'screen and (max-width: 320px)': {
      height: 197,
    },
  },
});

export const textarea = style({
  padding: '16px 24px',
  outline: 'none',
  border: 'none',
  background: vars.color.gray.background,
  borderRadius: 8,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  resize: 'none',
  color: vars.color.gray['400'],
  fontFamily: 'medium',
  fontSize: 18,

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
      padding: '14px 22px',
    },
    'screen and (max-width: 320px)': {
      '::placeholder': {
        fontSize: 14,
      },
      padding: '12px 20px',
    },
  },
});

export const counting = style({
  color: vars.color.gray['400'],
  position: 'absolute',
  bottom: 15,
  right: 16,
});
