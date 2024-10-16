import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const section = style({
  width: '100%',
  padding: '0 20px',
});

export const title = style({
  color: vars.color.gray['400'],
});

export const subTitle = style({
  color: vars.color.gray['200'],
  marginTop: 8,
});
