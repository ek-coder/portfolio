import React from 'react';
import { OWNER } from '../../data/portfolio';
import HelpOutput        from './HelpOutput';
import AboutOutput       from './AboutOutput';
import SkillsOutput      from './SkillsOutput';
import ExperienceOutput  from './ExperienceOutput';
import ProjectsOutput    from './ProjectsOutput';
import EducationOutput   from './EducationOutput';
import AchievementsOutput from './AchievementsOutput';
import ContactOutput     from './ContactOutput';
import NeofetchOutput    from './NeofetchOutput';

// Activity grid — seeded pseudo-random for visual interest
function ActivityGrid() {
  const seed = (r, c) => {
    const v = Math.abs(Math.sin(r * 17 + c * 31 + r * c * 7) * 1000) % 1;
    if (v < 0.55) return 'l0';
    if (v < 0.70) return 'l1';
    if (v < 0.82) return 'l2';
    if (v < 0.92) return 'l3';
    return 'l4';
  };
  const weeks = 26, days = 7;
  return (
    <div className="output-section">
      <div className="output-label" style={{ marginBottom: 8 }}>Activity — Last 6 Months</div>
      <div className="activity-grid">
        {Array.from({ length: days }, (_, r) => (
          <div key={r} className="activity-row">
            {Array.from({ length: weeks }, (_, c) => (
              <div
                key={c}
                className={`activity-cell activity-${seed(r, c)}`}
                title={`Week ${c + 1}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 6, fontSize: 11, color: 'var(--text-muted)' }}>
        Contributions across GitHub repos • github.com/{OWNER.github}
      </div>
    </div>
  );
}

export function executeCommand(cmd, addOutput, clearHistory) {
  const raw = cmd.trim();
  const lower = raw.toLowerCase();

  switch (lower) {
    case 'help':
      addOutput(raw, <HelpOutput />);
      break;

    case 'about':
      addOutput(raw, <AboutOutput />);
      break;

    case 'skills':
      addOutput(raw, <SkillsOutput />);
      break;

    case 'experience':
      addOutput(raw, <ExperienceOutput />);
      break;

    case 'cat projects':
      addOutput(raw, <ProjectsOutput />);
      break;

    case 'education':
      addOutput(raw, <EducationOutput />);
      break;

    case 'achievements':
      addOutput(raw, <AchievementsOutput />);
      break;

    case 'contact':
      addOutput(raw, <ContactOutput />);
      break;

    case 'github':
      addOutput(raw, (
        <div className="output-section">
          <span className="output-success">↗ Opening GitHub profile…</span>
        </div>
      ));
      setTimeout(() => window.open(OWNER.githubUrl, '_blank'), 300);
      break;

    case 'linkedin':
      addOutput(raw, (
        <div className="output-section">
          <span className="output-success">↗ Opening LinkedIn profile…</span>
        </div>
      ));
      setTimeout(() => window.open(OWNER.linkedinUrl, '_blank'), 300);
      break;

    case 'resume':
      addOutput(raw, (
        <div className="output-section">
          <div style={{ color: 'var(--prompt-green)', marginBottom: 10, fontSize: 13 }}>
            Lakshay_Verma_Resume.pdf — ready
          </div>
          <a
            href={OWNER.resumeViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              background: 'rgba(88,166,255,0.08)',
              border: '1px solid rgba(88,166,255,0.3)',
              borderRadius: 6,
              color: 'var(--prompt-blue)',
              fontSize: 13,
              textDecoration: 'none',
            }}
          >
            ↗ View on Google Drive
          </a>
        </div>
      ));
      break;

    case 'neofetch':
      addOutput(raw, <NeofetchOutput />);
      break;

    case 'activity':
      addOutput(raw, <ActivityGrid />);
      break;

    case 'whoami':
      addOutput(raw, (
        <div className="output-section">
          <div style={{ color: 'var(--prompt-green)', fontWeight: 600 }}>{OWNER.name}</div>
          {OWNER.roles.map(r => (
            <div key={r} style={{ color: 'var(--text-secondary)', fontSize: 13 }}>  {r}</div>
          ))}
        </div>
      ));
      break;

    case 'clear':
      clearHistory();
      break;

    case '':
      break;

    default:
      addOutput(raw, (
        <div className="output-section">
          <span className="output-error">
            bash: {raw}: command not found
          </span>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
            Type <span style={{ color: 'var(--prompt-cyan)' }}>help</span> to see available commands.
          </div>
        </div>
      ));
  }
}
