import React from 'react';
import { OWNER } from '../../data/portfolio';

export default function ContactOutput() {
  return (
    <div className="output-section">
      <div className="output-label">Contact</div>
      <div
        style={{
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 10,
          padding: '8px 16px',
        }}
      >
        <div className="contact-row">
          <span style={{ fontSize: 16 }}>✉️</span>
          <span style={{ color: 'var(--text-muted)', fontSize: 12, minWidth: 76 }}>Email</span>
          <a href={`mailto:${OWNER.email}`} className="contact-link">
            {OWNER.email}
          </a>
        </div>
        <div className="contact-row">
          <span style={{ fontSize: 16 }}>📱</span>
          <span style={{ color: 'var(--text-muted)', fontSize: 12, minWidth: 76 }}>Phone</span>
          <a href={`tel:${OWNER.phone}`} className="contact-link">
            {OWNER.phone}
          </a>
        </div>
        <div className="contact-row">
          <span style={{ fontSize: 16 }}>💻</span>
          <span style={{ color: 'var(--text-muted)', fontSize: 12, minWidth: 76 }}>GitHub</span>
          <a
            href={OWNER.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/{OWNER.github}
          </a>
        </div>
        <div className="contact-row">
          <span style={{ fontSize: 16 }}>🔗</span>
          <span style={{ color: 'var(--text-muted)', fontSize: 12, minWidth: 76 }}>LinkedIn</span>
          <a
            href={OWNER.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/{OWNER.linkedin}
          </a>
        </div>
      </div>
      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text-muted)' }}>
        ↳ Open to internships and collaborations
      </div>
    </div>
  );
}
