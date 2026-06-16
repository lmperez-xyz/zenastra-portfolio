'use client';

import Script from 'next/script';
import { useEffect } from 'react';

type Props = {
    panoImg: string
}

export default function Panorama({ panoImg }: Props) {
    useEffect(() => {
        const init = () => {
            if (!window.pannellum) return;

            window.pannellum.viewer('panorama', {
                type: 'equirectangular',
                panorama: panoImg,
                autoLoad: true,
                autoRotate: -1,
                mouseZoom: false,
                showControls: false,
            });
        };

        setTimeout(init, 300);
    }, []);

    return (
        <>
            <Script
                src="https://cdn.jsdelivr.net/npm/pannellum/build/pannellum.js"
                strategy="afterInteractive"
            />

            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/pannellum/build/pannellum.css"
            />

            <div id="panorama" style={{ width: '100%', height: '500px' }} />
        </>
    );
}