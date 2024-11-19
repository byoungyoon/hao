import { PointMaterial } from '@react-three/drei';

export default function Snow() {
  return (
    <PointMaterial
      transparent
      color='#ff53a8'
      size={0.005}
      sizeAttenuation
      depthWrite={false}
    />
  );
}
