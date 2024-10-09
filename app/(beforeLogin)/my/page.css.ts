import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/theme.css';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const infoArticle = style({
  padding: '40px 20px',
});

globalStyle(`${infoArticle} text`, {
  color: vars.color.orange['300'],
});

export const infoHgroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  paddingBottom: 24,
  position: 'relative',
});

export const infoAside = style({
  color: vars.color.gray['300'],
});

export const infoCharacter = style({
  position: 'absolute',
  bottom: -40,
  right: 0,
});

export const infoLayer = style({
  borderRadius: 8,
  padding: 24,
  overflow: 'hidden',
});

export const infoModifyLayer = style([
  infoLayer,
  {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    position: 'relative',
    background: vars.color.purple['100'],
  },
]);

export const infoModifyImage = style({
  width: 100,
  height: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: vars.color.gray.white,
  borderRadius: '50%',
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

export const infoAgeText = style({
  color: vars.color.orange['300'],
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

export const infoLayerGroup = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 18,
  marginTop: 20,
  height: 151,
});

export const infoMyLayer = style([
  infoLayer,
  {
    background: vars.color.orange['50'],
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
]);

export const infoMyImage = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
});

export const infoScrapLayer = style([
  infoLayer,
  {
    background: vars.color.red['100'],
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    maxHeight: 151,
  },
]);

export const infoScrapImage = style({
  position: 'absolute',
  bottom: -5,
  right: 8,
});

export const infoLayerText = style({
  color: vars.color.gray['300'],
});

export const logoutLayer = style({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 150,
});

export const logout = style({
  borderRadius: '100px !important',
});

export const border = style({
  minHeight: 6,
  background: vars.color.gray['100'],
});

export const reportArticle = style({
  padding: '0 20px',
});

export const reportTitle = style({
  margin: '32px 0 23px 0',
});

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
