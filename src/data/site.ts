export const site = {
  name: 'Muhammad Ilyas',
  initials: 'MI',
  title: 'Software Engineer | Full-Stack Development',
  description: 'Software Engineering student building thoughtful full-stack products with Python, Django, React, Linux, and Docker.',
  location: 'Mingora, Swat, Pakistan',
  email: 'ilyaskhanqwer0088@gmail.com',
  github: 'https://github.com/ilyaskhan15',
  linkedin: 'https://www.linkedin.com/in/muhammad-ilyas-61923a410/',
  photo: 'images/profile.jpg',
  resume: 'resume.pdf'
} as const;

export const about = 'Software Engineering student skilled in Python, Django, React, Linux, and Docker, with hands-on experience developing eCommerce platforms, ToDo applications, and student management systems. Detail-oriented and eager to apply strong full-stack fundamentals in a professional development role.';

export const education = [
  { degree: "Bachelor's Degree in Software Engineering", school: 'University of Swat, Mingora', dates: '2022 - 2026', result: 'GPA 3.25' },
  { degree: 'Intermediate (F.Sc Pre-Engineering)', school: 'Govt. Jahanzeb College Saidu Sharif, Swat', dates: '2020 - 2022', result: '74%' },
  { degree: 'Secondary (Science)', school: 'Lyceum Model High School, Mingora', dates: '2009 - 2020', result: '79%' }
] as const;

export const experience = {
  role: 'Software Developer (Independent)',
  company: 'Self-Directed Software Projects',
  location: 'Mingora',
  dates: '2023 - Present',
  bullets: [
    'Built and deployed an eCommerce platform, a ToDo application, and a student management system using Python, Django, and React',
    'Managed version control and collaborative workflows using Git/GitHub',
    'Practiced containerization and deployment using Docker on Linux environments'
  ]
} as const;

export const skillGroups = [
  { label: 'Languages', items: ['Python', 'JavaScript'] },
  { label: 'Frameworks', items: ['Django', 'React'] },
  { label: 'Web', items: ['HTML5', 'CSS3', 'REST APIs'] },
  { label: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Docker'] },
  { label: 'OS', items: ['Linux and terminal'] },
  { label: 'Soft skills', items: ['Problem-solving', 'Teamwork', 'Adaptability', 'Quick Learning'] }
] as const;

export const languages = [
  { name: 'Pashto', level: 'Mother tongue', details: '' },
  { name: 'Urdu', level: 'C1', details: 'Listening, reading, speaking, and writing' },
  { name: 'English', level: 'B2 / B1', details: 'B2 listening; B1 reading, spoken production, spoken interaction, and writing' }
] as const;

export const interests = ['Football (regular player since childhood)', 'Traveling (loves exploring new places)'] as const;
