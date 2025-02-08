import {AfterContentInit, AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {animate, state, style, transition, trigger, useAnimation} from "@angular/animations";
import {isPlatformBrowser} from "@angular/common";
import {fadeInAnimation} from "../animations/animations";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  animations:[
    trigger('fadeIn', [
      transition(':enter', [
        useAnimation(fadeInAnimation)
      ]),
    ]),
  ]
})
export class NavBarComponent implements AfterContentInit{
  private isBrowser: boolean=false;

  navigateTo(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer'); // Opens in a new tab
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  isVisible = false;

  ngAfterContentInit(): void {
    if(this.isBrowser){
        this.isVisible = true;  // After a short delay, make the element visible
    }
  }
}
