// @desc    Health check / API info
// @route   GET /api
// @access  Public
const getApiInfo = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Keerthan Poovaiah Portfolio API',
    version: '1.0.0',
    author: 'Keerthan Poovaiah M M',
    endpoints: {
      contact: 'POST /api/contact',
      health: 'GET /api/health',
    },
  });
};

// @desc    Health check
// @route   GET /api/health
// @access  Public
const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
};

// @desc    Get portfolio data (projects, skills, etc.)
// @route   GET /api/portfolio
// @access  Public
const getPortfolioData = (req, res) => {
  const portfolioData = {
    personal: {
      name: 'Keerthan Poovaiah M M',
      title: 'Backend Developer',
      email: 'keerthan11poovaiah@gmail.com',
      github: 'https://github.com/keerthan-poovaiah',
      linkedin: 'https://linkedin.com/in/keerthan-poovaiah',
      phone: '+916364248737',
      location: 'Bengaluru, Karnataka, IN',
      cgpa: 8.97,
      graduating: 'June 2026',
      college: 'New Horizon College of Engineering',
      degree: 'B.E. in Computer Science & Engineering (Data Science)',
    },
    skills: {
      languages: ['JavaScript (ES6+)', 'Java', 'Python', 'C'],
      backend: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO'],
      frontend: ['React.js', 'React Native (Expo)', 'HTML5', 'CSS3', 'Vite.js', 'Streamlit'],
      databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
      mlAI: ['TensorFlow', 'Scikit-learn', 'OpenCV'],
      tools: ['Git', 'GitHub', 'Firebase', 'JWT', 'RBAC', 'Postman', 'Tableau'],
      core: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'OS', 'Computer Networks', 'Agile'],
    },
    projects: [
      {
        id: 1,
        name: 'SyncTalk',
        subtitle: 'Real-Time Chat Platform',
        description:
          'Full-stack real-time messaging platform supporting concurrent multi-user communication using Socket.IO WebSockets, reducing message latency compared to polling approaches. JWT-based stateless authentication with RESTful API design.',
        stack: ['React.js', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'JWT'],
        github: 'https://github.com/Keerthan-poovaiah/SyncTalk',
        live: null,
        featured: true,
        date: 'Apr 2026 – May 2026',
        highlights: ['WebSocket real-time comms', 'JWT stateless auth', 'Multi-user concurrent rooms'],
      },
      {
        id: 2,
        name: 'SupportDesk',
        subtitle: 'Ticket Management System',
        description:
          'End-to-end support ticketing system with RBAC, enabling distinct workflows for admins, agents and end users. Priority-tiered ticket routing and status-tracking APIs with a PostgreSQL relational schema.',
        stack: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'JWT', 'RBAC'],
        github: 'https://github.com/Keerthan-poovaiah/SupportDesk',
        live: null,
        featured: false,
        date: 'Mar 2026',
        highlights: ['RBAC multi-role system', 'Priority ticket routing', 'PostgreSQL schema design'],
      },
      {
        id: 3,
        name: 'VigiLynx',
        subtitle: 'Phishing & Malware Detection Platform',
        description:
          'Cybersecurity platform integrating the VirusTotal API with a custom-trained ML model achieving 92%+ classification accuracy. Dynamic URL/file-scan switching, community forum, and real-time threat news feed.',
        stack: ['React (Vite.js)', 'Node.js', 'Flask', 'VirusTotal API', 'Scikit-learn', 'TensorFlow'],
        github: 'https://github.com/keerthan-poovaiah',
        live: null,
        featured: false,
        date: 'Feb 2025',
        highlights: ['92%+ ML accuracy', 'VirusTotal API integration', 'Real-time threat feed'],
        award: 'HackAthena 2025 Winner — #1 of 50+ teams',
      },
    ],
    achievements: [
      {
        title: 'HackAthena Cybersecurity Track — Winner',
        description: 'Ranked 1st among 50+ teams building a scalable full-stack threat detection platform with ML backend.',
        year: '2025',
        type: 'hackathon',
      },
      {
        title: 'College Ideathon — 2nd Place',
        description: 'Recognised for a practical real-world AI solution judged on impact and technical execution.',
        year: '2024',
        type: 'competition',
      },
      {
        title: 'Board Member — Data Analytics Club',
        description: 'Planned and executed workshops for 100+ members. Managed social media and event coordination.',
        year: '2024–2025',
        type: 'leadership',
      },
    ],
  };

  res.status(200).json({ success: true, data: portfolioData });
};

module.exports = { getApiInfo, healthCheck, getPortfolioData };
