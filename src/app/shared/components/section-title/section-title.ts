import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.html',
  styleUrl: './section-title.css',
})
export class SectionTitle {
  index = input<string>('01');
  title = input.required<string>();
  subtitle = input<string>('');
  tag = input<string>('');
}
