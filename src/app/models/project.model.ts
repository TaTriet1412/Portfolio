export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'backend' | 'fullstack' | 'microservices';
  techStack: string[];
  highlights: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  role?: string;
  architectureHighlights?: string[];
  stats?: ProjectStat[];
}
