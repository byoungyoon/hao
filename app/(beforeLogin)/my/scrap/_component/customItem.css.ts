import { style } from '@vanilla-extract/css';

export const item = style({
  display: 'flex',
  flexDirection: 'column',
});

export const itemTopLayer = style({
  width: 114,
  height: 20,
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
});

// export const itemLayer = style({
//   display: 'flex',
//   justifyContent: 'space-between',
// });
