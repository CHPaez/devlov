import { useEffect, useRef, useState } from 'react';
import { COLORS, FONT_SANS, LIGHT_COLORS as LC } from '../theme';

interface MiniFooterBarProps {
  dark: boolean;
}

export function MiniFooterBar({ dark }: MiniFooterBarProps) {
  const [hidden, setHidden] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const target = document.getElementById('site-footer');
    if (!target) return;

    observerRef.current = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.15 });
    observerRef.current.observe(target);

    return () => observerRef.current?.disconnect();
  }, []);

  const border = dark ? 'rgba(255,255,255,0.08)' : LC.cardBorder;
  const muted = dark ? COLORS.textMuted : LC.textMuted;
  const bg = dark ? 'rgba(5,6,12,0.72)' : 'rgba(245,244,241,0.82)';

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        height: 38,
        background: bg,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderTop: `1px solid ${border}`,
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? 'none' : 'auto',
        transition: 'opacity 0.25s ease',
      }}
    >
      <img
        src="/uploads/devlo-heart-icon.png"
        alt=""
        style={{ width: 15, filter: dark ? 'brightness(0) invert(1) opacity(0.9)' : 'none' }}
      />
      <span style={{ fontFamily: FONT_SANS, fontSize: 11, color: muted }}>Código con sentido, software con pasión.</span>
    </div>
  );
}
