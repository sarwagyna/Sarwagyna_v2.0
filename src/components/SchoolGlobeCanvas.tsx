'use client';

import { useEffect, useRef } from 'react';

export default function SchoolGlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let globe: { destroy: () => void } | null = null;
    let phi = 0;
    let width = 0;
    let visible = false;
    let destroyed = false;
    let initStarted = false;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const measure = () => {
      width = canvas.offsetWidth || 360;
    };

    const init = async () => {
      if (initStarted) return;
      initStarted = true;
      const { default: createGlobe } = await import('cobe');
      if (destroyed) return;
      measure();
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: 0,
        theta: 0.15,
        dark: 0.08,
        diffuse: 0.9,
        scale: 0.9,
        mapSamples: 12000,
        mapBrightness: 10,
        baseColor: [0.96, 0.96, 0.96],
        markerColor: [0.84, 0.84, 0.84],
        glowColor: [1, 1, 1],
        markers: [],
        onRender: (state) => {
          if (visible && !reduceMotion && !document.hidden) {
            phi += 0.0015;
          }
          state.phi = phi;
          state.theta = 0.15 + Math.sin(Date.now() * 0.00018) * 0.15;
          state.width = width * dpr;
          state.height = width * dpr;
        },
      });
      requestAnimationFrame(() => {
        canvas.style.opacity = '0.8';
      });
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !initStarted) init();
      },
      { threshold: 0, rootMargin: '200px' }
    );
    io.observe(canvas);

    return () => {
      destroyed = true;
      io.disconnect();
      globe?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="w-full h-full block opacity-0 transition-opacity duration-700"
    />
  );
}
