import {Component, Input} from '@angular/core';

@Component({
  selector: 'mod-button',
  templateUrl: './mod-button.component.html',
  styleUrl: './mod-button.component.css'
})
export class ModButtonComponent {
  @Input('disabled') disabled: boolean = false;
  @Input('type') type: string = 'button';


}
