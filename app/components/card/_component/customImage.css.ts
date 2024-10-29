import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const thumbnailLayer = style({
  width: '100%',
  borderRadius: 8,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: vars.color.gray['100'],
  position: 'relative',

  selectors: {
    '&.container': {
      height: 370,
    },
  },
});
