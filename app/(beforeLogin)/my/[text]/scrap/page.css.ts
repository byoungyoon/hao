import { style } from '@vanilla-extract/css';

export const section = style({
  display: 'grid',
  padding: '32px 21px',
  gap: '16px 24px',
  gridTemplateColumns: 'repeat(3, 1fr)',

  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    'screen and (max-width: 600px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (max-width: 320px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
});
