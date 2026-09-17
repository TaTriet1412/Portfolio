export interface SkillItem {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'devops';
  proficiency?: 'Expert' | 'Advanced' | 'Proficient' | 'Familiar';
  yearsOrExp?: string;
  highlight?: boolean;
}

export interface SkillCategoryGroup {
  category: 'backend' | 'frontend' | 'database' | 'devops';
  title: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
}
