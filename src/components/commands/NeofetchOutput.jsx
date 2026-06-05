import React from 'react';
import { OWNER, SKILLS, PROJECTS, EDUCATION, EXPERIENCE } from '../../data/portfolio';

const ASCII_ART = `
  ██╗      █████╗ ██╗  ██╗
  ██║     ██╔══██╗██║ ██╔╝
  ██║     ███████║█████╔╝ 
  ██║     ██╔══██║██╔═██╗ 
  ███████╗██║  ██║██║  ██╗
  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
`.trim();

const COLORS = ['#ff5f57','#febc2e','#28c840','#58a6ff','#bc8cff','#39d353','#f85149','#d29922'];

export default function NeofetchOutput() {
  const totalSkills = SKILLS.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <div className="output-section">
      <div className="neofetch-container">
        <pre className="neofetch-ascii">{ASCII_ART}</pre>
        <div className="neofetch-info">
          <div style={{ color: 'var(--prompt-green)', fontWeight: 700, marginBottom: 6, fontSize: 15 }}>
            {OWNER.name}
          </div>
          <div style={{ borderBottom: '1px solid var(--border-subtle)', marginBottom: 8, paddingBottom: 4 }} />
          {[
            ['OS',        'Arch Linux (student edition)'],
            ['Shell',     'zsh 5.9'],
            ['Role',      OWNER.roles[1]],
            ['Focus',     OWNER.roles[2]],
            ['Education', EDUCATION[0].institution],
            ['Degree',    'B.Tech CSE 2023–2027'],
            ['CGPA',      EDUCATION[0].cgpa],
            ['Skills',    `${totalSkills} technologies`],
            ['Projects',  `${PROJECTS.length} shipped`],
            ['Startup',   'Co-Founder @ Yocto'],
            ['Status',    OWNER.status],
            ['GitHub',    `github.com/${OWNER.github}`],
            ['Email',     OWNER.email],
          ].map(([k, v]) => (
            <div key={k} className="neofetch-row">
              <span className="neofetch-key">{k}</span>
              <span style={{ color: 'var(--text-muted)' }}>~</span>
              <span className="neofetch-val" style={{ marginLeft: 6 }}>{v}</span>
            </div>
          ))}
          <div className="neofetch-colors">
            {COLORS.map(c => (
              <div key={c} className="neofetch-color-dot" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
