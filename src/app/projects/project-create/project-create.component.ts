import { Component, EventEmitter, Output } from '@angular/core';
import { Project, Task } from '../project.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'project-create',
  templateUrl: './project-create.component.pug',
  styleUrls: ['./project-create.component.sass']
})

export class ProjectCreateComponent {
  enteredProject: string;
  @Output() projectCreated = new EventEmitter<Project>();

  onAddProject = (form: NgForm) => {
    if (form.invalid) return;
    const project: Project = {
      projectName: form.value.projectName,
      startDate: new Date(),
      tasksList: []
    };
    this.projectCreated.emit(project);
    form.resetForm();

  };


}
