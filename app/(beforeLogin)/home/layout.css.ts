import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const left = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const navigation = style({
  background: vars.color.orange['50'],
});
