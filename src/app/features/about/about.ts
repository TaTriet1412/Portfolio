import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about',
  imports: [SectionTitle],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly portfolioService = inject(PortfolioService);
  readonly info = this.portfolioService.personalInfo;
  readonly achievements = this.portfolioService.achievements;
  readonly experiences = this.portfolioService.experiences;
  readonly uiText = this.portfolioService.uiText;
}
