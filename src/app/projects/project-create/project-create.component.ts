import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectsService } from '../projects.service';


@Component({
  selector: 'project-create',
  templateUrl: './project-create.component.pug',
  styleUrls: ['./project-create.component.sass']
})

export class ProjectCreateComponent {
  constructor(public projectsService: ProjectsService) { }

  onAddProject = (form: NgForm) => {
    if (form.invalid) return;
    this.projectsService.addProject(form.value.projectName);
    form.resetForm();

  };
}
