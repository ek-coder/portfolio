// All portfolio content lives here — easy to update

export const OWNER = {
  name: 'Lakshay Verma',
  roles: ['CS Undergrad @ SRMIST', 'Full Stack Developer', 'AI Developer'],
  status: 'Open to internships and collaborations',
  email: 'lv6034@srmist.edu.in',
  phone: '+91 7982439778',
  github: 'ek-coder',
  githubUrl: 'https://github.com/ek-coder',
  linkedin: 'ek-coder',
  linkedinUrl: 'https://linkedin.com/in/ek-coder',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1sFps3ZW0PZ57uECoUfWDzah-a4T7cLzx',
  resumeViewUrl: 'https://drive.google.com/file/d/1sFps3ZW0PZ57uECoUfWDzah-a4T7cLzx/view?usp=sharing',
};

export const ABOUT = `Computer Science undergraduate at SRM Institute of Science and Technology (2023–2027) with hands-on experience in Data Analytics, AI-driven application development, and full-stack engineering.

Worked as a Data Analyst Intern at ONGC, using SAS Analytics to analyze datasets and build visual reports. Built AI-based systems including healthcare chatbots, automation platforms, and ML-powered prediction models using Flask, React, MySQL, and REST APIs.

Also co-founded yocto — a hyperlocal medicine delivery startup — where I designed operational workflows, coordinated with vendors, and conducted user research to refine business strategy.

Passionate about translating real-world ideas into scalable technical solutions.`;

export const SKILLS = [
  {
    category: 'Programming',
    color: '#58a6ff',
    items: ['C++', 'Python', 'Java', 'JavaScript'],
  },
  {
    category: 'Web & Backend',
    color: '#7ee787',
    items: ['React.js', 'Flask', 'Node.js', 'REST APIs', 'System Design', 'Jinja2'],
  },
  {
    category: 'AI & Data Analytics',
    color: '#bc8cff',
    items: [
      'Machine Learning',
      'Computer Vision',
      'Prompt Engineering',
      'LLM Integration',
      'SAS Analytics',
      'Data Visualization',
    ],
  },
  {
    category: 'Database',
    color: '#f85149',
    items: ['MySQL'],
  },
  {
    category: 'Tools & Platforms',
    color: '#39d353',
    items: ['Git', 'GitHub', 'Gmail API', 'Google Sheets', 'Excel'],
  },
];

export const EXPERIENCE = [
  {
    type: 'professional',
    role: 'Data Analyst Intern',
    company: 'ONGC (Oil and Natural Gas Corporation)',
    period: 'May 2024 – Jul 2024',
    responsibilities: [
      'Used SAS Analytics to analyze operational and statistical datasets for business reporting',
      'Designed dashboards to analyze HIV-related global datasets and identify meaningful trends',
      'Performed data cleaning, preprocessing, and transformation on multi-source datasets',
      'Generated analytical reports and insights for stakeholders via structured visual dashboards',
    ],
  },
  {
    type: 'entrepreneurial',
    role: 'Co-Founder',
    company: 'Yocto — 10-Min Medicine Delivery Startup',
    period: '2023 – 2024',
    responsibilities: [
      'Built an OCR + LLM pipeline to decode messy handwritten medical prescriptions automatically',
      'Won the campus incubation challenge — project spun into a live 10-minute medicine delivery pilot',
      'Ran 100+ real orders in ~18 days, crossed ₹1L+ GMV, and hit ~68% week-on-week growth',
      'Attracted early interest from Athena Venture Capital during the pilot phase',
      'Designed operational workflows, coordinated with vendors, and conducted user research',
      'Shut down when Zepto/Blinkit entered the space and unit economics broke — strategic exit',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'autism-ai',
    name: 'AutismAI',
    tagline: 'Early autism detection using ML & behavioral datasets',
    description:
      'Built a machine learning-based autism detection system using behavioral and M-CHAT datasets. Applied classification techniques and computer vision to improve prediction accuracy and analysis depth.',
    tech: ['Python', 'Machine Learning', 'Computer Vision'],
    repoUrl: null,
    color: '#bc8cff',
  },
  {
    id: 'ai-doctor',
    name: 'AI Doctor Chatbot',
    tagline: 'Healthcare chatbot powered by Gemini API',
    description:
      'Developed a healthcare chatbot using Flask backend, Gemini API integration, and MySQL database. Implemented REST APIs and prompt engineering techniques to improve AI-generated medical responses.',
    tech: ['Flask', 'Gemini API', 'MySQL', 'REST APIs', 'Prompt Engineering'],
    repoUrl: 'https://github.com/ek-coder/AI-DOCTOR-CHATBOT',
    color: '#58a6ff',
  },
  {
    id: 'r-mail',
    name: 'R-Mail',
    tagline: 'End-to-end email automation system',
    description:
      'Developed an automated email management platform using React, Flask, Node.js, and Gmail OAuth. Integrated frontend, backend, and API workflows to build a complete automation pipeline.',
    tech: ['React', 'Flask', 'Node.js', 'Gmail API', 'OAuth'],
    repoUrl: 'https://github.com/ek-coder/r-mail',
    color: '#7ee787',
  },
];

export const EDUCATION = [
  {
    institution: 'SRM Institute of Science and Technology',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2023 – 2027',
    cgpa: '8.73 / 10',
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Flipkart GRID 6.0',
    detail: "Qualified Level 1 of Flipkart's national engineering challenge",
  },
  {
    title: 'Execute 3.0 Hackathon — DTU',
    detail: 'Top 10 — rapid product prototyping and solution building',
  },
  {
    title: 'IdeaSpark — SRM',
    detail: 'Top 10 — innovative startup idea presentation',
  },
];

export const ALL_COMMANDS = [
  'help',
  'about',
  'skills',
  'experience',
  'cat projects',
  'education',
  'achievements',
  'contact',
  'github',
  'linkedin',
  'resume',
  'neofetch',
  'clear',
  'whoami',
];
