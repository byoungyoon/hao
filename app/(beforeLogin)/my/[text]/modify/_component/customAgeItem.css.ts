import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  height: 124,
  borderRadius: 8,
  border: `1px solid ${vars.color.gray['100']}`,
  background: vars.color.gray['100'],
  transition: 'all 0.2s',

  selectors: {
    '&.age10': {
      border: `1px solid ${vars.color.red['200']}`,
      background: vars.color.red['100'],
    },
    '&.age20': {
      border: `1px solid ${vars.color.purple['200']}`,
      background: vars.color.purple['100'],
    },
    '&.age30': {
      border: `1px solid ${vars.color.blue['200']}`,
      background: vars.color.blue['100'],
    },
  },
});

export const age = style({
  color: vars.color.gray['300'],
  flexGrow: 1,
  padding: '16px 0 0 16px',

  selectors: {
    '&.age10': {
      color: vars.color.red['200'],
    },
    '&.age20': {
      color: vars.color.purple['200'],
    },
    '&.age30': {
      color: vars.color.blue['200'],
    },
  },
});

export const image = style({
  alignSelf: 'end',
  justifySelf: 'end',
  padding: '0 8px 8px 0',
});
