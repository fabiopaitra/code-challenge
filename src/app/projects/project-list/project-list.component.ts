import { Component, Input } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.pug',
  styleUrls: ['./project-list.component.sass']
})

export class ProjectListComponent {
  @Input() projects: Project[] = [];
  enteredTask: string;

  onAddTask = (i: number): void => {
    const task = {
      taskName: this.enteredTask,
      startDate: new Date()
    };
    this.projects[i].tasksList.push(task);

  };
}
