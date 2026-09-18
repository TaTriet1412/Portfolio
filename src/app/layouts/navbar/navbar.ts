import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly portfolioService = inject(PortfolioService);

  readonly activeSection = this.portfolioService.activeSection;
  readonly mobileMenuOpen = signal(false);
  readonly currentLang = this.portfolioService.currentLang;
  readonly uiText = this.portfolioService.uiText;

  get navItems() {
    const text = this.uiText().nav;
    return [
      { id: 'home', label: text.home },
      { id: 'about', label: text.about },
      { id: 'skills', label: text.skills },
      { id: 'experience', label: text.experience },
      { id: 'projects', label: text.projects },
      { id: 'contact', label: text.contact },
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
}
