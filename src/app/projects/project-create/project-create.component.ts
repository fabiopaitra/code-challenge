import { Component, EventEmitter, Output } from '@angular/core';
import { Project, Task } from '../project.model';

@Component({
  selector: 'project-create',
  templateUrl: './project-create.component.pug',
  styleUrls: ['./project-create.component.sass']
})

export class ProjectCreateComponent {
  enteredProject: string;
  @Output() projectCreated = new EventEmitter<Project>();

  onAddProject = () => {
    const project: Project = {
      projectName: this.enteredProject,
      startDate: new Date(),
      tasksList: []
    };
    this.projectCreated.emit(project);

  };


}
