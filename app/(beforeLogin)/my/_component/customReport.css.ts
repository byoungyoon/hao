import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const reportLayer = style({
  background: vars.color.gray.background,
  borderRadius: 8,
  padding: 24,
});

globalStyle(`${reportLayer} text`, {
  color: vars.color.orange['300'],
});

export const reportAside = style({
  color: vars.color.gray['300'],
  marginTop: 16,
  marginBottom: 35,
});

export const chart = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 8,
});

export const noReportLayer = style({
  border: `1px solid ${vars.color.gray['100']}`,
  borderRadius: 8,
  boxShadow: vars.shadow.default,
  padding: '24px 8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 24,
});

export const noReportTitle = style({
  color: vars.color.gray['300'],
});

export const noReportButtonLayer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  gap: 10,
});

export const noReportButtonText = style({
  color: vars.color.gray.white,
});

export const noReportImage = style({
  marginBottom: -3,
});
