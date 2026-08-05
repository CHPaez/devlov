import { useState } from 'react';
import { LightLanding } from './components/LightLanding';
import { CreativeLanding } from './components/CreativeLanding';

function App() {
  const [dark, setDark] = useState(false);

  return dark ? <CreativeLanding onExitDark={() => setDark(false)} /> : <LightLanding onEnterDark={() => setDark(true)} />;
}

export default App;
