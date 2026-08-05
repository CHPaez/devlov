import { useState } from 'react';
import type { ReactNode } from 'react';
import { COLORS, FONT_SANS } from '../theme';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  badgeGradient: string;
  /** RGB triplet, no alpha and no wrapper — e.g. "255,157,77". */
  hoverRgb: string;
  children: ReactNode;
}

export function ServiceCard({ icon, title, badgeGradient, hoverRgb, children }: ServiceCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        border: `1px solid ${hover ? `rgba(${hoverRgb},0.4)` : 'rgba(255,255,255,0.1)'}`,
        borderRadius: 16,
        padding: '32px 30px 30px',
        background: 'rgba(255,255,255,0.02)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hover ? `0 16px 40px rgba(${hoverRgb},0.18)` : 'none',
        transition: 'transform 0.25s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out',
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          background: badgeGradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#160f24',
          marginBottom: 18,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: FONT_SANS,
          fontSize: 17,
          fontWeight: 600,
          color: COLORS.textPrimary,
          margin: '0 0 10px',
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}
