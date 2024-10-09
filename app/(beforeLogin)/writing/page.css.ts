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

export const category = style({
  margin: '24px 0',
  padding: '0 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 8,
  border: `1px solid ${vars.color.gray['200']}`,
  height: 56,
  cursor: 'pointer',
});

export const inputLayer = style({
  height: 53,
  position: 'relative',
});

export const input = style({
  padding: '16px 55px 16px 24px',
  outline: 'none',
  border: 'none',
  background: vars.color.gray.background,
  borderRadius: 8,

  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  color: vars.color.gray['400'],
  fontFamily: 'medium',
  fontSize: 18,

  '::placeholder': {
    color: vars.color.gray['200'],
    fontFamily: 'medium',
    fontSize: 18,
  },
});

export const inputReset = style({
  position: 'absolute',
  right: 24,
  top: '50%',
  transform: 'translateY(-50%)',
});

export const textareaLayer = style({
  position: 'relative',
  height: 209,
  margin: '12px 0 16px 0',
});

export const textarea = style({
  padding: '16px 24px',
  outline: 'none',
  border: 'none',
  background: vars.color.gray.background,
  borderRadius: 8,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  resize: 'none',
  color: vars.color.gray['400'],
  fontFamily: 'medium',
  fontSize: 18,

  '::placeholder': {
    color: vars.color.gray['200'],
    fontFamily: 'medium',
    fontSize: 18,
  },
});

export const counting = style({
  color: vars.color.gray['400'],
  position: 'absolute',
  bottom: 15,
  right: 16,
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
});

export const categoryText = style({
  color: vars.color.gray['300'],
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
