import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const toast = style({
  display: 'flex',
  justifyContent: 'space-between',
  background: vars.color.gray['400'],
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
});
