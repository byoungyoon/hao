import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const group = style({
  display: 'flex',
  gap: 16,
  overflow: 'scroll',
  overflowY: 'hidden',
  margin: '0 20px',
  marginTop: 61,
  scrollbarWidth: 'none',
});

export const age: Record<string, string> = {
  age10: style({
    background: vars.color.red['100'],
    transition: 'all 0.2s',
    border: `2px solid ${vars.color.red['100']}`,

    selectors: {
      '&.select': {
        border: `2px solid ${vars.color.red['200']}`,
      },
    },
  }),
  age20: style({
    background: vars.color.purple['100'],
    transition: 'all 0.2s',
    border: `2px solid ${vars.color.purple['100']}`,

    selectors: {
      '&.select': {
        border: `2px solid ${vars.color.purple['200']}`,
      },
    },
  }),
  age30: style({
    background: vars.color.blue['100'],
    transition: 'all 0.2s',
    border: `2px solid ${vars.color.blue['100']}`,

    selectors: {
      '&.select': {
        border: `2px solid ${vars.color.blue['200']}`,
      },
    },
  }),
};
