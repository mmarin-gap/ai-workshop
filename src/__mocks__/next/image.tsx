import React from 'react';

// Mock Next.js Image component
const MockNextImage = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <img
      src={src as string}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};

export default MockNextImage;
