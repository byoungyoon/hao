import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  borderRadius: 8,
  width: 227,
  height: 324,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  background: vars.color.gray.white,
});

export const numLayer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 44,
  height: 38,
  borderBottomRightRadius: 8,
  borderTopLeftRadius: 8,
  background: vars.color.orange['200'],
  position: 'absolute',
  top: 0,
  left: 0,
});

export const numText = style({
  color: vars.color.gray.white,
});

export const imageLayer = style({
  height: 172,
  overflow: 'hidden',
});

export const titleLayer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 16,
});

export const subTitle = style({
  color: vars.color.gray['400'],
});

export const countLayer = style({
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  paddingBottom: 8,
  paddingLeft: 16,
});

export const countGroup = style({
  display: 'flex',
  gap: 4,
  alignItems: 'center',
});

export const countText = style({
  color: vars.color.gray['300'],

  selectors: {
    '&.orange': {
      color: vars.color.orange['300'],
    },
  },
});
