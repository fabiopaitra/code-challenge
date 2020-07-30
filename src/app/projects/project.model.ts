export interface Project {
  id: string;
  projectName: string;
  startDate: Date;
  tasksList: Task[];
}

export interface Task {
  id: string;
  taskName: string;
  startDate: Date;
}
