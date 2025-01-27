import {Component} from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: any[] = [
    {name: "Dolly's Tavern", description: '', img: 'dollystavern.png'},
    {name: 'MindVault', description: '', img: 'mindvault.png'},
    {name: 'SeriesOne', description: '', img: 'seriesone.png'},
    {name: 'RouteKnock', description: '', img: 'routeknock.png'}
  ];

}
