import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  display: 'flex',
  alignItems: 'center',
  background: vars.color.gray.background,
  height: 155,
  justifyContent: 'space-between',
  padding: '0 56px',
  borderRadius: 8,
  border: `2px solid ${vars.color.gray.background}`,
});

export const age = style({
  color: vars.color.gray['300'],
});
