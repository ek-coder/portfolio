import { useState, useCallback, useRef } from 'react';
import { ALL_COMMANDS } from '../data/portfolio';

export function useTerminal() {
  const [history, setHistory] = useState([]); // output blocks
  const [cmdHistory, setCmdHistory] = useState([]); // typed commands
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [input, setInput] = useState('');

  const addOutput = useCallback((cmd, content) => {
    setHistory(prev => [
      ...prev,
      { id: Date.now() + Math.random(), cmd, content },
    ]);
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const pushCommand = useCallback((cmd) => {
    if (cmd.trim()) {
      setCmdHistory(prev => [cmd, ...prev]);
    }
    setHistoryIndex(-1);
  }, []);

  const navigateHistory = useCallback((direction, currentInput) => {
    setCmdHistory(prev => {
      const newIndex = direction === 'up'
        ? Math.min(historyIndex + 1, prev.length - 1)
        : Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? '' : prev[newIndex] || '');
      return prev;
    });
  }, [historyIndex]);

  const autocomplete = useCallback((partial) => {
    if (!partial.trim()) return null;
    const matches = ALL_COMMANDS.filter(c =>
      c.startsWith(partial.toLowerCase())
    );
    if (matches.length === 1) return matches[0];
    if (matches.length > 1) return matches;
    return null;
  }, []);

  return {
    history,
    input,
    setInput,
    addOutput,
    clearHistory,
    pushCommand,
    navigateHistory,
    autocomplete,
    cmdHistory,
  };
}
