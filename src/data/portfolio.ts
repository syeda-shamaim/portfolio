export const personalInfo = {
  name: 'Syeda Shamaim Fatima',
  title: 'Software Engineer | Full Stack Developer',
  tagline: 'Building scalable web applications with React, Node.js, PHP, and Python.',
  email: 'khalidshamaim@gmail.com',
  location: 'Pakistan',
  social: {
    github: 'https://github.com/syeda-shamaim',
    linkedin: 'https://www.linkedin.com/in/syedashamaimfatima',
  },
  calendly: 'https://calendly.com/khalidshamaim/30min',
};

export const aboutBio = `I'm a Software Engineer with hands-on experience in full-stack web development using the MERN stack, PHP, and Python. I specialize in building modern, responsive web applications, REST APIs, and database-driven systems with clean architecture and thoughtful UI/UX. From corporate websites to community platforms, I deliver reliable solutions with maintainable code.`;

export const skillBadges = {
  programming: ['Python', 'PHP', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  frameworks: ['React.js', 'Next.js', 'Node.js', 'Express.js'],
  tools: ['MySQL', 'MongoDB', 'Supabase', 'Git', 'GitHub', 'Vercel', 'Netlify'],
  backend: ['REST APIs', 'MERN Stack', 'Laravel', 'Flask'],
};

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: 'work' | 'education';
  tasks: string[];
  companyUrl?: string;
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer Executive',
    company: 'Sprectex AI',
    period: 'Dec 2025 – Present',
    type: 'work',
    tasks: [
      'Developing web-based applications with React and Node.js',
      'Building scalable full-stack features and REST APIs',
      'Designing system architecture for client projects',
      'Client engagement and requirement analysis',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Zonix Tech',
    period: 'Jan 2026 – May 2026',
    type: 'work',
    companyUrl: 'https://www.zonixtechsolutions.com/',
    tasks: [
      'Project-based role developing the Zonix Tech corporate website',
      'Built responsive pages with React, Node.js, Express, and MongoDB',
      'Implemented services showcase, contact flows, and modern UI/UX',
      'Live site: zonixtechsolutions.com',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Sprectex AI',
    period: 'Sep 2025 – Nov 2025',
    type: 'work',
    tasks: [
      'Full-stack development of portfolio and e-commerce projects',
      'PHP and Python backend development with MySQL integration',
      'Data preprocessing and database management',
      'UI/UX design contributions',
    ],
  },
  {
    role: 'Bachelor of Science in Computer Science',
    company: 'University of Engineering and Technology',
    period: '2022 – 2026',
    type: 'education',
    tasks: ['Pursuing degree in Computer Science with focus on software engineering and web development'],
  },
  {
    role: 'Intermediate (Pre-Engineering)',
    company: 'Punjab Group of Colleges',
    period: '2020 – 2022',
    type: 'education',
    tasks: ['Completed pre-engineering with strong foundation in mathematics and physics'],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  imageFit?: 'cover' | 'contain';
  imageBg?: string;
  imageAspect?: 'video' | 'square' | 'banner';
}

export const projects: Project[] = [
  {
    id: 'zonix-tech',
    title: 'Zonix Tech Website',
    description: 'Corporate website for Zonix Tech — digital solutions and engineering services.',
    longDescription:
      'Developed the official Zonix Tech website featuring service listings, portfolio showcase, testimonials, and contact integration. Built with the MERN stack for a fast, responsive, and professional company presence.',
    image: '/images/zonix-tech.png',
    imageFit: 'cover',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://www.zonixtechsolutions.com/',
    featured: true,
  },
  {
    id: 'virtual-tryon',
    title: 'FYP: Lamsah Mirror — Virtual Try-On',
    description: 'Luxury fashion web app with virtual outfit try-on preview.',
    longDescription:
      'Final Year Project — Lamsah Mirror, a luxury fashion web application for virtual clothing preview. Built with React and Python, combining frontend interactivity with backend image processing for an immersive online shopping experience.',
    image: '/images/lamsah-mirror.png',
    imageFit: 'contain',
    imageBg: '#e8e0d4',
    tech: ['React', 'Python', 'Flask', 'OpenCV'],
    liveUrl: 'https://lamsah-mirror.vercel.app/',
    githubUrl: '#',
    featured: true,
  },
];

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  { name: 'React.js', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 88, category: 'Frontend' },
  { name: 'JavaScript', level: 92, category: 'Frontend' },
  { name: 'Node.js', level: 82, category: 'Backend' },
  { name: 'Express.js', level: 80, category: 'Backend' },
  { name: 'Python', level: 60, category: 'Backend' },
  { name: 'PHP', level: 60, category: 'Backend' },
  { name: 'MySQL', level: 80, category: 'Database' },
  { name: 'Supabase', level: 70, category: 'Database' },
  { name: 'MongoDB', level: 60, category: 'Database' },
  { name: 'Vercel & Netlify', level: 90, category: 'Deployment' },
  { name: 'Git & GitHub', level: 88, category: 'Tools' },
  { name: 'UI/UX Design', level: 80, category: 'Design' },
];

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const heroTags = ['React', 'Node.js', 'PHP', 'Python'];
