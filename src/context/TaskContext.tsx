import React, { createContext, useContext, useState } from 'react';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'To-Do' | 'In Progress' | 'Under Review' | 'Completed';
  priority?: 'Low' | 'Medium' | 'Urgent';
  deadline?: string;
}

interface TaskContextProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTaskContext must be used within a TaskProvider");
  return context;
};
