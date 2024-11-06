import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const container = style({
  background: vars.color.orange['50'],
  height: '100svh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const subTitle = style({
  color: vars.color.orange['300'],
});

export const titleLayer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  marginTop: 50,
  marginBottom: 160,
});
