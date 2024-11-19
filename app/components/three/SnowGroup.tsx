'use client';

import { useRef, useState } from 'react';
import { random } from 'maath';
import { useFrame } from '@react-three/fiber';
import { Points } from '@react-three/drei';
import Snow from '@/app/components/three/Snow';

import * as THREE from 'three';

export default function SnowGroup() {
  const ref = useRef<THREE.Points>(null);

  const [sphere] = useState(() => {
    const data = random.inSphere(new Float32Array(12000), { radius: 1.5 });

    return Float32Array.from(data).map((value) => (isNaN(value) ? 0 : value));
  });

  useFrame((_state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <Snow />
      </Points>
    </group>
  );
}
