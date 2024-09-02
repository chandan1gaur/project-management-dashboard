// src/components/ProjectList.js
import React from 'react';
import Project from './Project';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
