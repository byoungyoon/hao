import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const section = style({
  padding: '0 20px',
});

export const title = style({});

globalStyle(`${title} > strong`, {
  color: vars.color.orange['300'],
});

export const imageLayer = style({
  width: '100%',
  height: 489,
  position: 'relative',
  marginTop: 55,
});

export const buttonLayer = style({
  marginTop: 23,
});
