import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'end',
});

export const text = style({
  selectors: {
    '&.rank1': {
      color: vars.color.orange['300'],
    },
    '&.rank2': {
      color: vars.color.orange['200'],
    },
    '&.rank3': {
      color: vars.color.orange['100'],
    },
  },
});

export const block = style({
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',

  selectors: {
    '&.rank1': {
      background: vars.color.orange['300'],
      height: 204,
    },
    '&.rank2': {
      background: vars.color.orange['200'],
      height: 140,
    },
    '&.rank3': {
      background: vars.color.orange['100'],
      height: 90,
    },
  },
});

export const blockRank = style({
  marginTop: 8,
  color: vars.color.gray.background,
});

export const blockGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  marginBottom: 16,
  paddingLeft: 10,
});

export const blockGroupText = style({
  color: vars.color.gray.background,
  whiteSpace: 'nowrap',
});
