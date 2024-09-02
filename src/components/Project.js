// src/components/Project.js
import React from 'react';
import { useDispatch } from 'react-redux';
import Task from './Task';
import { moveTask } from '../features/projects/projectSlice';
import { useDrop } from 'react-dnd';

const Project = ({ project }) => {
  const dispatch = useDispatch();

  // Drop zone for "To Do"
  const [{ isOverToDo }, dropToDo] = useDrop({
    accept: 'task',
    drop: (item) => {
      dispatch(moveTask({ projectId: project.id, taskId: item.id, newState: 'To Do' }));
    },
    collect: (monitor) => ({
      isOverToDo: !!monitor.isOver(),
    }),
  });

  // Drop zone for "In Progress"
  const [{ isOverInProgress }, dropInProgress] = useDrop({
    accept: 'task',
    drop: (item) => {
      dispatch(moveTask({ projectId: project.id, taskId: item.id, newState: 'In Progress' }));
    },
    collect: (monitor) => ({
      isOverInProgress: !!monitor.isOver(),
    }),
  });

  // Drop zone for "Done"
  const [{ isOverDone }, dropDone] = useDrop({
    accept: 'task',
    drop: (item) => {
      dispatch(moveTask({ projectId: project.id, taskId: item.id, newState: 'Done' }));
    },
    collect: (monitor) => ({
      isOverDone: !!monitor.isOver(),
    }),
  });

  return (
    <div className="project">
      <h2>{project.name}</h2>
      <div className="task-columns">
        <div
          className="task-column"
          ref={dropToDo}
          style={{ backgroundColor: isOverToDo ? '#f0f0f0' : 'white' }}
        >
          <h3>To Do</h3>
          {project.tasks
            .filter(task => task.state === 'To Do')
            .map(task => (
              <Task key={task.id} task={task} />
            ))}
        </div>

        <div
          className="task-column"
          ref={dropInProgress}
          style={{ backgroundColor: isOverInProgress ? '#f0f0f0' : 'white' }}
        >
          <h3>In Progress</h3>
          {project.tasks
            .filter(task => task.state === 'In Progress')
            .map(task => (
              <Task key={task.id} task={task} />
            ))}
        </div>

        <div
          className="task-column"
          ref={dropDone}
          style={{ backgroundColor: isOverDone ? '#f0f0f0' : 'white' }}
        >
          <h3>Done</h3>
          {project.tasks
            .filter(task => task.state === 'Done')
            .map(task => (
              <Task key={task.id} task={task} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
