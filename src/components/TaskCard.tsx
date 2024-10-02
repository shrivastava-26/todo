import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Task } from '../context/TaskContext';

interface TaskCardProps {
  task: Task;
  index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{ marginBottom: '8px', padding: '8px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px', ...provided.draggableProps.style }}
        >
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <small>Priority: {task.priority}</small>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
