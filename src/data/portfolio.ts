export const profile = {
  name: 'Ramika Dinan Dayananda',
  role: 'Frontend / Full-Stack Developer',
  school: 'Centennial College',
  program: 'Software Engineering Technology',
  credential: 'Advanced Diploma',
  studyStart: 'January 2025',
  studyEnd: 'April 2027',
  studyStartISO: '2025-01',
  studyEndISO: '2027-04',
  gpa: '3.9',
  email: 'ramikadinan01@gmail.com',
  github: 'https://github.com/ramika-dayananda',
  githubLabel: 'github.com/ramika-dayananda',
  linkedin: 'https://www.linkedin.com/in/ramika-dayananda',
  linkedinLabel: 'linkedin.com/in/ramika-dayananda',
  availability: 'Open to Software / Co-op Opportunities',
  resumeUrl: null as string | null,
}

export const site = {
  title: 'Ramika Dinan Dayananda | Frontend & Full-Stack Developer',
  description:
    'Portfolio of Ramika Dinan Dayananda, a frontend and full-stack developer studying Software Engineering Technology at Centennial College.',
  url: 'https://ramika-portfolio-ws1g.vercel.app',
}

export const resumeHref =
  profile.resumeUrl ??
  `mailto:${profile.email}?subject=${encodeURIComponent('Resume request')}`

export const projectFilters = ['All', 'Frontend', 'Full Stack', 'Backend', 'Database', 'AI'] as const
export type ProjectFilter = (typeof projectFilters)[number]
export type ProjectTag = Exclude<ProjectFilter, 'All'>

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  id: string
  title: string
  subtitle: string
  category: string
  role: string
  summary: string
  contributions: string[]
  stack: string[]
  filters: ProjectTag[]
  featured: boolean
  visual: 'calm' | 'rent' | 'plate' | 'fitness' | 'game' | 'retail'
  links: ProjectLink[]
  note?: string
}

export const projects: Project[] = [
  {
    id: 'buddhacalm',
    title: 'BuddhaCalm',
    subtitle: 'AI-Powered Relief & Coaching',
    category: 'Hackathon · 1st place',
    role: 'Full-Stack Developer & Integration',
    summary:
      'WIMTACH Hackathon, September 2026. I worked on the integration side of an AI-powered relief and coaching app and helped the team deliver a working build on a short deadline.',
    contributions: [
      'Connected the frontend, backend, REST API, and AI-powered session flow.',
      'Worked with React, Node, and Express.',
      'Supported integration testing through the final handoff.',
    ],
    stack: ['React', 'Node.js', 'Express', 'REST APIs', 'Integration Testing'],
    filters: ['Full Stack', 'Frontend', 'Backend', 'AI'],
    featured: true,
    visual: 'calm',
    links: [],
  },
  {
    id: 'campusrent',
    title: 'CampusRent',
    subtitle: 'Full-Stack Rental Platform',
    category: 'Team project',
    role: 'Agile Customer / Scrum Master',
    summary:
      'A rental platform built with a six-person Agile team. I served as Agile Customer and Scrum Master and worked across the product from the React UI to the API and database.',
    contributions: [
      'Worked with React, Node.js, Express, and SQL.',
      'Covered authentication, REST APIs, user messaging, and listing management.',
      'Kept the team moving in Agile ceremonies as Scrum Master.',
    ],
    stack: ['React', 'Node.js', 'Express', 'SQL', 'REST APIs', 'Agile'],
    filters: ['Full Stack', 'Frontend', 'Backend', 'Database'],
    featured: true,
    visual: 'rent',
    links: [],
  },
  {
    id: 'smartplate',
    title: 'SmartPlate AI',
    subtitle: 'Meal photo analysis',
    category: 'CentennialHacks 2026',
    role: 'Full-Stack Developer',
    summary:
      'A CentennialHacks 2026 app that turns a meal photo into educational health and sustainability notes. React and TypeScript on the front end, Node and Express on the back, with Google Gemini kept on the server.',
    contributions: [
      'Meal photo upload with Gemini analysis running on the Express API.',
      'Health and sustainability notes, swaps, and a voice or text assistant.',
      'Demo mode with sample results when no API key is configured.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Gemini'],
    filters: ['Full Stack', 'Frontend', 'Backend', 'AI'],
    featured: true,
    visual: 'plate',
    links: [
      { label: 'GitHub', href: 'https://github.com/ramika-dayananda/SmartPlate-AI' },
      { label: 'Live demo', href: 'https://smart-plate-ai-six.vercel.app' },
    ],
    note: 'The live demo uses sample results if Gemini is not configured on the server.',
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker App',
    subtitle: 'Workout logging',
    category: 'Full stack',
    role: 'Developer',
    summary:
      'A full-stack app for logging exercises, sets, reps, and workout history, with a React front end and persistent storage.',
    contributions: [
      'Exercise logging with set and rep tracking.',
      'Workout history backed by stored data.',
      'React interface with a Node.js and SQL backend.',
    ],
    stack: ['React', 'Node.js', 'SQL'],
    filters: ['Full Stack'],
    featured: false,
    visual: 'fitness',
    links: [],
  },
  {
    id: 'bug-smasher',
    title: 'Bug Smasher Game',
    subtitle: 'Interactive browser game',
    category: 'Frontend',
    role: 'Developer',
    summary:
      'An interactive game built around a clear interface and direct feedback, using JavaScript and React.',
    contributions: [
      'Browser gameplay with a simple board.',
      'Interface work focused on readable feedback.',
    ],
    stack: ['JavaScript', 'React'],
    filters: ['Frontend'],
    featured: false,
    visual: 'game',
    links: [],
  },
  {
    id: 'retail-database',
    title: 'Retail Database System',
    subtitle: 'Inventory and reporting',
    category: 'Database',
    role: 'Developer',
    summary:
      'A database-driven system for retail operations, with data modeling, SQL, and a backend for inventory and reporting.',
    contributions: [
      'Data modeling and SQL queries.',
      'Backend integration for inventory and reporting.',
    ],
    stack: ['C#', 'Java', 'SQL'],
    filters: ['Database', 'Backend'],
    featured: false,
    visual: 'retail',
    links: [],
  },
]

export const experience = {
  role: 'Full-Stack Developer',
  org: 'Budtenders Association Inc.',
  context: 'Riipen Project · Remote',
  start: 'July 2026',
  end: 'August 2026',
  startISO: '2026-07',
  endISO: '2026-08',
  bullets: [
    'Contributed to LMS features in a Next.js and Payload CMS app, including course, module, and member-progress workflows.',
    'Built TypeScript contracts and mock data, and worked on module progress and application-state logic.',
    'Created and worked with integration tests, then helped integrate and validate features.',
    'Collaborated with front-end, back-end, and design teammates through GitHub and Agile.',
  ],
  stack: ['Next.js', 'Payload CMS', 'TypeScript', 'Integration Testing', 'GitHub', 'Agile'],
}

export const award = {
  place: '1st',
  event: 'WIMTACH Hackathon',
  date: 'September 2026',
  dateISO: '2026-09',
  project: 'BuddhaCalm',
  projectLine: 'AI-Powered Relief & Coaching',
  role: 'Full-Stack Developer & Integration',
  summary:
    'I connected the frontend, backend, REST API, and AI-powered session flow, and supported integration testing so the team could hand in a working product.',
  stack: ['React', 'Node.js', 'Express', 'REST APIs', 'Integration Testing'],
}

export type SkillGroup = {
  id: string
  index: string
  title: string
  note: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    index: '01',
    title: 'Frontend',
    note: 'Interfaces for the Budtenders LMS, CampusRent, BuddhaCalm, and SmartPlate.',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  },
  {
    id: 'backend',
    index: '02',
    title: 'Backend & APIs',
    note: 'Node and Express on team and hackathon builds, plus Python and REST APIs.',
    items: ['Node.js', 'Express', 'Python', 'REST APIs'],
  },
  {
    id: 'data',
    index: '03',
    title: 'Data',
    note: 'SQL on CampusRent and a retail database system. Payload CMS on the LMS. MongoDB and Oracle SQL Developer are part of the toolkit.',
    items: ['SQL', 'MongoDB', 'Oracle SQL Developer', 'Payload CMS'],
  },
  {
    id: 'cloud',
    index: '04',
    title: 'Cloud',
    note: 'Platforms I work with.',
    items: ['AWS', 'Azure'],
  },
  {
    id: 'workflow',
    index: '05',
    title: 'Testing & Workflow',
    note: 'Integration tests on the LMS and at WIMTACH. GitHub and Agile on team projects.',
    items: ['Integration Testing', 'Postman', 'Git', 'GitHub', 'Jira', 'Agile / Scrum'],
  },
  {
    id: 'practice',
    index: '06',
    title: 'Practice',
    note: 'The work that shows up on almost every project.',
    items: ['Debugging', 'Client-server workflows', 'Responsive UI', 'Application-state logic'],
  },
]

export const achievements = [
  {
    id: 'wimtach',
    kicker: 'Hackathon',
    title: '1st Place — WIMTACH Hackathon',
    meta: 'September 2026',
    metaISO: '2026-09',
    detail: 'BuddhaCalm. Full-stack integration for an AI-powered relief and coaching app.',
  },
  {
    id: 'gpa',
    kicker: 'Academics',
    title: '3.9 GPA',
    meta: 'Centennial College',
    detail: 'Current GPA in the Advanced Diploma, Software Engineering Technology.',
  },
]

export const volunteer = {
  org: 'Mathastronauts',
  role: 'Math / Science Teaching Assistant',
  start: 'March 2023',
  end: 'November 2023',
  startISO: '2023-03',
  endISO: '2023-11',
  bullets: [
    'Taught Scratch and block-based programming.',
    'Helped middle-school students develop computational-thinking skills.',
    'Supported teachers and worked collaboratively with other students.',
  ],
}

export const stats = [
  { value: '3.9', label: 'GPA' },
  { value: '1st', label: 'WIMTACH Hackathon' },
  { value: '2027', label: 'Expected Graduation' },
  { value: 'Full-Stack', label: 'Professional Experience', word: true },
]
