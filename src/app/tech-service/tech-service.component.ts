import {AfterContentInit, Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {TechService} from "../types/techService";

@Component({
  selector: 'tech-service',
  templateUrl: './tech-service.component.html',
  styleUrl: './tech-service.component.css'
})
export class TechServiceComponent implements AfterContentInit {
  @ViewChild('outer', { static: true }) imageOuter!: ElementRef;
  @Input('service') service!: TechService;

  constructor(private renderer: Renderer2) {
  }

  ngAfterContentInit(): void {
    // const imgElement = this.imageOuter.nativeElement.querySelector('.image-outer img');
    // if (imgElement) {
    //   this.imageOuter.nativeElement.style.backgroundImage = `url(${imgElement.src})`;
    //   imgElement.style.display = 'none'; // Hide the original img tag
    // }
  }
}
