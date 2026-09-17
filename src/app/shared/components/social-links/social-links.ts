import { Component, input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css',
})
export class SocialLinks {
  layout = input<'row' | 'col'>('row');
  showLabels = input<boolean>(false);
  github = 'https://github.com/TaTriet1412';
  linkedin = 'https://linkedin.com/in/tatriet';
  email = 'mailto:triet.ta.se@gmail.com';
}
