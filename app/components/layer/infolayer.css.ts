import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const layer = style({
  padding: '4px 10px',
  background: vars.color.gray['100'],
  display: 'inline-block',
  borderRadius: 8,

  selectors: {
    '&.orange': {
      background: vars.color.orange['300'],
      color: vars.color.gray.white,
    },
  },
});

export const layerText = style({
  color: vars.color.gray['300'],

  selectors: {
    '&.orange': {
      color: vars.color.gray.white,
    },
  },
});
