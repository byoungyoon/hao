import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const question = style({
  display: 'none',
  flexDirection: 'column',
  padding: 16,
  borderRadius: 8,
  background: vars.color.gray.background,
  gap: 8,

  selectors: {
    '&.question': {
      display: 'flex',
    },
  },
});

export const text = style({
  color: vars.color.gray['400'],
});
