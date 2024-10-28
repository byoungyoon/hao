import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const container = style({
  background: vars.color.gray.white,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  gap: 30,
  padding: 24,
});

export const imageLayer = style({
  position: 'absolute',
  top: -45,

  width: 90,
  height: 90,

  borderRadius: '50%',
  overflow: 'hidden',
});

export const image = style({
  marginTop: 10,
});

export const titleLayer = style({
  marginTop: 30,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const buttonGroup = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 16,
  width: '100%',
});
