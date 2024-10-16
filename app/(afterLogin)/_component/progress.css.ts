import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const itemGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

export const item = style({
  width: 12,
  height: 12,
  border: 'none',
  background: vars.color.gray['100'],
  borderRadius: '50%',

  selectors: {
    '&.orange': {
      background: vars.color.orange['300'],
    },
  },
});
