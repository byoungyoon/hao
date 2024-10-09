import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const border = style({
  height: 6,
  background: vars.color.gray['100'],
});

export const commentArticle = style({
  padding: '16px 21px',
});

export const input = style({
  position: 'sticky',
  bottom: 0,
  boxShadow: vars.shadow.top,
});
