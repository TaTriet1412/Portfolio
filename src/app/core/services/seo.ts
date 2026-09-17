import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class Seo {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  updateTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  updateMeta(description: string): void {
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
