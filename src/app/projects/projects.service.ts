import { Project } from './project.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class ProjectsService {
  private projects: Project[] = [];
  private projectsUpdated = new Subject<Project[]>();
  constructor(private http: HttpClient) { };

  getProjects() {
    this.http.get<{ message: string, projects: Project[]; }>('http://localhost:3000/api/projects')
      .subscribe(projectData => {
        this.projects = projectData.projects;
        this.projectsUpdated.next([...this.projects]);
      });
  }

  getProjectsUpdatedListener() {
    return this.projectsUpdated.asObservable();
  }
  addProject(projectName: string) {
    const project: Project = {
      id: 'asdasdasdad',
      projectName,
      startDate: new Date(),
      tasksList: []
    };
    this.http.post<{ message: string; }>('http://localhost:3000/api/projects', project)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.projects.push(project);
        this.projectsUpdated.next([...this.projects]);
      });
  }
}
