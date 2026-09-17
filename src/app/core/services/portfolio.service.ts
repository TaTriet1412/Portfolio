import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  PERSONAL_INFO_VI,
  PERSONAL_INFO_EN,
  ACHIEVEMENTS_VI,
  ACHIEVEMENTS_EN,
  SKILL_GROUPS_VI,
  SKILL_GROUPS_EN,
  PROJECTS_VI,
  PROJECTS_EN,
  EXPERIENCES_VI,
  EXPERIENCES_EN,
  UI_TEXT_VI,
  UI_TEXT_EN,
  UiText,
} from '../../data/mock-data';
import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private readonly platformId = inject(PLATFORM_ID);

  // Language state: 'vi' or 'en'
  readonly currentLang = signal<'vi' | 'en'>('vi');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('app-lang') as 'vi' | 'en' | null;
      if (savedLang === 'en' || savedLang === 'vi') {
        this.currentLang.set(savedLang);
      }
    }
  }

  toggleLanguage(): void {
    const nextLang = this.currentLang() === 'vi' ? 'en' : 'vi';
    this.setLanguage(nextLang);
  }

  setLanguage(lang: 'vi' | 'en'): void {
    this.currentLang.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('app-lang', lang);
      document.documentElement.lang = lang;
    }
  }

  // Reactive data signals based on currentLang()
  readonly personalInfo = computed(() =>
    this.currentLang() === 'vi' ? PERSONAL_INFO_VI : PERSONAL_INFO_EN
  );

  readonly achievements = computed(() =>
    this.currentLang() === 'vi' ? ACHIEVEMENTS_VI : ACHIEVEMENTS_EN
  );

  readonly skillGroups = computed(() =>
    this.currentLang() === 'vi' ? SKILL_GROUPS_VI : SKILL_GROUPS_EN
  );

  readonly allProjects = computed<Project[]>(() =>
    this.currentLang() === 'vi' ? PROJECTS_VI : PROJECTS_EN
  );

  readonly experiences = computed(() =>
    this.currentLang() === 'vi' ? EXPERIENCES_VI : EXPERIENCES_EN
  );

  readonly uiText = computed<UiText>(() =>
    this.currentLang() === 'vi' ? UI_TEXT_VI : UI_TEXT_EN
  );

  // Active section for scroll spy
  readonly activeSection = signal<string>('home');

  // Filter for projects
  readonly selectedCategory = signal<string>('all');

  // Filtered projects computed signal
  readonly filteredProjects = computed(() => {
    const category = this.selectedCategory();
    const projects = this.allProjects();
    if (category === 'all') {
      return projects;
    }
    return projects.filter((p) => p.category === category);
  });

  setActiveSection(sectionId: string): void {
    this.activeSection.set(sectionId);
  }

  setProjectCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
