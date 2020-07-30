import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Project, Task } from '../project.model';
import { NgForm } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.pug',
  styleUrls: ['./project-list.component.sass']
})

export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  private projectsSub: Subscription;
  constructor(public projectsService: ProjectsService, private http: HttpClient) { }


  ngOnInit(): void {
    this.projectsService.getProjects();
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
    const task: Task = {
      id: 'asdasdasd',
      taskName: form.value.taskName,
      startDate: new Date()
    };
    this.http.post<{ message: string; }>('http://localhost:3000/api/tasks', task).subscribe((responseData) => {
      console.log(responseData.message);
      this.projects[i].tasksList.push(task);
    });
    form.resetForm();
  };

}
