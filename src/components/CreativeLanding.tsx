import type { CSSProperties } from 'react';
import { useEffect } from 'react';
import { Reveal } from './Reveal';
import { Nav } from './Nav';
import { StarField } from './StarField';
import { ServiceCard } from './ServiceCard';
import { WrenchIcon, OrbitIcon } from './icons';
import { COLORS, FONT_SANS, FONT_SERIF } from '../theme';

const sectionStyle: CSSProperties = {
  maxWidth: 760,
  margin: '0 auto',
  padding: '110px 24px',
};

const eyebrowStyle: CSSProperties = {
  fontFamily: FONT_SANS,
  fontSize: 12,
  letterSpacing: 2,
  textTransform: 'uppercase',
  color: COLORS.accent,
  marginBottom: 14,
};

const blobStyle = (size: number, gradient: string): CSSProperties => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: gradient,
  filter: 'blur(60px)',
  opacity: 0.16,
  pointerEvents: 'none',
});

const h2Style: CSSProperties = {
  fontFamily: FONT_SERIF,
  fontStyle: 'italic',
  fontSize: 34,
  color: COLORS.textPrimaryAlt,
  margin: '0 0 28px',
};

interface CreativeLandingProps {
  onExitDark: () => void;
}

export function CreativeLanding({ onExitDark }: CreativeLandingProps) {
  useEffect(() => {
    document.body.style.background = COLORS.bg;
  }, []);

  return (
    <div style={{ minHeight: '100%' }}>
      <StarField />
      <Nav />
      <button
        onClick={onExitDark}
        style={{
          position: 'fixed',
          left: 20,
          bottom: 20,
          zIndex: 50,
          background: 'none',
          border: 'none',
          fontFamily: FONT_SANS,
          fontSize: 12,
          letterSpacing: 0.4,
          color: COLORS.textMuted,
          cursor: 'pointer',
          textDecoration: 'underline',
          textUnderlineOffset: 3,
        }}
      >
        ← Vista clásica
      </button>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '68vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '24px',
        }}
      >
        <div style={{ ...blobStyle(420, COLORS.accentGradient), top: '8%', left: '-8%' }} />
        <div style={{ ...blobStyle(320, COLORS.accentGradient), bottom: '4%', right: '-6%' }} />
        <h1
          style={{
            fontFamily: FONT_SERIF,
            fontStyle: 'italic',
            fontSize: 'clamp(48px, 9vw, 92px)',
            color: COLORS.textPrimary,
            textShadow: COLORS.glow,
            margin: 0,
            letterSpacing: 0.5,
          }}
        >
          DevLov
        </h1>
        <p
          style={{
            fontFamily: FONT_SANS,
            fontSize: 'clamp(14px, 2vw, 18px)',
            color: COLORS.textSecondaryBody,
            maxWidth: 520,
            marginTop: 20,
            lineHeight: 1.7,
          }}
        >
          Software real, con oficio — y experiencias digitales que se sienten hechas a mano,
          no armadas con una plantilla.
        </p>
      </section>

      {/* Servicios */}
      <section id="servicios" style={{ ...sectionStyle, paddingTop: 40, paddingBottom: 60 }}>
        <Reveal>
          <div style={eyebrowStyle}>Servicios</div>
          <h2 style={h2Style}>Dos formas de trabajar juntos</h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginTop: 8 }}>
          <Reveal delay={0.05}>
            <ServiceCard icon={<WrenchIcon />} title="Mantenimiento y desarrollo" badgeGradient={COLORS.accentGradient} hoverRgb="255,157,77">
              <p style={{ fontFamily: FONT_SANS, fontSize: 15, lineHeight: 1.75, color: COLORS.textSecondaryBody, margin: 0 }}>
                Software que ya existe y necesita seguir funcionando, crecer, o resolver bugs
                de verdad — con la seriedad que un negocio necesita para confiarte su operación.
              </p>
              <a
                href="https://tudrogueriaaldia.com.co/login"
                target="_blank"
                rel="noopener"
                style={{
                  display: 'inline-block',
                  marginTop: 16,
                  fontFamily: FONT_SANS,
                  fontSize: 12.5,
                  letterSpacing: 0.3,
                  color: COLORS.accent,
                  textDecoration: 'none',
                  borderBottom: `1px solid ${COLORS.accent}`,
                  paddingBottom: 2,
                }}
              >
                Ya lo hacemos hoy — tudrogueriaaldia.com.co ↗
              </a>
            </ServiceCard>
          </Reveal>
          <Reveal delay={0.15}>
            <ServiceCard icon={<OrbitIcon />} title="Experiencias digitales a medida" badgeGradient={COLORS.accentGradientViolet} hoverRgb="152,132,245">
              <p style={{ fontFamily: FONT_SANS, fontSize: 15, lineHeight: 1.75, color: COLORS.textSecondaryBody, margin: 0 }}>
                Sitios interactivos personalizados para lanzamientos y campañas — pensados y
                construidos desde cero, no una plantilla con tu logo pegado encima.
              </p>
              <a
                href="https://demo.universos.dev"
                target="_blank"
                rel="noopener"
                style={{
                  display: 'inline-block',
                  marginTop: 16,
                  fontFamily: FONT_SANS,
                  fontSize: 12.5,
                  letterSpacing: 0.3,
                  color: COLORS.accentViolet,
                  textDecoration: 'none',
                  borderBottom: `1px solid ${COLORS.accentViolet}`,
                  paddingBottom: 2,
                }}
              >
                Ejemplo de lo que hacemos ↗
              </a>
            </ServiceCard>
          </Reveal>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" style={{ ...sectionStyle, textAlign: 'center', paddingBottom: 140 }}>
        <Reveal>
          <div style={eyebrowStyle}>Contacto</div>
          <h2 style={h2Style}>Hablemos de tu proyecto</h2>
          <a
            href="mailto:devlov@universos.dev"
            style={{
              fontFamily: FONT_SERIF,
              fontStyle: 'italic',
              fontSize: 26,
              color: COLORS.textPrimary,
              textShadow: COLORS.glow,
              textDecoration: 'none',
            }}
          >
            devlov@universos.dev
          </a>
        </Reveal>
      </section>
    </div>
  );
}
