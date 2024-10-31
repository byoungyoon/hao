import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const section = style({
  background: vars.color.gray.background,
  flexGrow: 1,
  padding: '24px 20px',
});
