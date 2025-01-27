import { Component } from '@angular/core';

@Component({
  selector: 'floating-contact',
  templateUrl: './floating-contact.component.html',
  styleUrl: './floating-contact.component.css'
})
export class FloatingContactComponent {
  navigateTo(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer'); // Opens in a new tab
  }
}
