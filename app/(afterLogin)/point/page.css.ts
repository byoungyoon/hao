import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const title = style({
  padding: '0 20px',
});

export const nameLayer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 48,
  gap: 8,
});

export const nameTitle = style({
  color: vars.color.gray['400'],
});

export const buttonLayer = style({
  marginTop: 119,
  width: 'calc(100% - 40px)',
});
