// Shared with the sister project (universo-viajero-app) for a consistent feel across DevLov's sites.
export const EASE_STANDARD = [0.65, 0, 0.35, 1] as const;

export const COLORS = {
  bg: 'radial-gradient(ellipse at 50% 30%, #07080e 0%, #020208 60%, #000000 100%)',
  textPrimary: '#fff',
  textPrimaryAlt: '#f4efe4',
  textSecondarySubtitle: '#a9c4e6',
  textSecondaryBody: '#d9d6cc',
  textMuted: 'rgba(255,255,255,0.55)',
  glow: '0 0 10px rgba(255,255,255,0.9), 0 0 22px rgba(180,220,255,0.6)',
  // Warm accent — nods to the real, professional product this studio ships (tudrogueriaaldia.com.co).
  accentGradient: 'linear-gradient(135deg, #ffc266 0%, #ff8a3d 100%)',
  accent: '#ff9d4d',
  glowAccent: '0 0 12px rgba(255,160,70,0.55), 0 0 26px rgba(255,120,40,0.35)',
  // Violet accent — nods to the creative side (Universo Viajero's signature glow color).
  accentGradientViolet: 'linear-gradient(135deg, #b39dff 0%, #7f6bf2 100%)',
  accentViolet: '#9884f5',
  // Cosmic blend — orange meets violet, used for background blobs.
  accentGradientBlend: 'linear-gradient(135deg, #ffb347 0%, #9f7cf0 100%)',
} as const;

export const FONT_SERIF = "'Instrument Serif',serif";
export const FONT_SANS = "'Space Grotesk',sans-serif";

// Corporate / "conventional" landing — same brand accents, plain light surface.
export const LIGHT_COLORS = {
  bg: '#f5f4f1',
  textPrimary: '#15161d',
  textSecondaryBody: '#4b4e58',
  textMuted: 'rgba(21,22,29,0.55)',
  cardBg: '#ffffff',
  cardBorder: 'rgba(21,22,29,0.1)',
  accentGradient: COLORS.accentGradient,
  accent: COLORS.accent,
  accentGradientViolet: COLORS.accentGradientViolet,
  accentViolet: COLORS.accentViolet,
} as const;
