import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-about-card',
  imports: [],
  templateUrl: './about-card.html',
  styleUrl: './about-card.css',
  host: {
    'class': 'section-container'
  }
})
export class AboutCard {
}
