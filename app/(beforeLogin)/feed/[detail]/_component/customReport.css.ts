import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const report = style({
  borderRadius: 8,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  background: vars.color.gray['400'],
});

export const text = style({
  color: vars.color.orange['300'],
});
