import React from 'react';
import { OWNER } from '../../data/portfolio';

const paragraphs = [
  {
    icon: '🎓',
    text: 'Computer Science undergraduate at SRM Institute of Science and Technology (SRMIST), Batch of 2027, maintaining a CGPA of 8.73.',
    accent: 'var(--prompt-purple)',
  },
  {
    icon: '💼',
    text: 'Worked as a Data Analyst Intern at ONGC — used SAS Analytics to analyze operational datasets, design dashboards, and generate stakeholder insights from global health data.',
    accent: 'var(--prompt-yellow)',
  },
  {
    icon: '🤖',
    text: 'Built multiple AI-powered systems: a healthcare chatbot (Gemini API + Flask), ML-based autism detection, and an end-to-end email automation platform.',
    accent: 'var(--prompt-blue)',
  },
  {
    icon: '🚀',
    text: 'Co-founded Yocto — a 10-min medicine delivery startup with an OCR + LLM pipeline for handwritten prescriptions. Won the campus incubation challenge, ran 100+ real orders, crossed ₹1L+ GMV, hit ~68% WoW growth, and attracted Athena VC interest before a strategic exit.',
    accent: 'var(--prompt-green)',
  },
];

export default function AboutOutput() {
  return (
    <div className="output-section">
      <div className="output-label">About</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {paragraphs.map(({ icon, text, accent }, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: 12,
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              borderLeft: `3px solid ${accent}`,
              borderRadius: 8,
              padding: '12px 14px',
              alignItems: 'flex-start',
            }}
          >
            <span style={{ fontSize: 16, flexShrink: 0, lineHeight: 1.6 }}>{icon}</span>
            <span style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              {text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10, fontSize: 12, color: 'var(--text-muted)' }}>
        → Type{' '}
        <span style={{ color: 'var(--prompt-cyan)' }}>experience</span> or{' '}
        <span style={{ color: 'var(--prompt-cyan)' }}>projects</span> to learn more.
      </div>
    </div>
  );
}
