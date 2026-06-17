'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type LoadingImageProps = ImageProps;

export default function LoadingImage(props: LoadingImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse rounded-xl bg-zinc-800" />
      )}

      <Image
        {...props}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${props.className ?? ''}`}
      />
    </>
  );
}