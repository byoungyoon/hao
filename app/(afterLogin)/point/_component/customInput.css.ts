import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const input = style({
  width: 219,
  height: 37,
  borderRadius: 8,
  border: 'none',
  outline: 'none',
  background: vars.color.gray['100'],
  fontWeight: 500,
  fontSize: 18,
  fontFamily: 'medium',
  textAlign: 'center',
  color: vars.color.gray['400'],

  '::placeholder': {
    color: vars.color.gray['200'],
  },

  '@media': {
    'screen and (max-width: 375px)': {
      fontSize: 17,
    },
    'screen and (max-width: 320px)': {
      fontSize: 16,
    },
  },
});
