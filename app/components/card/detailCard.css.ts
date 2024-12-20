import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  borderRadius: 8,
  background: vars.color.gray.white,
  padding: '16px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

export const hgroup = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const userGroup = style({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
});

export const imageLayer = style({
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',

  selectors: {
    '&.age10': {
      background: vars.color.red['100'],
    },
    '&.age20': {
      background: vars.color.purple['100'],
    },
    '&.age30': {
      background: vars.color.blue['100'],
    },
  },
});

export const userSubGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const nameGroup = style({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
});

export const age = style({
  borderRadius: 100,
  color: vars.color.orange['300'],

  '@media': {
    'screen and (max-width: 320px)': {
      display: 'none',
    },
  },
});

export const date = style({
  color: vars.color.gray['300'],
});

export const contentLayer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const editLayer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
});

export const subTitle = style({
  color: vars.color.gray['400'],
  wordBreak: 'break-all',
  whiteSpace: 'pre-line',
  position: 'relative',
  zIndex: 1,
});

export const countLayer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const countSubLayer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

export const countGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  minWidth: 42,
});

export const countText = style({
  color: vars.color.gray['300'],

  selectors: {
    '&.orange': {
      color: vars.color.orange['300'],
    },
  },
});

export const questionLayer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: 8,
  padding: 16,
  borderRadius: 8,
  background: vars.color.gray.background,
});

export const questionCategory = style({
  borderRadius: 8,
  background: vars.color.orange['300'],
  color: vars.color.gray.white,
  padding: '4px 8px',
});

export const question = style({
  color: vars.color.gray['400'],
});

export const image = style({
  position: 'relative',
  zIndex: 1,
});
