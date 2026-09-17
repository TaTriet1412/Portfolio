import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SocialLinks } from '../../shared/components/social-links/social-links';
import { TechBadge } from '../../shared/components/tech-badge/tech-badge';

@Component({
  selector: 'app-home',
  imports: [SocialLinks, TechBadge],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly portfolioService = inject(PortfolioService);
  readonly info = this.portfolioService.personalInfo;
  readonly uiText = this.portfolioService.uiText;
}
