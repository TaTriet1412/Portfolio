import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-skills',
  imports: [SectionTitle],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  private readonly portfolioService = inject(PortfolioService);
  readonly skillGroups = this.portfolioService.skillGroups;
  readonly uiText = this.portfolioService.uiText;
}
