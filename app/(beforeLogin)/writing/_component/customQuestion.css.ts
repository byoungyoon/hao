import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const question = style({
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
  borderRadius: 8,
  background: vars.color.gray.background,
  gap: 8,
});

export const text = style({
  color: vars.color.gray['400'],
});
