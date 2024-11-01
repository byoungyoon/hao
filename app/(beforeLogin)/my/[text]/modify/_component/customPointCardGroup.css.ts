import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const group = style({
  marginTop: 12,
});

globalStyle(`${group} .slick-list`, {
  transition: 'transform 0.3s ease',
  overflow: 'visible',
});

export const age: Record<string, string> = {
  age10: style({
    background: vars.color.red['100'],
    transition: 'all 0.2s',
    border: `2px solid ${vars.color.red['100']}`,

    selectors: {
      '&.select': {
        border: `2px solid ${vars.color.red['200']}`,
        transform: `scale(1.1)`,
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
        transform: `scale(1.1)`,
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
        transform: `scale(1.1)`,
      },
    },
  }),
};
