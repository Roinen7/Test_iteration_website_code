import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export default function ParallaxImage({ src, alt, className = '', speed = 0.5 }: ParallaxImageProps): JSX.Element {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate how much of the element is visible
      const elementInView = elementTop < windowHeight && elementTop + elementHeight > 0;

      if (elementInView) {
        // Calculate parallax offset based on scroll position
        const distanceFromTop = windowHeight - elementTop;
        const parallaxOffset = distanceFromTop * speed - elementHeight * speed * 0.5;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <motion.div
      ref={elementRef}
      className={`relative overflow-hidden ${className}`}
      style={{ perspective: '1000px' }}
    >
      {/* Geometric mask overlay for sharp edges */}
      <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl border border-cyan-400/20" />

      {/* Parallax image container */}
      <motion.div
        style={{ y: offset }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
