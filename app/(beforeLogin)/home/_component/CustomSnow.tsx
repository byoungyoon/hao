'use client';

import { Canvas } from '@react-three/fiber';
import SnowGroup from '@/app/components/three/SnowGroup';
import { useTheme } from '@/app/store/useTranslate';

import * as styles from './customSnow.css';

export default function CustomSnow() {
  const { theme } = useTheme();

  return (
    <div className={styles.snow}>
      {theme === 'event' && (
        <Canvas camera={{ position: [0, 0, 1], far: 1 }}>
          <SnowGroup />
        </Canvas>
      )}
    </div>
  );
}
