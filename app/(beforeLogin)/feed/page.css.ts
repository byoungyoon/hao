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

export const itemGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  marginTop: 16,
});
