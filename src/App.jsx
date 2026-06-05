import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BootSequence from './components/BootSequence';
import Terminal from './components/Terminal';

export default function App() {
  const [booted, setBooted] = useState(false);
  const [theme, setTheme] = useState('default');

  // Apply theme to document root
  useEffect(() => {
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AnimatePresence>
        {!booted && (
          <BootSequence onComplete={() => setBooted(true)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {booted && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: 16, paddingBottom: 16 }}
          >
            <Terminal theme={theme} setTheme={setTheme} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
