import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OWNER } from '../data/portfolio';
import { ALL_COMMANDS } from '../data/portfolio';

const BOOT_LINES = [
  { text: '$ whoami',            delay: 200,  type: 'cmd' },
  { text: OWNER.name,            delay: 600,  type: 'val' },
  { text: '',                    delay: 900,  type: 'blank' },
  { text: '$ role',              delay: 1100, type: 'cmd' },
  { text: OWNER.roles[0],        delay: 1500, type: 'val' },
  { text: OWNER.roles[1],        delay: 1800, type: 'val' },
  { text: OWNER.roles[2],        delay: 2100, type: 'val' },
  { text: '',                    delay: 2400, type: 'blank' },
  { text: '$ status',            delay: 2600, type: 'cmd' },
  { text: OWNER.status,          delay: 3000, type: 'val' },
  { text: '',                    delay: 3300, type: 'blank' },
  { text: '$ ./launch-terminal', delay: 3500, type: 'cmd' },
];

export default function BootSequence({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers = BOOT_LINES.map((line, idx) =>
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
        if (idx === BOOT_LINES.length - 1) {
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 500);
        }
      }, line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="boot-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="boot-inner">
            {/* Subtle top label */}
            <div style={{
              fontSize: 11,
              color: 'var(--text-muted)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: 32,
              fontFamily: 'Inter, sans-serif',
            }}>
              Initializing workspace…
            </div>

            {visibleLines.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  marginBottom: line.type === 'blank' ? 6 : 0,
                  color:
                    line.type === 'cmd' ? 'var(--prompt-cyan)' :
                    line.type === 'val' ? 'var(--text-primary)' :
                    'transparent',
                  fontWeight: line.type === 'cmd' ? 500 : 400,
                }}
              >
                {line.text || '\u00A0'}
              </motion.div>
            ))}

            {/* Blinking cursor on last visible line */}
            {visibleLines.length < BOOT_LINES.length && (
              <span className="cursor-blink" style={{ marginLeft: 2 }} />
            )}

            {/* Suggested commands hint */}
            {visibleLines.length === BOOT_LINES.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  marginTop: 24,
                  fontSize: 12,
                  color: 'var(--text-muted)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Type{' '}
                <span style={{ color: 'var(--prompt-cyan)', fontFamily: 'JetBrains Mono, monospace' }}>
                  help
                </span>{' '}
                to begin →
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
