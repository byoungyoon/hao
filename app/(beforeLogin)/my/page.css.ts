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

  '@media': {
    'screen and (max-width: 400px)': {
      height: 130,
    },
    'screen and (max-width: 360px)': {
      width: 140,
      height: 130,
    },
    'screen and (max-width: 340px)': {
      width: 120,
      height: 110,
    },
  },
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

export const logoutLayer = style({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 150,
  position: 'relative',
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
