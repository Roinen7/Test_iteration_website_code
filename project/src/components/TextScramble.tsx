import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number;
}

export default function TextScramble({ text, className = '', duration = 0.8 }: TextScrambleProps): JSX.Element {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(true);

  useEffect(() => {
    if (!isScrambling) return;

    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let frame = 0;
    const frameCount = Math.round(duration * 60);

    const interval = setInterval(() => {
      if (frame >= frameCount) {
        setDisplayText(text);
        setIsScrambling(false);
        clearInterval(interval);
        return;
      }

      const progress = frame / frameCount;
      const scrambledText = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          // Gradually reveal characters from left to right
          if (index / text.length < progress) {
            return char;
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setDisplayText(scrambledText);
      frame++;
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [isScrambling, text, duration]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.div>
  );
}
