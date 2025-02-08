import {Component} from '@angular/core';
import {Project} from "../types/project";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {name: "Dolly's Tavern", description: 'A restaurant management prject', image: 'dollystavern.png'},
    {name: 'MindVault', description: 'A project to increase to level of memory and eye care in prolong vision of digital displays', image: 'mindvault.png'},
    {name: 'SeriesOne', description: 'A movies selling platform UI development project', image: 'seriesone.png'},
    {name: 'RouteKnock', description: 'A mobile app to notify user when they enter to a specified area on the map', image: 'routeknock.png'}
  ];
}
