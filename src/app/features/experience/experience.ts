import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { TimelineItem } from '../../shared/components/timeline-item/timeline-item';

@Component({
  selector: 'app-experience',
  imports: [SectionTitle, TimelineItem],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  private readonly portfolioService = inject(PortfolioService);
  readonly experiences = this.portfolioService.experiences;
}
