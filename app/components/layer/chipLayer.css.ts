import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const layer = style({
  padding: '7.5px 16px',
  borderRadius: 100,
  border: `1px solid ${vars.color.gray['100']}`,
  background: vars.color.gray['100'],
  display: 'inline-block',

  selectors: {
    '&.orange': {
      border: `1px solid ${vars.color.orange['300']}`,
      background: vars.color.orange['50'],
    },
  },
});

export const layerText = style({
  color: vars.color.gray['200'],
  whiteSpace: 'nowrap',

  selectors: {
    '&.orange': {
      color: vars.color.orange['300'],
    },
  },
});
