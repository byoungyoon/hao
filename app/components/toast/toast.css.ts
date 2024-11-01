import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const toast = style({
  display: 'flex',
  justifyContent: 'space-between',
  background: vars.color.gray['400'],
  borderRadius: 8,
  alignItems: 'center',
  paddingRight: 28,
  paddingLeft: 9,
  minHeight: 52,
  overflow: 'hidden',
});

export const textLayer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const text = style({
  color: vars.color.orange['300'],
});
