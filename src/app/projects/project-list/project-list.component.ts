import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Project } from '../project.model';
import { NgForm } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.pug',
  styleUrls: ['./project-list.component.sass']
})

export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  private projectsSub: Subscription;
  constructor(public projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
    this.projectsSub = this.projectsService.getProjectsUpdatedListener()
      .subscribe((projects: Project[]) => {
        this.projects = projects;
      });
  }

  ngOnDestroy(): void {
    this.projectsSub.unsubscribe();
  }

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
