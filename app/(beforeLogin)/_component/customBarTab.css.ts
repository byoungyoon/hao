import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const footer = style({
  position: 'sticky',
  boxShadow: vars.shadow.top,
  height: 60,

  selectors: {
    '&.hidden': {
      display: 'none',
    },
  },
});
