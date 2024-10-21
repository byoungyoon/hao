import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const category = style({
  margin: '24px 0',
  padding: '0 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 8,
  border: `1px solid ${vars.color.gray['200']}`,
  height: 56,
  cursor: 'pointer',

  '@media': {
    'screen and (max-width: 375px)': {
      height: 50,
      margin: '22px 0',
      padding: '0 22px',
    },
    'screen and (max-width: 320px)': {
      height: 42,
      margin: '20px 0',
      padding: '0 20px',
    },
  },
});

export const categoryText = style({
  color: vars.color.gray['300'],
});
