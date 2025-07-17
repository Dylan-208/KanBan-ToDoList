import { useState, type ReactNode } from "react";
import { TaskContext } from "./TaskContext";
import type { Tasks } from "../types/interfaces";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
