import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const button = style({
  height: 52,
  width: '100%',
  borderRadius: 8,
  background: vars.color.gray['100'],
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  color: vars.color.gray['200'],
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  selectors: {
    '&.small': {
      width: 222,
    },
    '&.auto': {
      width: 'auto',
      padding: '8px 24px',
    },
    '&.orange': {
      background: vars.color.orange['300'],
      color: vars.color.gray.white,
    },
  },
});
