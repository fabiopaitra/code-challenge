import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.pug',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  projects = [];

  onDeleteTask = (task, taskList): void => {
    const updatedList = taskList.filter(item => task !== item);
    console.log(updatedList);
    console.log(this.projects);
    taskList = updatedList;
  };
  onAddTask = (newTask: { value: string; }, project: { taskList: string[]; }): void => {
    if (newTask.value) {
      project.taskList.push(newTask.value);
    }
    newTask.value = '';
  };
  onAddProject = (newProject: { value: string; }): void => {
    if (newProject.value) {
      this.projects.push({
        projectName: newProject.value,
        taskList: []
      });
      newProject.value = '';
    };
  };
}
