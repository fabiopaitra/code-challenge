import { Component, Input } from '@angular/core';
import { Project } from '../project.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.pug',
  styleUrls: ['./project-list.component.sass']
})

export class ProjectListComponent {
  @Input() projects: Project[] = [];

  onAddTask = (form: NgForm, i: number): void => {
    if (form.invalid) return;
    const task = {
      taskName: form.value.taskName,
      startDate: new Date()
    };
    this.projects[i].tasksList.push(task);
    form.resetForm();

  };
}
