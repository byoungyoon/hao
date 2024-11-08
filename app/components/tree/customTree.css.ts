import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const reset = style({
  margin: 20,
  borderRadius: 8,
  border: `1px solid ${vars.color.gray['200']}`,
  display: 'inline-flex',
  padding: '4px 8px',
  cursor: 'pointer',
});
