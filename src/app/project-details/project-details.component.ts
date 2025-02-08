import {Component, inject, model} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Project} from "../types/project";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
  readonly dialogRef = inject(MatDialogRef<ProjectDetailsComponent>);
  readonly data = inject<Project>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }


}
