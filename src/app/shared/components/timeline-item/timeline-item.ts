import { Component, input } from '@angular/core';
import { ExperienceItem } from '../../../models/experience.model';
import { TechBadge } from '../tech-badge/tech-badge';

@Component({
  selector: 'app-timeline-item',
  imports: [TechBadge],
  templateUrl: './timeline-item.html',
  styleUrl: './timeline-item.css',
})
export class TimelineItem {
  item = input.required<ExperienceItem>();
  isLast = input<boolean>(false);
}
