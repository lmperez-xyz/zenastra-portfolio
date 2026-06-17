'use client';

import { useEffect, useRef, useState } from 'react';
import { CardContent } from '@/components/ui/card';

type ProductViewerProps = {
  modelUrl: string;
};

export default function ProductViewer({ modelUrl }: ProductViewerProps) {
  const [loaded, setLoaded] = useState(false);
  const viewerRef = useRef<any>(null);

  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  useEffect(() => {
    const viewer = viewerRef.current;

    if (!viewer) return;

    const handleLoad = () => {
      console.log('Model loaded!');
      setLoaded(true);
    };

    viewer.addEventListener('load', handleLoad);

    return () => {
      viewer.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="relative h-[500px]">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse rounded-lg bg-zinc-800" />
      )}

      <CardContent className="p-4">
        <model-viewer
          ref={viewerRef}
          src={modelUrl}
          camera-controls
          auto-rotate
          disable-zoom
          shadow-intensity="1"
          style={{
            width: '100%',
            height: '500px',
          }}
          className={`transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </CardContent>
    </div>
  );
}