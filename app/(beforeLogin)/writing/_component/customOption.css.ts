import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const optionLayer = style({
  borderRadius: 8,
  padding: '16px 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 8,
  transition: 'all 0.2s',

  border: `1px solid ${vars.color.gray['100']}`,
  background: vars.color.gray.background,

  selectors: {
    '&.orange': {
      border: `1px solid ${vars.color.orange['300']}`,
      background: vars.color.orange['50'],
    },
  },

  '@media': {
    'screen and (max-width: 375px)': {
      padding: '14px 22px',
    },
    'screen and (max-width: 320px)': {
      padding: '12px 20px',
    },
  },
});

export const optionTitle = style({
  color: vars.color.gray['300'],

  selectors: {
    '&.orange': {
      color: vars.color.orange['300'],
    },
  },
});

export const optionSubTitle = style({
  color: vars.color.gray['200'],

  selectors: {
    '&.orange': {
      color: vars.color.orange['300'],
    },
  },
});
