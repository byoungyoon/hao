import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const layer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const hgroup = style({
  padding: '35px 20px',
  display: 'flex',
  flexDirection: 'column',
});

export const subTitleLayer = style({
  display: 'flex',
  alignItems: 'center',
});

export const subTitle = style({
  color: vars.color.orange['300'],
});
