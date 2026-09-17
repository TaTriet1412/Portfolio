import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-badge',
  imports: [],
  templateUrl: './tech-badge.html',
  styleUrl: './tech-badge.css',
})
export class TechBadge {
  name = input.required<string>();
  variant = input<'cyan' | 'slate' | 'emerald' | 'amber'>('slate');
  highlight = input<boolean>(false);
  size = input<'sm' | 'md'>('md');
}
