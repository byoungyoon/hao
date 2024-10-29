import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const section = style({
  display: 'flex',
  flexDirection: 'column',

  height: '100vh',
  justifyContent: 'center',
  padding: '0 40px',
  maxWidth: 425,
  boxSizing: 'border-box',
  margin: '0 auto',
  background: vars.color.gray.white,
});

export const textArticle = style({
  display: 'flex',
  flexDirection: 'column',
});

globalStyle(`${textArticle} strong`, {
  color: vars.color.orange['300'],
});

export const subTitle = style({
  marginTop: 17,
});

export const loginImageLayer = style({
  marginTop: 80,
  display: 'flex',
  justifyContent: 'center',
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  justifyContent: 'center',
  width: '100%',
  border: 'none',
  outline: 'none',
  borderRadius: 8,
  background: '#FEE500',
  padding: '15px 0',
  marginTop: 75,
});
