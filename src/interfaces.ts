export interface ITasks {
  todo: string[];
  doing: string[];
  done: string[];
}

export interface ISection {
  handleDrop: React.DragEventHandler<HTMLDivElement>;
  tasks: string[];
  id: string;
  color: string;
  setTasks: React.Dispatch<React.SetStateAction<ITasks>>;
}
