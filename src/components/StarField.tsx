import { useEffect, useRef } from 'react';

type Tint = 'white' | 'accent' | 'violet';

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  phase: number;
  speed: number;
  tint: Tint;
}

const TINT_RGB: Record<Tint, string> = {
  white: '255,255,255',
  accent: '255,157,77',
  violet: '152,132,245',
};

const PROXIMITY_RADIUS = 170;

function makeStars(width: number, height: number): Star[] {
  const count = Math.min(260, Math.max(90, Math.floor((width * height) / 6000)));
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    const roll = Math.random();
    const tint: Tint = roll < 0.16 ? 'accent' : roll < 0.32 ? 'violet' : 'white';
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.3 + Math.random() * 2.4,
      baseAlpha: 0.55 + Math.random() * 0.45,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.8,
      tint,
    });
  }
  return stars;
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = makeStars(width, height);
    }

    function onPointerMove(e: PointerEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function onPointerLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerleave', onPointerLeave);

    let raf = 0;
    function frame(t: number) {
      ctx!.clearRect(0, 0, width, height);
      for (const star of stars) {
        const twinkle = 0.55 + 0.45 * Math.sin(t * 0.001 * star.speed + star.phase);
        let alpha = star.baseAlpha * twinkle;
        let radius = star.r;

        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < PROXIMITY_RADIUS) {
          const closeness = 1 - dist / PROXIMITY_RADIUS;
          alpha = Math.min(1, alpha + closeness * 0.6);
          radius = star.r * (1 + closeness * 2.2);
          const glow = ctx!.createRadialGradient(star.x, star.y, 0, star.x, star.y, radius * 6);
          glow.addColorStop(0, `rgba(${TINT_RGB[star.tint]},${closeness * 0.35})`);
          glow.addColorStop(1, `rgba(${TINT_RGB[star.tint]},0)`);
          ctx!.fillStyle = glow;
          ctx!.beginPath();
          ctx!.arc(star.x, star.y, radius * 6, 0, Math.PI * 2);
          ctx!.fill();
        }

        ctx!.shadowColor = `rgba(${TINT_RGB[star.tint]},${Math.min(1, alpha + 0.2)})`;
        ctx!.shadowBlur = radius * 3.5;
        ctx!.beginPath();
        ctx!.fillStyle = `rgba(${TINT_RGB[star.tint]},${alpha})`;
        ctx!.arc(star.x, star.y, radius, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 460px 100% at 50% 50%, rgba(2,3,8,0.75) 0%, rgba(2,3,8,0.4) 55%, rgba(2,3,8,0) 85%)',
        }}
      />
    </>
  );
}
