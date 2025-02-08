import {Component} from '@angular/core';
import { NgToastService, ToasterPosition, ToastType } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lithira Amarasinghe';

  public toasterPosition = ToasterPosition.TOP_CENTER

  constructor() {
  }

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";


}
