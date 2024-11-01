import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  height: 112,
  width: '100%',
  padding: '0 0 0 24px',
  position: 'relative',
  background: vars.color.gray.white,

  selectors: {
    '&.noAlive': {
      background: vars.color.gray['100'],
    },
  },
});

export const imageLayer = style({
  minWidth: 48,
  height: 48,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

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
    '&.noAlive': {
      background: vars.color.gray['200'],
    },
  },
});

export const image = style({
  selectors: {
    '&.noAlive': {
      filter: 'grayscale(100%) sepia(50%)',
    },
  },
});

export const textLayer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const title = style({
  wordBreak: 'break-all',

  selectors: {
    '&.noAlive': {
      color: vars.color.gray['300'],
    },
  },
});

globalStyle(`${textLayer} strong`, {
  color: vars.color.orange['300'],
});

export const modeLayer = style({
  position: 'absolute',
  right: -80,
  top: 0,
  minWidth: 80,
  background: vars.color.red['100'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  height: '100%',
});
