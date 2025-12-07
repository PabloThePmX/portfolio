import { Component, input } from '@angular/core';

@Component({
  selector: 'app-win95-box',
  imports: [],
  templateUrl: './win95-box.html',
  styleUrl: './win95-box.css',
    host: {
    'class': 'section-container'
  }
})
export class Win95Box {
  title = input<string>();
  year = input<string>();
  text = input<string>();
}
