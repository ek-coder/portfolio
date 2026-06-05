import React from 'react';
import { EXPERIENCE } from '../../data/portfolio';

const TYPE_META = {
  professional: {
    accent: 'var(--prompt-yellow)',
    label: '💼 Professional',
  },
  entrepreneurial: {
    accent: 'var(--prompt-purple)',
    label: '🚀 Entrepreneurial',
  },
};

// Highlights for Yocto metrics — shown as a mini stat row
const YOCTO_STATS = [
  { value: '100+',  label: 'Real Orders' },
  { value: '₹1L+', label: 'GMV' },
  { value: '~68%', label: 'WoW Growth' },
  { value: 'VC',   label: 'Athena Interest' },
];

export default function ExperienceOutput() {
  return (
    <div className="output-section">
      <div className="output-label">Experience</div>
      {EXPERIENCE.map((exp, i) => {
        const meta = TYPE_META[exp.type] || TYPE_META.professional;
        const isYocto = exp.type === 'entrepreneurial';

        return (
          <div
            key={i}
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              borderLeft: `3px solid ${meta.accent}`,
              borderRadius: 8,
              padding: '14px 16px',
              marginBottom: 12,
            }}
          >
            {/* Type badge */}
            <div style={{ marginBottom: 8 }}>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: meta.accent,
                  background: meta.accent + '18',
                  border: `1px solid ${meta.accent}44`,
                  padding: '2px 8px',
                  borderRadius: 4,
                }}
              >
                {meta.label}
              </span>
            </div>

            {/* Company — explicit capital Y guard */}
            <div style={{ color: meta.accent, fontSize: 13, fontWeight: 600, marginBottom: 2 }}>
              {exp.company}
            </div>
            <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: 14, marginBottom: 2 }}>
              {exp.role}
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 10, fontFamily: 'Inter, sans-serif' }}>
              {exp.period}
            </div>

            {/* Yocto stat pills */}
            {isYocto && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                {YOCTO_STATS.map(({ value, label }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '6px 14px',
                      background: 'rgba(188,140,255,0.07)',
                      border: '1px solid rgba(188,140,255,0.25)',
                      borderRadius: 8,
                      minWidth: 60,
                    }}
                  >
                    <span style={{ color: 'var(--prompt-purple)', fontWeight: 700, fontSize: 14 }}>
                      {value}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: 10, marginTop: 1 }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Bullet list */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {exp.responsibilities.map((r, j) => (
                <li
                  key={j}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: 13,
                    padding: '2px 0',
                    paddingLeft: 14,
                    position: 'relative',
                    lineHeight: 1.65,
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: meta.accent,
                    }}
                  >
                    ▸
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
