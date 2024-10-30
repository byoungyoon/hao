import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const total = style({
  color: vars.color.gray['300'],
  marginTop: 32,
  paddingLeft: 20,
});
