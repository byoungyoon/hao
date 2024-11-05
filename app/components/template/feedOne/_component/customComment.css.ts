import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const comment = style({
  display: 'flex',
  gap: 8,
  padding: '16px 0',
});

export const imageLayer = style({
  minWidth: 24,
  height: 24,
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

export const commentLayer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  flexGrow: 1,
});

export const hgroup = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const nameLayer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 7,
});

export const nameGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const nickname = style({
  selectors: {
    '&.admin': {
      color: vars.color.orange['300'],
    },
  },
});

export const date = style({
  color: vars.color.gray['300'],
});

export const age = style({
  color: vars.color.orange['300'],
  borderRadius: 100,
});

export const editLayer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
});

export const contentLayer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

export const countLayer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

export const countGroup = style({
  display: 'flex',
  gap: 4,
  alignItems: 'center',
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

export const image = style({
  position: 'relative',
  zIndex: 1,
});

export const commentText = style({
  color: vars.color.gray['400'],
  wordBreak: 'break-all',
  whiteSpace: 'pre-line',
});
