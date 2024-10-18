import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
});

export const itemTopLayer = style({
  width: 114,
  height: 20,
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,
});

export const itemLayer = style({
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '0 8px 8px 8px',
  height: 150,
});

export const dataLayer = style({
  padding: '9px 0 0 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const arrowLayer = style({
  padding: 16,
});

export const imageLayer = style({
  width: 58,
  height: 58,
  background: vars.color.gray.white,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const textLayer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  whiteSpace: 'nowrap',
});

export const countText = style({
  color: vars.color.gray['300'],
});
