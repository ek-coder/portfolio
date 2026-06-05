import React from 'react';
import { ACHIEVEMENTS } from '../../data/portfolio';

export default function AchievementsOutput() {
  return (
    <div className="output-section">
      <div className="output-label">Achievements</div>
      <ul className="ach-list">
        {ACHIEVEMENTS.map((ach, i) => (
          <li key={i} className="ach-item">
            <span className="ach-icon">🏆</span>
            <div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: 13 }}>
                {ach.title}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>
                {ach.detail}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
