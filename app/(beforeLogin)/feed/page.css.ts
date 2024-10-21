import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const section = style({
  marginTop: 24,
  height: 'calc(100% - 24px)',
  display: 'flex',
  flexDirection: 'column',
});

export const listArticle = style({
  flexGrow: 1,
  background: vars.color.gray.background,
  padding: '16px 20px',
});

export const selectLayer = style({
  display: 'flex',
  justifyContent: 'end',
  margin: '24px 0 16px 0',
});
