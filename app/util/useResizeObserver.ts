import { useEffect, useRef, useState } from 'react';

export const useResizeObserver = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current?.clientWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 호출

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return { width, ref };
};
