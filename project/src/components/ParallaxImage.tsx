import React from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ParallaxImage({ src, alt, className = '' }: ParallaxImageProps): JSX.Element {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
}
