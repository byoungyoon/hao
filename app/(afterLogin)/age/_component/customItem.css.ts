import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  display: 'flex',
  alignItems: 'center',
  background: vars.color.gray.background,
  height: 155,
});
