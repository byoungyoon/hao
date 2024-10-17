import { style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const infoModifyImage = style({
  width: 70,
  height: 70,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: vars.color.gray.white,
  borderRadius: '50%',
  padding: 16,
});

export const infoModifyImageLayer = style({
  width: '100%',
  height: '100%',
  position: 'relative',
});

export const infoModifyGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const infoModifyNameGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const infoModifyAgeLayer = style({
  padding: '4px 7.5px',
  background: vars.color.orange['50'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
});

export const infoName = style({
  whiteSpace: 'nowrap',
});

export const infoAgeText = style({
  color: vars.color.orange['300'],
  whiteSpace: 'nowrap',
});

export const infoModifyButton = style({
  outline: 'none',
  border: 'none',
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px 8px',
  borderRadius: 8,
  background: vars.color.orange['300'],
  gap: 4,
});

export const infoModifyButtonText = style({
  color: vars.color.gray.white,
  paddingLeft: 8,
});
