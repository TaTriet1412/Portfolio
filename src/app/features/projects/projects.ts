import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [SectionTitle, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly portfolioService = inject(PortfolioService);

  readonly projects = this.portfolioService.filteredProjects;
  readonly currentFilter = this.portfolioService.selectedCategory;

  readonly filterOptions = [
    { label: 'Tất cả (All)', value: 'all' },
    { label: 'Spring Boot & Backend', value: 'backend' },
    { label: 'Microservices & Gateway', value: 'microservices' },
    { label: 'Full-Stack (Angular)', value: 'fullstack' },
  ];

  setFilter(category: string): void {
    this.portfolioService.setProjectCategory(category);
  }
}
