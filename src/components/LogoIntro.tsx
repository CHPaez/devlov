import { useState } from 'react';
import { COLORS, LIGHT_COLORS } from '../theme';

interface LogoIntroProps {
  dark: boolean;
}

export function LogoIntro({ dark }: LogoIntroProps) {
  // Cache-busted per mount so the browser restarts the APNG from frame 0 instead of
  // reusing the already-finished playback of a previously loaded <img> with the same src.
  const [playId] = useState(() => Date.now());

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: dark ? COLORS.bg : LIGHT_COLORS.bg,
        transition: 'opacity 0.3s ease',
      }}
    >
      <img
        src={`/uploads/devlo-logo.png?v=${playId}`}
        alt="DevLov"
        style={{
          width: 260,
          filter: dark
            ? 'brightness(0) invert(1) drop-shadow(0 0 14px rgba(152,132,245,0.65)) drop-shadow(0 0 28px rgba(152,132,245,0.4))'
            : 'drop-shadow(0 3px 10px rgba(21,22,29,0.12))',
        }}
      />
    </div>
  );
}
