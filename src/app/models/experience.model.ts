export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  type: 'work' | 'education' | 'leadership' | 'certification';
  summary: string;
  responsibilities: string[];
  techStack?: string[];
  gpaOrScore?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Language' | 'Certification' | 'Academic' | 'Competition';
  badge: string;
  scoreBreakdown?: {
    label: string;
    score: string;
  }[];
  levelEquivalent?: string;
  issuerOrYear: string;
  status: 'verified' | 'in_progress' | 'upcoming';
  description: string;
  credentialUrl?: string;
}
