import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const ageGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  marginTop: 32,
});

export const age10 = style({
  background: vars.color.red['100'],
  border: `2px solid ${vars.color.red['200']}`,
  transition: 'all 0.2s',
});

export const age20 = style({
  background: vars.color.purple['100'],
  border: `2px solid ${vars.color.purple['200']}`,
  transition: 'all 0.2s',
});

export const age30 = style({
  background: vars.color.blue['100'],
  border: `2px solid ${vars.color.blue['200']}`,
  transition: 'all 0.2s',
});
