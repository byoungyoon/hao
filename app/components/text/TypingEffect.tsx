import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  text: string;
  speed?: number;
};

export default function TypingEffect({ text, speed = 100 }: Props) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div style={{ display: 'inline-block', fontFamily: 'monospace' }}>
      <span>{displayedText}</span>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
        style={{ display: 'inline-block' }}
      >
        |
      </motion.span>
    </div>
  );
}
