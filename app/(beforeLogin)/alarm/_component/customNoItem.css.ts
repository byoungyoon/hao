import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  gap: 48,
});

export const text = style({
  color: vars.color.gray['300'],
});
