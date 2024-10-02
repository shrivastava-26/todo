// src/context/TaskContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type TaskContextType = {
  // Define your context value type
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw Error("useTaskContext must be used within a TaskProvider");
  return context;
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState([]);

  // Define the context value
  const contextValue = {
    // Provide your context values here
  };

  return <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>;
};
