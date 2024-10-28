import { style } from '@vanilla-extract/css';

export const preModal = style({
  width: 30,
  height: 30,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: -1,
});
