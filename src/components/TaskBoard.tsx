import React, { useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import TaskColumn from './TaskColumn';
import { useTaskContext } from '../context/TaskContext';
import axios from 'axios';

const columns = ['To-Do', 'In Progress', 'Under Review', 'Completed'];

const TaskBoard: React.FC = () => {
  const { tasks, setTasks } = useTaskContext();

  useEffect(() => {
    // Fetch tasks from the API
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tasks`)
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, [setTasks]);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    
    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = columns[result.destination.droppableId as number];
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);

    // Optionally, update the task status on the server
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${movedTask.id}`, movedTask)
      .catch(error => console.error(error));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ display: 'flex' }}>
        {columns.map((column, index) => (
          <Droppable key={column} droppableId={String(index)}>
            {(provided) => (
              <TaskColumn
                title={column}
                tasks={tasks.filter(task => task.status === column)}
                provided={provided}
              />
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
