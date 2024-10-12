import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  width: '100%',
  cursor: 'pointer',

  ':focus': {
    background: vars.color.gray.white,
  },
});

export const text = style({
  color: vars.color.gray['200'],

  selectors: {
    '&.select': {
      color: vars.color.orange['300'],
    },
  },
});

export const border = style({
  height: 3,
  width: '100%',
  background: vars.color.gray['100'],

  selectors: {
    '&.select': {
      background: vars.color.orange['300'],
    },
  },
});
