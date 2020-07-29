import { Project } from './project.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ProjectsService {
  private projects: Project[] = [];
  private projectsUpdated = new Subject<Project[]>();
  getProjects() {
    return [...this.projects];
  }

  getProjectsUpdatedListener() {
    return this.projectsUpdated.asObservable();
  }
  addProjects(projectName: string) {
    const project: Project = {
      projectName,
      startDate: new Date(),
      tasksList: []
    };
    this.projects.push(project);
    this.projectsUpdated.next([...this.projects]);
  }
}
