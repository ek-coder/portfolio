import React from 'react';

export default function HelpOutput() {
  const commands = [
    { cmd: 'about',        desc: 'Who is Lakshay Verma' },
    { cmd: 'skills',       desc: 'Technical skill stack' },
    { cmd: 'experience',   desc: 'Work experience & internships' },
    { cmd: 'cat projects', desc: 'View all projects with details & repo links' },
    { cmd: 'education',    desc: 'Academic background' },
    { cmd: 'achievements', desc: 'Hackathons & competitions' },
    { cmd: 'contact',      desc: 'Email, GitHub, LinkedIn' },
    { cmd: 'github',       desc: 'Open GitHub profile' },
    { cmd: 'linkedin',     desc: 'Open LinkedIn profile' },
    { cmd: 'resume',       desc: 'Download resume PDF' },
    { cmd: 'neofetch',     desc: 'System info & ASCII profile card' },
    { cmd: 'whoami',       desc: 'Current user identity' },
    { cmd: 'clear',        desc: 'Clear terminal output' },
  ];

  return (
    <div className="output-section">
      <div className="output-label" style={{ marginBottom: 10 }}>Available Commands</div>
      <table className="help-table">
        <tbody>
          {commands.map(({ cmd, desc }) => (
            <tr key={cmd}>
              <td>{cmd}</td>
              <td>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 10, fontSize: 12, color: 'var(--text-muted)' }}>
        Tip: Press <span style={{ color: 'var(--prompt-blue)' }}>Tab</span> to autocomplete &nbsp;|&nbsp;
        <span style={{ color: 'var(--prompt-blue)' }}>↑↓</span> to navigate history
      </div>
    </div>
  );
}
