import { COLORS, FONT_SANS, FONT_SERIF } from '../theme';

const LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
];

export function Nav() {
  return (
    <div style={{ position: 'fixed', left: '50%', top: 10, transform: 'translateX(-50%)', zIndex: 50, textAlign: 'center' }}>
      <a
        href="#"
        style={{
          display: 'block',
          fontFamily: FONT_SERIF,
          fontStyle: 'italic',
          fontSize: 24,
          color: COLORS.textPrimary,
          textShadow: COLORS.glow,
          textDecoration: 'none',
          letterSpacing: 0.3,
        }}
      >
        DevLov
      </a>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 10 }}>
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              fontFamily: FONT_SANS,
              fontSize: 12,
              letterSpacing: 0.8,
              whiteSpace: 'nowrap',
              textTransform: 'uppercase',
              color: COLORS.textMuted,
              textDecoration: 'none',
            }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
