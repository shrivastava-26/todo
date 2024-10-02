import React from 'react';
import { DroppableProvided } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { Task } from '../context/TaskContext';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  provided: DroppableProvided;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, provided }) => {
  return (
    <div {...provided.droppableProps} ref={provided.innerRef} style={{ margin: '0 8px', border: '1px solid #ddd', borderRadius: '4px', width: '250px' }}>
      <h3>{title}</h3>
      {tasks.map((task, index) => (
        <TaskCard key={task.id} task={task} index={index} />
      ))}
      {provided.placeholder}
    </div>
  );
};

export default TaskColumn;
