import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const inputLayer = style({
  height: 53,
  position: 'relative',

  '@media': {
    'screen and (max-width: 375px)': {
      height: 47,
    },
    'screen and (max-width: 320px)': {
      height: 41,
    },
  },
});

export const input = style({
  padding: '16px 55px 16px 24px',
  outline: 'none',
  border: 'none',
  background: vars.color.gray.background,
  borderRadius: 8,

  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
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
      padding: '14px 53px 14px 22px',
    },
    'screen and (max-width: 320px)': {
      '::placeholder': {
        fontSize: 14,
      },
      padding: '12px 51px 12px 20px',
    },
  },
});

export const inputReset = style({
  position: 'absolute',
  right: 24,
  top: '50%',
  transform: 'translateY(-50%)',
});
