import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  alignItems: 'center',
  cursor: 'pointer',
});

export const text = style({
  color: vars.color.gray['200'],

  selectors: {
    '&.select': {
      color: vars.color.orange['300'],
    },
  },
});
