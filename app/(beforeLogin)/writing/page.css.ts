import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
});

export const writingArticle = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 20px',
});

export const imageGroupLayer = style({
  display: 'flex',
  gap: 8,
  marginTop: 16,
  marginBottom: 20,
});

export const imageLayer = style({
  border: `1px solid ${vars.color.gray['100']}`,
  width: 81,
  height: 79,
  background: vars.color.gray.background,
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
});

export const optionArticle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: '16px 20px',
});

export const optionLayerGroup = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 8,
});

export const close = style({
  position: 'absolute',
  top: 3,
  right: 3,
});
