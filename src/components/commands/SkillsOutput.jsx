import React from 'react';
import { SKILLS } from '../../data/portfolio';

export default function SkillsOutput() {
  return (
    <div className="output-section">
      <div className="output-label">Skills</div>
      {SKILLS.map(({ category, color, items }) => (
        <div key={category} style={{ marginBottom: 14 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color,
              marginBottom: 6,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, display: 'inline-block' }} />
            {category}
          </div>
          <div className="skill-grid">
            {items.map((skill) => (
              <div key={skill} className="skill-tag">
                <span className="skill-dot" style={{ background: color }} />
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
