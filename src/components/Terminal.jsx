import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OWNER, ALL_COMMANDS } from '../data/portfolio';
import { useTerminal } from '../hooks/useTerminal';
import { executeCommand } from './commands/index';

const PROMPT_PREFIX = (
  <>
    <span className="prompt-user">lakshay</span>
    <span className="prompt-at">@</span>
    <span className="prompt-host">dev</span>
    <span className="prompt-path"> ~/portfolio</span>
    <span className="prompt-dollar">$</span>
  </>
);

export default function Terminal({ theme, setTheme }) {
  const {
    history,
    input,
    setInput,
    addOutput,
    clearHistory,
    pushCommand,
    autocomplete,
    cmdHistory,
  } = useTerminal();

  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const histIndexRef = useRef(-1);
  const welcomeShown = useRef(false);

  // Focus input on click anywhere in terminal
  const focusInput = useCallback(() => inputRef.current?.focus(), []);

  // Auto scroll to bottom when history grows
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Initial welcome message — guarded against React StrictMode double-fire
  useEffect(() => {
    if (welcomeShown.current) return;
    welcomeShown.current = true;
    addOutput('__welcome__', (
      <div className="output-section">
        <div style={{ color: 'var(--prompt-green)', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>
          Welcome to Lakshay&apos;s portfolio terminal
        </div>
        <div style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 10 }}>
          Interactive developer environment — {new Date().toDateString()}
        </div>
        <div style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
          Type <span style={{ color: 'var(--prompt-cyan)' }}>help</span> to see all commands.
          <br />
          Use <span style={{ color: 'var(--prompt-blue)' }}>Tab</span> to autocomplete,{' '}
          <span style={{ color: 'var(--prompt-blue)' }}>↑↓</span> for history.
        </div>
      </div>
    ));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update autocomplete suggestions as user types
  useEffect(() => {
    if (!input.trim()) {
      setSuggestions([]);
      return;
    }
    const matches = ALL_COMMANDS.filter(c => c.startsWith(input.toLowerCase()) && c !== input.toLowerCase());
    setSuggestions(matches.slice(0, 6));
  }, [input]);

  const handleSubmit = useCallback(() => {
    const cmd = input.trim();
    histIndexRef.current = -1;
    pushCommand(cmd);
    setInput('');
    setSuggestions([]);
    executeCommand(cmd, addOutput, clearHistory);
  }, [input, addOutput, clearHistory, pushCommand, setInput]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const result = autocomplete(input);
      if (typeof result === 'string') {
        setInput(result);
        setSuggestions([]);
      } else if (Array.isArray(result)) {
        setSuggestions(result);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      histIndexRef.current = Math.min(histIndexRef.current + 1, cmdHistory.length - 1);
      setInput(cmdHistory[histIndexRef.current] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      histIndexRef.current = Math.max(histIndexRef.current - 1, -1);
      setInput(histIndexRef.current === -1 ? '' : cmdHistory[histIndexRef.current] || '');
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      clearHistory();
    }
  }, [input, handleSubmit, autocomplete, setInput, cmdHistory, clearHistory]);

  const THEMES = ['default', 'slate', 'midnight'];

  return (
    <div
      style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px', maxWidth: 900, margin: '0 auto', width: '100%' }}
      onClick={focusInput}
    >
      <div className="terminal-window" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Title bar */}
        <div className="terminal-titlebar">
          <div className="traffic-light close" title="Close" />
          <div className="traffic-light min" title="Minimize" />
          <div className="traffic-light max" title="Maximize" />
          <div className="titlebar-title">
            lakshay@dev:~/portfolio — zsh
          </div>
          {/* Theme switcher */}
          <div style={{ display: 'flex', gap: 4 }}>
            {THEMES.map(t => (
              <button
                key={t}
                className={`theme-btn ${theme === t ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setTheme(t); }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal body */}
        <div className="terminal-body" style={{ flex: 1 }}>
          {/* History */}
          <AnimatePresence initial={false}>
            {history.map((block) => (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="line-appear"
              >
                {/* Show prompt + command (skip __welcome__) */}
                {block.cmd !== '__welcome__' && (
                  <div className="prompt-line" style={{ marginBottom: 2 }}>
                    {PROMPT_PREFIX}
                    <span className="prompt-cmd">{block.cmd}</span>
                  </div>
                )}
                {block.content}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Autocomplete suggestions bar */}
          <AnimatePresence>
            {suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="suggestions-bar"
              >
                {suggestions.map(s => (
                  <button
                    key={s}
                    className="suggestion-chip"
                    onClick={(e) => {
                      e.stopPropagation();
                      setInput(s);
                      setSuggestions([]);
                      inputRef.current?.focus();
                    }}
                  >
                    {s}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active input line */}
          <div className="input-line">
            {PROMPT_PREFIX}
            <input
              ref={inputRef}
              className="terminal-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              aria-label="Terminal input"
            />
          </div>

          <div ref={bottomRef} />
        </div>
      </div>


    </div>
  );
}
