export interface Project {
  projectName: string;
  startDate: Date;
  tasksList: Task[];
}

export interface Task {
  taskName: string;
  startDate: Date;
}
