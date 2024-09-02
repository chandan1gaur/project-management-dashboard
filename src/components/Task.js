// src/components/Task.js
import React from 'react';
import { useDrag } from 'react-dnd';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div className="task" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <p>{task.name}</p>
      <Link to={`/project/${task.id}`}>Details</Link>
    </div>
  );
};

export default Task;
