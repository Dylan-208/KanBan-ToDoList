import { createContext } from "react";
import type { Tasks } from "../types/interfaces";

export interface TasksContextType {
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

export const TaskContext = createContext<TasksContextType | undefined>(
  undefined
);
