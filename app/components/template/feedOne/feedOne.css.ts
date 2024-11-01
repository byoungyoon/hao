import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const border = style({
  minHeight: 6,
  background: vars.color.gray['100'],
});

export const commentArticle = style({
  padding: '16px 21px',
  flexGrow: 1,
  position: 'relative',
  zIndex: 1,
});

export const input = style({
  position: 'sticky',
  bottom: 0,
  boxShadow: vars.shadow.top,
  zIndex: 1,
});

export const reportLayer = style({
  marginBottom: 16,
});
