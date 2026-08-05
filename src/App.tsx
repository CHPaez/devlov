import { useEffect, useState } from 'react';
import { LightLanding } from './components/LightLanding';
import { CreativeLanding } from './components/CreativeLanding';
import { LogoIntro } from './components/LogoIntro';

// The logo animation itself runs 3500ms (35 frames @ 100ms) — hold a beat past that so it fully plays out.
const INTRO_MS = 3700;
const TRANSITION_MS = 3700;

function App() {
  const [dark, setDark] = useState(false);
  const [intro, setIntro] = useState(true);
  const [transitioning, setTransitioning] = useState<boolean | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setIntro(false), INTRO_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;
    document.querySelector(window.location.hash)?.scrollIntoView();
  }, [dark]);

  function switchMode(next: boolean) {
    setTransitioning(next);
    setTimeout(() => {
      setDark(next);
      setTransitioning(null);
    }, TRANSITION_MS);
  }

  if (intro) return <LogoIntro dark={dark} />;
  if (transitioning !== null) return <LogoIntro dark={transitioning} />;

  return dark ? <CreativeLanding onExitDark={() => switchMode(false)} /> : <LightLanding onEnterDark={() => switchMode(true)} />;
}

export default App;
