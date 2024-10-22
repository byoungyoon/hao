import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const question = style({
  borderRadius: 8,
  background: vars.color.gray.white,
  marginTop: 24,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});
