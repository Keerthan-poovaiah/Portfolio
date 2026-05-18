// Fallback data used if API is unreachable
export const PERSONAL = {
  name: 'Keerthan Poovaiah M M',
  title: 'Software Developer',
  email: 'keerthan11poovaiah@gmail.com',
  github: 'https://github.com/keerthan-poovaiah',
  linkedin: 'https://linkedin.com/in/keerthan-poovaiah',
  phone: '+916364248737',
  location: 'Bengaluru, IN',
  cgpa: 8.97,
  graduating: 'June 2026',
  college: 'New Horizon College of Engineering',
  degree: 'B.E. in Computer Science & Engineering (Data Science)',
};

export const STACK_MARQUEE = [
  'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL',
  'Socket.IO', 'REST APIs', 'JWT · RBAC', 'React.js',
  'React Native', 'Python', 'Java', 'TensorFlow',
  'Scikit-learn', 'Git · GitHub', 'Firebase', 'Vite.js',
];

export const SKILLS = [
  {
    icon: '⚙️', name: 'Backend Engineering', color: '#00e87a',
    desc: 'Building production-grade REST APIs with Node.js and Express — MVC architecture, middleware pipelines, error handling, and clean code patterns.',
    tags: [{ label: 'Node.js', type: 'g' }, { label: 'Express.js', type: 'g' }, { label: 'REST API', type: 'g' }, { label: 'MVC', type: 'g' }],
  },
  {
    icon: '🗄️', name: 'Databases', color: '#7b6fff',
    desc: 'Designing schemas and writing efficient queries across relational (PostgreSQL, MySQL) and document (MongoDB) databases with ORMs and raw queries.',
    tags: [{ label: 'MongoDB', type: 'p' }, { label: 'PostgreSQL', type: 'p' }, { label: 'MySQL', type: 'p' }, { label: 'Mongoose', type: 'p' }],
  },
  {
    icon: '🔐', name: 'Auth & Security', color: '#ff6b6b',
    desc: 'Implementing secure auth flows — JWT stateless sessions, bcrypt hashing, role-based access control (RBAC), and input validation middleware.',
    tags: [{ label: 'JWT', type: 'r' }, { label: 'RBAC', type: 'r' }, { label: 'bcrypt', type: 'r' }, { label: 'Middleware', type: 'r' }],
  },
  {
    icon: '🌐', name: 'Frontend', color: '#7b6fff',
    desc: 'Not just backend — I ship complete features with React.js, React Native, and Streamlit. Comfortable owning the entire product delivery.',
    tags: [{ label: 'React.js', type: 'p' }, { label: 'React Native', type: 'p' }, { label: 'Vite.js', type: 'p' }, { label: 'Streamlit', type: 'p' }],
  },
  {
    icon: '⚡', name: 'Real-time Systems', color: '#00e87a',
    desc: 'WebSocket-based real-time communication with Socket.IO — multi-user messaging, online presence tracking, and room management with minimal latency.',
    tags: [{ label: 'Socket.IO', type: 'g' }, { label: 'WebSockets', type: 'g' }, { label: 'Events', type: 'g' }, { label: 'Rooms', type: 'g' }],
  },
  {
    icon: '🤖', name: 'ML & AI Integration', color: '#ff9d6c',
    desc: 'Building and integrating ML models into production backends — classification, threat detection (92%+ accuracy), and Flask API bridges for Python models.',
    tags: [{ label: 'TensorFlow', type: 'o' }, { label: 'Scikit-learn', type: 'o' }, { label: 'OpenCV', type: 'o' }, { label: 'Flask', type: 'o' }],
  },
];

export const PROJECTS = [
  {
    id: 1, featured: true, date: 'Apr – May 2026',
    name: 'SyncTalk', subtitle: 'Real-Time Chat Platform',
    description: 'Full-stack real-time messaging platform supporting concurrent multi-user communication using Socket.IO WebSockets. JWT-based stateless authentication with RESTful API endpoints, secure session management, and MongoDB persistence.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'React.js'],
    github: 'https://github.com/Keerthan-poovaiah/SyncTalk', live: null,
    highlights: ['WebSocket real-time comms', 'JWT stateless auth', 'Concurrent rooms'],
  },
  {
    id: 2, featured: false, date: 'Mar 2026',
    name: 'SupportDesk', subtitle: 'Ticket Management System',
    description: 'End-to-end support ticketing backend with RBAC — distinct workflows for admins, agents, and users. Priority-tiered ticket routing, status-tracking APIs, and a PostgreSQL relational schema built for auditability.',
    stack: ['PostgreSQL', 'Express.js', 'Node.js', 'JWT', 'RBAC', 'React.js'],
    github: 'https://github.com/Keerthan-poovaiah/SupportDesk', live: null,
    highlights: ['RBAC multi-role system', 'Priority ticket routing', 'PostgreSQL schema'],
  },
  {
    id: 3, featured: false, date: 'Feb 2025',
    name: 'VigiLynx', subtitle: 'Phishing & Malware Detection',
    description: 'Cybersecurity platform integrating VirusTotal API with a custom ML model achieving 92%+ classification accuracy. Dynamic URL/file-scan switching, community forum, and real-time threat news feed. HackAthena 2025 winner.',
    stack: ['React (Vite)', 'Node.js', 'Flask', 'Scikit-learn', 'TensorFlow', 'VirusTotal API'],
    github: 'https://github.com/keerthan-poovaiah', live: null,
    highlights: ['92%+ ML accuracy', 'VirusTotal API', 'Real-time threat feed'],
    award: '🏆 HackAthena 2025 — #1 of 50+ teams',
  },
];

export const ACHIEVEMENTS = [
  {
    icon: '🏆', title: 'HackAthena — Cybersecurity Track Winner',
    desc: 'Ranked 1st among 50+ teams building a full-stack threat detection platform with an ML-powered backend achieving 92%+ accuracy.',
    year: '2025 · 1st Place',
  },
  {
    icon: '🥈', title: 'College Ideathon — 2nd Place',
    desc: 'Recognised for a practical, real-world AI solution judged on engineering impact and technical execution quality.',
    year: '2024 · Runner-Up',
  },
  {
    icon: '📊', title: 'Board Member — Data Analytics Club',
    desc: 'Planned and executed technical workshops for 100+ club members. Managed social media and event coordination.',
    year: '2024–2025 · Leadership',
  },
  {
    icon: '🎓', title: 'Academic Excellence — 8.97 CGPA',
    desc: 'Consistently high academic performance across DSA, DBMS, OS, Networks, and OOP — while shipping production projects.',
    year: '2022–2026 · NHCE',
  },
];
