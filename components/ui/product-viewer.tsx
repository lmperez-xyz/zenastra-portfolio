'use client';

import { useEffect } from 'react'
import { CardContent } from '@/components/ui/card';

type ProductViewerProps = {
  modelUrl: string
}

export default function ProductViewer({modelUrl} : ProductViewerProps) {
  useEffect(() => {
    import('@google/model-viewer')
  }, [])

  return (
    <div>
      <CardContent className="p-4">
        <model-viewer
          src={modelUrl}
          camera-controls
          auto-rotate
          disable-zoom
          shadow-intensity="1"
          style={{
            width: '100%',
            height: '500px',
          }}
        />
      </CardContent>
    </div>
  );
}