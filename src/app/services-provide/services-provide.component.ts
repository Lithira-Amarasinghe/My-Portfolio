import {Component} from '@angular/core';
import {TechService} from "../types/techService";

@Component({
  selector: 'services-provide',
  templateUrl: './services-provide.component.html',
  styleUrl: './services-provide.component.css'
})
export class ServicesProvideComponent {
  techServices: TechService[] = [
    {
      title: 'Portfolio sites',
      icon:'icons/online-resume.png',
      image: "services/service-01.jpg",
      description: 'Create a stunning portfolio website to showcase your work and attract more clients or opportunities.'
    }, {
      title: 'Online Ordering System',
      image: "services/service-06.jpg",
      icon:'icons/purchase.png',
      description: 'Streamline sales with a user-friendly online ordering system, making purchasing easy for your customers.'
    }, {
      title: 'Digitize Processes',
      image: "services/service-03.jpg",
      icon:'icons/digital-business.png',
      description: 'Transform manual tasks into efficient digital solutions, saving time and improving business productivity.'
    }, {
      title: 'Mobile Apps',
      image: "services/service-05.jpg",
      icon:'icons/app.png',
      description: 'Professional mobile apps tailored to your needs, ensuring smooth performance on both Android and iOS.'
    }]
}
