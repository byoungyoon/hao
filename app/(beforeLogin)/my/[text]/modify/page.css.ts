import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const section = style({
  padding: '32px 20px',
});

export const article = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

export const ageGroup = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 11,
  placeContent: 'center',
});

export const pointArticle = style({
  marginTop: 48,
});

export const nicknameArticle = style({
  marginTop: 32,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
});

export const nicknameAside = style({
  color: vars.color.orange['300'],
});

export const buttonLayer = style({
  marginTop: 49,
});
