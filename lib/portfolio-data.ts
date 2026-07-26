export const profile = {
  name: 'Moyeellacheruvu Baba Kullayappa',
  shortName: 'Baba Kullayappa',
  initials: 'BK',
  location: 'Nandyal, Andhra Pradesh, India',
  email: 'mbabakullayappa776@gmail.com',
  phone: '+91 7671078039',
  github: 'https://github.com/BabaKullayappa13',
  linkedin: 'https://www.linkedin.com/in/baba-kullayappa-m-915163378',
  resume: '/kullayappa-resume.pdf',
  roles: [
    'Full Stack Developer',
    'AWS Cloud Enthusiast',
    'Python Developer',
    'React Developer',
    'AI & Machine Learning Enthusiast',
  ],
  summary:
    'Final-year Computer Science and Engineering student with a strong foundation in full-stack web development. Proficient in Python, Java, JavaScript, React.js, MongoDB, and AWS Cloud. Passionate about developing scalable software applications, solving real-world problems, and continuously learning modern technologies.',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const quickStats = [
  { label: 'Years Learning', value: 4, suffix: '+' },
  { label: 'Projects Built', value: 6, suffix: '+' },
  { label: 'Certifications', value: 4, suffix: '' },
  { label: 'GATE 2026 Score', value: 289, suffix: '' },
]

export const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    org: 'RGM College of Engineering & Technology (RGMCET), Nandyal',
    period: 'Aug 2024 – May 2027 (Expected)',
    score: 'CGPA 7.57',
  },
  {
    degree: 'Diploma in Computer Engineering',
    org: 'Govt Polytechnic College, Simhadripuram, Kadapa',
    period: 'Oct 2021 – May 2024',
    score: 'CGPA 8.66',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    org: 'Sri Vignan Vidyanikethan High School, Yerraguntla',
    period: '2021',
    score: 'CGPA 9.5 / 10',
  },
]

export const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'C', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 88 },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 72 },
      { name: 'MongoDB', level: 78 },
      { name: 'MySQL', level: 76 },
    ],
  },
  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Git & GitHub', level: 86 },
      { name: 'VS Code', level: 90 },
    ],
  },
]

export const aiTools = [
  'v0 by Vercel',
  'GitHub Copilot',
  'ChatGPT',
  'Lovable',
  'Base44',
]

export const techStack = [
  'Python',
  'Java',
  'JavaScript',
  'React',
  'Node.js',
  'MongoDB',
  'MySQL',
  'AWS',
  'HTML',
  'CSS',
  'Git',
  'GitHub',
]

export type Project = {
  title: string
  description: string
  tags: string[]
  category: string
  features: string[]
}

export const projects: Project[] = [
  {
    title: 'Library Management System',
    description:
      'A web-based library management platform to catalog books, manage issue/return workflows, and search the collection with an intuitive interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    features: ['Book Catalog', 'Issue & Return', 'Search'],
  },
  {
    title: 'AI-Enabled Multi-Factor Authentication for Cloud Security',
    description:
      'An AI-powered authentication framework that hardens cloud login security using machine learning models for anomaly detection and multi-factor verification.',
    tags: ['Python', 'Machine Learning', 'AWS'],
    category: 'AI / Cloud',
    features: ['AI Authentication', 'Cloud Security', 'Anomaly Detection'],
  },
]

export const experience = [
  {
    role: 'AWS Media & Entertainment Cloud Engineering Intern',
    org: 'AWS Skill Builder',
    period: 'Jun 2026 – Aug 2026',
    points: [
      'Learning AWS Cloud services, cloud engineering concepts, and media workflows through structured training.',
      'Completing hands-on labs and technical assessments using AWS cloud technologies.',
      'Building practical skills in cloud computing, media processing, and content delivery solutions.',
    ],
  },
]

export const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    link: 'https://drive.google.com/file/d/1WPinXb8jK1mW-tajq9bKQW1XnUtoIwyh/view?usp=drivesdk',
  },
  {
    title: 'SmartInternz Internship Certificate',
    issuer: 'SmartInternz',
    link: 'https://drive.google.com/file/d/155oTn1_LTZgiFVUVkoNrkBsRgZtGvb1L/view?usp=drivesdk',
  },
  {
    title: 'Zscaler Zero Trust Associate (ZTCA)',
    issuer: 'Zscaler',
    link: 'https://drive.google.com/file/d/1plNEmcXxoCGhx1v8rfEoLUVUTdrmITE1/view?usp=drivesdk',
  },
  {
    title: 'NPTEL Elite — Internet of Things (IoT)',
    issuer: 'NPTEL',
    link: 'https://drive.google.com/file/d/1kn_d0tkasWDHxsZnSmKQ1Arn_-XE7sux/view?usp=drivesdk',
  },
]

export const achievements = [
  {
    title: 'GATE 2026 Qualified',
    detail: 'Qualified GATE 2026 in Computer Science & Information Technology (CS & IT) with a GATE Score of 289.',
    highlight: 'Score 289',
  },
  {
    title: 'Student Coordinator',
    detail: 'Led RGM Code Rewind at Ripple 2026, RGMCET.',
    highlight: 'Ripple 2026',
  },
  {
    title: 'NPTEL Elite Certificate',
    detail: 'Earned the NPTEL Elite Certificate in Internet of Things (IoT).',
    highlight: 'Elite',
  },
  {
    title: 'AWS Learning Journey',
    detail: 'Actively completing AWS cloud labs and Cloud Practitioner certification.',
    highlight: 'Cloud',
  },
]

export const services = [
  {
    title: 'Full Stack Development',
    desc: 'End-to-end web apps with React front-ends and robust back-end logic.',
  },
  {
    title: 'React Development',
    desc: 'Fast, responsive, component-driven interfaces with modern React.',
  },
  {
    title: 'Python Applications',
    desc: 'Automation, ML prototypes, and scalable Python-powered tools.',
  },
  {
    title: 'Cloud Computing (AWS)',
    desc: 'Deploying and managing workloads on AWS cloud infrastructure.',
  },
  {
    title: 'AI Solutions',
    desc: 'Applied machine learning for security and real-world problem solving.',
  },
  {
    title: 'Responsive Websites & APIs',
    desc: 'Mobile-first, SEO-friendly sites backed by clean REST APIs.',
  },
]
