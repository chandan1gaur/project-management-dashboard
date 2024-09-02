// src/features/projects/projectSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    {
      id: 1,
      name: 'Website Redesign',
      tasks: [
        { id: 1, name: 'Design new logo', state: 'To Do', description: 'this is a logo task' },
        { id: 2, name: 'Create wireframes', state: 'In Progress', description: 'This is a wireframe task' },
        { id: 3, name: 'Develop landing page', state: 'Done', description: 'This is a landing page task' },
      ],
    },
    
  ],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const { id, data } = action.payload;
      const projectIndex = state.projects.findIndex(proj => proj.id === id);
      if (projectIndex !== -1) {
        state.projects[projectIndex] = { ...state.projects[projectIndex], ...data };
      }
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(proj => proj.id !== action.payload);
    },
    addTask: (state, action) => {
      const { projectId, task } = action.payload;
      const project = state.projects.find(proj => proj.id === projectId);
      if (project) {
        project.tasks.push(task);
      }
    },
    updateTaskDescription: (state, action) => {
      const { projectId, taskId, description } = action.payload;
      const project = state.projects.find(proj => proj.id === projectId);
      if (project) {
        const task = project.tasks.find(t => t.id === taskId);
        if (task) {
          task.description = description;
        }
      }
    },
    moveTask: (state, action) => {
      const { projectId, taskId, newState } = action.payload;
      const project = state.projects.find(proj => proj.id === projectId);
      if (project) {
        const task = project.tasks.find(t => t.id === taskId);
        if (task) {
          task.state = newState;
        }
      }
    },
  },
});

export const { addProject, updateProject, deleteProject, addTask, updateTaskDescription, moveTask } = projectSlice.actions;
export default projectSlice.reducer;
