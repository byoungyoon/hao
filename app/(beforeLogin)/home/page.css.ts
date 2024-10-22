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
  gap: 15,
});

export const subTitle = style({
  color: vars.color.orange['300'],
});

export const topArticle = style({
  display: 'flex',
  flexDirection: 'column',
});

export const topHgroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  padding: '32px 0 25px 20px',
});

export const topTitleLayer = style({
  display: 'flex',
  gap: 5,
});

export const topTitleOrange = style({
  color: vars.color.orange['300'],
});

export const topTitleSubTitle = style({
  color: vars.color.gray['200'],
});
