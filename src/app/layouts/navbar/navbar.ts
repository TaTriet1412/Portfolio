import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Theme } from '../../core/services/theme';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly portfolioService = inject(PortfolioService);
  readonly themeService = inject(Theme);

  readonly activeSection = this.portfolioService.activeSection;
  readonly mobileMenuOpen = signal(false);
  readonly currentLang = this.portfolioService.currentLang;
  readonly isDark = this.themeService.isDark;
  readonly uiText = this.portfolioService.uiText;

  get navItems() {
    const text = this.uiText().nav;
    return [
      { id: 'home', label: text.home, num: '01' },
      { id: 'about', label: text.about, num: '02' },
      { id: 'skills', label: text.skills, num: '03' },
      { id: 'experience', label: text.experience, num: '04' },
      { id: 'projects', label: text.projects, num: '05' },
      { id: 'contact', label: text.contact, num: '06' },
    ];
  }

  toggleMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  setActive(id: string): void {
    this.portfolioService.setActiveSection(id);
    this.closeMenu();
  }

  toggleLanguage(): void {
    this.portfolioService.toggleLanguage();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
