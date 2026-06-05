import React from 'react';
import { PROJECTS } from '../../data/portfolio';

export default function ProjectsOutput() {
  return (
    <div className="output-section">
      <div className="output-label">Projects</div>
      {PROJECTS.map((p) => (
        <div key={p.id} className="project-card">
          <div className="project-name" style={{ color: p.color }}>
            {p.name}
          </div>
          <div className="project-desc">{p.description}</div>
          <div className="project-tech">
            {p.tech.map((t) => (
              <span
                key={t}
                className="tech-badge"
                style={{
                  borderColor: p.color + '55',
                  color: p.color,
                  background: p.color + '12',
                }}
              >
                {t}
              </span>
            ))}
          </div>
          {p.repoUrl && (
            <a
              href={p.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              ↗ View Repository
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
