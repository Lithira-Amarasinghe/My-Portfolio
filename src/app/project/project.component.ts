import {Component, inject, Input, model, signal} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProjectDetailsComponent} from "../project-details/project-details.component";

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input('project') project: any = "";
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openMoreDetails() {
    const dialogRef = this.dialog.open(ProjectDetailsComponent, {
      data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}
