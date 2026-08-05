import { COLORS, FONT_SANS, LIGHT_COLORS as LC } from '../theme';

interface FooterProps {
  dark: boolean;
}

export function Footer({ dark }: FooterProps) {
  const border = dark ? 'rgba(255,255,255,0.08)' : LC.cardBorder;
  const muted = dark ? COLORS.textMuted : LC.textMuted;

  return (
    <footer
      style={{
        borderTop: `1px solid ${border}`,
        padding: '36px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <img
        src="/uploads/devlo-heart-icon.png"
        alt=""
        style={{
          width: 34,
          filter: dark ? 'brightness(0) invert(1) opacity(0.9)' : 'none',
        }}
      />
      <div style={{ fontFamily: FONT_SANS, fontSize: 12.5, letterSpacing: 0.3, color: muted, textAlign: 'center' }}>
        Código con sentido, software con pasión.
      </div>
      <div style={{ fontFamily: FONT_SANS, fontSize: 11, color: muted, opacity: 0.7 }}>© {new Date().getFullYear()} DevLov</div>
    </footer>
  );
}
