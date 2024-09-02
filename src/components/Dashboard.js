// src/components/Dashboard.js
import React from 'react';
import ProjectList from './ProjectList';
import TaskChart from './TaskChart';

const Dashboard = ({ projects }) => {
  return (
    <div className="dashboard">
      <ProjectList projects={projects} />
      <div style={{height: 500,width: 500}}>
      <TaskChart projects={projects} />
      </div>
    </div>
  );
};

export default Dashboard;
