import { useEffect, useState } from 'react';
import { LightLanding } from './components/LightLanding';
import { CreativeLanding } from './components/CreativeLanding';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (!window.location.hash) return;
    document.querySelector(window.location.hash)?.scrollIntoView();
  }, [dark]);

  return dark ? <CreativeLanding onExitDark={() => setDark(false)} /> : <LightLanding onEnterDark={() => setDark(true)} />;
}

export default App;
