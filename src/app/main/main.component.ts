import { Component } from '@angular/core';
import { Project } from '../projects/project.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.pug',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  projectsList: Project[] = [];


  onProjectAdded = (project: Project): void => {
    this.projectsList.push(project);
  };
}
