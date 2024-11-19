import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  borderRadius: 8,
  minWidth: 227,
  height: 324,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  background: vars.color.gray.white,
  justifyContent: 'space-between',
  overflow: 'hidden',
  zIndex: 3,

  '@media': {
    'screen and (max-width: 375px)': {
      minWidth: 214,
      height: 311,
    },
    'screen and (max-width: 320px)': {
      minWidth: 214,
      height: 298,
    },
  },
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
  zIndex: 1,

  '@media': {
    'screen and (max-width: 375px)': {
      width: 40,
      height: 34,
    },
    'screen and (max-width: 320px)': {
      width: 36,
      height: 30,
    },
  },
});

export const numText = style({
  color: vars.color.gray.white,
});

export const imageLayer = style({
  width: '100%',
  height: 172,
  position: 'relative',
});

export const titleLayer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 16,
});

export const subTitle = style({
  color: vars.color.gray['400'],
  display: '-webkit-box',
  WebkitLineClamp: 2, // 두 줄로 제한
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'pre-line',
  wordBreak: 'break-all',
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
  minWidth: 38,
});

export const countText = style({
  color: vars.color.gray['300'],

  selectors: {
    '&.orange': {
      color: vars.color.orange['300'],
    },
  },
});
