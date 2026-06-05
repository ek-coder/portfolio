import React from 'react';
import { EDUCATION } from '../../data/portfolio';

export default function EducationOutput() {
  return (
    <div className="output-section">
      <div className="output-label">Education</div>
      {EDUCATION.map((edu, i) => (
        <div key={i} className="edu-card">
          <div className="edu-name">{edu.institution}</div>
          <div className="edu-degree">{edu.degree}</div>
          <div className="edu-meta">{edu.period}</div>
          <div className="edu-cgpa">
            <span style={{ color: 'var(--prompt-yellow)' }}>★</span>
            CGPA: {edu.cgpa}
          </div>
        </div>
      ))}
    </div>
  );
}
