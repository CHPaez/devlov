import type { CSSProperties } from 'react';
import { useEffect } from 'react';
import { Reveal } from './Reveal';
import { Footer } from './Footer';
import { MiniFooterBar } from './MiniFooterBar';
import { WrenchIcon, OrbitIcon } from './icons';
import { FONT_SANS, FONT_SERIF, LIGHT_COLORS as C } from '../theme';

const sectionStyle: CSSProperties = {
  maxWidth: 760,
  margin: '0 auto',
  padding: '90px 24px',
};

const eyebrowStyle: CSSProperties = {
  fontFamily: FONT_SANS,
  fontSize: 12,
  letterSpacing: 2,
  textTransform: 'uppercase',
  color: C.accent,
  marginBottom: 14,
};

const h2Style: CSSProperties = {
  fontFamily: FONT_SERIF,
  fontStyle: 'italic',
  fontSize: 32,
  color: C.textPrimary,
  margin: '0 0 28px',
};

const cardStyle: CSSProperties = {
  border: `1px solid ${C.cardBorder}`,
  borderRadius: 16,
  padding: '32px 30px 30px',
  background: C.cardBg,
  boxShadow: '0 4px 18px rgba(21,22,29,0.05)',
};

const badgeStyle = (gradient: string): CSSProperties => ({
  width: 34,
  height: 34,
  borderRadius: '50%',
  background: gradient,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#160f24',
  marginBottom: 18,
});

interface LightLandingProps {
  onEnterDark: () => void;
}

export function LightLanding({ onEnterDark }: LightLandingProps) {
  useEffect(() => {
    document.body.style.background = C.bg;
  }, []);

  return (
    <div style={{ minHeight: '100%' }}>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 28px',
          background: 'rgba(245,244,241,0.82)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${C.cardBorder}`,
        }}
      >
        <span style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 19, color: C.textPrimary }}>DevLov</span>
        <div style={{ display: 'flex', gap: 26 }}>
          <a
            href="#servicios"
            style={{ fontFamily: FONT_SANS, fontSize: 12.5, letterSpacing: 0.6, textTransform: 'uppercase', color: C.textMuted, textDecoration: 'none' }}
          >
            Servicios
          </a>
          <a
            href="#contacto"
            style={{ fontFamily: FONT_SANS, fontSize: 12.5, letterSpacing: 0.6, textTransform: 'uppercase', color: C.textMuted, textDecoration: 'none' }}
          >
            Contacto
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          minHeight: '62vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '24px',
        }}
      >
        <h1
          style={{
            fontFamily: FONT_SERIF,
            fontStyle: 'italic',
            fontSize: 'clamp(48px, 9vw, 92px)',
            color: C.textPrimary,
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
            color: C.textSecondaryBody,
            maxWidth: 520,
            marginTop: 20,
            lineHeight: 1.7,
          }}
        >
          Desarrollamos software a medida y creamos experiencias digitales que se sienten
          hechas a mano, no armadas con una plantilla.
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
            <div style={cardStyle}>
              <div style={badgeStyle(C.accentGradient)}>
                <WrenchIcon />
              </div>
              <h3 style={{ fontFamily: FONT_SANS, fontSize: 17, fontWeight: 600, color: C.textPrimary, margin: '0 0 10px' }}>
                Mantenimiento y desarrollo
              </h3>
              <p style={{ fontFamily: FONT_SANS, fontSize: 15, lineHeight: 1.75, color: C.textSecondaryBody, margin: 0 }}>
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
                  color: C.accent,
                  textDecoration: 'none',
                  borderBottom: `1px solid ${C.accent}`,
                  paddingBottom: 2,
                }}
              >
                Ya lo hacemos hoy — tudrogueriaaldia.com.co ↗
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={cardStyle}>
              <div style={badgeStyle(C.accentGradientViolet)}>
                <OrbitIcon />
              </div>
              <h3 style={{ fontFamily: FONT_SANS, fontSize: 17, fontWeight: 600, color: C.textPrimary, margin: '0 0 10px' }}>
                Experiencias digitales a medida
              </h3>
              <p style={{ fontFamily: FONT_SANS, fontSize: 15, lineHeight: 1.75, color: C.textSecondaryBody, margin: 0 }}>
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
                  color: C.accentViolet,
                  textDecoration: 'none',
                  borderBottom: `1px solid ${C.accentViolet}`,
                  paddingBottom: 2,
                }}
              >
                Ejemplo de lo que hacemos ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" style={{ ...sectionStyle, textAlign: 'center' }}>
        <Reveal>
          <div style={eyebrowStyle}>Contacto</div>
          <h2 style={h2Style}>Hablemos de tu proyecto</h2>
          <a
            href="mailto:devlov@universos.dev"
            style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 26, color: C.textPrimary, textDecoration: 'none' }}
          >
            devlov@universos.dev
          </a>
        </Reveal>
      </section>

      <Footer dark={false} />
      <MiniFooterBar dark={false} />

      <button
        onClick={onEnterDark}
        style={{
          position: 'fixed',
          right: 22,
          bottom: 60,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '11px 18px',
          borderRadius: 999,
          border: 'none',
          background: '#15161d',
          color: '#e7e2ff',
          fontFamily: FONT_SANS,
          fontSize: 13,
          letterSpacing: 0.3,
          cursor: 'pointer',
          animation: 'devlovDarkPulse 2.4s ease-in-out infinite',
        }}
      >
        <OrbitIcon />
        Modo creativo
      </button>
    </div>
  );
}
