import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: '32px 24px',
});

export const imageLayer = style({
  width: 48,
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
  },
});

export const textLayer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

globalStyle(`${textLayer} strong`, {
  color: vars.color.orange['300'],
});
