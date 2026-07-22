export const personalInfo = {
  name: "Sams Tabrez",
  tagline: "Code, Create & Innovate!",
  bio: "Building modern web applications, scalable backends, and delightful user experiences with TypeScript, React, Node.js ,FastAPI",
  email: "tabreznitr@gmail.com",
  location: "India",
  resumeUrl: "#",
  avatar: "/pfp_github.jpg",
  bannerLight: "/images/banner-light.png",
  bannerDark: "",
};

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/tabrez-nitr",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tabrez-sams-2410a7204/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://x.com/sams_codex",
    icon: "twitter",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/04tabrez",
    icon: "codeforces",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/04tabrez/",
    icon: "leetcode",
  },
];

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  logo: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  // {
  //   company: "Tech Corp",
  //   role: "Senior Frontend Engineer",
  //   startDate: "Jan 2025",
  //   endDate: "Present",
  //   location: "Remote",
  //   logo: "🏢",
  //   description: [
  //     "Led the frontend architecture for a large-scale SaaS platform serving 50K+ users",
  //     "Implemented design system with 40+ reusable components reducing development time by 35%",
  //     "Optimized Core Web Vitals scores achieving 95+ on Lighthouse across all pages",
  //   ],
  //   technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  // }
];

export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Repo Reviewer",
    description:
      "AI-Powered Code Review System: Built with FastAPI, LangChain, Gemini 3.1 Flash Lite, and Next.js to analyze local/GitHub repositories and generate structured security, quality, and performance reviews with severity-based, actionable recommendations.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "LangChain"],
    githubUrl: "https://github.com/tabrez-nitr/code_review",
    liveUrl: "https://code-review-ten-bice.vercel.app/",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "ignochat",
    description:
      `A real-time, anonymous, room-based chat app with a sleek dark design. Create or join private "voids" using secure 6-character room codes. Rooms exist only in server memory and are automatically deleted when the admin leaves, ensuring simplicity and privacy.`,
    technologies: ["Nodejs", "Expressjs", "Socket.io", "React"],
    githubUrl: "https://github.com/tabrez-nitr/ignochat",
    liveUrl: "https://ignochat.vercel.app/",
    gradient: "from-sky-500/20 to-cyan-500/20",
  },
  {
    title: "Notes Gini",
    description:
      "Notes Gini is an AI-powered note-taking application that helps you create, edit, and manage notes—while using Google's Gemini API to instantly summarize or rewrite them. Built with a clean UI and seamless user experience in mind.",
    technologies: ["JavaScript", "React" ,"HTML", "CSS" ,"Bootstrap" , "Google Gemini API"],
    githubUrl: "https://github.com/tabrez-nitr/Notes-Gini",
    liveUrl: "https://notes-gini.vercel.app/",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Screen Sense AI",
    description:
      `ScreenSense AI is a sleek, modern chat interface powered by the Gemini AI model. It features a completely custom, responsive "void" design—focusing on minimalist monochrome aesthetics, glassmorphism, and smooth micro-animations.`,
    technologies: ["React", "Google Gemini API",],
    githubUrl: "https://github.com/tabrez-nitr/SreenSenseAI",
    liveUrl: "https://sreen-sense-ai.vercel.app/",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export interface TechCategory {
  name: string;
  items: { name: string; icon: string }[];
}

export const techStack: TechCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name : "Java", icon:"devicon-java-plain"}
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", icon: "devicon-react-original" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original" },
      { name: "HTML5", icon: "devicon-html5-plain" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "Redis", icon: "devicon-redis-plain" },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "VS Code", icon: "devicon-vscode-plain" },
      { name: "Obsidian", icon: "ri-markdown-line" },
    ],
  },
  {
    name: "AI Frameworks",
    items: [
      { name: "LangChain", icon: "ri-link-m" },
      { name: "LangGraph", icon: "ri-node-tree" },
      { name: "LangSmith", icon: "ri-tools-line" },
    ],
  },
];
