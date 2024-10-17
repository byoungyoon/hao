import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const section = style({
  padding: '0 20px',
});

export const subTitle = style({
  color: vars.color.gray['300'],
  marginTop: 8,
});

export const buttonLayer = style({
  marginTop: 45,
});
