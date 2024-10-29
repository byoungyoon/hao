import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const alarmLayer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: 44,

  background: vars.color.orange['50'],
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
});

export const alarm = style({
  marginRight: 10,
});
