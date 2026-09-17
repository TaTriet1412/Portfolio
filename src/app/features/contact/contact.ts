import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SocialLinks } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, SectionTitle, SocialLinks],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = signal('');
  email = signal('');
  subject = signal('');
  message = signal('');

  isSubmitting = signal(false);
  isSubmitted = signal(false);

  onSubmit(): void {
    if (!this.name() || !this.email() || !this.message()) {
      return;
    }

    this.isSubmitting.set(true);

    // Simulate sending message
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.name.set('');
      this.email.set('');
      this.subject.set('');
      this.message.set('');
    }, 1000);
  }

  resetStatus(): void {
    this.isSubmitted.set(false);
  }
}
