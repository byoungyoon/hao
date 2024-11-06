import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
  width: '100%',
  cursor: 'pointer',
  borderBottom: `1px solid ${vars.color.gray['100']}`,

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
  minHeight: 3,
  width: '100%',
  background: vars.color.orange['300'],
  position: 'relative',
  zIndex: 1,
});
